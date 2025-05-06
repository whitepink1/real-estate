import Image from "next/image";

const SearchProperty = ({lg = false}) => {
    return(<div className={`doubleBorder mx-auto
        ${lg ? 'max-lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80vw]' : 'w-full lg:hidden max-w-3xl relative'}`}>
        <input type="text"
            placeholder="Search For A Property"
            className="w-full h-[70px] pl-5 pr-14 rounded-xl bg-grey-08 text-white placeholder:text-grey-40 focus:outline-none"
        />
        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 hover:scale-105 transition-transform">
            <Image src="/icons/search_property.svg" className="aspect-square" width={55} height={55} alt="Send" />
        </button>
    </div>)
}

export default SearchProperty;