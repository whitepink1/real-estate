import FindProperty from "@/components/FindProperty";
import PropertiesForm from "@/components/PropertiesForm";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import PromotingText from "@/components/Shared/PromotingText";
import PropertiesSliderCard from "@/components/Shared/PropertiesSliderCard";
import Slidercard from "@/components/Shared/Slidercard";
import { PropertiesData } from "@/constants/constant";

export const metadata = {
    title: "About Us",
  };

export default function Page() {
    return (<div className="w-full">
        <FindProperty />
        <ComponentHeader 
                name='Discover a World of Possibilities'
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                typeOfCard="half"
                addClass=""/>
        <Slidercard borders={false} buttonName="View All Properties">
            {PropertiesData.map((item, id) => (
            <PropertiesSliderCard key={id} property={item} />
            ))}
        </Slidercard>
        <ComponentHeader 
                name="Let's Make it Happen"
                description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
                typeOfCard="half"
                addClass=""/>
        <PropertiesForm />
        <PromotingText />
    </div>)
}