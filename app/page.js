import HeroSection from "@/components/HeroSection";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import HeroSectionLinks from "@/components/Shared/HeroSectionLinks";
import PropertiesSliderCard from "@/components/Shared/PropertiesSliderCard";
import Slidercard from "@/components/Shared/Slidercard";
import TestimonialsSliderCard from "@/components/Shared/TestimonialsSliderCard";
import { homepageHeroLink, PropertiesData } from "@/constants/constant";

export default function Home() {
  return (
  <div className="w-full">
      <HeroSection />
      <HeroSectionLinks data={homepageHeroLink} />
      <ComponentHeader 
        name='Featured Properties'
        description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
        linkName='View All Properties'
        link='/'/>
      <Slidercard borders={false}>
        {PropertiesData.map((item, id) => (
          <PropertiesSliderCard key={id} property={item} />
        ))}
      </Slidercard>
      <ComponentHeader 
        name='What Our Clients Say'
        description='Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
        linkName='View All Testimonials'
        link='/'/>
      <TestimonialsSliderCard />
  </div>
  );
}
