import Image from "next/image";

const HamburgerMenu = () => {
    return(<div className="h-[28px] w-[28px] sm:hidden">
        <button className=""><Image src="/icons/hamburger.png" width={28} height={28} alt="Menu button"/></button>
    </div>)
}

export default HamburgerMenu;