import React, { useState } from 'react';



const About = () => {
  // const [img1Loaded, setImg1Loaded] = useState(false);
  // const [img2Loaded, setImg2Loaded] = useState(false);
  // const [img3Loaded, setImg3Loaded] = useState(false);
  return (
    // <div className='w-full h-[90vh] bg-cover relative overflow-hidden' 
    //      style={{backgroundImage: "url('/banner.jpg')"}}>
    <div className='w-full min-h-screen flex flex-col md:flex-row pb-4 md:py-6 lg:pb-8 px-2 md:px-6 lg:px-8'>
      <div className='w-full text-black h-full flex flex-col gap-4 md:flex-row px-2 md:px-6 lg:px-8 xl:px-10'>
        <div className='w-full md:w-1/2 h-full flex flex-col'>
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-1'>About Us</h1>

          <p className='pt-2 lg:text-lg'><strong>Ishaal Enterprises,</strong> founded in January 2010, is a trusted name in telecom infrastructure, construction, 
            and maintenance across Pakistan. We specialize in deploying telecom towers, FTTS longhaul networks, and tower-sharing 
            solutions that reduce redundancy and environmental impact.
            </p>

            <p className='pt-2 lg:text-lg'>
            Our milestone partnership in 2021 with a major telco under the NOKIA USF project marked a turning point in our journey, 
            expanding our reach across Sindh and Balochistan. Today, with <strong>over 250+ towers</strong> and <strong>700+ FTTS sites</strong>, we serve regions from 
            <strong>Chitral to Karachi</strong>, including challenging terrains like <strong>Khuzdar, Jamshoro, Nooriabad, and Tharparkar.</strong>
            </p>

            <p className='pt-2 lg:text-lg'>
            At Ishaal Enterprises, we’re committed to delivering high-quality, safe, and efficient solutions that make connectivity more
            accessible and affordable for all.
            </p>


          {/* <div className='flex gap-4 mt-4'>
          <button className='py-2 text-xs sm:text-base md:text-sm lg:text-base px-3 bg-[rgb(2,6,111)] hover:text-[rgb(2,6,111)] cursor-pointer hover:bg-[rgb(234,234,236)] text-white rounded-md'>Explore Cars</button>
          <button className='py-2 text-xs sm:text-base md:text-sm lg:text-base px-3 border-2 text-[rgb(2,6,111)] cursor-pointer border-[rgb(2,6,111)] hover:bg-[rgb(2,6,111)] hover:text-white rounded-md'>Sell Your Car</button>
          </div> */}
        </div>

        <div className='w-full md:w-1/2 h-full flex gap-3 items-center justify-end' loading='lazy'>

        <div className='flex flex-col gap-4'>
          <img className='w-full md:w-[25rem] lg:w-[28.5rem]' src='/about/about-1.png' />

          <div className='flex gap-2'>
            <div className='w-1/2'>
              <img className='md:w-52 lg:w-56' src='/about-towers.png' />
            </div>
            
            <div className='w-1/2'>
              <img className='md:w-52 lg:w-56' src='/about-maintain.png' />
            </div>

          </div>

          <div>

          </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default About