import { PricingInfoData } from "@/constants/constant";
import Link from "next/link";

const PricingDetails = ({price}) => {
    return(<div className="w-[95vw] p-4 mx-auto lg:w-[92vw]">
        <div className="flex-col-start w-full xl:flex-between-start">
            <div className="w-full mb-5 xl:w-[30%]">
                <p className="font-paragraph text-grey-60">Listing Price</p>
                <p className="font-h3 ">$ {price}</p>
            </div>
            <div className="w-full grid grid-cols-1 gap-y-5">
                {PricingInfoData.map((item) => {
                    const abc = item.options;
                    console.log('Length:', abc.length)
                    return(
                    <div key={item.title} className="w-full h-fit p-4 border-2 border-grey-15 rounded-xl">
                        <div className="flex-between mb-5">
                            <h4 className="font-cards-sm">{item.title}</h4>
                            <Link 
                                href={item.link}
                                className="flex-center px-5 py-3.5 font-paragraph text-white border-2 border-grey-15 rounded-xl"
                                >Lear More</Link>
                        </div>
                        <div className={`flex-col-start w-full ${abc.length > 2 ? 'lg:grid lg:grid-cols-2' : ''}`}>
                            {item.options.map((info, id) => (
                                <div key={info.name} className={`border-t-2 w-full border-grey-15 ${abc.length % 2 && abc.length > 2 ? 'lg:last:col-span-2' : ''}  ${abc.length > 2 ? '' : 'w-full'}`}>
                                    <div className={`flex-col-start w-full gap-y-2.5 py-5 border-grey-15 lg:px-3 lg:py-0 lg:my-10 ${id % 2 && abc.length > 2 ? 'lg:border-l-2': ''}`}>
                                        <p className="font-paragraph text-grey-60">{info.name}</p>
                                        <div className={`flex-between w-full lg:flex-start lg:gap-x-[5%]`}>
                                            <p className="w-fit font-cards-sm pr-5">{info.text}</p>
                                            {info.addInfo && <p className={`w-fit px-3 py-1.5 font-paragraph text-grey-60 border-2 border-grey-15 ${info.notRounded ? 'rounded-lg' : 'rounded-full'} lg:rounded-full`}>{info.addInfo}</p>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}

export default PricingDetails;
