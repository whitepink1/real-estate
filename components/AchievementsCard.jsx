import { AchievementsData } from "@/constants/constant";

const AchievementsCard = () => {
    return(<div className="flex-col-center w-[92vw] my-10 mx-auto gap-y-5 lg:flex-between lg:gap-x-5">
        {AchievementsData.map((item) => (
            <div key={item.title} className="flex-col-center-start w-full h-[180px] p-8 gap-y-2 doubleBorder lg:h-[220px] xl:h-[250px] lg:w-[30%] xl:gap-y-7 xl:p-12">
                <h4 className="font-cards-sm">{item.title}</h4>
                <p className="font-paragraph text-grey-60">{item.text}</p>
            </div>
        ))}
    </div>)
}

export default AchievementsCard;