import { footerNavigationArray } from "@/constants/constant";
import Logo from "../Shared/Logo";
import SubscribeNews from "./SubscribeNews";
import FooterNavBar from "./FooterNavBar";
import SocialMediaLink from "../Shared/SocialMediaLink";
import Link from "next/link";

const Footer = () => {
    return(<div className="flex-col-center w-full pt-[50px] border-t-1 border-grey-50/50">
        <div className="flex-col-center gap-x-[3vw] xl:flex-between-start">
            <div className="flex-col-start gap-y-[20px] xl:w-[32vw]">
                <Logo />
                <SubscribeNews />
            </div>
            <div className="relative columns-2 gap-6 mt-[50px] min-lg:hidden">
                <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-grey-15 -translate-x-1/2 pointer-events-none " />
                <FooterNavBar title="Home" data={footerNavigationArray.Home} />
                <FooterNavBar title="Properties" data={footerNavigationArray.Properties} />
                <FooterNavBar title="Contact Us" data={footerNavigationArray.Contact} />
                <FooterNavBar title="About Us" data={footerNavigationArray.About} />
                <FooterNavBar title="Services" data={footerNavigationArray.Services} />
            </div>
            <div className="flex-between-start mt-4 gap-4 max-lg:hidden xl:gap-none xl:w-[55vw]">
                <FooterNavBar title="Home" data={footerNavigationArray.Home} />
                <FooterNavBar title="About Us" data={footerNavigationArray.About} />
                <FooterNavBar title="Properties" data={footerNavigationArray.Properties} />
                <FooterNavBar title="Services" data={footerNavigationArray.Services} />
                <FooterNavBar title="Contact Us" data={footerNavigationArray.Contact} />
            </div>
        </div>
        <div className="flex-col-center w-full gap-y-2.5 bg-grey-10 mt-10 lg:flex-between-reverse lg:h-[80px] lg:px-11 xl:h-[104px]">
            <div className="flex-center gap-x-2.5 mt-4 lg:mt-0 lg:gap-4">
                <SocialMediaLink url="/icons/facebook.png" name="Facebook"/>
                <SocialMediaLink url="/icons/linkedn.png" name="Linkedn" />
                <SocialMediaLink url="/icons/x.png" name="X socialmedia" />
                <SocialMediaLink url="/icons/youtube.png" name="Youtube" />
            </div>
            <div className="flex-col-center mb-4 gap-2.5 lg:flex-center lg:gap-6 lg:mb-0">
                <p className="font-paragraph text-white font-light tracking-wider">@2025 Estatein. All Rights Reserved.</p>
                <Link href="https://www.figma.com/@praha" className="font-paragraph text-white font-light tracking-wider underline underline-offset-2">Designed by <span>Praha | Produce UI</span></Link>
                <p className="font-paragraph text-white font-light tracking-wider lg:hidden">Terms & Conditions</p>
            </div>
        </div>
    </div>)
}

export default Footer;