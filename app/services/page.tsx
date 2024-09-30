import FeaturedInsights from "@/components/FeaturedInsights";
import RecommendedReading from "@/components/RecommendedReading";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Section5 from "./_components/Section5";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section3 />
      <Section2 />

      <Section5 />

      <RecommendedReading />
      <FeaturedInsights />
    </>
  );
}
