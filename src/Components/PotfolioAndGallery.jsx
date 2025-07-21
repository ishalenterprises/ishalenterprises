import React from 'react';

const PotfolioAndGallery = () => {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col py-4 md:py-6 lg:py-8 px-2 lg:gap-2'>

                    <h1 className='font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-center mb-4'>Portfolio & Photo Gallery</h1>


                <div className='w-full justify-center gap-2 grid grid-cols-1 md:grid-cols-3'>

                    <div className='flex flex-col gap-4 md:gap-2'>
                        <img className='w-full lg:w-auto' src='/portfolio/photo-2.jpg' />

                        <div className='flex gap-1 lg:gap-2'>
                            <img className='w-1/2 lg:w-[13.1rem]' src='/portfolio/photo-1.jpg' />
                            <img className='w-1/2 lg:w-[13.1rem]' src='/portfolio/photo-3.jpg' />

                        </div>

                    </div>

                    <div className='flex flex-col gap-4 md:gap-2'>
                        <img className='w-auto' src='/portfolio/photo-6.jpg' />

                        <img className='w-auto' src='/portfolio/photo-4.jpg' />
                        <img className='w-auto' src='/portfolio/photo-5.jpg' />


                    </div>
                    
                    <div className='flex flex-col gap-4 md:gap-2'>
                        <img className='w-auto' src='/portfolio/photo-7.jpg' />

                        <img className='w-auto' src='/portfolio/photo-8.jpg' />

                    </div>

                </div>

            </div>

        </>
    )
}

export default PotfolioAndGallery;