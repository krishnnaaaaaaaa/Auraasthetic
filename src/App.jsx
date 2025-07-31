import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About/About'
import Faq from './Components/Faq'
import HeroCard from './Components/Home/HeroCard'
import Footer from './Components/Footer'
import Home from './Components/Home/Home'
import CustomCursor from './Components/CustomCursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={
         <Home/>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Faq />
      <HeroCard />
      <Footer />
    </BrowserRouter>
  )
}

export default App
