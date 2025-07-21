import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import WhyMe from '../Components/WhyMe'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import IndustryFocus from '../Components/IndustryFocus'
import PotfolioAndGallery from '../Components/PotfolioAndGallery'
import Partners from '../Components/Partners'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Services />
    <IndustryFocus />
    <PotfolioAndGallery />
    <Partners />
    {/* <WhyMe /> */}
    <Footer />
    </>
  )
}

export default HomePage