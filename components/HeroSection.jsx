import Link from "next/link";
import HeroSectionPropInfo from "./Shared/HeroSectionPropInfo";
import { homepagePropInfo } from "@/constants/constant";

const HeroSection = () => {
    return(<div className="h-fit w-full bg-grey-08 max-lg:mt-10 lg:max-h-[820px] max-lg:flex-col-center">
        <div className="flex-col-center lg:flex-start-start-reverse lg:gap-[5vw]">
            <div className="relative h-fit w-full lg:w-[45vw] lg:max-w-[920px]">
                <div className="aspect-5/4 w-[95dvw] bg-[url(/Images/purple_building.svg)] rounded-xl bg-cover bg-top lg:w-[45vw] lg:aspect-square lg:rounded-none lg:max-w-[920px] lg:max-h-[815px]" />
                <div className="absolute aspect-square h-fit w-[117px] -bottom-[40px] bg-[url(/Images/building_badge.png)] bg-cover bg-center lg:w-[129px] lg:-left-[65px] lg:top-15 xl:w-[175px]" />
            </div>
            <div className="flex-col-center gap-y-4 w-[95vw] lg:w-[45vw] max-lg:mt-12 lg:my-auto lg:flex-col-start">
                <h2 className="font-h2 lg:max-w-[760px]">Discover Your Dream Property with Estatein</h2>
                <p className="font-paragraph text-grey-60">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                <div className="w-full h-fit py-6 flex-col-center gap-[16px] xl:py-12 lg:flex-start">
                    <Link href="/" className="w-full h-[50px] flex-center font-paragraph text-white rounded-lg border-2 border-grey-15 xl:h-16 lg:w-[150px] xl:w-[190px]">Lear More</Link>
                    <Link href="/" className="w-full h-[50px] flex-center font-paragraph text-white bg-purple-60 rounded-lg lg:w-[150px] xl:h-16 xl:w-[190px]">Browse Properties</Link>
                </div>
                <div className="w-[95vw] grid grid-rows-2 gap-3 lg:hidden">
                    <div className="grid grid-cols-2 gap-3">
                        <HeroSectionPropInfo num="200+" text="Happy Customers"/>
                        <HeroSectionPropInfo num="10k+" text="Properties For Clients"/>
                    </div>
                    <HeroSectionPropInfo num="16+" text="Years of Experience"/>
                </div>
                <div className="flex-center w-[45vw] gap-5 max-lg:hidden">
                    {homepagePropInfo.map((item) => (
                        <HeroSectionPropInfo key={item.num} num={item.num} text={item.text}/>
                    ))}
                </div>
            </div>
        </div>
    </div>)
}

export default HeroSection;