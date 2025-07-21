import React from 'react'
import { GrDocumentPerformance } from "react-icons/gr";
import { FaLightbulb, FaPeopleArrows } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";




const WhyMe = () => {
  return (
    <>
    <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center'>Why Choose Me</h1>

        <div className='flex flex-col md:hidden xl:flex xl:flex-row gap-4 md:gap-4 lg:gap-8 pt-4 md:pt-8 pb-4'>

          <div className='flex flex-col w-full xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <GrDocumentPerformance className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[3rem] sm:h-[3rem] md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium '>Fast Performance</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Fast Performance</h1>
            <p className='text-center md:text-xs lg:hidden'>Speed matters — I optimize every part of your website to load quickly and run efficiently.</p>
            <p className='hidden lg:block text-center text-md'>Speed matters — I optimize every part of your website to load quickly and run efficiently.</p>
          </div>

          <div className='flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <FaLightbulb className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[3rem] sm:h-[3rem] md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium'>Problem Solver</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Problem Solver</h1>
            <p className='text-center md:text-xs lg:hidden'>I don’t just write code — I solve real-world problems with practical and innovative solutions tailored to your needs.</p>
            <p className='hidden lg:block text-center text-md'>I don’t just write code — I solve real-world problems with practical and innovative solutions tailored to your needs.</p>

          </div>
          
          <div className='flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <FaPeopleArrows className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[3rem] sm:h-[3rem] md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium'>Client-Focused Approach</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Client-Focused Approach</h1>
            <p className='text-center md:text-xs lg:hidden'>Your satisfaction is my priority. I value clear communication and work closely with you to bring your vision to life.</p>
            <p className='hidden lg:block text-center text-md'>Your satisfaction is my priority. I value clear communication and work closely with you to bring your vision to life.</p>

          </div>
          
          <div className='flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <MdSupportAgent className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[3rem] sm:h-[3rem] md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium'>24/7 Support</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Easy Financing</h1>
            <p className='text-center md:text-xs lg:hidden'>I’m available around the clock to help with updates, fixes, or any questions — your peace of mind matters.</p>
            <p className='hidden lg:block text-center text-md'>I’m available around the clock to help with updates, fixes, or any questions — your peace of mind matters.</p>
          </div>
          
        </div>
        
        {/* For lg devices */}
        <div className='hidden md:flex flex-col xl:hidden gap-4 md:gap-4 lg:gap-8 pt-4 md:pt-8 pb-4'>

          <div className='flex gap-8'>

          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <GrDocumentPerformance className='md:w-14 xl:w-16 md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium '>Fast Performance</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Fast Performance</h1>
            <p className='text-center md:text-sm lg:hidden'>Speed matters — I optimize every part of your website to load quickly and run efficiently.</p>
            <p className='hidden lg:block text-center text-md'>Speed matters — I optimize every part of your website to load quickly and run efficiently.</p>
          </div>

          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <FaLightbulb className='md:w-14 xl:w-16 md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium'>Problem Solver</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Problem Solver</h1>
            <p className='text-center md:text-sm lg:hidden'>I don’t just write code — I solve real-world problems with practical and innovative solutions tailored to your needs.</p>
            <p className='hidden lg:block text-center text-md'>I don’t just write code — I solve real-world problems with practical and innovative solutions tailored to your needs.</p>

          </div>

          </div>
          
          <div className='flex gap-8'>

          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <FaPeopleArrows className='md:w-14 xl:w-16 md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium'>Client-Focused Approach</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Client-Focused Approach</h1>
            <p className='text-center md:text-sm lg:hidden'>Your satisfaction is my priority. I value clear communication and work closely with you to bring your vision to life.</p>
            <p className='hidden lg:block text-center text-md'>Your satisfaction is my priority. I value clear communication and work closely with you to bring your vision to life.</p>

          </div>
          
          <div className='flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <MdSupportAgent className='md:w-14 xl:w-16 md:h-10 xl:h-12' />
            <h1 className='hidden md:flex sm:text-xs md:text-lg lg:text-lg font-medium'>24/7 Support</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Easy Financing</h1>
            <p className='text-center md:text-sm lg:hidden'>I’m available around the clock to help with updates, fixes, or any questions — your peace of mind matters.</p>
            <p className='hidden lg:block text-center text-md'>I’m available around the clock to help with updates, fixes, or any questions — your peace of mind matters.</p>
          </div>

          </div>
          
        </div>

    </div>
    </>
  )
}

export default WhyMe