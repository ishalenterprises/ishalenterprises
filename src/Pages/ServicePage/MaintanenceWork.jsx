import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const MaintanenceWork = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/services-page/maintanenc.jpeg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-2xl text-center sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(37,83,177)]'>Maintanence Work</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishal Enterprises,</strong> we believe that building infrastructure is only the beginning — maintaining it is what ensures long-term reliability, safety, and performance. Our Maintenance Work services are designed to keep telecom and civil infrastructure operating at peak efficiency, minimizing downtime and extending asset life.
                    </p>

                    <p className='pt-2 md:text-lg'>We provide preventive, corrective, and emergency maintenance solutions tailored for telecom towers, power systems, shelters, fiber networks, and site facilities across both urban centers and remote regions of Pakistan.
                    </p>

                    <div className='flex items-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-xl md:text-2xl'>Our Maintenance Services Include:</h1>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>Routine Preventive Maintenance</li>
                        <p className='pb-2'>Scheduled inspections, system diagnostics, and performance checks to identify and resolve issues before they affect operations.</p>

                        <li className='font-bold'>Corrective Maintenance</li>
                        <p className='pb-2'>Fast response and expert repairs for any damaged, faulty, or underperforming components — ensuring minimum service disruption.</p>

                        <li className='font-bold'>Power System Maintenance</li>
                        <p className='pb-2'>Regular checks and servicing of DG sets, solar systems, batteries, and electrical panels to ensure consistent power supply.</p>
                        
                        <li className='font-bold'>Shelter and Site Repairs</li>
                        <p className='pb-2'>Upkeep and repairs of BTS shelters, fencing, grounding systems, and tower structures.</p>
                        
                        <li className='font-bold'>Fiber Link Testing & Repairs</li>
                        <p className='pb-2'>OTDR testing, link assessments, and splicing to fix signal losses and ensure seamless data transmission.</p>

                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Why Our Clients Trust Us</h1>
                        <ul className='list-disc pl-6'>
                            <li>24/7 Support Teams ready for quick deployment in case of outages or urgent repairs</li>
                            <li>Experienced Technicians trained in telecom systems, power electronics, and safety protocols</li>
                            <li>Data-Driven Maintenance Logs that help in performance monitoring and future upgrades</li>
                            <li>Service Coverage across diverse terrains including deserts, mountains, and urban zones</li>
                        </ul>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-2/3' src='/services/maintanence-work.jpeg' />

                    </div>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl md:text-2xl'>Our Commitment</h1>
                        <p>With every maintenance contract, we stay committed to our mission — delivering reliable and continuous connectivity for our clients. Our vision to support Pakistan’s digital growth depends not only on what we build, but on how well we care for it.</p>
                    </div>

                    

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/portfolio/photo-1.jpg' />
                        <img src='/portfolio/photo-3.jpg' />
                        <img src='/maintanence-work/7.jpg' />
                        <img src='/maintanence-work/8.jpg' />

                        
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-0'>
                        <img src='/portfolio/photo-2.jpg' />
                        <img src='/maintanence-work/4.jpeg' />
                        <img src='/maintanence-work/6.jpg' />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default MaintanenceWork