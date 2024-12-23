import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Heropricing from "@/components/Heropricing";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import SponsorshipPackages from "@/components/ui/SponsorshipPackages";
import Camp from "@/components/Camp";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <FadeInOnScroll>
      <Heropricing />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SponsorshipPackages />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Camp/>
      </FadeInOnScroll>
    </>
  );
}
