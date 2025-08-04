import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import About from './Components/About/About'
import Faq from './Components/Faq'
import HeroCard from './Components/Home/HeroCard'
import Footer from './Components/Footer'
import Home from './Components/Home/Home'
import Testimonial from './Components/Testimonial'
import Gallery from './Components/Gallery'
import Courses from './Components/Courses'
import Contact from './Components/Contact'
import WhatsAppFloat from './Components/WhatsAppFloat';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Faq />
                <HeroCard />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppFloat />
        <Footer />
      </Router>
    </div>
  )
}

export default App
