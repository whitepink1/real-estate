import HeroSection from "@/components/HeroSection";
import HomepageBuildingPart from "@/components/HomepageBuildingPart";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import HeroSectionLinks from "@/components/Shared/HeroSectionLinks";
import PromotingText from "@/components/Shared/PromotingText";
import PropertiesSliderCard from "@/components/Shared/PropertiesSliderCard";
import QuestionCard from "@/components/Shared/QuestionCard";
import Slidercard from "@/components/Shared/Slidercard";
import SwiperSlider from "@/components/Shared/SwiperSlider";
import TestimonialsSliderCard from "@/components/Shared/TestimonialsSliderCard";
import { homepageHeroLink, PropertiesData, QuestionsData, TestimonialsData } from "@/constants/constant";
//import { SwiperSlide } from "swiper/react";

export default function Home() {
  return (
  <div className="w-full">
      <HeroSection 
        title="Discover Your Dream Property with Estatein"
        text="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
        addClass=""
      >
        <HomepageBuildingPart typeOfPage="home"/>
      </HeroSection>
      <HeroSectionLinks data={homepageHeroLink} />
      <ComponentHeader 
        name='Featured Properties'
        description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
        linkName='View All Properties'
        link='/'/>
      <Slidercard borders={false} buttonName="View All Properties">
        {PropertiesData.map((item, id) => (
          <PropertiesSliderCard key={id} property={item} />
        ))}
      </Slidercard>
      <ComponentHeader 
        name='What Our Clients Say'
        description='Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
        linkName='View All Testimonials'
        link='/'/>
      <Slidercard borders={false} buttonName="View All Testimonials">
        {TestimonialsData.map((item, id) => (
          <TestimonialsSliderCard key={item.name + id} property={item}/>
        ))}
      </Slidercard>
      <ComponentHeader 
        name='Frequently Asked Questions'
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        linkName="View All FAQ’s"
        link='/'/>
      <Slidercard borders={false} buttonName="View All FAQ's">
        {QuestionsData.map((item) => (
          <QuestionCard key={item.question} property={item} />
        ))}
      </Slidercard>
      {/* <SwiperSlider data={QuestionsData}/> */}
      <PromotingText />
  </div>
  );
}
