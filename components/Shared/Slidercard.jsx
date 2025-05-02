"use client";
import React from 'react';
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import useMedia from 'use-media';

const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

const Slidercard = ({children, borders, buttonName}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const totalSlides = React.Children.count(children);
    const currentPageSm = Math.floor(currentSlide) + 1;
    const currentPageMd = Math.floor(currentSlide / 2) + 1;
    const currentPage = Math.floor(currentSlide / 3) + 1;
    const totalPages = Math.ceil(totalSlides / 3);
    const isTablet = useMedia({ minWidth: 724, maxWidth: 1023 });
    const isMobile = useMedia({ maxWidth: 723 });
    
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: (index) => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                },
            },
            {
                breakpoint: 724,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
    ],
  };
    return(<div className="w-[98vw] flex flex-col items-center mx-auto lg:w-[92vw]">
        <SlickSlider ref={sliderRef} {...settings} className="w-full m-auto">
            {children}
        </SlickSlider>
  
        <div className="w-full flex justify-between mx-auto p-2 gap-4 mt-4 border-t-2 border-grey-15 lg:p-4">
            <p className='font-paragraph text-grey-60 max-lg:hidden'>{currentPage} of {totalPages}</p>
            <Link href="/" className='text-white bg-grey-10 rounded-lg border-2 border-grey-15 px-5 py-4 lg:hidden'>{buttonName}</Link>
            <div className='flex-center gap-3'>
                <button onClick={() => sliderRef.current?.slickPrev()}
                    className="rounded">
                    <Image src="/icons/prev.svg" width={44} height={44} alt="Prev button"/>
                </button>
                {isTablet && (<p className="font-paragraph text-grey-60">{currentPageMd} of {Math.ceil(totalSlides / 2)}</p>)}
                {isMobile && (<p className="font-paragraph text-grey-60">{currentPageSm} of {totalSlides}</p>)}
                <button onClick={() => sliderRef.current?.slickNext()}
                    className="rounded">
                    <Image src="/icons/next.svg" width={44} height={44} alt="Next button"/>
                </button>
            </div>
        </div>
      </div>)
}

export default Slidercard;