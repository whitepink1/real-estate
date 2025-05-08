import SwiperSliderV2 from "@/components/Shared/SwiperSliderV2";
import { PropertiesData } from "@/constants/constant";

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

  if (!properties) return <div>Not Found</div>;

  return (<div className="w-full">
      <SwiperSliderV2 data={properties}/>
    </div>
  );
}