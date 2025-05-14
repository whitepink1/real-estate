import NotFound from "@/app/not-found";
import PricingDetails from "@/components/PricingDetails";
import PropertyDescription from "@/components/PropertyDescription";
import PropertyDetailsForm from "@/components/PropertyDetailsForm";
import ComponentHeader from "@/components/Shared/ComponentHeader";
import PromotingText from "@/components/Shared/PromotingText";
import QuestionCard from "@/components/Shared/QuestionCard";
import Slidercard from "@/components/Shared/Slidercard";
import SwiperSliderV2 from "@/components/Shared/SwiperSliderV2";
import { PropertiesData, QuestionsData } from "@/constants/constant";

export function generateMetadata({ params }) {
  const properties = PropertiesData.find(p => p.id === params.id);

  if (!properties) return { title: "Product not found" };

  return {
    title: `${properties.name} / Real Estate`,
    description: properties.description,
    openGraph: {
      images: [properties.img],
    },
  };
}

export default function Page({ params }) {
  const properties = PropertiesData.find(p => p.id === params.id);

  if (!properties) return <NotFound />;

  return (<div className="w-full">
      <SwiperSliderV2 data={properties}/>
      <PropertyDescription data={properties}/>
      <div className="w-[95vw] gap-x-6 mx-auto lg:w-[92vw] xl:flex-between-start xl:mt-30">
        <ComponentHeader 
          name='Inquire About Seaside Serenity Villa'
          description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
          typeOfCard="half"
          addClass="xl:my-0 xl:w-[70%]"/>
        <PropertyDetailsForm addClass="" name={properties.name}/>
      </div>
      <ComponentHeader 
        name='Comprehensive Pricing Details'
        description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        typeOfCard="half"
        addClass=""/>
      <div className="w-[95vw] mb-7 p-4 mx-auto lg:w-[92vw] lg:mb-10">
        <div className="flex-col-start px-5 py-6 bg-grey-10 border-2 border-grey-15 rounded-xl lg:flex-start lg:gap-x-5">
          <h5 className="font-cards-sm mb-1.5 lg:pr-3 lg:border-r-2 border-grey-15">Note</h5>
          <p className="pt-1.5 font-paragraph text-grey-60 max-lg:border-t-2 border-grey-15">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
        </div>
      </div>
      <PricingDetails price={properties.price}/>
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
      <PromotingText />
    </div>
  );
}