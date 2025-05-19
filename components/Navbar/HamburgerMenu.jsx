'use client';
import { HamburgerMenuData } from "@/constants/constant";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HamburgerMenu = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
     useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = '';
        }
    }, [isOpen]);
    
    return(<div className='relative sm:hidden'>
        <button onClick={() => setIsOpen((prev) => !prev)}
                className={`z-50 transition-all duration-400 ease-in-out ${!isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-90'}`}> 
            <Image src="/icons/hamburger.png" width={28} height={28} alt="Menu button"/>
            </button>     
        <div
            onClick={() => setIsOpen(false)}
            className={`z-49 fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        />    
        <div className={`z-50 fixed w-[250px] bg-grey-08 rounded-tl-xl rounded-bl-xl
            right-0
            transition-all duration-500 ease-in-out ${isOpen ? 
            'translate-x-0' : 'translate-x-[350px]'}`}>
            <button onClick={() => setIsOpen((prev) => !prev)}
                    className="w-full flex justify-end p-1 pr-2">
                <Image src="/icons/heroicons-solid/x-mark.png" width={28} height={28} alt="Menu button"/> 
            </button>
            <div className="flex-col-start">
                {HamburgerMenuData.map((item) => (
                    <a key={item.name} href={item.url} className={`block w-full p-4 font-paragraph ${pathname != item.url ? 'text-white' : 'text-purple-90 bg-grey-15'}`}>{item.name}</a>
                ))}
            </div>
        </div>
    </div>)
}

export default HamburgerMenu;