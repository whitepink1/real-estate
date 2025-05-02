import Image from "next/image";

const { default: Link } = require("next/link")

const ComponentHeader = ({name, description, linkName, link, addClass = ''}) => {
    return(<div className={`flex-col w-[98vw] h-fit mt-10 mb-6 mx-auto ${addClass} lg:w-[92vw] lg:flex-between lg:mt-15 lg:mb-11`}>
        <div className="flex-col-start w-full px-4 lg:px-0">
            <Image src="/icons/sparcles.svg" width={70} height={30} alt="Sparcles"/>
            <h2 className="font-h2 pl-3 lg:pl-none lg:mb-2">{name}</h2>
            <p className="font-paragraph text-grey-60 pl-3 lg:pl-none">{description}</p>
        </div>
        <Link href={String(link)} className="flex-center font-paragraph-md bg-grey-10 text-white mt-auto min-w-[250px] rounded-lg p-4 ml-[15vw] mr-3 border-1 border-grey-15 max-lg:hidden">{linkName}</Link>
    </div>)
}

export default ComponentHeader;