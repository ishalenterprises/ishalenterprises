import React from 'react';

const Partners = () => {
    return (
        <>
            <div className='w-full flex flex-col px-4 pt-4 md:py-10 sm:px-3 md:px-8 items-center'>
                <div className='flex gap-2 w-full'>
                    <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 md:w-full text-[rgb(54,137,185)]" />
                    <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center pb-8 text-[rgb(54,137,185)]'>Our Clients</h1>
                    <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 md:w-full text-[rgb(54,137,185)]" />

                </div>

                <div className='w-full grid grid-cols-2 py-4 lg:grid-cols-4 items-center justify-center'>

                    <div className='flex items-center justify-center'>
                        <img className='w-[7rem] md:w-[15rem]' src='/clients/zong.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[7rem] md:w-[15rem]' src='/clients/telenor.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[7rem] md:w-[15rem]' src='/clients/nokia.jpg' />
                    </div>

                    <div className='flex items-center pt-4 md:pt-0 justify-center'>
                        <img className='w-[7rem] md:w-[15rem]' src='/clients/engro.png' />
                    </div>

                </div>

                <div className='w-full grid mt-4 gap-y-8 lg:mt-6 grid-cols-2 py-4 lg:grid-cols-4 items-center justify-center'>

                    <div className='flex items-center justify-center'>
                        <img className='w-[5rem] md:w-[10rem]' src='/clients/moblink.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[4rem] md:w-[8rem]' src='/clients/huawei.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[5rem] md:w-[10rem]' src='/clients/iba-sukkur.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[4rem] md:w-[8rem]' src='/clients/pphi.png' />
                    </div>

                </div>

                <div className='w-full grid mt-4 gap-y-8 lg:mt-12 grid-cols-2 py-4 lg:grid-cols-4 items-center justify-center'>

                    <div className='flex items-center justify-center'>
                        <img className='w-[5rem] md:w-[10rem]' src='/clients/NBP.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[4rem] md:w-[7rem]' src='/clients/SIUT.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[6rem] md:w-[10rem]' src='/clients/TAWAL.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[8rem] md:w-[13rem]' src='/clients/tcf.svg' />
                    </div>

                </div>

            </div >
        </>
    )
}

export default Partners;