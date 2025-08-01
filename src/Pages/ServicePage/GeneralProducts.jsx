import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const GeneralProducts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/general-products/main.jpeg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/70 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(54,137,185)]'>General Products</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishaal Enterprises,</strong> we take pride in being a comprehensive procurement partner for public and private organizations across Pakistan. Our General Products Supply Division delivers a wide range of essential goods from office and safety supplies to IT and electronic equipment ensuring quality, timely availability, and cost-efficiency.
                    </p>

                    <p className='pt-2 md:text-lg'>Backed by a strong network of trusted vendors and manufacturers, we cater to the customized needs of industries including telecom, education, healthcare, construction, and government sectors, helping them run smoothly with the right tools and materials.
                    </p>

                    <div className='flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-xl md:text-2xl'>What We Offer:</h1>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>👔 Uniforms & Stitching Services</li>
                        <p className='pb-2'>Custom-stitched uniforms for corporate teams, industrial workers, and security personnel tailored for comfort, durability, and branding consistency.</p>

                        <li className='font-bold'>✏️ Stationery & Office Supplies</li>
                        <p className='pb-2'>Bulk supply of notebooks, pens, files, registers, printing materials, and all workplace essentials to keep your operations organized and efficient.</p>

                        <li className='font-bold'>🧵 Stitching Gadgets & Accessories</li>
                        <p className='pb-2'>Supply of sewing machines, embroidery kits, cutting tools, and other stitching related gadgets for training centers, workshops, and vocational programs.</p>

                        <li className='font-bold'>🪑 Furniture & Fixtures</li>
                        <p className='pb-2'>Office desks, chairs, filing cabinets, school furniture, and customized fixtures designed to enhance space functionality and ergonomics.</p>

                        <li className='font-bold'>🦺 Safety Equipment</li>
                        <p className='pb-2'>Helmets, gloves, safety shoes, fire extinguishers, first aid kits, and PPE (Personal Protective Equipment) for industrial, construction, and healthcare use.</p>
                        
                        <li className='font-bold'>💻 IT Products & Electronics</li>
                        <p className='pb-2'>Laptops, printers, projectors, routers, security cameras, and other IT infrastructure products to support digital and administrative operations.</p>

                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>General Products Supply – Everything You Need, One Trusted Source</h1>
                            <p>At Ishaal Enterprises, we understand that the smooth running of any organization depends on reliable access to quality essentials. That’s why we offer a wide range of general supplies including <strong>uniforms, stationery, stitching gadgets, furniture, safety equipment, IT products, and electronics</strong> all under one roof.</p>

                        <p>Whether you're setting up a new office, running field operations, or managing a public service project, our products ensure durability, compliance, and timely delivery. Organizations like <strong>PPHI, Zong, and government departments</strong> trust us for both day-to-day and large-scale supply needs.</p>
                        
                        <p>Aligned with our mission to empower operations through dependable services and our vision to be a one-stop solution for infrastructure and operational needs, we ensure competitive pricing, tailored solutions, and prompt fulfillment so you can focus on what matters most.</p>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-2/3' src='/general-products/main.jpeg' />

                    </div>

                    </div>
                    

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/general-products/15.jpeg' />
                        <img src='/general-products/22.jpg' />
                        <img src='/general-products/3.jpg' />
                        <img src='/general-products/8.jpg' />

                        
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-0'>
                        <img src='/general-products/18.jpg' />
                        <img src='/general-products/9.jpg' />
                        <img src='/general-products/21.webp' />
                        <img src='/general-products/19.jpg' />
                    </div>

                    <div className='flex flex-col gap-2  mt-4 md:py-6 lg:mt-8'>
                        <h1 className='font-bold text-xl md:text-2xl'>Driven by Purpose</h1>
                        <p>Our mission is to empower institutions and industries by providing dependable access to essential products through a streamlined and transparent supply chain. Staying true to our vision, we aim to become Pakistan’s most reliable and responsive supplier — committed to quality, affordability, and long-term partnership.</p>

                        <p>
With a proven track record of supplying to government departments, telecom providers, NGOs, and corporate offices, Ishaal Enterprises stands ready to fulfill your general product requirements — on time and on target.</p>

                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-6'>
                        <img src='/general-products/23.jpg' />
                        <img src='/general-products/24.jpg' />
                        <img src='/general-products/25.jpg' />
                        
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default GeneralProducts