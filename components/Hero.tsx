import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section 
      className="max-container padding-container flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="relative z-20 flex flex-1 flex-col items-center text-center xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-white">
          Barunastra ITS
        </h1>
        <h3 
          className="bold-20 lg:bold-50 bg-[#e95e27] px-4 py-2 max-w-max rounded mt-4"
        >
          Sponsorship Proposal 2024/2025
        </h3>
        <p className="regular-16 mt-6 text-gray-100 max-w-xl pb-6">
        Barunastra ITS is a maritime technology innovation team from Institut Teknologi Sepuluh Nopember 
        that has brought Indonesia's name to the international arena. We continue to strive to be at the forefront 
        of Autonomous Surface Vehicle (ASV) development </p>
      </div>
    </section>
  );
};

export default Hero;
