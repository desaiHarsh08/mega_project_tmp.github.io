import React from 'react'
import { About, Contact, Features, Home, Navbar } from '../components'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      {/* <LatestSchemes /> */}
      <Contact />
    </div>
  )
}

export default HomePage
