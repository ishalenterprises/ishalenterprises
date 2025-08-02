import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const InfrastructureWork = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/services-page/telecom.jpeg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-2xl text-center sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(37,83,177)]'>Infrastruture Work</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 text-lg md:text-lg'><strong>Ishaal Enterprises,</strong> we are proud to be at the forefront of Pakistan’s telecom and civil infrastructure development. Our Infrastructure Work services are critical in enabling digital connectivity and supporting the growing demands of modern communication networks across the country.
                    </p>

                    <p className='pt-2 text-lg md:text-lg'>Since our establishment, we have successfully delivered infrastructure solutions in both urban centers and remote, challenging terrains — from the mountains of Chitral to the deserts of Tharparkar and the coastal regions of Karachi. Our deep understanding of the terrain, combined with technical expertise, allows us to execute projects that are both robust and sustainable.
                    </p>

                    <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-2'>

                        <p className='pt-2 text-lg md:text-lg'>We specialize in the complete lifecycle of infrastructure work—from planning, design, and civil construction to installation, integration, and ongoing maintenance. Our team is equipped to handle high-demand projects involving:
                    </p>

                    <ul className="list-disc pl-6">
                        <li className='font-bold pt-2'>Telecom Tower Foundations & Civil Work</li>
                        <p className='pb-2'>We provide complete civil engineering solutions for telecom towers — from surveying and soil testing to excavation, foundation casting, and finishing. Our structures are designed to meet the toughest environmental conditions and ensure long-term stability.</p>

                        <li className='font-bold'>FTTS & Long-Haul Fiber Deployment</li>
                        <p className='pb-2'>We deploy Fiber to the Site (FTTS) and long-haul fiber optic networks across Sindh, Balochistan, and other regions, ensuring high-speed connectivity even in the most remote areas. This includes trenching, ducting, splicing, and complete optical testing.</p>

                        <li className='font-bold'>BTS Room Construction & Equipment Shelters</li>
                        <p className='pb-2'>We build state-of-the-art Base Transceiver Station (BTS) rooms, shelters, and control centers equipped with power systems, ventilation, and security, ensuring reliable operation of network equipment.</p>

                        <li className='font-bold'>Power Solutions & Electrical Work</li>
                        <p className='pb-2'>Our team provides integrated power infrastructure including DG sets, solar panels, battery banks, and hybrid energy solutions to support off-grid sites. We ensure uninterrupted power for telecom equipment with safe and efficient electrical installations.</p>

                        <li className='font-bold'>Urban & Rural Telecom Infrastructure</li>
                        <p className='pb-2'>We have experience working in diverse environments, managing the logistical and technical challenges of dense city areas as well as isolated rural and border regions. Our approach ensures minimal environmental impact while maximizing coverage and efficiency.</p>
                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Why Choose Us?</h1>

                        <ul className='list-disc pl-6'>
                            <li><strong>Proven Track Record: </strong>Over 250+ towers and 700+ FTTS sites delivered across Pakistan</li>
                            <li><strong>Nationwide Reach: </strong>Covering both metropolitan cities and remote high-risk areas</li>
                            <li><strong>Skilled Workforce: </strong>Certified engineers and technicians with years of hands-on experience</li>
                            <li><strong>Commitment to Quality & Safety: </strong>We follow strict QA/QC procedures and HSE protocols</li>
                            <li><strong>Environmentally Responsible: </strong>Supporting tower sharing, reducing carbon footprint, and avoiding redundant infrastructure</li>
                        </ul>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-1/2' src='/civil-page/17.jpg' />

                    </div>

                    </div>

                    <div className='flex'>
                        <p>At Ishaal Enterprises, our goal is to build smart, reliable, and future-ready infrastructure that powers seamless communication and digital inclusion for all. Whether you're a telecom operator, government body, or enterprise looking to expand your network, we offer customized infrastructure solutions that meet your strategic goals.</p>
                    </div>

                    

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/civil-page/3.jpg' />
                        <img src='/civil-page/7.jpg' />
                        <img src='/civil-page/14.jpg' />
                        <img src='/civil-page/2.jpg' />
                        
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 md:pt-0'>
                        <img src='/civil-page/6.jpg' />
                        <img src='/civil-page/9.jpg' />
                        <img src='/civil-page/8.jpg' />
                        
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default InfrastructureWork