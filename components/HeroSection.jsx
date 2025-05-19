import Link from "next/link";
import HeroSectionPropInfo from "./Shared/HeroSectionPropInfo";
import { homepagePropInfo } from "@/constants/constant";
import Image from "next/image";

const HeroSection = ({title, text, children, addClass = '', sparcles = false}) => {
    return(<div className={`h-fit w-full bg-grey-08 max-lg:mt-10 lg:max-h-[820px] max-lg:flex-col-center ${addClass}`}>
        <div className={`flex-col-center ${sparcles ? 'lg:flex-center-reverse lg:my-8 w-[95vw] mx-auto lg:w-[92vw] lg:gap-10' : 'lg:flex-start-start-reverse lg:gap-[5vw]'}`}>
            {children}
            <div className={`${sparcles ? 'flex-col-start gap-y-7 px-4 lg:gap-y-10 xl:gap-y-15 lg:px-0' : 'flex-col-center gap-y-4'} w-[95vw] lg:w-[45vw] max-lg:mt-12 lg:my-auto lg:flex-col-start`}>
                <h2 className={`relative font-h2 lg:max-w-[760px]`}>
                    {sparcles && <Image className="absolute -left-2 -top-7 lg:-left-4 lg:-top-5" src="/icons/sparcles.svg" width={70} height={30} alt="Sparcles"/>}
                    {title}
                </h2>
                <p className="font-paragraph text-grey-60">{text}</p>
                {!sparcles && <div className="w-full h-fit py-6 flex-col-center gap-[16px] xl:py-12 lg:flex-start">
                    <Link href="/" className="w-full h-[50px] flex-center font-paragraph text-white rounded-lg border-2 border-grey-15 xl:h-16 lg:w-[150px] xl:w-[190px]">Lear More</Link>
                    <Link href="/properties" className="w-full h-[50px] flex-center font-paragraph text-white bg-purple-60 rounded-lg lg:w-[150px] xl:h-16 xl:w-[190px]">Browse Properties</Link>
                </div>}
                <div className={`${sparcles ? 'w-full' : 'w-[95vw]'} grid grid-rows-2 gap-3 lg:hidden mx-auto`}>
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