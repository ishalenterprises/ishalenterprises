import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
        <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
            <div className='flex gap-2 w-full'>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 md:w-full text-[rgb(54,137,185)]" />
            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center pb-8 text-[rgb(54,137,185)]'>Our Services</h1>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 md:w-full text-[rgb(54,137,185)]" />

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-col-3 gap-8 md:gap-6'>
                <Link to='/services/infrastructure-work' className='flex flex-col items-center bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/infrastructure-work.jpeg' />
                    <h1 className='font-bold text-lg md:text-xl'>Infrastructure Work</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises excels in delivering comprehensive infrastructure work, leveraging their decade-plus of
                         experience since 2010. Their expertise spans the full project lifecycle, from initial planning and site
                          acquisition to the final deployment and activation of critical telecom infrastructure. This ensures a
                           seamless and efficient build-out of connectivity networks across diverse terrains in Pakistan.</p>

                </Link>
                
                <Link to='/services/site-surveys' className='flex flex-col items-center bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/site-survey.jpeg' />
                    <h1 className='font-bold text-lg md:text-xl'>Site Surveys for Acquiring Lands</h1>
                    <p className='text-sm md:text-base text-gray-600'>A core strength lies in conducting meticulous site surveys for acquiring lands to deploy telco towers. This 
                        crucial initial step involves detailed assessments of potential locations, factoring in geographical 
                        suitability, accessibility, and regulatory compliance, as demonstrated by their work on NOKIA USF and 
                        CMPAK long-haul FTTS projects. Their thorough approach ensures optimal site selection for efficient tower
                         deployment.</p>

                </Link>
                
                <div className='flex flex-col items-center bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/sar.jpeg' />
                    <h1 className='font-bold text-lg md:text-xl'>SARs, TSSRs</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises demonstrates strong proficiency in preparing and managing SARs (Site Acquisition Requests) and TSSRs (Technical Site Survey Reports). These essential documents capture all necessary technical specifications and requirements for new sites, enabling efficient planning and execution of telecom infrastructure projects. Their meticulous documentation supports the smooth progression of complex deployments across Pakistan.</p>

                </div>

                {/* Second Column */}
                
                <Link to='/services/losrs-surveys' className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/surveys-mw.jpeg' />
                    <h1 className='font-bold text-lg md:text-xl'>LOSRs Surveys MW Planning CW Design</h1>
                    <p className='text-sm md:text-base text-gray-600'>Their capabilities extend to performing critical LOSRs (Line of Sight Reports) surveys, vital for effective microwave planning and robust network design. This includes intricate MW (Microwave) planning and comprehensive CW (Civil Works) design, ensuring optimal signal propagation and the development of resilient physical infrastructure. Their expertise underpins the technical backbone of connectivity solutions nationwide.</p>

                </Link>
                
                <Link to='/services/maintanence-work' className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/maintanence-work.jpeg' />
                    <h1 className='font-bold text-lg md:text-xl'>Maintanence Work</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises provides extensive maintenance work services, ensuring the continuous and reliable operation of vital telecommunications infrastructure. Their commitment to excellence and efficiency, as highlighted in their mission, translates into proactive and reactive maintenance strategies. This minimizes downtime, prolongs equipment lifespan, and ensures consistent network performance for uninterrupted connectivity.</p>

                </Link>
                
                <Link to='/services/civil-work' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/civil-work.jpeg' />
                    <h1 className='font-bold text-lg md:text-xl'>Civil Work</h1>
                    <p className='text-sm md:text-base text-gray-600'>The company possesses deep expertise in civil works, encompassing all foundational and structural elements essential for telecom sites. This includes thorough site preparation, precise foundation laying, and other critical structural developments that form the physical backbone of any telecommunications installation. Their robust civil works ensure the durability and stability of over 250 towers and 700+ FTTS sites.</p>

                </Link>
                

            </div>

        </div>
        </>

    )
}

export default Services