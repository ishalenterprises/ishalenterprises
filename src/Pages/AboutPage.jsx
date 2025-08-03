import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import CoreValues from '../Components/CoreValues';
import Footer from '../Components/Footer'
import Statistics from '../Components/Statistics';
import OrganizationHierarcy from '../Components/OrganizationHierarcy';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
const slideImages = [
    "/about/about-1.jpg",
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
                   ABOUT US
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pt-10 md:pt-8 px-4 md:px-6 md:px-8 lg:px-8 items-center justify-center'>

                <div className='w-full md:w-4/5 h-full flex flex-col'>
                    <h1 className='text-3xl sm:text-4xl lg:text-4xl py-6 md:py-14 text-bold xl:text-5xl pb-1 text-center text-[rgb(37,83,177)]'>ISHAL ENTERPERISES</h1>

                    <p className='pt-2 md:pt-4 text-sm md:text-base text-gray-600'>Ishaal Enterprises, verified by ISO, has come a long way since its inception in 2010. With unwavering commitment, distinction, and a pursuit of professional excellence, Ishaal has consistently met the high expectations and complex demands of its clients in both public and private sectors. Over the years, Ishaal has undertaken a range of prestigious telecom and civil projects involving construction, power, solar, and general services across Pakistan.
                    </p>

                    <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            Initially starting with small-scale deployments, Ishaal reached a key turning point in January 2021, after signing with one of Pakistan’s largest telecom operators for the deployment of telecom towers under the NOKIA USF project in Sanghar. This partnership marked the beginning of a new era, expanding Ishaal's operations to CMPAK longhaul FTTS South Region projects including Sindh and Balochistan.
            </p>

            <p className='pt-4 lg:text-base text-gray-600'>
            Since then, Ishaal Enterprises has rapidly grown across multiple domains:

            <ul className='list-disc pl-6 md:pl-8 pt-2 md:pt-4 font-bold'>
              <li>Telecom Infrastructure Development</li>
              <li>Civil Construction Projects</li>
              <li>Solar Structure & Installation</li>
              <li>Diesel Generator Rental Services</li>
              <li>DB & Sunshade Fabrication</li>
              <li>Home Construction & Renovation</li>
              <li>General Supplies (Uniforms, IT Products, Furniture, Safety Equipment)</li>
              <li>Infrastructure Work</li>
            </ul>
            </p>

            <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            By 2022, Ishaal further extended its presence with projects such as NOKIA Sharing Sites, Engro Enfrashare Rollout, and CMPAK Zong FTTS Metro deployments, playing a vital role in expanding telecom access in underserved regions of Pakistan.
            </p>
            
            <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            The year 2023 was another milestone, with Ishaal managing NOKIA Dismantling Scopes, Mobilink Maintenance Sites, and strengthening fiber operations across Sindh and Balochistan. In 2024, Ishaal continues to be actively involved in NOKIA Sharing, CMPAK Zong deployments, and Engro Enfrashare rollouts, ensuring high-quality and timely project delivery.
            </p>
            
            <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            Ishaal’s notable clients include Zong 4G, Telenor, Huawei, Nokia, Mobilink Bank, Engro Energy, Edotco, Tawal, and SIUT, reflecting the trust placed in the company by both public institutions and private enterprises.
            </p>
            
            <p className='pt-2 md:pt-4lg:text-base text-gray-600'>
            The company also excels in custom DB fabrication, sunshade shelters, DG rental for backup power, and general supplies, offering a one-stop solution for institutional and project-based needs. Clients such as IBA Sukkur, PPHI, TCF Schools, and NBP are a testament to Ishaal’s dedication to quality, durability, and reliability.
            </p>
            
            <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            Through a continuous focus on innovation, efficient project management, and client satisfaction, Ishaal Enterprises is setting new benchmarks in the engineering, telecom, and construction industries—helping build a connected, sustainable, and technologically empowered Pakistan.
            </p>

                </div>

               <div className="w-full md:w-4/5 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center py-8 gap-6">
  {/* Text Section */}
  <div className="w-full md:w-2/3 flex flex-col justify-center">
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[rgb(37,83,177)] pb-2">
      Message from the CEO
    </h1>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
      Dear Team, As the leader of this company, I believe true leadership is not about authority but about
      service—serving our vision, our values, and, most importantly, each of you. Success is not built on the efforts of one but on the collective passion and dedication of all.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
      Let us remain committed to integrity and fairness in everything we do. Our actions today will define
      the legacy we leave for tomorrow. Remember, every challenge is an opportunity to grow, and every
      decision we make is a thread in the fabric of our shared success.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
      I encourage each of you to lead by example in your own roles—act with humility, strive for excellence,
      and always stay true to what is right. When we govern ourselves with purpose and honesty, we build
      trust, foster collaboration, and inspire greatness.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Together, we can achieve not only remarkable outcomes but also create an environment where innovation,
      respect, and shared vision thrive. This is the heart of our company and the foundation for our future.
      <br />
      <br />
      Thank you for your unwavering dedication and trust in this journey.
      <br />
      <br />
      <span className="font-semibold">With respect and determination,</span><br />
      <span className="font-bold text-[rgb(37,83,177)]">Mr. Allaouddin Pirzada</span>
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/3 flex items-center justify-center">
    <img
      src="/ceo.jpg"
      alt="CEO"
      loading="lazy"
      className="w-[350px] h-[450px] sm:w-[400px] sm:h-[600px] md:w-60 md:h-80 lg:w-72 lg:h-96 object-cover rounded-xl shadow-lg border border-gray-300"
    />
  </div>
</div>


            </div>

            

            <OrganizationHierarcy />


            <div className='w-full flex flex-col my-24 md:flex-row gap-2 md:gap-10 pt-4 md:pt-0 lg:pb-8 px-2 md:px-20 lg:px-40'>

                <div className='w-full justify-center flex flex-col'>
                    <h1 className='text-lg md:text-xl lg:text-3xl text-bold xl:text-[44px] pb-1 text-[rgb(37,83,177)]'>Our Mission</h1>

                    <p className='pt-1 text-sm md:text-base lg:text-lg text-gray-600'>To deliver innovative, reliable, and high-quality engineering and telecom solutions through advanced technologies, skilled professionals, and a commitment to excellence.
We aim to support our clients' growth by providing sustainable infrastructure, clean energy systems, and efficient project management—ensuring value, trust, and long-term impact in every project we undertake
                    </p>

                </div>

                <div className='w-full flex gap-3 items-center justify-end'>


                    <img
                        className='md:w-7/8 lg:w-5/6'
                        src='/about/mission.jpg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>
                
            </div>
            
            <div className='w-full flex bg-gray-100 py-6 md:py-14 flex-col mb-12 md:flex-row gap-2 md:gap-10 px-2 md:px-20 lg:px-40'>

               <div className='w-full max-h-full flex gap-3 items-center justify-start'>


                    <img
                        className='md:w-7/8 lg:w-7/8'
                        src='/about/vision.jpg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>

                <div className='w-full  justify-center flex flex-col'>
                    <h1 className='text-lg md:text-xl lg:text-3xl text-bold xl:text-[44px] pb-1 text-[rgb(37,83,177)]'>Our Vision</h1>

                    <p className='pt-1 text-sm md:text-base lg:text-lg text-gray-600'>To be a leading force in engineering, telecom, and sustainable infrastructure solutions—empowering communities, transforming industries, and building a connected, innovative, and energy-efficient future across Pakistan and beyond.
                    </p>

                </div>

               
                
            </div>
            
            <div className='w-full flex flex-col my-12 md:flex-row gap-2 md:gap-10 pt-4 md:pt-0 lg:pb-8 px-2 md:px-20 lg:px-40'>

               <div className='w-full max-h-full flex gap-3 items-center justify-start'>


                    <img
                        className='md:w-7/8 lg:w-7/8'
                        src='/about/future.jpg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>

                <div className='w-full  justify-center flex flex-col'>
                    <h1 className='text-lg md:text-xl lg:text-3xl text-bold xl:text-[44px] pb-1 text-[rgb(37,83,177)]'>Future</h1>

                    <p className='pt-1 text-sm md:text-base lg:text-lg text-gray-600'>Ishaal Enterprises is focused on expanding its role in Pakistan’s infrastructure and energy landscape by embracing innovation and sustainability. We aim to grow beyond telecom into areas like solar energy, smart construction, and digital infrastructure—bringing reliable, cost-effective solutions to both urban and remote regions.
                    </p>
                    
                    <p className='pt-2 md:pt-4 text-sm md:text-base lg:text-lg text-gray-600'>In the coming years, we plan to invest in modern technologies, skilled talent, and smart engineering practices. Our goal is to drive national progress through efficient project delivery, clean energy adoption, and inclusive development—building a smarter, stronger, and more connected Pakistan.
                    </p>

                </div>

               
                
            </div>

            <Statistics />

            <CoreValues />

            <Footer />
        </>
    )
}

export default AboutPage