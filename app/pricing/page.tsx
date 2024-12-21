import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Heropricing from "@/components/Heropricing";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <FadeInOnScroll>
      <Heropricing />
      </FadeInOnScroll>
    </>
  );
}
