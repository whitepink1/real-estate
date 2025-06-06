import Logo from "../Shared/Logo";
import ConcactUsButton from "./ContactUsButton";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";

const Navigation = () => {
    return(<div className="flex-between w-full h-[68px] px-[25px] border-y-2 border-grey-15 bg-grey-10 lg:px-[60px] sm:h-[78px] xl:h-[100px]">
        <Logo />
        <Navbar />
        <ConcactUsButton />
        <HamburgerMenu />
    </div>)
}

export default Navigation;