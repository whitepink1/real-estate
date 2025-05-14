import Image from "next/image";
import ComponentHeader from "./Shared/ComponentHeader";
import { SmartInvestmentsData } from "@/constants/constant";
import Link from "next/link";

const SmartInvestments = () => {
    return(<div className="flex-col-start w-[95vw] gap-x-6 mt-15 mx-auto lg:w-[92vw] 2xl:flex-between">
        <div className="flex-col-start 2xl:w-[55%] gap-y-7.5">
            <div className="flex-col-start px-4 lg:px-0">
                <Image src="/icons/sparcles.svg" width={70} height={30} alt="Sparcles"/>
                <h2 className="font-h2 pl-3 lg:pl-none lg:mb-2">Smart Investments, Informed Decisions</h2>
                <p className="font-paragraph text-grey-60 pl-3 lg:pl-none">
                    Building a real estate portfolio requires a strategic approach.
                    <span className="max-lg:hidden"> Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</span></p>
            </div>
            <div className="w-full p-4">
                <div className="flex-col-start gap-5 p-6 border-1 border-grey-15 rounded-xl bg-grey-10 bg-[url(/icons/abstract_bg.svg)] bg-auto lg:p-10">
                    <h4 className="font-cards-sm">Unlock Your Investment Potential</h4>
                    <p className="font-paragraph text-grey-60">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                    <Link href="/" className="flex-center w-full p-3.5 font-paragraph text-white bg-grey-08 border-1 border-grey-15 rounded-xl lg:w-fit">Learn More</Link>  
                </div>
            </div>
        </div>
        <div className="w-full p-4 ">
            <div className="grid grid-cols-1 w-full gap-y-2.5 p-2.5 bg-grey-10 rounded-xl lg:grid-cols-2 lg:gap-7.5">
                {SmartInvestmentsData.map((item, id) => (
                    <div key={id} className="flex-col-start gap-y-4 p-6 bg-grey-08 border-1 border-grey-15 rounded-xl lg:p-10">
                        <h4 className="flex-center font-cards-sm">
                            <Image  src={item.img} 
                                    height={50} 
                                    width={50} 
                                    alt={item.title}
                                    className="mr-2.5"/>
                                    {item.title}
                        </h4>
                        <p className="font-paragraph text-grey-60">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>)

}

export default SmartInvestments;