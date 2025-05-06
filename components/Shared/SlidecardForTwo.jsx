"use client";
import React from 'react';
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

const SlidercardForTwo = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const totalSlides = React.Children.count(children);
    const currentPageSm = Math.floor(currentSlide) + 1;
    const currentPageMd = Math.floor(currentSlide / 2) + 1;
    
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        afterChange: (index) => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    };
    return(<div className="w-[95vw] flex flex-col items-center mx-auto lg:w-[92vw]">
        <SlickSlider ref={sliderRef} {...settings} className="w-full m-auto">
            {children}
        </SlickSlider>
        
        <div className="w-full flex justify-between mx-auto mt-7 p-2">
            <p className='font-paragraph text-grey-60 max-lg:hidden'>{currentPageMd} of {totalSlides/2}</p>
            <div className='flex-between w-full gap-3 lg:flex-center lg:w-fit'>
                <button onClick={() => sliderRef.current?.slickPrev()}
                    className="rounded">
                    <Image src="/icons/prev.svg" width={44} height={44} alt="Prev button"/>
                </button>
                <p className='font-paragraph text-grey-60 lg:hidden'>{currentPageSm} of {totalSlides}</p>
                <button onClick={() => sliderRef.current?.slickNext()}
                    className="rounded">
                    <Image src="/icons/next.svg" width={44} height={44} alt="Next button"/>
                </button>
            </div>
        </div>
      </div>)
}

export default SlidercardForTwo;