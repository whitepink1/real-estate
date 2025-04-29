import Link from "next/link";
import Logo from "../Shared/Logo";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";

const Navigation = () => {
    return(<div className="flex-between w-full h-[68px] px-[25px] bg-grey-600 sm:px-[80px] sm:h-[78px] xl:h-[100px]">
        <Logo />
        <Navbar />
        <Link href="/contact" className="flex-center w-[110px] h-[50px] max-sm:hidden rounded-xl border-2 border-grey-500 text-white text-sm font-medium bg-grey-700 xl:w-[135px] xl:h-[60px] xl:text-lg">Contact Us</Link>
        <HamburgerMenu />
    </div>)
}

export default Navigation;