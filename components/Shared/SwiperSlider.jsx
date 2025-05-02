"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import QuestionCard from './QuestionCard';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SwiperSlider = ({ data }) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.params.pagination.el = paginationRef.current;

      swiperRef.current.params.pagination.type = 'fraction';

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, []);

  return (
    <div className="relative w-[98vw] mx-auto lg:w-[92vw]">
      <Swiper
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 3 },
        }}
        pagination={{
            type: 'fraction',
            el: paginationRef.current,
            renderFraction: (currentClass, totalClass) => {
              return `
                    <span class="${currentClass} text-grey-60 font-paragraph"></span>
                    <span class="text-grey-60 font-paragraph mx-1">of</span>
                    <span class="${totalClass} text-grey-60 font-paragraph"></span>`;
            },
        }}
        className="py-10 h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.question}>
            <QuestionCard property={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex-between  mx-auto p-2 gap-4 mt-4 border-t-2 border-grey-15 lg:p-4 lg:justify-end">
        <Link href="/" className='text-white bg-grey-10 rounded-lg border-2 border-grey-15 px-5 py-4 lg:hidden'>buttonName</Link>
        <div className="flex items-center h-15 gap-4">
          <button ref={prevRef} className="cursor-pointer h-full w-full">
            <Image src="/icons/prev.svg" width={40} height={40} alt="Previous" />
          </button>
          <div ref={paginationRef} className="font-paragraph flex-center w-fit min-w-20" />
          <button ref={nextRef} className="cursor-pointer h-full w-full">
            <Image src="/icons/next.svg" width={40} height={40} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;