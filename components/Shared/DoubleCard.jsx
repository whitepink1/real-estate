import Image from "next/image";
import Link from "next/link";

const DoubleCard = ({property}) => {
    const {data, company, link, domain, category, text} = property;
    return(<div className="mx-auto h-[550px] w-[95vw] px-2 py-4 lg:h-[560px]">
        <div className="flex-col-start gap-y-7 w-full h-full p-6 doubleBorder">
            <div className="w-full flex-col-start gap-y-1 md:flex-between">
                <div>
                    <p className="font-paragraph text-grey-60">{data}</p>
                    <h4 className="font-cards-md">{company}</h4>
                </div>
                <Link className="w-full flex-center text-white py-4 px-5 bg-grey-10 border-1 border-grey-15 rounded-xl mt-4 cursor-pointer md:w-[250px]" href={link}>Visit Website</Link>
            </div>
            <div className="flex-start w-full gap-x-2 divide-x-2 divide-grey-15">
                <div className="w-fit pr-5">
                    <p className="font-double"><Image className="inline-block" src="/icons/domain.svg" height={18} width={18} alt="Domain"/> Domain</p>
                    <p className="font-paragraph text-white font-light">{domain}</p>
                </div>
                <div className="w-fit px-5">
                    <p className="font-double"><Image className="inline-block" src="/icons/category.svg" height={18} width={18} alt="Domain"/> Category</p>
                    <p className="font-paragraph text-white font-light">{category}</p>
                </div>
            </div>
            <div className="flex-col-start w-full h-full gap-y-1 p-5 border-2 border-grey-15 rounded-xl lg:flex-col-center lg:items-start lg:gap-y-4 lg:h-fit lg:p-10">
                <p className="font-paragraph text-grey-60">What They Said 🤗</p>
                <p className="font-paragraph text-white">{text}</p>
            </div>
        </div>
    </div>)
}

export default DoubleCard;