import Hero from './HeroSection/Hero'
import Footer from './FooterSection/Footer'
import AboutMe from './AboutMeSection/AboutMe'
import Blog from './BlogSection/Blog'
import Accordion from './FaqSection/Accordion'

function App() {
  return (
    <>
      <section className='heroSection'>
        <Hero />
      </section>

      <section className='aboutMeSection'>
        <AboutMe />
      </section>

      <section className='blogSection'>
        <Blog />
      </section>

      <section className='faqSection'> 
        <Accordion />
      </section>

      <section className='footerSection'>
        <Footer />
      </section>

    </>
  )
}

export default App
