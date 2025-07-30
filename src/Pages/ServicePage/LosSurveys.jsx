import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'


const LosSurveys = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                <div className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/services-page/surveys-mw.jpeg' />
            </div>

            <div className='inset-0 z-30 bg-black/70 md:bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-center text-2xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(54,137,185)]'>LOSRs Surveys, MW Planning & CW Design</h1>

            </div>

            </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishaal Enterprises,</strong> we provide comprehensive Line-of-Sight (LOS) Surveys, Microwave (MW) Planning, and Civil Work (CW) Design services to support the seamless expansion of wireless networks across Pakistan.
                    </p>

                    <p className='pt-2 md:text-lg'>These specialized services are critical to the accurate planning, cost-efficiency, and long-term success of telecom infrastructure, especially in remote and challenging regions where physical connectivity is limited.
                    </p>

                    <div className='flex items-center justify-center py-2 md:py-4'>
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-xl md:text-2xl'>Our Core Capabilities</h1>

                    <ul className="list-disc pl-6 pt-2 md:pt-0 text-sm md:text-base">
                        <li className='font-bold pt-2'>📶 LOSRs (Line-of-Sight) Surveys</li>
                        <p className='pb-2'>Our teams perform on-ground and drone-assisted LOS surveys to ensure unobstructed microwave links between transmission points. We assess elevation, obstructions, terrain, and path profiles to guarantee stable and interference-free connectivity.</p>

                        <li className='font-bold'>📡 Microwave (MW) Link Planning</li>
                        <p className='pb-2'>We offer optimized MW backhaul planning by calculating link budgets, frequency bands, antenna sizes, and path redundancy — ensuring high reliability and maximum throughput in both rural and urban deployments.</p>

                        <li className='font-bold'>🏗️ CW (Civil Work) Design</li>
                        <p className='pb-2'>Our engineers create detailed Civil Work designs tailored for each site. From tower foundations and shelters to electrical and grounding systems, our CW designs ensure structural safety, compliance, and efficiency.</p>

                    </ul>

                    </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                        <div className='flex flex-col gap-2 my-4 md:my-8'>
                            <h1 className='font-bold text-xl md:text-2xl'>Why Choose Us</h1>
                        <ul className='list-disc pl-6'>
                            <li>Accurate Field Surveys using modern tools like GPS, altimeters, and mapping software</li>
                            <li>Custom Designs based on terrain, climate, and operator requirements</li>
                            <li>Rapid Planning that supports faster deployments and reduced operational costs</li>
                            <li>Trusted by Major Telcos under national rollout and USF projects</li>
                        </ul>

                    </div>

                    

                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-2/3' src='/services/surveys-mw.jpeg' />

                    </div>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl md:text-2xl'>Supporting a Connected Future</h1>
                        <p>These services reflect our mission to deliver strategic technical value and align with our vision of empowering clients with world-class planning and design. By ensuring precision in every stage — from survey to design — we help build a reliable, high-performance telecom backbone across Pakistan.</p>
                    </div>

                    

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:py-6 lg:mt-8'>
                        <img src='/site-surveys/1.jpeg' />
                        <img src='/site-surveys/12.jpeg' />
                        <img src='/site-surveys/8.jpeg' />
                        
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-0'>
                        <img src='/civil-page/4.jpg' />
                        <img src='/civil-page/6.jpg' />
                        <img src='/civil-page/9.jpg' />

                        
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default LosSurveys