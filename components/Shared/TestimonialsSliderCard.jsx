import Image from "next/image";

const TestimonialsSliderCard = ({property}) => {
    //const {stars, title, text, name, location, img} = property;
    return(<div className="mx-auto h-full w-[95vw] lg:px-2 lg:py-4">
        <div className="flex flex-col justify-between items-start min-h-[530px] h-full  p-4 rounded-xl border-2 border-grey-15 lg:px-4 py-7">
            <div className="flex-start">
                
            </div>
            <div>
                <h3 className="font-paragraph-md text-white">Exc</h3>
                <p className="font-paragraph text-white">Abc</p>
            </div>
            <div className="flex-start">
                <Image src="" height={55} width={55} alt={``}/>
                <div className="flex-col-start">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>)
}

export default TestimonialsSliderCard;