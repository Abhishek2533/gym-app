import React from 'react'
import Homepage from './components/Home/Homepage'
import './app.css'
import { Programs } from './components/Programs/Programs.jsx'
import { Reasons } from './components/Reasons/Reasons'
import Plans from './components/Plans/Plans.jsx'
import Testimonial from './components/Testimonials/Testimonial.jsx'
import Join from './components/Join/Join.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div style={{ backgroundColor: 'rgba(78, 76, 76, 0.977)' }}>
      <Homepage />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  )
}

export default App;