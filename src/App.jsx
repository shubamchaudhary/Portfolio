import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience,  Hero, Navbar, Tech, Works, StarsCanvas,HeroMobile } from "./components";
import { Footer } from "./components/Footer";

const App =() => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        <HeroMobile />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
       
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
