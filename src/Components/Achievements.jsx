import React from 'react';

const Achievements = () => {
    return (
        <>
        <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
            <div className='flex gap-2 py-2 md:py-4 lg:py-6 w-full'>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 text-[rgb(54,137,185)]" />
            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center text-[rgb(54,137,185)]'>Achievements & Success</h1>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(54,137,185)] border-1 w-1/2 text-[rgb(54,137,185)]" />

            </div>

            <div>
                <img className='hidden md:flex' src='/achievements/achievements-pc.jpeg' />
                <img className='md:hidden' src='/achievements/achievements-mobile.png' />
            </div>

        </div>
        
        </>
    )
}

export default Achievements