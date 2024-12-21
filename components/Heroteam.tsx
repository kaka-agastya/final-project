import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section 
      className="max-container padding-container flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="relative z-20 flex flex-1 flex-col items-center text-center xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-white">
          Our Team
        </h1>
        <p className="regular-16 mt-6 text-gray-100 max-w-xl pb-28">
        Barunastra ITS adalah tim inovasi teknologi maritim dari Institut Teknologi Sepuluh Nopember 
        yang telah membawa nama Indonesia ke kancah internasional. Kami terus berupaya menjadi yang terdepan 
        dalam pengembangan Autonomous Surface Vehicle (ASV).        </p>
      </div>
    </section>
  );
};

export default Hero;
