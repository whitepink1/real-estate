import GetInTouch from "@/components/GetInTouch";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import HeroSectionLinks from "@/components/Shared/HeroSectionLinks";
import { contactUsHeroLink } from "@/constants/constant";

export const metadata = {
    title: "Contact Us",
  };

export default function Page() {
    return(<div className="w-full">
        <GetInTouch />
        <HeroSectionLinks data={contactUsHeroLink} />
        <ComponentHeader 
                name="Let's Connect"
                description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."
                typeOfCard="half"
                addClass="mt-15"/>
    </div>)
}