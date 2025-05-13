"use client"
import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";

const DetailPropertySlider = ({images}) => {
    const sliderRef = useRef(null);
    const mainSlider = useRef(null);
    const thumbSlider = useRef(null);


    const mainSettings = {
        asNavFor: thumbSlider.current,
        ref: mainSlider,
        slidesToShow: 1,
        arrows: false,
        fade: true
    };

    const thumbSettings = {
        asNavFor: mainSlider.current,
        ref: thumbSlider,
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: false,
        arrows: false,
    };

    return (
        <div className='w-[95vw] h-full mx-auto px-4 mt-7 lg:mt-10'>
            <div className='flex flex-col gap-y-5 w-full h-fit bg-grey-10 border-2 border-grey-15 px-5 rounded-xl'>
                <Slider {...mainSettings}>
                    {images.map((src, idx) => (
                    <div key={idx} className='relative h-[250px] mt-5'>
                        <Image className='object-cover rounded-xl' src={src} fill alt={`Main image ${idx}`} />
                    </div>
                    ))}
                </Slider>
                <div className='w-full h-fit bg-grey-08 border-2 border-grey-15 rounded-xl'>
                    <Slider {...thumbSettings} ref={sliderRef} className='p-1 mt-1.5'>
                        {images.map((src, idx) => (
                        <div key={idx} className='relative h-[50px] w-[200px] '>
                            <Image className='object-auto rounded-xl px-1' src={src} fill alt={`Thumb ${idx}`} />
                        </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex-center gap-3'>
                <button onClick={() => sliderRef.current?.slickPrev()}
                        className="rounded">
                    <Image src="/icons/prev.svg" width={44} height={44} alt="Prev button"/>
                </button>
                <button onClick={() => sliderRef.current?.slickNext()}
                        className="rounded">
                    <Image src="/icons/next.svg" width={44} height={44} alt="Next button"/>
                </button>
            </div>
            </div>

        </div>);
}

export default DetailPropertySlider;