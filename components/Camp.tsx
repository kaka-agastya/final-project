import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const CampSite = ({backgroundImage, title, subtitle} :
  CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl loading="eager"`}>
      <div className="flex h-full flex-col items-start justify-between p-6
      lg:px-20 lg:py-10  ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-[#e95e27] p-4">
            <Image 
            src="/boat.svg"
            alt="map"
            width={28}
            height={28}
            loading="eager"
            className="invert"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=" 2xl:max-container
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
        backgroundImage="bg-bg-img-6"
        title="Proteus Boat"
        subtitle="East Java, Surabaya"/>
        <CampSite
        backgroundImage="bg-bg-img-6"
        title="Proteus Boat 2"
        subtitle="East Java, Surabaya"/>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[#e95e27] p-8 lg:max-w-[500px] xl:max-w-[734px]
        xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl"> 
        <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white text-bold">
          Barunastra's Fun Fact !!!
        </h2>
        <p className="regular-14 xl:regular-16 mt-5 text-white">
        We are Barunastra ITS, a groundbreaking team redefining unmanned vessel technology since 2012. 
        Inspired by "Baruna," the Sea God, and "Astra," a weapon, we blend strength and innovation to 
        symbolizes unstoppable strength and ingenuity on global stages.
        </p>
        <Image
        src="/quote.svg"
        alt="camp-2"
        width={186}
        height={219}
        className="camp-quote" loading="lazy"/>
        </div>
      </div>
    </section>
  )
}

export default Camp
