import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import IntroSection from './Components/IntroSection'
import Institute from './Components/Institute'
import Features from './Components/Features'
import Services from './Components/Services'
import Faq from './Components/Faq'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/> 
      <HeroSection/>
      <IntroSection/>
      <Institute/>
      <Features/>
      <Services/>
      <Faq/>
      </div>
     
     
     
    </>
  )
}

export default App
