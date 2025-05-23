"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderPromotion = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const isClosed = localStorage.getItem('promoClosed');
        if (!isClosed) {
        setVisible(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem('promoClosed', 'true');
        setVisible(false);
    };

    if (!visible) return null;
    return(<div className="flex-center pt-[40px] pb-[20px] w-full gap-[20px] bg-[url(/promotion_background_sm.png)] sm:bg-[url(/promotion_background.png)] bg-cover bg-center sm:flex-between sm:py-[14px] sm:px-[30px] xl:py-[18px]">
        <span className="max-sm:hidden w-[26px]"></span>
        <p className="text-white font-medium text-xs sm:text-sm xl:text-lg">
            ✨ Discover Your Dream Property with Estatein
            <Link href="/" className="ml-2 underline underline-offset-1">Learn More</Link>
        </p>
        <button onClick={handleClose} className="w-[26px] h-[26px] flex-center bg-white/10 rounded-full cursor-pointer"><Image src="/icons/heroicons-mini/x-mark.png" width={18} height={18} alt="X icon" /></button>
    </div>)
}

export default HeaderPromotion;