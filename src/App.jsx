import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activePage, setActivePage] = useState(null)

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work activePage={activePage} setActivePage={setActivePage} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App