import { NavExperienceData } from "@/constants/constant";

const NavExperienceCard = () => {
    return(<div className="flex-col-center w-[92vw] mx-auto my-10 gap-y-7 lg:grid lg:grid-cols-3 lg:gap-x-7">
        {NavExperienceData.map((item, index) => (
            <div key={item.step} className={`flex-col-start w-full lg:h-[320px] lg:flex-col-start-start ${index > 2 && 'max-lg:hidden'}`}>
                <h5 className="font-paragraph-md text-white font-light p-4 border-l-1 border-purple-60 purple-">{item.step}</h5>
                <div className="flex-col-center-start gap-y-3 p-7 stepCard lg:h-full"
                    style={{
                        background: "linear-gradient(135deg, #703bf74c 0%, rgba(112, 59, 247, 0) 20%)",
                      }}>
                    <h4 className="font-cards-sm">{item.title}</h4>
                    <p className="font-paragraph text-grey-60">{item.text}</p>
                </div>
            </div>
        ))}
    </div>)
}

export default NavExperienceCard;