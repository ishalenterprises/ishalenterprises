import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const SiteSurveys = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const slideImages = [
    "/banner/4.jpeg",
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
                               SITE SURVEYS FOR ACQUIRING LANDS
                            </h1>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishal Enterprises,</strong> we understand that the success of any telecom or infrastructure project begins with selecting the right location. Our Site Survey and Land Acquisition services are designed to support telecom operators, service providers, and government bodies in identifying, evaluating, and acquiring optimal sites that meet technical, regulatory, and commercial requirements.
                    </p>

                    <p className='pt-2 md:text-lg'>With over a decade of experience working in both urban and remote areas, we bring unmatched expertise in conducting detailed surveys, ensuring each selected site offers the best possible environment for successful network deployment — whether it’s for a telecom tower, long-haul fiber node, or base station.
                    </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Where We Operate</h1>
                            <p>We have conducted land surveys across Pakistan — from rural, tribal, and mountainous areas to urban industrial zones — including:</p>

                        <ul className='list-disc pl-6'>
                            <li>Khuzdar, Tharparkar, Chitral, and Jamshoro</li>
                            <li>Sanghar, Nooriabad, and Balochistan belt</li>
                            <li>Industrial corridors such as Jamshoro and Nooriabad</li>
                            <li>Dense cities like Hyderabad and Karachi</li>
                        </ul>

                        <p>Our local reach, coupled with national-level coordination, allows us to overcome logistical and legal challenges with ease.</p>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-4/5' src='/services/site-surveys.jpeg' />

                    </div>

                    </div>

                    <div className='w-full h-full flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-xl md:text-2xl'>Our Expertise in Site Surveys</h1>
                        <p className='pt-2'>Our site survey process follows a structured and professional approach that enables smooth and hassle-free land acquisition. We handle everything from feasibility studies to stakeholder coordination, ensuring each project starts on a strong foundation.
                    </p>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold'>📍 Location Identification & Mapping</li>
                        <p className='pb-2'>We evaluate strategic locations based on signal strength, terrain, accessibility, population density, and network design requirements to identify ideal spots for deployment.</p>

                        <li className='font-bold'>🧭 Technical Surveys (SARs, TSSRs)</li>
                        <p className='pb-2'>Our team performs detailed SARs (Site Acquisition Reports) and TSSRs (Technical Site Survey Reports) to document all relevant technical, environmental, and physical details needed for decision-making and regulatory approvals.</p>

                        <li className='font-bold'>🧾 Legal & Regulatory Compliance</li>
                        <p className='pb-2'>We work closely with landowners, local authorities, and municipal departments to acquire necessary NOCs (No Objection Certificates), ownership documents, lease agreements, and government approvals.</p>
                        <li className='font-bold'>🔍 Structural Feasibility Assessment</li>
                        <p className='pb-2'>We assess soil conditions, elevation, access to utilities (electricity, road, fiber), and other construction-impacting factors to ensure each site is viable for tower or fiber deployment.</p>
                        <li className='font-bold'>🧑 Stakeholder Coordination & Negotiation</li>
                        <p className='pb-2'>We handle communications with property owners and facilitate negotiations to secure land on lease or sale while ensuring clarity, transparency, and documentation throughout the process.</p>
                    </ul>

                    </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:py-6'>
                        <img src='/site-surveys/1.jpeg' />
                        <img src='/site-surveys/2.jpeg' />
                        <img src='/site-surveys/3.jpeg' />
                        <img src='/site-surveys/4.jpeg' />
                        <img src='/site-surveys/7.jpeg' />
                        <img src='/site-surveys/8.jpeg' />
                        <img src='/site-surveys/10.jpeg' />
                        <img src='/site-surveys/12.jpeg' />

                        
                    </div>

                    <div className='w-full h-full py-4 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4'>
                            <h1 className='font-bold text-xl md:text-2xl'>Why Choose Ishal Enterprises for Land Surveys:</h1>

                        <ul className='list-disc pl-6'>
                            <li><strong>Extensive Field Experience: </strong>Our surveyors are familiar with complex terrains and local dynamics across Pakistan</li>
                            <li><strong>Regulatory Knowledge: </strong>We navigate the land laws and administrative procedures of each region to ensure timely acquisition</li>
                            <li><strong>GIS Mapping & Documentation: </strong>We use modern tools for location mapping, satellite data, and precise reporting</li>
                            <li><strong>End-to-End Services:  </strong>From survey to handover, we manage the complete land acquisition process</li>
                            <li><strong>Trusted by Top Operators:  </strong>Our work with major telcos and the USF (Universal Service Fund) speaks to our reliability and results</li>
                        </ul>

                    </div>

                    <h1 className='font-bold text-xl md:text-2xl pb-2'>Building the First Step Toward Connectivity</h1>
                    <p>At Ishal Enterprises, every connection starts with land — and we make sure it's the right one. Whether you're expanding rural networks or scaling urban capacity, our team ensures that your project starts with the best possible site.</p>

                    <strong>Let us help you acquire land with confidence and clarity — so you can focus on building the future.</strong>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                        <img src='/site-surveys/15.jpg' />
                        <img src='/site-surveys/16.jpg' />
                        <img src='/site-surveys/17.jpg' />
                        <img src='/site-surveys/18.jpg' />
                        <img src='/site-surveys/19.jpg' />
                        <img src='/site-surveys/14.jpg' />

                    </div>



                </div>
            <Footer />
        </>
    )
}

export default SiteSurveys