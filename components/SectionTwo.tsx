const SectionTwo = () => {
  return (
    <section id="about-us" className="bg-dark text-white py-16">
      {/* Rounded Background Section */}
      <div className="bg-white rounded-t-xl rounded-b-xl mt-8 p-8 shadow-lg">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-8 mb-8 text-center">
          Our Division
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          {/* Mechanics Division */}
          <div className="flex flex-col items-center border-8 border-[#021639] p-4 mb-8">
            <p className="mt-4 text-[#021639] text-lg sm:text-xl text-center max-w-[20rem]">
              Responsible for ensuring that the mechanical systems of our roboboat are operating at peak performance at all times.
            </p>
            <img src="/Mec (3).webp" alt="MEC" className="w-full max-w-[10rem] sm:max-w-[15rem]" width={500} height={500} />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#021639] mt-4">
              MECHANICS
            </h3>
          </div>
          {/* Non-Technical Division */}
          <div className="flex flex-col items-center border-4 border-[#021639] bg-[#021639] p-4 mb-8">
            <img
              src="/Untitled design.svg"
              alt="NTC"
              className="w-full max-w-[10rem] sm:max-w-[15rem]"
              width={500}
              height={500}
            />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4">
              NON-TECHNICAL
            </h3>
            <p className="mt-4 text-white text-lg sm:text-xl text-center max-w-[20rem]">
              Responsible for a wide range of non-technical functions that are critical to the success of the roboboat project.
            </p>
          </div>
          {/* Electronics & Programming Division */}
          <div className="flex flex-col items-center border-8 border-[#021639] p-4 mb-8">
            <p className="mt-4 text-[#021639] text-lg sm:text-xl text-center max-w-[20rem]">
              Responsible for the design, development, and implementation of the electronic systems and software that power our roboboat.
            </p>
            <img src="/Epr (2).webp" alt="EPR" className="w-full max-w-[10rem] sm:max-w-[15rem]" width={500} height={500} />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#021639] mt-4">
              ELECTRONICS & PROGRAMMING
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
