import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Lazy load components
const Navbar = lazy(() => import("./Components/Navbar"));
const About = lazy(() => import('./Components/About/About'));
const Faq = lazy(() => import('./Components/Faq'));
const HeroCard = lazy(() => import('./Components/Home/HeroCard'));
const Footer = lazy(() => import('./Components/Footer'));
const Home = lazy(() => import('./Components/Home/Home'));
const Testimonial = lazy(() => import('./Components/Testimonial'));
const Gallery = lazy(() => import('./Components/Gallery'));
const Courses = lazy(() => import('./Components/Courses'));
const Contact = lazy(() => import('./Components/Contact'));
const WhatsAppFloat = lazy(() => import('./Components/WhatsAppFloat'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<Loading />}>
                  <Home />
                  <Faq />
                  <HeroCard />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              } />
              <Route path="/testimonial" element={
                <Suspense fallback={<Loading />}>
                  <Testimonial />
                </Suspense>
              } />
              <Route path="/gallery" element={
                <Suspense fallback={<Loading />}>
                  <Gallery />
                </Suspense>
              } />
              <Route path="/courses" element={
                <Suspense fallback={<Loading />}>
                  <Courses />
                </Suspense>
              } />
              <Route path="/contact" element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              } />
            </Routes>
          </main>
          <WhatsAppFloat />
          <Footer />
        </Suspense>
      </Router>
    </div>
  )
}

export default App
