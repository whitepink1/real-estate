import ServicesHead from "@/components/ServicesHead";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import HeroSectionLinks from "@/components/Shared/HeroSectionLinks";
import PromotingText from "@/components/Shared/PromotingText";
import UnlockProperty from "@/components/UnlockProperty";
import { homepageHeroLink, PropertyManagment, UnlockPropertyValue } from "@/constants/constant";

export const metadata = {
    title: "Services",
  };

export default function Page() {
    return(<div className="w-full">
        <ServicesHead />
        <HeroSectionLinks data={homepageHeroLink} />
        <ComponentHeader 
                name='Unlock Property Value'
                description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is."
                typeOfCard="half"
                addClass=""/>
        <UnlockProperty data={UnlockPropertyValue} lastTitle="Unlock the Value of Your Property Today" lastText="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."/>
        <ComponentHeader 
                name='Effortless Property Management'
                description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you."
                typeOfCard="half"
                addClass=""/>
        <UnlockProperty data={PropertyManagment} lastTitle="Experience Effortless Property Management" lastText="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."/>
        ABC
        <PromotingText />
    </div>)
}