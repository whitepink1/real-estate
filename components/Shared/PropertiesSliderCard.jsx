import Image from "next/image";
import Link from "next/link";
import PropShortTags from "../PropShortTags";

const PropertiesSliderCard = ({property, typeOfProperty = 'regular'}) => {
    const {id, name, description, img, bedroom = 0, bathroom = 0, type = "Villa", price} = property;
    return(<div className="mx-auto h-full w-[95vw] lg:px-2 lg:py-4">
        <div className="flex flex-col justify-between items-start mx-auto max-lg:w-[95%] min-h-[530px] h-full p-4 rounded-xl border-2 border-grey-15 lg:px-4 py-7">
            <div className="relative mx-auto w-full aspect-video">
                <Image className="rounded-xl" src={img} fill alt={name}/>
            </div>
            <h3 className="font-cards-sm mt-5 mb-2 lg:mt-7 lg:mb-1.5">{name}</h3>
            <p className="font-paragraph text-grey-50">{description}
                <Link href="/" className="text-white underline underline-offset-1 ml-1">Read More</Link>
            </p>
            <div className="grid grid-cols-2 gap-3 my-5 lg:flex-start lg:flex-wrap lg:my-7">
                <PropShortTags url="/icons/bedroom.svg" text="Bedroom" quantity={bedroom} />
                <PropShortTags url="/icons/bathroom.svg" text="Bathroom" quantity={bathroom} />
                <PropShortTags url="/icons/villa.svg" text={type} />
            </div>
            <div className="flex-between h-12 w-full lg:h-15">
                <div>
                    <p className="font-paragraph text-grey-50">Price</p>
                    <p className="font-paragraph-md text-white">$ {price}</p>
                </div>
                <Link href={`/properties/${id}`} className="flex-center h-full w-[55vw] sm:w-[225px] font-paragraph text-white bg-purple-60 rounded-xl lg:w-[15vw] lg:text-center">View Property Details</Link>
            </div>
        </div>
    </div>)
}

export default PropertiesSliderCard;