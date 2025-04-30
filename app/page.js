import HeroSection from "@/components/HeroSection";
import HeroSectionLinks from "@/components/Shared/HeroSectionLinks";
import { homepageHeroLink } from "@/constants/constant";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <HeroSectionLinks data={homepageHeroLink} />
    </div>
  );
}
