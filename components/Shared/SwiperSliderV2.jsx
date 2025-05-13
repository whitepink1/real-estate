"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMedia from 'use-media';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function SwiperSliderV2 ({data}) {
    const images = [data.img,...data.images];
    const thumbsRef = useRef([]);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isDesktop = useMedia({ minWidth: 1023 });

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        if (thumbsRef.current[activeIndex]) {
          thumbsRef.current[activeIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
      }, [activeIndex]);

  return (
    <div className="w-[95vw] h-fit mx-auto px-4 mt-7 lg:mt-10">
      <div className="flex-col-start w-full mt-15 mb-7 lg:flex-between lg:mb-10">
        <h2 className='font-cards-md lg:w-[400px]'>{data.name}</h2>
        <div className='flex-between w-full'>
          <p className='h-full flex-center p-2 font-paragraph text-white rounded-lg border-1 border-grey-15'>
            <img src="/icons/location_mark.svg" 
                 className='inline-block align-middle mr-1'/> Malibu, California
          </p>
          <div className='flex-center h-full'>
            <p className='font-paragraph text-grey-60 pr-2'>Price</p>
            <p className='font-cards-sm'>$ {data.price}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-grey-10 border-2 border-grey-15 p-5 rounded-xl lg:p-10">
          <div className="w-full my-5 bg-grey-08 border-2 border-grey-15 p-2.5 rounded-xl max-lg:hidden">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  ref={(el) => (thumbsRef.current[idx] = el)}
                  className={`cursor-pointer w-[65px] h-[40px] flex-shrink-0 rounded-lg overflow-hidden border-2 md:h-[60px] md:w-[100px] ${
                    idx === activeIndex ? '' : 'opacity-55'
                  }`}
                  onClick={() => goToSlide(idx)}
                >
                  <img src={src} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            navigation={false}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2, spaceBetween: 30},
            }}
            modules={[Navigation]}
            className="mySwiper2"
          >
            {images.map((src, id) => (
              <SwiperSlide key={id} className="w-full h-[250px]">
                <img
                  src={src}
                  alt={`Image #${id}`}
                  className="w-full aspect-video rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full my-5 bg-grey-08 border-2 border-grey-15 p-2.5 rounded-xl lg:hidden">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  ref={(el) => (thumbsRef.current[idx] = el)}
                  className={`cursor-pointer w-[65px] h-[40px] flex-shrink-0 rounded-lg overflow-hidden border-2 md:h-[60px] md:w-[100px] ${
                    idx === activeIndex ? '' : 'opacity-55'
                  }`}
                  onClick={() => goToSlide(idx)}
                >
                  <img src={src} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className='flex-between w-full p-2 bg-grey-08 rounded-full lg:flex-center lg:gap-x-7 lg:w-fit lg:mx-auto lg:mt-5'>
              <button onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer h-full w-fit">
                  <img src="/icons/prev.svg" alt="Previous" />
              </button>
              <div className="flex justify-center gap-3">
                {images.map((_, idx) => (
                    <span
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`block w-3 h-1.5 rounded-full cursor-pointer transition-all duration-200 ${
                        idx === activeIndex ? 'bg-purple-60' : 'bg-grey-30'
                    }`}
                  />
              ))}
              </div>
              <button onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer h-full w-fit">
                  <img src="/icons/next.svg" alt="Next" />
              </button>
          </div>   
      </div>
    </div>
  );
}
