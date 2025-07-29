import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='w-full min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-6 md:px-8 lg:px-8 items-center justify-center'>

                <div className='w-full md:w-4/5 h-full flex flex-col'>
                    <h1 className='text-3xl sm:text-4xl lg:text-4xl text-bold xl:text-5xl pb-1 text-[rgb(54,137,185)]'>About Us</h1>

                    <p className='pt-2 text-lg md:text-lg'><strong>Ishaal Enterprises,</strong> founded in January 2010, is a trusted name in telecom infrastructure, construction,
                        and maintenance across Pakistan. We specialize in deploying telecom towers, FTTS longhaul networks, and tower-sharing
                        solutions that reduce redundancy and environmental impact.
                    </p>

                    <p className='pt-2 text-lg lg:text-lg'>
                        Our milestone partnership in 2021 with a major telco under the NOKIA USF project marked a turning point in our journey,
                        expanding our reach across Sindh and Balochistan. Today, with <strong>over 250+ towers</strong> and <strong>700+ FTTS sites</strong>, we serve regions from 
                        <strong> Chitral to Karachi</strong>, including challenging terrains like <strong>Khuzdar, Jamshoro, Nooriabad, and Tharparkar.</strong>
                    </p>

                    <p className='pt-2 text-lg lg:text-lg'>
                        At Ishaal Enterprises, we’re committed to delivering high-quality, safe, and efficient solutions that make connectivity more
                        accessible and affordable for all.
                    </p>

                </div>

                <div className='w-full md:w-4/5 h-full flex gap-3 items-center justify-end'>


                    <img
                        className='w-full '
                        src='/about/about-1.jpg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>
            </div>


            <div className='w-full min-h-screen flex flex-col md:flex-row gap-2 md:gap-10 pb-4 lg:pb-8 px-2 md:px-20 lg:px-40'>

                <div className='w-full max-h-full justify-center flex flex-col'>
                    <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-1 text-[rgb(54,137,185)]'>Our Mission</h1>

                    <p className='pt-2 text-xl md:text-xl lg:text-2xl'>To provide strategic and
                        technical value to our
                        Customers by designing,
                        building and maintaining cost
                        effective solutions for
                        Pakistan’s leading Operators
                        and Service Providers.
                    </p>

                </div>

                <div className='w-full max-h-full flex gap-3 items-center justify-end'>


                    <img
                        className='md:w-7/8 lg:w-4/5'
                        src='/about/mission.jpeg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>
            </div>

            <div className='w-full min-h-screen flex flex-col md:flex-row gap-2 pt-6 md:pt-0 md:gap-10 pb-4 lg:pb-8 px-2 md:px-6 md:px-20 lg:px-40 justify-center items-center'>

                <div className='w-full h-full flex gap-3 items-center justify-start'>


                    <img
                        className='md:w-full lg:w-4/5'
                        src='/about/vision.jpeg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>

                <div className='w-full h-full flex flex-col items-end'>
                    <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-1 text-[rgb(54,137,185)]'>Our Vission</h1>

                    <p className='pt-2 text-xl md:text-xl lg:text-2xl text-end'>We take great pride in being
                        able to offer our Customers our
                        wealth of experience and
                        access to world class products
                        through our key relationships
                        with manufacturers, in order to
                        assist their rapid deployment
                        of networks to meet the
                        current and future needs of the
                        telecommunications market.

                    </p>

                </div>


            </div>

            <Footer />
        </>
    )
}

export default AboutPage