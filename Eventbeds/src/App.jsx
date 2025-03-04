
import './App.css'
import AnimatedComponent from './components/AnimatedComponent'
import BookandRelax from './components/BookandRelax'
import Deals from './components/Deals'
import EasySearch from './components/EasySearch'
import Hero from './components/Hero'
import Members from './components/Members'
import MobileSection from './components/MobileSection'
import Navbar from './components/Navbar'
function App() {
 
  return (
 <div>
{/* <AnimatedComponent/> */}
<div className='w-full flex justify-center'>
<Navbar/>
</div>
<Hero/>
<MobileSection/>

<EasySearch />
<BookandRelax/>
<Deals/>


<Members/>



 </div>
  )
}

export default App