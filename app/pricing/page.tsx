import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Heropricing from "@/components/Heropricing";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import SponsorshipPackages from "@/components/ui/SponsorshipPackages";
import SectionOneSponsor from "@/components/SectionOneSponsor";
import { Tablee } from "@/components/Tablee";
import SectionTwoSponsor from "@/components/SectionTwoSponsor";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <Heropricing />
      <FadeInOnScroll>
        <SectionOneSponsor/>
        <SponsorshipPackages />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SectionTwoSponsor />
        <Tablee />
      </FadeInOnScroll>
    </>
  );
}
