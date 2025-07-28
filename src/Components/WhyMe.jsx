import React from 'react'
import { GrDocumentPerformance } from "react-icons/gr";
import { FaLightbulb, FaPeopleArrows } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const WhyMe = () => {
  return (
    <>
      <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
        <div className='flex gap-2 w-full py-4 md:py-8'>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 md:w-full text-[rgb(54,137,185)]" />
            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center pb-8 text-[rgb(54,137,185)]'>Industry Focus</h1>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 md:w-full text-[rgb(54,137,185)]" />

            </div>

        {/* For mobile and xl */}
        <div className='flex flex-col md:hidden xl:flex xl:flex-row mx-4 md:mx-0 gap-4 md:gap-4 lg:gap-8 pb-4'>

          {/* Box 1 */}
          <div className='relative flex flex-col w-full xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <div className="absolute -top-4 -left-4 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold">1</div>
            <img src='/focus-icons/icons8-guarantee-96.png' className='w-[4rem] md:w-8 lg:w-16 h-[4rem] md:h-8 lg:h-16' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm text-center lg:text-lg font-medium pt-2'>Ensuring All Sites are HSE Compliant</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden'>Ensuring All Sites are HSE Compliant</h1>
            <p className='text-center md:text-xs lg:hidden text-center'>Ensuring all sites are HSE compliant by following strict health, safety, and environmental standards at every stage of work.</p>
            <p className='hidden lg:block text-center text-md'>Ensuring all sites are HSE compliant by following strict health, safety, and environmental standards at every stage of work.</p>
          </div>

          {/* Box 2 */}
          <div className='relative flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold">2</div>
            <img src='/focus-icons/icons8-improve-96.png' className='w-[4rem] md:w-8 lg:w-16 h-[4rem] md:h-8 lg:h-16' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium text-center pt-2'>Improving Governance & Eliminating Theft</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Improving Governance & Eliminating Theft</h1>
            <p className='text-center md:text-xs lg:hidden'>Improving governance and eliminating theft by enforcing transparent processes, strict monitoring, and accountability at all levels.</p>
            <p className='hidden lg:block text-center text-md'>Improving governance and eliminating theft by enforcing transparent processes, strict monitoring, and accountability at all levels.</p>
          </div>

          {/* Box 3 */}
          <div className='relative flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold">3</div>
            <img src='/focus-icons/icons8-teamwork-96.png' className='w-[4rem] md:w-8 lg:w-16 h-[4rem] md:h-8 lg:h-16' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium text-center pt-2'>Solving Critical Telecom Problems with Teamwork</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Solving Critical Telecom Problems with Teamwork</h1>
            <p className='text-center md:text-xs lg:hidden'>Solving critical telecom problems through effective teamwork, collaboration, and timely decision-making.</p>
            <p className='hidden lg:block text-center text-md'>Solving critical telecom problems through effective teamwork, collaboration, and timely decision-making.</p>
          </div>

          {/* Box 4 */}
          <div className='relative flex flex-col w-full md:w-[13rem] lg:w-[15rem] xl:w-[18rem] mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
            <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold">4</div>
            <img src='/focus-icons/icons8-support-96.png' className='w-[4rem] md:w-8 lg:w-16 h-[4rem] md:h-8 lg:h-16' />
            <h1 className='hidden md:flex sm:text-xs md:text-sm lg:text-lg font-medium text-center pt-2'>Services offered by 24/7 with Quality Work</h1>
            <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Services offered by 24/7 with Quality Work</h1>
            <p className='text-center md:text-xs lg:hidden text-center'>Offering 24/7 services with a commitment to quality work, reliability, and customer satisfaction.</p>
            <p className='hidden lg:block text-center text-md text-center'>Offering 24/7 services with a commitment to quality work, reliability, and customer satisfaction.</p>
          </div>
        </div>

        {/* For lg devices */}
        <div className='hidden md:flex flex-col xl:hidden gap-4 md:gap-8 lg:gap-8 pt-4 md:pt-8 pb-4'>

          <div className='flex gap-8'>
            {/* Box 1 */}
            <div className='relative flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
              <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-base font-semibold">1</div>
              <img src='/focus-icons/icons8-guarantee-96.png' className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[6rem] sm:h-[5rem] md:h-14 xl:h-16' />
              <h1 className='hidden md:flex md:text-lg font-medium text-center'>Ensuring All Sites are HSE Compliant</h1>
              <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Ensuring All Sites are HSE Compliant</h1>
              <p className='text-center md:text-sm lg:hidden text-center'>Ensuring all sites are HSE compliant by following strict health, safety, and environmental standards at every stage of work.</p>
              <p className='hidden lg:block text-center text-md text-center'>Ensuring all sites are HSE compliant by following strict health, safety, and environmental standards at every stage of work.</p>
            </div>

            {/* Box 2 */}
            <div className='relative flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
              <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold">2</div>
              <img src='/focus-icons/icons8-improve-96.png' className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[6rem] sm:h-[5rem] md:h-14 xl:h-16' />
              <h1 className='hidden md:flex md:text-lg font-medium text-center'>Improving Governance & Eliminating Theft</h1>
              <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Improving Governance & Eliminating Theft</h1>
              <p className='text-center md:text-sm lg:hidden text-center'>Improving governance and eliminating theft by enforcing transparent processes, strict monitoring, and accountability at all levels.</p>
              <p className='hidden lg:block text-center text-md text-center'>Improving governance and eliminating theft by enforcing transparent processes, strict monitoring, and accountability at all levels.</p>
            </div>
          </div>

          <div className='flex gap-8'>
            {/* Box 3 */}
            <div className='relative flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
              <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold">3</div>
              <img src='/focus-icons/icons8-teamwork-96.png' className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[6rem] sm:h-[5rem] md:h-14 xl:h-16' />
              <h1 className='hidden md:flex md:text-lg font-medium text-center'>Solving Critical Telecom Problems with Teamwork</h1>
              <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Solving Critical Telecom Problems with Teamwork</h1>
              <p className='text-center md:text-sm lg:hidden text-center'>Solving critical telecom problems through effective teamwork, collaboration, and timely decision-making.</p>
              <p className='hidden lg:block text-center text-md text-center'>Solving critical telecom problems through effective teamwork, collaboration, and timely decision-making.</p>
            </div>

            {/* Box 4 */}
            <div className='relative flex flex-col w-1/2 mb-3 md:mb-0 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] items-center px-4 py-6 bg-gray-100 rounded-sm'>
              <div className="absolute -top-3 -left-3 bg-[rgb(54,137,185)] text-white w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold">4</div>
              <img src='/focus-icons/icons8-support-96.png' className='w-[6rem] sm:w-[5rem] md:w-14 xl:w-16 h-[6rem] sm:h-[5rem] md:h-14 xl:h-16' />
              <h1 className='hidden md:flex md:text-lg font-medium text-center'>Services offered by 24/7 with Quality Work</h1>
              <h1 className='text-lg font-medium pt-1 md:hidden text-center'>Services offered by 24/7 with Quality Work</h1>
              <p className='text-center md:text-sm lg:hidden text-center'>Offering 24/7 services with a commitment to quality work, reliability, and customer satisfaction.</p>
              <p className='hidden lg:block text-center text-md text-center'>Offering 24/7 services with a commitment to quality work, reliability, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyMe;
