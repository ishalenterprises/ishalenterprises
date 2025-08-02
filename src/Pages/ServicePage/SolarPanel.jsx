import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const SolarPanel = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/solar-panel/1.jpg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(37,83,177)]'>Solar Panel & Structure</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishaal Enterprises,</strong> our Solar Panel services are designed to meet the growing demand for clean, reliable, and cost-effective energy solutions across Pakistan. With energy needs rising and grid reliability often limited—especially in remote regions—our solar solutions empower telecom sites, homes, institutions, and businesses to operate with uninterrupted, sustainable power.

                    <br></br> <br></br>

Backed by technical expertise and a commitment to environmental responsibility, we offer end-to-end solar services, from assessment and design to installation and long-term maintenance. Whether you're looking to reduce energy costs, ensure backup power, or transition toward green energy, Ishaal Enterprises delivers scalable solar systems tailored to your unique requirements.
                    </p>

                    <div className='flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-xl md:text-2xl'>What We Offer:</h1>
                        <strong className='pt-2 text-base'>🔋 Solar Energy Assessment & System Design</strong>
                        <p className='pt-1 md:text-lg'>We begin with a thorough energy audit and site survey to evaluate sunlight availability, load demand, and roof or ground conditions. Based on this data, we design optimized solar solutions that balance performance, efficiency, and budget.
                    </p>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>⚙️ On-Grid, Off-Grid & Hybrid Systems</li>
                        <p className='pb-2'>We offer a full range of solar configurations:
                            <ul className='list-disc pl-6 pt-1'>
                                <li>On-grid systems for net metering and energy savings.</li>
                                <li>Off-grid setups for areas without grid access.</li>
                                <li>And hybrid systems combining solar, batteries, and diesel generators to ensure 24/7 power availability.</li>
                            </ul>
                        </p>
                        <li className='font-bold'>🔧 Installation & Commissioning</li>
                        <p className='pb-2'>Our experienced technicians handle the complete installation process—including solar panels, inverters, batteries, charge controllers, and safety components—ensuring proper alignment, secure mounting, and system efficiency.</p>

                        <li className='font-bold'>🛠️ Maintenance & Support.</li>
                        <p className='pb-2'>To guarantee long-term reliability, we provide periodic maintenance, cleaning, and performance checks. Our team ensures minimal downtime and maximum energy output, with support available when you need it.</p>

                        <li className='font-bold'>🔌 Solar for Telecom & Remote Sites</li>
                        <p className='pb-2'>Specializing in telecom infrastructure, we install solar-powered systems for remote towers, shelters, and BTS rooms—reducing diesel dependency and improving uptime in off-grid zones.</p>

                        <li className='font-bold'>🏠 Solar for Homes & Commercial Use</li>
                        <p className='pb-2'>We also provide residential and commercial solar installations that help homeowners and businesses cut electricity bills, gain energy independence, and contribute to a greener futur.</p>
                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Where We Work</h1>
                            <p>Ishaal Enterprises has delivered solar solutions in diverse regions of Pakistan, including:</p>

                        <ul className='list-disc pl-6'>
                            <li>Remote and off-grid telecom sites in Tharparkar, Chitral, and Khuzdar</li>
                            <li>Industrial and urban setups in Jamshoro, Nooriabad, Karachi, and Hyderabad</li>
                            <li>Educational and institutional buildings like IBA Sukkur, TCF Schools, and PPHI facilities</li>
                            <li>Urban areas like Karachi, Hyderabad, and Sanghar</li>
                        </ul>

                        <p>Our clients, including Zong 4G, Telenor, Nokia, Engro Energy, Mobilink Bank, SIUT, and NBP, trust our solar expertise to power critical operations with clean energy.</p>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-4/5' src='/services/solar-install.jpg' />

                    </div>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl md:text-2xl'>Empowering Tomorrow</h1>
                        <p>With every solar installation, Ishaal Enterprises moves a step closer to building a more energy-secure and environmentally conscious Pakistan. We’re not just installing panels—we’re creating a future where power is cleaner, cheaper, and always available.</p>
                    </div>

                    

                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/solar-panel/1.jpg' />
                        <img src='/solar-panel/2.jpg' />
                        
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0'>

                        
                    </div>

                    <div className='flex flex-col gap-2  mt-4 md:py-6 lg:mt-8'>
                        <h1 className='font-bold text-xl md:text-2xl'>Driven by Our Mission & Vision</h1>
                        <p>In line with our mission, we aim to deliver cost-effective civil solutions that help Pakistan’s leading operators expand their network efficiently. Our services empower telecom providers to reach every corner of the country — connecting people, businesses, and services.</p>

                        <p>Guided by our vision, we leverage global partnerships, trusted materials, and best-in-class tools to support the rapid and reliable development of infrastructure that meets the needs of today’s and tomorrow’s digital world.</p>

                    </div>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-6'>

                        
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default SolarPanel