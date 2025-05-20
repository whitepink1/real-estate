"use client"
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { OfficeLocationData } from '@/constants/constant';
import Link from 'next/link';

const OfficeLocation = () => {
    const tabs = ['All','Regional','International'];
    const thumbsRef = useRef([]);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
            setActiveIndex(index);
        }
    };

    return(<div className='w-[95vw] mx-auto p-4 lg:w-[92vw]'>
        <div className="w-full mb-7.5 md:w-fit">
            <div className="flex-between p-2.5 bg-grey-10 rounded-xl md:flex-start md:gap-x-5 md:p-4">
              {tabs.map((src, idx) => (
                <div
                  key={idx}
                  ref={(el) => (thumbsRef.current[idx] = el)}
                  className={`cursor-pointer w-fit h-fit py-3.5 px-5 rounded-xl border-2 border-grey-15 ${
                    idx === activeIndex ? 'bg-grey-08' : ''
                  }`}
                  onClick={() => goToSlide(idx)}
                >
                  <p className='font-paragraph text-white'>{src}</p>
                </div>
              ))}
            </div>
        </div>
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            navigation={false}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper3"
          >
            {OfficeLocationData.map((src, id) => (
              <SwiperSlide key={id} className="w-full h-full">
                <div className='flex-col-between w-full gap-5 lg:flex-between'>
                {src.map((item) => (
                    <div key={item.title} className='flex-col-start w-full h-fit gap-y-6 p-6 border-2 border-grey-15 rounded-xl lg:h-[500px] xl:h-[450px]'>
                        <div className='flex-col-start gap-y-2'>
                            <p className='font-paragraph text-white'>{item.title}</p>
                            <p className='font-cards-md'>{item.adress}</p>
                            <p className='font-paragraph text-grey-60'>{item.text}</p>
                        </div>
                        <div className='flex-start flex-wrap gap-3'>
                            <p className='font-paragraph text-white p-2.5 bg-grey-10 border-2 border-grey-15 rounded-full'>{item.email}</p>
                            <p className='font-paragraph text-white p-2.5 bg-grey-10 border-2 border-grey-15 rounded-full'>{item.phone}</p>
                            <p className='font-paragraph text-white p-2.5 bg-grey-10 border-2 border-grey-15 rounded-full'>{item.location}</p>
                        </div>
                        <Link href={item.link} className='flex-center w-full p-4.5 font-paragraph text-white bg-purple-60 rounded-xl'>Get Direction</Link>
                    </div>))
                }
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
    </div>)
}

export default OfficeLocation;