import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Heroboat from "@/components/Heroboat";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <FadeInOnScroll>
      <Heroboat />
      </FadeInOnScroll>
    </>
  );
}
