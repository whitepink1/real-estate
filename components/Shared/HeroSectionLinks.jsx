import Image from "next/image";
import Link from "next/link";

const HeroSectionLinks = ({id = "", data, addClass}) => {
    return(<div id={id} className={`w-[95vw] grid mx-auto grid-cols-2 gap-5 px-2 py-5 rounded-xl border-2 border-grey-15 lg:flex-around lg:w-full lg:rounded-none lg:gap-0 ${addClass}`}>
        {data.map((item) => (
            <div key={item.text} className="flex-col-center relative gap-5 py-10 bg-grey-10 rounded-xl border-2 border-grey-15 lg:py-5 lg:gap-4 lg:w-[23vw]">
                <Link href={String(data.link)} className="absolute h-6 w-6 top-7 right-5">
                    <Image src="/icons/heroicons-solid/arrow-up-right.png" width={24} height={24} loading="lazy" alt={`Link to ${item.text}`}/>
                </Link>
                <div className="relative aspect-square w-12 h-fit lg:w-15 xl:w-20">
                    <Image src={item.icon} fill loading="lazy" alt={item.text}/>
                </div>
                <p className="font-paragraph text-center text-white px-5 lg:px-0">{item.text}</p>
            </div>    
        ))}
    </div>)
}

export default HeroSectionLinks;