import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Camp from "@/components/Camp";
import Hero from "@/components/Hero";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"; 

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <FadeInOnScroll>
      <Hero />
      </FadeInOnScroll>
      <FadeInOnScroll>
      <Camp />
      </FadeInOnScroll>
    </>
  );
}
