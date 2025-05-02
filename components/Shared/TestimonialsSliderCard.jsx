import Image from "next/image";

const TestimonialsSliderCard = ({property}) => {
    const {stars, title, text, name, location, img} = property;
    return(<div className="mx-auto h-[350px] w-[95vw] lg:px-2 lg:py-4">
        <div className="flex-col-center-start gap-y-10 max-lg:w-[95%] max-lg:mx-auto h-full p-7 rounded-xl border-2 border-grey-15 lg:p-10">
            <div className="flex-start">
                {Array(stars).fill('star').map((item, id) => (
                    <Image key={item + id} src="/icons/star.svg" height={30} width={30} alt="Review star"/>
                ))}
            </div>
            <div>
                <h3 className="font-cards-sm text-white">{title}</h3>
                <p className="font-paragraph text-white font-light">{text}</p>
            </div>
            <div className="flex-start gap-4">
                <Image className="rounded-full" src={img} height={55} width={55} alt={``}/>
                <div className="flex-col-start">
                    <p className="font-paragraph-md text-white">{name}</p>
                    <p className="font-paragraph text-grey-60">{location}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default TestimonialsSliderCard;