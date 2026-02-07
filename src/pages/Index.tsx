import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BestSellersSection from "@/components/home/BestSellersSection";
import GiftPackagesSection from "@/components/home/GiftPackagesSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import EventCateringSection from "@/components/home/EventCateringSection";
import FinalCTASection from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BestSellersSection />
      <GiftPackagesSection />
      <SocialProofSection />
      <EventCateringSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
