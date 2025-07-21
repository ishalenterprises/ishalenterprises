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
      src: isMobile ? "/banner/8-mobile.png" : "/banner/8.png",
      headline: "More Than Just Construction — We Build Your Dreams Into Reality",
      subline:
        "Whether renovating a cherished home or starting a new project, we listen to your needs, guide you through every detail, and deliver results that reflect your lifestyle, values, and goals.",
    },
    {
      src: isMobile ? "/banner/9-mobile.png" : "/banner/9.png",
      headline: "Over a Decade of Empowering Pakistan’s Telecommunication Landscape",
      subline:
        "Since 2010, we’ve been at the forefront of building resilient telecom networks across Sindh, Balochistan, and beyond. Our partnerships with major telcos and expertise in tower deployment and fiber optics have made us a trusted name in connectivity and innovation.",
    },
    {
      src: isMobile ? "/banner/10-mobile.png" : "/banner/10.png",
      headline: "Keeping Networks Alive with Reliable Maintenance Solutions",
      subline:
        "From routine checks to emergency support, our expert teams ensure uninterrupted network performance through proactive, efficient, and scalable telecom maintenance services.",
    },
  ];

  return (
    <div className="w-full h-[90vh] relative">
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
            <div className="relative w-full h-[85vh] flex items-center justify-center">
              {/* Image */}
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-obtain md:object-cover"
              />

              {/* Left shadow */}
              <div className="absolute top-0 left-0 h-full w-full sm:w-[70rem] bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

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
