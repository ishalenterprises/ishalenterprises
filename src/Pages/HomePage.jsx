import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import WhyMe from '../Components/WhyMe'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import PotfolioAndGallery from '../Components/PotfolioAndGallery'
import Partners from '../Components/Partners'
import Achievements from '../Components/Achievements'
import ContactBanner from '../Components/ContactBanner'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Services />
    <WhyMe />
    <PotfolioAndGallery />
    <Achievements />
    <Partners />
    {/* <ContactBanner /> */}
    <Footer />
    </>
  )
}

export default HomePage