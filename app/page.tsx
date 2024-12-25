import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Camp from "@/components/Camp";
import Hero from "@/components/Hero";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"; 
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <FadeInOnScroll>
      <Hero />
      </FadeInOnScroll>
      <FadeInOnScroll>
      <SectionOne/>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <SectionTwo/>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <Camp />
      </FadeInOnScroll>
    </>
  );
}
