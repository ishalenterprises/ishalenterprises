import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const DgRental = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const slideImages = [
    "/dg-rental/4.jpg",
  ];

    return (

        <>
            <Header />
            <div className="w-full relative">
                  <Swiper
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    className="w-full h-[300px] sm:h-[400px] md:h-[600px]"
                  >
                    {slideImages.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                          <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center">
                            <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold">
                               DIESEL GENERATOR RENTAL
                            </h1>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>


            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishal Enterprises,</strong> our DG Rental Services ensure that businesses, telecom sites, and infrastructure projects across Pakistan never have to face downtime due to power outages. We provide diesel generators on rent, available in a wide range of capacities to meet the needs of telecom operators, construction sites, hospitals, and commercial facilities.

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