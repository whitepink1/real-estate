import Image from "next/image";

const PropShortTags = ({text, url, quantity}) => {
    return(<p className="flex-start max-w-[280px] gap-2 font-paragraph py-1 px-2 text-white bg-grey-10 rounded-xl border-1 border-grey-15">
                <Image className="object-contain" src={String(url)} width={24} height={24} alt={text}/>
                {quantity ? `${quantity} - ` : ''} {text}
            </p>)
}

export default PropShortTags;