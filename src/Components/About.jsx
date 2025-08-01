import React, { useState } from 'react';



const About = () => {

  return (

    <div className='w-full min-h-screen flex flex-col md:flex-row pb-4 py-6 lg:pb-8 px-2 md:px-6 lg:px-8'>
      <div className='w-full text-black h-full flex flex-col gap-4 md:flex-row px-2 md:px-6 lg:px-8 xl:px-10'>
        <div className='w-full md:w-1/2 h-full flex flex-col'>
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-1 text-[rgb(54,137,185)]'>About Us</h1>

          <p className='pt-2 lg:text-base text-gray-600'><strong>Ishaal Enterprises,</strong> Established in January 2010, Ishaal Enterprises is a trusted name across Pakistan in <strong>telecom infrastructure development, telecom maintenance, civil construction, private home construction and renovation, solar panel installation, site surveys for land acquisition, DB and sunshade fabrication, DG rental, and general product supply.</strong> We operate nationwide—from <strong>Chitral to Karachi</strong>, including remote and challenging areas like <strong>Khuzdar, Jamshoro, Sehwan, Hyderabad, Nooriabad, Sanghar and Tharparkar </strong>with a reputation for delivering reliable and cost-effective solutions.
            </p>

            <p className='pt-2 lg:text-base text-gray-600'>
            In <strong>2021</strong>, we achieved a major milestone through our partnership in the <strong>NOKIA USF projects in Sanghar, Jamshoro-Sehwan (Small Lot S7), and Tharparkar (Small Lot S10).</strong> That same year, we also commenced work on <strong>CMPAK Zong’s FTTS Longhaul Metro deployments</strong> across Sindh and Balochistan. In <strong>2022</strong>, we expanded our portfolio by contributing to <strong>NOKIA Sharing Sites</strong> and continuing our <strong>Engro Enfrashare Rollout operations, supporting telecom expansion</strong> in underserved regions. 
            </p>

            <p className='pt-2 lg:text-base text-gray-600'>
            In <strong>2023</strong>, our team handled the <strong>NOKIA</strong> Dismantling Scope and continued with NOKIA Sharing Sites expansion, while also managing Mobilink Maintenance Sites across various locations. We further enhanced our <strong>fiber deployment</strong> capabilities with <strong>CMPAK Zong</strong> Longhaul Metro FTTS operations. In <strong>2024</strong>, we proudly continue work on <strong> NOKIA Sharing Sites, Dismantling Scope, and Mobilink Maintenance</strong>, while actively executing CMPAK Zong FTTS Longhaul Metro deployments and supporting <strong>Engro Enfrashare rollout</strong> plans.
            </p>

            <p className='pt-2 lg:text-base text-gray-600'>
            Over the years, we've provided <strong>telecom tower construction and maintenance</strong> for clients like <strong>Zong 4G, Telenor, Huawei, and Nokia,</strong> and deployed <strong>fiber infrastructure and tower-sharing solutions for Tawal, Edotco, and CMPAK.</strong> Our site surveys and land acquisition services have supported leading organizations such as <strong>Engro Energy and Mobilink Bank</strong>, while our civil construction work includes projects for <strong>IBA Sukkur, PPHI, and TCF Schools.</strong>
            </p>
            
            <p className='pt-2 lg:text-base text-gray-600'>
            We also offer solar panel installation services for <strong>residential, commercial, and telecom sites </strong>promoting clean energy adoption and reducing operational costs. Trusted by both private clients and institutions, our solar solutions are tailored for performance, durability, and long-term savings.
            </p>
            
            <p className='pt-2 lg:text-base text-gray-600'>
            In addition, we provide high-quality <strong>private residential construction, custom DB fabrication, sunshade shelters, and DG rental services</strong> for reliable backup power—trusted by institutions like <strong>SIUT and NBP</strong>. Our general supply services ensure timely availability of essential materials and equipment like <strong>Uniforms,
 Stationary, Stitching Gadgets Furniture and Fixtures, Safety
 Equipments, IT Products and Electronics.</strong> 
            </p>
        </div>

        <div className='w-full md:w-1/2 h-full flex gap-3 items-center justify-end'>

  <div className='flex flex-col gap-4'>
    
    {/* Top Image */}
    <img 
      className='w-full md:w-[25rem] lg:w-[28.5rem]' 
      src='/about/1.jpeg' 
      alt='Telecom Deployment' 
      loading='lazy' 
      width={456}
      height={300}
    />

    {/* Two Side-by-Side Images */}
    <div className='flex gap-2'>
      <div className='w-1/2'>
        <img 
          className='md:w-52 lg:w-56' 
          src='/about/2.jpeg' 
          alt='Towers' 
          loading='lazy' 
          width={224}
          height={150}
        />
      </div>

      <div className='w-1/2'>
        <img 
          className='md:w-52 lg:w-56' 
          src='/about/4.jpeg' 
          alt='Maintenance' 
          loading='lazy' 
          width={224}
          height={150}
        />
      </div>
    </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default About