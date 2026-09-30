import { CommunityTestimonials } from "@/components/landingPage/community/CommunityTestimonial";
import HeroSection from "@/components/landingPage/hero/HeroSection";

export default function Home() {
  return (
    <>
      <div
        className="bg-primary"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
          backgroundPosition: "0 -118px",
          backgroundSize: "120px 120px",
        }}
      >
        <HeroSection />
      </div>
      <CommunityTestimonials />
    </>
  );
}
