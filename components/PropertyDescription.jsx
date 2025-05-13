import { KeyFeaturesData } from "@/constants/constant";
import Image from "next/image";

const PropertyDescription = ({data}) => {
    const {description, bedroom, bathroom} = data;
    return(<div className="flex flex-col gap-y-5 w-[95vw] h-fit mx-auto px-4 mt-5 lg:w-[92vw] lg:flex-between-start lg:gap-x-5">
        <div className="w-full h-fit  border-1 border-grey-15 rounded-xl">
            <div className="flex-col-start p-4 gap-y-2">
                <h5 className="font-cards-sm">Description</h5>
                <p className="font-paragraph text-grey-60 font-light">{description}</p>
            </div>
            <div className="w-full p-4 lg:mb-5">
                <div className="grid grid-cols-2 gap-y-4 border-t-2 border-grey-15 lg:grid-cols-3">
                    <div className="pr-4 mt-4 border-r-2 border-grey-15">
                        <p className="flex items-center font-paragraph text-grey-60">
                            <Image className="mr-1" src="/icons/bedroom_details.svg" height={20} width={20} alt="Bedrooms" />
                            Bedrooms
                        </p>
                        <p className="font-cards-sm">{bedroom < 10 ? '0' : ''}{bedroom}</p>
                    </div>
                    <div className="pl-4 mt-4 lg:border-r-2 border-grey-15">
                        <p className="flex items-center font-paragraph text-grey-60">
                            <Image className="mr-1" src="/icons/bathroom_details.svg" height={20} width={20} alt="Bathrooms" />
                            Bathrooms
                        </p>
                        <p className="font-cards-sm">{bathroom < 10 ? '0' : ''}{bathroom}</p>
                    </div>
                    <div className="max-lg:border-t-2 border-grey-15 pt-4 max-lg:col-span-2 lg:pl-4">
                        <p className="flex items-center font-paragraph text-grey-60">
                            <Image className="mr-1" src="/icons/area_details.svg" height={20} width={20} alt="Area" />
                            Area
                        </p>
                        <p className="font-cards-sm">2,500 Square Feet</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-fit p-5  border-1 border-grey-15 rounded-xl">
            <h5 className="font-cards-sm mb-5">Key Features and Amenities</h5>
            <div className="flex-col-start gap-y-4.5">
                {KeyFeaturesData.map((item, id) => (
                    <div key={id} className="flex p-3 border-l-2 border-purple-60"
                     style={{
                        background: "linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)",
                      }}>
                        <Image src="/icons/electro.svg" height={20} width={20} alt="Electricity" className="mr-2.5" />
                        <p className="font-paragraph text-grey-60">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}

export default PropertyDescription;