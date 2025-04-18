import CallToAction from "@/components/callToAction";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ShowCase from "@/components/showcase";

export default function Landing() {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <CallToAction />
        <ShowCase />
      </div>
    </>
  );
}
