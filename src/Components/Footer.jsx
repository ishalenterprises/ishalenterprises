import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn, FaYoutube, FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <>
            <div className='w-full px-4 lg:px-20 py-4' style={{
                background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
            }}>
                <div className='hidden lg:flex lg:flex-row gap-4 justify-between'>

                    <div className='flex flex-col lg:w-[12rem] items-center justify-center'>
                        <h1 className='text-xl lg:text-2xl'>Ishaal Enterprises</h1>

                    </div>

                    <div className='flex flex-col items-start'>

                        <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>Discover Links </h1>

                        <div className='flex lg:flex-col text-xs lg:text-base text-gray-600 text-start gap-2'>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About Us</Link>
                            <Link to='/'>Contact Us</Link>
                        </div>

                    </div>


                    <div className='flex flex-col items-start'>

                        <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>Contact Us </h1>

                        <div className='flex  lg:flex-col text-xs lg:text-xl text-gray-600 text-start gap-4'>
                            <div className='flex gap-4'>
                                <FaHome />
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col'>
                                        <strong className='text-sm'>Head Office:</strong>
                                <p className='text-sm '>Flat # 202, Chapel Garden, Block-M, Abul Hussain Isphani Road</p>
                                    </div>

                                </div>
                            </div>
                            
                            <div className='flex gap-4'>
                                <FaHome />
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col'>
                                        <strong className='text-sm'>Branch Office:</strong>
                                <p className='text-sm '>Office # C-450, Second Floor, Block-11, Gulistan-e-Johar, Karachi</p>
                                    </div>

                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <FaPhoneAlt />
                                <p className='text-sm w-4/5'>+92 3158235669</p>
                            </div>

                            <div className='flex gap-4'>
                                <MdEmail />
                                <p className='text-sm w-4/5'>support@ishalenterprises.com.pk</p>
                            </div>


                        </div>

                    </div>




                    <div className='flex flex-col items-start'>

                        <h1 className='font-bold text-sm md:text-base lg:text-base text-gray-600 text-start lg:pb-2'>Social Media</h1>

                        <div className='flex flex-col cursor-pointer text-xs text-start gap-2 text-gray-600 lg:text-base'>
                            <FaFacebook className='w-8 h-8' />
                            <FaLinkedinIn className='w-8 h-8' />
                            <FaYoutube className='w-8 h-8' />
                        </div>
                    </div>


                </div>

                <div className='lg:hidden flex flex-col gap-4'>

                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center lg:w-[15rem] w-2/3'>
                            <h1 className='text-lg lg:text-2xl'>Ishaal Enterprises</h1>

                        </div>

                        <div className='flex flex-col items-start w-1/3'>

                            <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1 lg:pb-2'>Discover Links</h1>

                            <div className='flex flex-col text-xs lg:text-base text-gray-600 text-start gap-1'>
                                <Link to='/'>Home</Link>
                                <Link to='/'>About Us</Link>
                                <Link to='/'>Contact Us</Link>
                            </div>

                        </div>

                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col items-start w-2/3'>

                            <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-3'>Important Links </h1>

                            <div className='flex flex-col cursor-pointer text-lg lg:text-base text-gray-600 text-start gap-3'>

                                <div className='flex gap-2'>
                                    <FaHome />
                                    <div className='flex flex-col'>

                                    <strong className='text-xs'>Head Office:</strong>
                                    <p className='text-xs w-2/3'>Flat # 202, Chapel Garden, Block-M, Abul Hussain Isphani Road</p>
                                    </div>
                                </div>

                                <div className='flex gap-2'>
                                    <FaHome />
                                    <div className='flex flex-col'>

                                    <strong className='text-xs'>Branch Office:</strong>
                                    <p className='text-xs w-2/3'>Office # C-450, Second Floor, Block-11, Gulistan-e-Johar, Karachi</p>
                                    </div>
                                </div>
                                
                                <div className='flex gap-2'>
                                    <FaPhoneAlt />
                                <p className='text-xs'>+92 3158235669</p>
                                </div>
                                
                                <div className='flex gap-2'>
                                    <MdEmail />
                                <p className='text-xs'>support@ishalenterprises.com.pk</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col items-start w-1/3'>

                            <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1 lg:pb-2'>Social Links</h1>

                            <div className='flex flex-col cursor-pointer text-xs lg:text-base text-gray-600 text-start gap-2'>
                                <FaFacebook className='w-5 h-5' />
                                <FaLinkedinIn className='w-5 h-5' />
                                <FaYoutube className='w-5 h-5' />
                            </div>


                        </div>

                    </div>

                </div>
                <p className='text-center pt-4 text-xs md:text-sm lg:text-base text-gray-600'>©Copyright-2024 - Created by Hammad Ansari</p>

            </div>
        </>
    )
}

export default Footer