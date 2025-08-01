import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const CivilWork = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/civil-page/4.jpg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(54,137,185)]'>Civil Work</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishaal Enterprises,</strong> our Civil Work services are the foundation upon which resilient telecom and construction infrastructure is built. With over a decade of experience, we have emerged as a trusted partner for delivering reliable, scalable, and cost-effective civil engineering solutions across Pakistan — from the remote hills of Chitral to the busy urban zones of Karachi.
                    </p>

                    <p className='pt-2 md:text-lg'>Our commitment to quality, safety, and timely delivery ensures that every project — regardless of its complexity or location — meets the highest industry standards. Whether it's preparing land for telecom towers or constructing control rooms and shelters in remote terrains, our civil work ensures long-lasting performance in even the harshest environments.
                    </p>

                    <div className='flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-xl md:text-2xl'>What We Offer:</h1>
                        <p className='pt-2 md:text-lg'>Our Civil Work division specializes in a wide range of turnkey construction and engineering services that are critical to enabling and supporting telecom, industrial, and infrastructure growth:
                    </p>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>🏗️ Site Development & Earthworks</li>
                        <p className='pb-2'>We handle full site preparation including leveling, excavation, trenching, compaction, and drainage systems. Our expert teams ensure that the ground is ready for all types of construction, even in difficult terrain and weather conditions.</p>
                        <li className='font-bold'>🧱 Foundation & Structural Construction</li>
                        <p className='pb-2'>We design and build durable foundations for telecom towers, DG shelters, cabins, and equipment platforms, using reinforced concrete and precision-cast materials to withstand load stress and environmental pressure.</p>
                        <li className='font-bold'>🧰 Shelter & Building Construction</li>
                        <p className='pb-2'>From BTS rooms and equipment shelters to boundary walls, guard rooms, and internal roads, we construct all civil structures needed to support telecom and infrastructure operations — focusing on quality, durability, and weather resistance.</p>
                        <li className='font-bold'>⚡ Power & Utility Infrastructure</li>
                        <p className='pb-2'>We build and integrate power rooms, cable ducts, earthing pits, and transformer bases, ensuring safe and efficient power supply systems for network continuity.</p>
                        <li className='font-bold'>🔩 Installation of Ancillary Components</li>
                        <p className='pb-2'>Our team also installs fencing, gates, cable trays, lightning arresters, tower ladder supports, signboards, and other accessories that ensure site safety and functionality.</p>
                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Where We Work</h1>
                            <p>Ishaal Enterprises has delivered civil work projects across all provinces, including:</p>

                        <ul className='list-disc pl-6'>
                            <li>The mountainous and remote zones of Chitral</li>
                            <li>Security-sensitive areas like Khuzdar and Tharparkar</li>
                            <li>Industrial corridors such as Jamshoro and Nooriabad</li>
                            <li>Urban areas like Karachi, Hyderabad, and Sanghar</li>
                        </ul>

                        <p>Our nationwide presence ensures rapid deployment and on-ground execution regardless of terrain complexity or accessibility.</p>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-2/3' src='/services/civil-works.jpg'/>

                    </div>

                    </div>

                    <div className='flex'>
                        <p>At Ishaal Enterprises, our goal is to build smart, reliable, and future-ready infrastructure that powers seamless communication and digital inclusion for all. Whether you're a telecom operator, government body, or enterprise looking to expand your network, we offer customized infrastructure solutions that meet your strategic goals.</p>
                    </div>

                    

                    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/civil-page/1.jpg' />
                        <img src='/civil-page/2.jpg' />
                        <img src='/civil-page/3.jpg' />
                        <img src='/civil-page/5.jpg' />
                        <img src='/civil-page/7.jpg' />
                        
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0'>
                        <img src='/civil-page/4.jpg' />
                        <img src='/civil-page/6.jpg' />
                        <img src='/civil-page/8.jpg' />
                        <img src='/civil-page/9.jpg' />

                        
                    </div>

                    <div className='flex flex-col gap-2  mt-4 md:py-6 lg:mt-8'>
                        <h1 className='font-bold text-xl md:text-2xl'>Driven by Our Mission & Vision</h1>
                        <p>In line with our mission, we aim to deliver cost-effective civil solutions that help Pakistan’s leading operators expand their network efficiently. Our services empower telecom providers to reach every corner of the country — connecting people, businesses, and services.</p>

                        <p>Guided by our vision, we leverage global partnerships, trusted materials, and best-in-class tools to support the rapid and reliable development of infrastructure that meets the needs of today’s and tomorrow’s digital world.</p>

                    </div>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-6'>
                        <img src='/civil-page/11.jpg' />
                        <img src='/civil-page/12.jpg' />
                        <img src='/civil-page/14.jpg' />
                        <img src='/civil-page/17.jpg' />

                        
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default CivilWork