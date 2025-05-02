import Link from "next/link";

const PromotingText = () => {
    return(<div className="w-full h-fit mt-15 bg-[url(/planet_left.svg)] bg-size-[40%] bg-left-bottom bg-no-repeat border-t-2 border-grey-15">
        <div className="w-full h-fit bg-[url(/planet_right.svg)] bg-size-[40%] bg-right-bottom bg-no-repeat">
            <div className="flex-col-center-start w-[95%] mx-auto py-12 px-4 lg:flex-between">
                <div className="flex flex-col gap-y-1.5 lg:w-[60vw]">
                    <h2 className="font-h2">Start Your Real Estate Journey Today</h2>
                    <p className="font-paragraph text-grey-60">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Link href="/" className="flex-center font-paragraph text-white bg-purple-60 rounded-lg w-full h-12 mt-[30px] md:w-[250px] md:h-15">Explore Properties</Link>
            </div>
        </div>
    </div>)
}

export default PromotingText;