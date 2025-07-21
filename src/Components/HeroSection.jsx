import React, { useState } from 'react'
import { GoProjectSymlink } from "react-icons/go";
import { IoIosPeople, IoMdCheckmark } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";


const HeroSection = () => {

    const [searchValue, setSearchValue] = useState('');

  return (
    <>
    <div className='w-full flex flex-col pt-6 flex flex-col px-4 px-2 sm:px-3 md:px-6 lg:px-8 py-2 sm:py-3 md:py-10 md:flex-row gap-4 md:gap-8 sm:px-3 md:px-6 py-2 sm:py-3 md:py-6 items-center justify-between'>

            <div className='w-full hidden md:flex md:w-2/3 relative'>
                <div>
                <img className='rounded-xl' src='hero-image.jpg' alt='search-car' />
                </div>
            </div>
            

            <div className='w-full py-4 md:py-0 flex flex-col gap-4 md:gap-6 lg:gap-10'>

            <div>
            <form className='w-full flex gap-2'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-6/7 :h-10 px-2 rounded-md border border-black' type='text' placeholder='Search' />
                <button type='submit' className='w-20 md:w-24 h-10 text-white text-base sm:text-sm md:text-base rounded-md cursor-pointer bg-[rgb(2,6,111)]'>Search</button>
            </form>
            </div>

            
            <div className='flex flex-col gap-4'>

                <div className='flex gap-3 sm:gap-6'>

                <div className='flex gap-4 bg-gray-100 hover:scale-105 transition-transform duration-300 easy-in-out items-center text-[rgb(2,6,111)] px-3 py-1 w-1/2 rounded-xl shadow-lg'>
                    <GoProjectSymlink className='bg-white p-2 rounded-full w-12 h-12' />

                    <div className='flex flex-col justify-center'>
                        <p className='text-base md:text-sm lg:text-base font-medium'>10+</p>
                        <p className='text-black text-xs sm:text-base'>Projects</p>

                    </div>

                </div>
                
                <div className='flex gap-4 bg-gray-100 text-[rgb(2,6,111)] p-3 w-1/2 hover:scale-105 transition-transform duration-300 easy-in-out rounded-xl shadow-lg'>
                    <IoMdCheckmark className='bg-white p-2 rounded-full w-12 h-12' />

                    <div className='flex flex-col justify-center'>
                        <p className='font-medium'>20+</p>
                        <p className='text-black text-xs sm:text-base '>Clients</p>

                    </div>

                </div>
                
                </div>


                <div className='flex gap-3 sm:gap-6'>

                <div className='flex gap-4 bg-gray-100 text-[rgb(2,6,111)] p-3 w-1/2 hover:scale-105 transition-transform duration-300 easy-in-out rounded-xl shadow-lg'>
                    <IoIosPeople className='bg-white p-2 rounded-full w-12 h-12' />

                    <div className='flex flex-col justify-center'>
                        <p className='font-medium'>10+</p>
                        <p className='text-black text-xs sm:text-base '>Happy Clients</p>

                    </div>

                </div>

                <div className='flex gap-4 bg-gray-100 text-[rgb(2,6,111)] p-3 w-1/2 hover:scale-105 transition-transform duration-300 easy-in-out rounded-xl shadow-lg'>
                    <MdSupportAgent className='bg-white p-2 rounded-full w-12 h-12' />


                    <div className='flex flex-col justify-center'>
                        <p className='font-medium'>24/7</p>
                        <p className='text-black text-xs sm:text-base '>24/7 Support</p>

                    </div>

                </div>

                </div>

            </div>

            </div>

            <div className='w-full md:hidden relative'>
                <div>
                <img className='rounded-xl' src='hero-image.jpg' alt='search-car' />
                </div>
            </div>

        </div>
    </>
  )
}

export default HeroSection