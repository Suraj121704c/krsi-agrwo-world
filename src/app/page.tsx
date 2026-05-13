import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import FeaturesSection from "../components/FeaturesSection";
import ComparisonSection from "../components/ComparisonSection";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#fff", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <ComparisonSection />
      <FaqSection />
      <CommunitySection />
      <CtaSection />
      <Footer />
    </main>
  );
}
