import React from 'react';

const PotfolioAndGallery = () => {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col py-2 md:py-1 lg:py-2 px-2 lg:gap-2'>

                    <div className='flex gap-2 py-2 md:py-4 lg:py-6 w-full'>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 text-[rgb(54,137,185)]" />
            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center pb-8 text-[rgb(54,137,185)]'>Portfolio and Photo Gallery</h1>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 text-[rgb(54,137,185)]" />

            </div>


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
                        <img className='w-auto' src='/services-page/photo-5.jpg' />

                        <img className='w-auto' src='/portfolio/photo-8.jpg' />

                    </div>

                </div>

            </div>

        </>
    )
}

export default PotfolioAndGallery;