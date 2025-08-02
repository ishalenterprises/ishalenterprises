import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const DgRental = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/dg-rental/4.jpg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(37,83,177)]'>DG Rental</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishaal Enterprises,</strong> our DG Rental Services ensure that businesses, telecom sites, and infrastructure projects across Pakistan never have to face downtime due to power outages. We provide diesel generators on rent, available in a wide range of capacities to meet the needs of telecom operators, construction sites, hospitals, and commercial facilities.

                    <br></br> <br></br>
Whether it’s a temporary solution during site development or a long-term requirement in remote, off-grid locations — our ready-to-deploy DG units are maintained to the highest standards of fuel efficiency, safety, and runtime reliability.
                    </p>

                    <div className='flex w-full items-center py-2 md:py-4'>
                    <div className='flex flex-col'>
                    <h1 className='font-bold text-xl md:text-2xl'>What We Offer</h1>


                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='pt-2'>Rental of diesel generators from 15kVA to 250kVA+</li>

                        <li className=''>24/7 support and fuel management</li>

                        <li className=''>On-site delivery, installation, and maintenance</li>

                        <li className=''>Flexible rental plans for short-term or long-term needs</li>

                        <li className=''>Silent and weatherproof enclosures for urban deployments</li>

                    </ul>

                    </div>

                    </div>

                    <div className='flex w-full py-2 md:my-4 items-center justify-center'>
                        <div className='flex flex-col gap-2'>
                            <p>Our DG Rental service supports our mission of enabling continuous operations in even the most remote or energy-deficient regions. Trusted by leading clients such as Zong, Ufone, NBP, and SIUT, we ensure uninterrupted power where it matters most. Through this, we uphold our vision of delivering sustainable, dependable, and accessible infrastructure solutions to every corner of the country</p>

                    </div>

                    </div>      

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mt-4 items-center justify-center'>
                        <img src='/services/dg-rental-2.jpg' />
                    
                        <img src='/dg-rental/5.jpg' />
                        <img src='/dg-rental/4.jpg' />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default DgRental