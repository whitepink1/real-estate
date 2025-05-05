import AchievementsCard from "@/components/AchievementsCard";
import HeroSection from "@/components/HeroSection";
import HomepageBuildingPart from "@/components/HomepageBuildingPart";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import ValuesCard from "@/components/ValuesCard";

export const metadata = {
    title: "About Us",
  };

export default function Page() {
    return (<div className="w-full">
        <HeroSection 
        title="Our Journey"
        text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
        addClass="lg:my-[70px]"
        sparcles={true}
        >
            <HomepageBuildingPart typeOfPage="about"/>
        </HeroSection>
        <div className="w-[92vw] mx-auto mb-15 flex-col-center gap-5 lg:flex-between lg:gap-none">
            <ComponentHeader 
                name='Our Values'
                description='Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'
                typeOfCard="half"
                addClass="lg:max-w-[30vw] lg:m-0"/>
            <ValuesCard />
        </div>
        <ComponentHeader 
                name='Our Achievements'
                description='Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'
                typeOfCard="half"
                addClass=""/>
        <AchievementsCard />
    </div>)
}