import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const DBAndSunshade = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/db-sunshade/16.jpg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(37,83,177)]'>DB & Sunshade Fabrications</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishal Enterprises,</strong> we understand the critical role that electrical distribution and equipment protection play in telecom and infrastructure projects. That’s why we offer custom DB (Distribution Board) fabrication and sunshade/shelter fabrication services—engineered for reliability, safety, and long-term performance.

                    <br></br> <br></br>

Whether it’s for a remote telecom site, a high-load commercial facility, or a residential setup, our fabrications are built with durability, safety, and functionality in mind. Backed by years of experience and a skilled fabrication team, our solutions are trusted by leading clients like Zong 4G, Telenor, PPHI, Nokia, and Huawei.
                    </p>

                    <div className='flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>⚡ Custom DB (Distribution Board) Fabrication</li>
                        <p className='pb-2'>We design and fabricate tailor-made distribution boards using high-grade materials to ensure safe and efficient power distribution. Our DBs are built to handle varying load requirements and meet safety standards for telecom sites, homes, and commercial facilities.
                            <ul className='list-disc pl-6 pt-1'>
                                <li>Single-phase and three-phase DBs.</li>
                                <li>Integrated with MCBs, MCCBs, SPD, and earthing systems</li>
                                <li>Compact, weather-resistant enclosures.</li>
                                <li>Wiring, labeling, and circuit protection based on client specs.</li>
                            </ul>
                        </p>
                        <li className='font-bold'>☀️ Sunshade & Equipment Shelter Fabrication</li>
                        <p className='pb-2'>Our sunshades, shelters, and protective enclosures are designed to safeguard telecom and electrical equipment from extreme weather, dust, and physical damage. Built with corrosion-resistant materials, they ensure operational continuity and reduce maintenance needs.
                            <ul className='list-disc pl-6 pt-1'>
                                <li>Custom sizes for telecom towers, BTS rooms, and DG shelters.</li>
                                <li>Powder-coated or galvanized steel for weather resistance.</li>
                                <li>Easy installation and site adaptability.</li>
                                <li>Ventilated designs to prevent overheating.</li>
                            </ul>
                        </p>

                        <li className='font-bold'>🔩 Mounting & Accessories</li>
                        <p className='pb-2'>We also fabricate and install support structures, brackets, stands, and steel frames required for mounting electrical gear, solar equipment, and telecom accessories.</p>
                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Where We Work</h1>
                            <p>We’ve delivered fabrication and installation projects across all terrains—from the hot plains of Tharparkar and the industrial zones of Jamshoro, to high-humidity coastal cities like Karachi and remote areas such as Chitral.</p>
                            
                            <p>Our products are installed at telecom sites, educational institutions like IBA Sukkur, healthcare setups such as SIUT and PPHI, and banking clients including NBP and Mobilink Bank—where quality, protection, and uptime matter most.</p>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-2/3' src='/services/sunshade-db.png' />

                    </div>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl md:text-2xl'>Fabrication You Can Trust</h1>
                        <p>At Ishal Enterprises, our fabrication services are more than just metalwork—they’re a commitment to safety, precision, and reliability. Whether powering a network or protecting sensitive equipment, our DBs and shelters are built to perform and last.</p>
                    </div>

                    

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/db-sunshade/1.jpeg' />
                        <img src='/db-sunshade/4.jpeg' />
                        <img src='/db-sunshade/6.jpeg' />
                        <img src='/db-sunshade/8.jpeg' />
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0'>
                        <img src='/db-sunshade/7.jpeg' />
                        <img src='/db-sunshade/10.jpeg' />
                        <img src='/db-sunshade/9.jpeg' />
                        <img src='/db-sunshade/11.jpeg' />


                        
                    </div>

                    <div className='flex flex-col gap-2  mt-4 md:py-6 lg:mt-8'>
                        <h1 className='font-bold text-xl md:text-2xl'>Built to Support Our Vision</h1>
                        <p>As part of our broader vision to enable reliable connectivity and energy solutions for all, our DB and sunshade fabrications support resilient, long-lasting infrastructure. Each unit we produce is a step toward building a smarter, more secure, and energy-aware Pakistan—where networks stay up, power flows safely, and communities remain connected.</p>

                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-6'>
                        <img src='/db-sunshade/2.jpeg' />
                        <img src='/db-sunshade/5.jpeg' />
                        <img src='/db-sunshade/12.jpeg' />
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6'>
                        <img src='/db-sunshade/13.jpeg' />
                        <img src='/db-sunshade/14.jpeg' />
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default DBAndSunshade