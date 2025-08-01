import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import Statistics from '../Components/Statistics';
import OrganizationHierarcy from '../Components/OrganizationHierarcy';


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        <>
            <Header />
            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pt-10 md:pt-8 px-4 md:px-6 md:px-8 lg:px-8 items-center justify-center'>

                <div className='w-full md:w-4/5 h-full flex flex-col'>
                    <h1 className='text-3xl sm:text-4xl lg:text-4xl text-bold xl:text-5xl pb-1 text-[rgb(54,137,185)]'>About Us</h1>

                    <p className='pt-2 text-sm md:text-base text-gray-600'><strong>Ishaal Enterprises,</strong> was founded in Jan 2010, We commenced operations in 2010 and did multiples sites
                        while in January 2021 upon signing with one of Pakistan’s largest telcos for deploying telecom towers,
                        alongside the Sanghar under the NOKIA USF project. At the same time, we acquired CMPAK
                        longhaul FTTS South region sites including Sindh & Balochistan, marking a significant milestone in
                        our journey
                    </p>

                    <p className='pt-2 text-sm lg:text-base text-gray-600'>
                        Ishaal Enterprises is a trusted name in the construction, renovation, and telecom maintenance
                        industry. We specialize in high-quality building solutions, structural renovations, and comprehensive
                        telecom infrastructure maintenance. With a strong commitment to excellence, safety, and efficiency,
                        our skilled team ensures timely project execution while maintaining the highest industry standards. At
                        Ishaal Enterprises, we take pride in delivering innovative solutions tailored to meet our clients' specific
                        needs, fostering long-term partnerships based on reliability and trus
                    </p>

                    <p className='pt-2 text-sm lg:text-base text-gray-600'>
                        Our core activities involve constructing, and managing telecom infrastructure networks that enable
                        connectivity across the Country.We did also multiples Tower-sharing sites which helps optimize the
                        tower footprint in the Country by preventing tower proliferation, removing parallel capacities and
                        excessive network redundancies, and reducing the carbon footprint that results from operating a
                        higher number of towers.
                    </p>

                    <p className='pt-2 text-sm lg:text-base text-gray-600'>
                        Our purpose remains to make connectivity more accessible and affordable for all. By doing our bit to
                        build a truly connected world, we believe that we will help ensure everyone will have equal access and
                        opportunities to improve their lives — irrespective of wealth, gender, race, or any other factor.
                    </p>

                    <p className='pt-2 text-sm lg:text-base text-gray-600'>
                        Ishaal Enterprises spreading there services  from Chitral in the North to Karachi in the South, covering
                        some of the most complex and security-challenged terrains including khuzdar,Jamshoro,Nooriabad
                        and Tharparkar.
                    </p>

                    <p className='pt-2 text-sm lg:text-base text-gray-600'>
                        Today, Ishaal Enterprises the best vendor of towerco in Pakistan with over 250 plus towers &  FTTS
                        long haul more than 700+ Sites.

                    </p>

                </div>

                <div className='w-full md:w-4/5 h-full flex gap-3 items-center justify-end'>


                    <img
                        className='w-full '
                        src='/about/about-1.jpg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>

               <div className="w-full md:w-4/5 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center py-8 gap-6">
  {/* Text Section */}
  <div className="w-full md:w-2/3 flex flex-col justify-center">
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[rgb(54,137,185)] pb-2">
      Message from the CEO
    </h1>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
      Dear Team, As the leader of this company, I believe true leadership is not about authority but about
      service—serving our vision, our values, and, most importantly, each of you. Success is not built on the efforts of one but on the collective passion and dedication of all.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
      Let us remain committed to integrity and fairness in everything we do. Our actions today will define
      the legacy we leave for tomorrow. Remember, every challenge is an opportunity to grow, and every
      decision we make is a thread in the fabric of our shared success.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
      I encourage each of you to lead by example in your own roles—act with humility, strive for excellence,
      and always stay true to what is right. When we govern ourselves with purpose and honesty, we build
      trust, foster collaboration, and inspire greatness.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Together, we can achieve not only remarkable outcomes but also create an environment where innovation,
      respect, and shared vision thrive. This is the heart of our company and the foundation for our future.
      <br />
      <br />
      Thank you for your unwavering dedication and trust in this journey.
      <br />
      <br />
      <span className="font-semibold">With respect and determination,</span><br />
      <span className="font-bold text-[rgb(54,137,185)]">Mr. Allaouddin Pirzada</span>
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/3 flex items-center justify-center">
    <img
      src="/ceo.jpg"
      alt="CEO"
      loading="lazy"
      className="w-[350px] h-[450px] sm:w-[400px] sm:h-[600px] md:w-60 md:h-80 lg:w-72 lg:h-96 object-cover rounded-xl shadow-lg border border-gray-300"
    />
  </div>
</div>


            </div>

            

            <OrganizationHierarcy />


            <div className='w-full md:min-h-screen flex flex-col md:flex-row gap-2 md:gap-10 pt-4 md:pt-0 lg:pb-8 px-2 md:px-20 lg:px-40'>

                <div className='w-full max-h-full justify-center flex flex-col'>
                    <h1 className='text-lg md:text-xl lg:text-2xl text-bold xl:text-3xl pb-1 text-[rgb(54,137,185)]'>Our Mission</h1>

                    <p className='pt-1 text-sm md:text-base lg:text-lg text-gray-600'>To provide strategic and
                        technical value to our
                        Customers by designing,
                        building and maintaining cost
                        effective solutions for
                        Pakistan’s leading Operators
                        and Service Providers.
                    </p>

                    <h1 className='text-lg md:text-xl lg:text-2xl text-bold xl:text-3xl pt-2 text-[rgb(54,137,185)]'>Our Vision</h1>

                    <p className='pt-1 text-sm md:text-base lg:text-lg text-gray-600'>We take great pride in being
                        able to offer our Customers our
                        wealth of experience and
                        access to world class products
                        through our key relationships
                        with manufacturers, in order to
                        assist their rapid deployment
                        of networks to meet the
                        current and future needs of the
                        telecommunications market.

                    </p>


                </div>

                <div className='w-full max-h-full flex gap-3 items-center justify-end'>


                    <img
                        className='md:w-7/8 lg:w-4/5'
                        src='/about/mission.jpeg'
                        alt='Telecom Deployment'
                        loading='lazy'
                    />
                </div>
            </div>

            <Statistics />

            <Footer />
        </>
    )
}

export default AboutPage