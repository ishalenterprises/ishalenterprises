import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const HomeConstruction = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/services-page/construction.jpeg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(54,137,185)]'>Home Construction & Renovation</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishaal Enterprises,</strong> we don’t just construct buildings we create safe, comfortable, and lasting homes that reflect your lifestyle and aspirations. With over a decade of experience in the construction industry, we offer complete residential construction and renovation services designed around quality, functionality, and aesthetic excellence.

                    <br></br> <br></br>
Our approach combines modern design principles, skilled craftsmanship, and structural integrity, ensuring that every home we build or renovate meets the unique needs of each client. Whether it's a new build, a structural upgrade, or interior improvements, we take pride in turning your vision into reality—with timely execution and transparent project management.
                    </p>

                    <div className='flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>
                    <h1 className='font-bold text-xl md:text-2xl'>Where We Work</h1>


                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>🏠 Full-Scale Home Construction</li>
                        <p className='pb-2'>From plot to possession, we manage the entire construction lifecycle including planning, architectural design, structural work, MEP (Mechanical, Electrical & Plumbing), and finishing. Each project is built to meet local safety codes and modern living standards.
                        </p>

                        <li className='font-bold'>🧱 Home Renovation & Remodeling</li>
                        <p className='pb-2'>Whether it's a single room or a full property, we revitalize existing spaces through thoughtful renovations. From flooring, ceiling work, and kitchen remodeling to exterior upgrades, we modernize your home without compromising its soul.
                        </p>

                        <li className='font-bold'>🎨 Custom Interior & Finishing Work</li>
                        <p className='pb-2'>We pay close attention to the fine details tiling, paintwork, cabinetry, lighting, and more ensuring a perfect balance of comfort and style. Every element is handpicked to align with your taste and functional needs.</p>
                        
                        <li className='font-bold'>🛠️ Civil Repair & Structural Reinforcement</li>
                        <p className='pb-2'>We handle all forms of structural repairs and retrofitting, including waterproofing, crack repair, and load-bearing reinforcements, extending the life and safety of your home.</p>
                    </ul>

                    </div>

                    </div>

                    <section className="w-full flex px-4">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center py-6 gap-10">

        {/* Text Content */}
        <div className="text-center md:text-left max-w-full md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          <h1 className='font-bold text-xl md:text-2xl'>Where We Work</h1>
          <p>
           Our residential projects span across Karachi, Hyderabad, Jamshoro, Nooriabad, and nearby towns. We’ve also carried out construction and renovation work in areas like Chitral, Tharparkar, and Khuzdar, where access and conditions are more demanding yet we continue to deliver on time, on budget, and above expectations.
          </p>
          
          <h1 className='font-bold text-xl md:text-2xl pt-2'>Building Dreams, Supporting Our Vision</h1>
          <p>
           As part of our mission to improve living standards and community infrastructure, our home construction and renovation services align with our vision of a better-built Pakistan one where every family has access to safe, beautiful, and functional spaces. Whether serving individual homeowners or staff residences for institutions like PPHI, IBA Sukkur, and SIUT, we bring the same level of care, precision, and commitment.
          </p>
        </div>

        {/* Video Inside Phone Frame */}
        <div className="h-[500px] md:w-[300px] md:h-[520px] lg:w-[300px] lg:h-[520px] bg-black rounded-[2rem] p-2 shadow-2xl border-4 border-gray-700 overflow-hidden relative">
          <video
            src="/videos/second-video.mp4" // 📌 Replace with your actual video path
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-[1.7rem]"
          />
        </div>
      </div>
    </section>           

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/home-construction/1.png' />
                        <img src='/home-construction/2.png' />
                        <img src='/home-construction/3.png' />
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0'>
                        <img src='/home-construction/6.jpg' />
                        <img src='/home-construction/7.jpg' />
                        <img src='/home-construction/8.jpg' />
                        <img src='/home-construction/9.jpg' />
                    </div>

                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-6'>
                        <img src='/home-construction/4.jpg' />
                        <img src='/home-construction/5.jpg' />
                        <img src='/services/home-constructions.jpg' />
                        


                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeConstruction