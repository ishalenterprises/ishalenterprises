import React from 'react';

const Partners = () => {
    return (
        <>
            <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-center'>Our Clients</h1>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 py-4 lg:grid-cols-4 items-center justify-center'>

                    <div className='flex items-center justify-center'>
                        <img className='w-[15rem]' src='/clients/zong.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[15rem]' src='/clients/telenor.png' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-[15rem]' src='/clients/nokia.jpg' />
                    </div>

                    <div className='flex items-center pt-4 md:pt-0 justify-center'>
                        <img className='w-[15rem]' src='/clients/engro.png' />
                    </div>

                </div>

                <div className='w-full grid mt-4 gap-y-8 lg:mt-6 grid-cols-1 sm:grid-cols-2 py-4 lg:grid-cols-4 items-center justify-center'>

                <div className='flex items-center justify-center'>
                    <img className='w-[10rem]' src='/clients/moblink.png' />
                </div>

                <div className='flex items-center justify-center'>
                    <img className='w-[8rem]' src='/clients/huawei.png' />
                </div>

                <div className='flex items-center justify-center'>
                    <img className='w-[10rem]' src='/clients/iba-sukkur.png' />
                </div>

                <div className='flex items-center justify-center'>
                    <img className='w-[8rem]' src='/clients/pphi.png' />
                </div>

            </div>

        </div >
        </>
    )
}

export default Partners;