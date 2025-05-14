import Image from "next/image";
import Link from "next/link";

const UnlockProperty = ({data, lastTitle, lastText}) => {
    return(<div className="w-[95vw] mx-auto lg:w-[92vw]">
        <div className="grid grid-cols-1 w-full gap-y-5 p-4 lg:grid-cols-3 lg:gap-7.5">
            {data.map((item, id) => (
                <div key={id} className="flex-col-start gap-y-4 p-6 border-1 border-grey-15 rounded-xl">
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
            <div className="flex-col-start gap-5 p-6 border-1 border-grey-15 rounded-xl bg-grey-10 bg-[url(/icons/abstract_bg.svg)] bg-auto lg:col-span-2">
                <div className="flex-col-start w-full gap-5 lg:flex-between">
                    <h4 className="font-cards-sm">{lastTitle}</h4>
                    <Link href="/" className="flex-center w-full p-3.5 font-paragraph text-white bg-grey-08 border-1 border-grey-15 rounded-xl lg:w-fit">Learn More</Link>  
                </div>
                <p className="font-paragraph text-grey-60">{lastText}</p>
            </div>
        </div>
    </div>)
}

export default UnlockProperty;