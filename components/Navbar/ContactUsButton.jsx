"use client";

import Link from "next/link";

const { usePathname } = require("next/navigation")

const ConcactUsButton = () => {
    const pathname = usePathname();
    return(<Link href="/contact" className={`flex-center w-[110px] h-[50px] max-sm:hidden rounded-xl border-2 border-grey-15 text-white text-sm font-medium bg-grey-08 xl:w-[135px] xl:h-[60px] xl:text-lg ${pathname === '/contact' ? 'bg-purple-60 text-white border-none' : ''}`}>Contact Us</Link>)
}

export default ConcactUsButton;