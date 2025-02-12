import React from 'react'
import Header from './components/header'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Footer from './components/footer'
import { Experience } from './components/experience'
import FAQAccordion from './components/accordion/accordion'
import Hero from './components/hero'
import Social from './components/social'



const App = () => {
  return (
    <div className='text-white h-full max-w-[62.5rem] mx-auto'>
      <Header />
      <Social />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <FAQAccordion />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

//text-[#A8B2D1], bg-[#1e1b1b], bg-[#0e0404]