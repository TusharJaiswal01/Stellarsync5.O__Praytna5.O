import os
import cv2
import torch
from flask import Flask, request, send_file, jsonify
from werkzeug.utils import secure_filename
from ultralytics import YOLO
from deep_sort_realtime.deepsort_tracker import DeepSort
from collections import defaultdict
from tqdm import tqdm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = "input"
OUTPUT_FOLDER = "output"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

model = YOLO(r"S:\React\prayatna\ModelTraing\GadgetModel\detect\train\weights\best.pt")  # Update with correct model path
device = "cuda" if torch.cuda.is_available() else "cpu"
tracker = DeepSort(max_age=30)
CONFIDENCE_THRESHOLD = 0.3
TARGET_WIDTH, TARGET_HEIGHT = 640, 480

@app.route("/getvideo", methods=["POST"])
def upload_video():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400
    
    file = request.files["file"]
    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)
    
    return jsonify({"message": "File uploaded", "filename": filename, "process_url": f"/process/{filename}"})

@app.route("/process/<filename>", methods=["GET"])
def process_video(filename):
    input_path = os.path.join(UPLOAD_FOLDER, filename)
    output_filename = f"processed_{filename}"
    output_path = os.path.join(OUTPUT_FOLDER, output_filename)

    if not os.path.exists(input_path):
        return jsonify({"error": "File not found"}), 404

    cap = cv2.VideoCapture(input_path)
    if not cap.isOpened():
        return jsonify({"error": "Could not open video file"}), 500

    original_fps = int(cap.get(cv2.CAP_PROP_FPS))
    TARGET_FPS = 15  # Adjust the FPS limit as needed
    skip_frames = max(1, original_fps // TARGET_FPS)

    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    fourcc = cv2.VideoWriter_fourcc(*"H264")
    out = cv2.VideoWriter(output_path, fourcc, TARGET_FPS, (width, height))

    detected_objects = set()
    frame_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Process only every 'skip_frames' frame
        if frame_count % skip_frames == 0:
            results = model(frame, device=device)
            detections = []

            if results and results[0].boxes is not None:
                for result in results:
                    for box, conf, cls in zip(result.boxes.xyxy, result.boxes.conf, result.boxes.cls):
                        if float(conf) < CONFIDENCE_THRESHOLD:
                            continue

                        x1, y1, x2, y2 = map(int, box)
                        label = model.names[int(cls)]
                        detections.append(([x1, y1, x2, y2], float(conf), label))
                        detected_objects.add(label)

                        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                        cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

            out.write(frame)

        frame_count += 1

    cap.release()
    out.release()

    return jsonify({
        "message": "Processing complete",
        "output_url": f"http://localhost:5000/output/{output_filename}",
        "detected_objects": list(detected_objects)
    })

# @app.route("/getvideo/<filename>", methods=["GET"])
# def get_processed_video(filename):
#     output_path = os.path.join(OUTPUT_FOLDER, filename)
#     if not os.path.exists(output_path):
#         return jsonify({"error": "File not found"}), 404
#     return send_file(output_path, as_attachment=True)

@app.route("/output/<filename>")
def get_processed_video(filename):
    file_path = os.path.join(OUTPUT_FOLDER, filename)
    
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404

    return send_file(file_path, mimetype="video/mp4")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
