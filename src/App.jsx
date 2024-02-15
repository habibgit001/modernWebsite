import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Footer from './Components/Footer'
function App() { 
  return (
    <div className='w-full h-screen  text-white  bg-zinc-900 '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Footer />
    </div>
  )
}

export default App
