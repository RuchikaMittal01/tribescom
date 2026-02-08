import HeroSection from "@/components/HeroSection";
import ExecutionSection from "@/components/ExecutionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import BrandStatement from "@/components/BrandStatement";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ExecutionSection />
      <CapabilitiesSection />
      <ExpertiseSection />
      <BrandStatement />
      <CTASection />
    </main>
  );
};

export default Index;
