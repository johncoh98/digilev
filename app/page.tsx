"use client"

import About from "./components/About"
import Contact from "./components/Contact"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Services from "./components/Services"
import Exemples from "./components/Exemples"

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Feedback />
      <Exemples />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
