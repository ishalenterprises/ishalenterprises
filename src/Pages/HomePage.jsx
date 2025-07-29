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
import BannerTwo from '../Components/BannerTwo'
import Statistics from '../Components/Statistics'
import Achievements from '../Components/Achievements'
import FirstVideo from '../Components/FirstVideo'
import SecondVideo from '../Components/SecondVideo'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    {/* <BannerTwo /> */}
    <About />
    <Services />
    <WhyMe />
    {/* <IndustryFocus /> */}
    <PotfolioAndGallery />
    <FirstVideo />
    <Achievements />
    {/* <SecondVideo /> */}
    <Statistics />
    <Partners />
    <Footer />
    </>
  )
}

export default HomePage