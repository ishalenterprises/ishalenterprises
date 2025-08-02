import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    handleResize(); // Set on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      src: "/banner/1.jpeg",
      headline: "More Than Just Construction — We Build Your Dreams Into Reality",
      subline:
        "Whether renovating a cherished home or starting a new project, we listen to your needs, guide you through every detail, and deliver results that reflect your lifestyle, values, and goals.",
    },
    {
      src: "/banner/2.jpeg",
      headline: "Professional Land Surveying Services for Accurate Planning and Development",
      subline:
        "We provide detailed and reliable site surveys to help you make informed decisions for construction, land acquisition, and regulatory approvals. From boundary identification to topographic mapping, we ensure your project starts on solid ground",
    },
    {
      src: "/banner/3.jpeg",
      headline: "Customized DB & Sunshade Fabrication Solutions for Every Project",
      subline:
        "We design and fabricate high-quality distribution boards and durable sunshade structures tailored to your needs—ensuring safety, efficiency, and long-lasting protection in residential, commercial, and industrial settings.",
    },
    {
      src: "/banner/4.jpeg",
      headline: "Complete Power Solutions – Solar Structure&Panel & DG Rental Services",
      subline:
        "We provide end-to-end energy solutions tailored to your needs. Our solar structures and high-performance panels offer a clean, sustainable source of energy for homes, businesses, and industries. For backup or primary power needs, our Diesel Generator (DG) Rental services ensure uninterrupted power with reliable equipment and on-time support. Whether you're going green or need emergency power, we've got you covered.",
    },
    {
      src: "/banner/5.jpeg",
      headline: "Your Trusted Source for General Supplies & IT Services",
      subline:
        "We provide a wide range of essential products and services to support your organization’s daily operations. From high-quality uniforms, stationery, gadgets, and furniture to reliable IT services and equipment, we ensure timely delivery and consistent quality—helping you stay organized, equipped, and efficient.",
    },
  ];

  return (
    <div className="w-full h-[80vh] md:h-[94vh] relative">
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[75vh] md:h-[90vh] flex items-center justify-center">
              {/* Image */}
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover md:object-cover"
              />

              {/* Left shadow */}
              <div className="absolute top-0 left-0 h-full w-full sm:w-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

              {/* Text */}
              <div className="absolute top-1/2 left-4 sm:left-20 transform -translate-y-1/2 z-20 max-w-[70%] sm:max-w-xl">
                <h1 className="text-white text-2xl sm:text-xl md:text-5xl font-bold leading-snug sm:leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-white font-light mt-2 sm:mt-4 text-xs sm:text-sm md:text-xl">
                  {slide.subline}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
