import HeaderPromotion from "./HeaderPromotion";
import Navigation from "./Navigation";

const Header = () => {
    return(<div className="flex-row-center w-full">
        <HeaderPromotion />
        <Navigation />
    </div>)
}

export default Header;