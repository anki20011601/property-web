import Home from "./pages/Home"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Properties from "./pages/Properties"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PropertyDetail from "./pages/PropertyDetail"


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/properties" element={ <Properties />} />
        <Route path="/property/:id" element={ <PropertyDetail />} />
      </Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
