import { OurValuesData } from "@/constants/constant";
import Image from "next/image";

const ValuesCard = () => {
    return(<div className="flex-col-start relative w-full gap-y-5 p-6 shadow-[0_0_0px_4px_rgba(49,49,49,0.4)] border-2 border-grey-15 rounded-xl lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-6 lg:w-[60vw] lg:p-12">
        {OurValuesData.map((item, index) => (
            <div key={item.title} className={`flex-col-start gap-y-3 pb-5 max-lg:border-b-1 border-grey-15 max-lg:nth-[4]:border-b-0 lg:p-3 lg:odd:border-r-2`}>
                <div className="flex-start gap-x-2">
                    <Image src={item.img} height={52} width={52} alt={item.title}/>
                    <h4 className="font-cards-sm">{item.title}</h4>
                </div>
                <p className="font-paragraph text-grey-60">{item.text}</p>
            </div>
        ))}
        <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-[1px] bg-grey-15 mx-12" />
        {/* <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-grey-15" /> */}
    </div>)
}

export default ValuesCard;