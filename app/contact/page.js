import GetInTouch from "@/components/GetInTouch";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import HeroSectionLinks from "@/components/Shared/HeroSectionLinks";
import PromotingText from "@/components/Shared/PromotingText";
import { contactUsHeroLink } from "@/constants/constant";
import ContactUsFormClient from '@/components/ContactUsFormClient';
import OfficeLocationClient from '@/components/OfficeLocationClient';
import Gallery from "@/components/Gallery";

export const metadata = {
    title: "Contact Us",
  };

export default function Page() {
    return(<div className="w-full">
        <GetInTouch />
        <HeroSectionLinks data={contactUsHeroLink} addClass="max-lg:mt-10"/>
        <ComponentHeader 
                name="Let's Connect"
                description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."
                typeOfCard="half"
                addClass="mt-15"/>
        <ContactUsFormClient />
        <ComponentHeader 
                id="ouroffices"
                name="Discover Our Office Locations"
                description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you."
                typeOfCard="half"
                addClass=""/>
        <OfficeLocationClient />
        <Gallery />
        <PromotingText />
    </div>)
}