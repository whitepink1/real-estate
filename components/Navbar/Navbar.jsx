"use client";
import { navbarArray } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return(<div className="flex-center gap-x-[10px] lg:gap-x-[25px] max-sm:hidden">
        {navbarArray.map((item) => (
            <Link key={item.name} href={item.url} 
            className={`w-[75px] h-[45px] flex-center text-white text-sm font-medium xl:w-[96px] xl:h-[55px] ${item.url === pathname ? 'bg-grey-08 border-2 border-grey-15 rounded-xl' : ''}`}
            >{item.name}</Link>
        ))}
    </div>)
}

export default Navbar;