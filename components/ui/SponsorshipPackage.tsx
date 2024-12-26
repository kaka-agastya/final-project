import React from "react";

interface SponsorshipPackageProps {
  title: string;
  price: string;
  hours: string;
  additionalPrice: string;
  buttonColor: string;
}

const SponsorshipPackage: React.FC<SponsorshipPackageProps> = ({
  title,
  price,
  hours,
  additionalPrice,
  buttonColor,
}) => {
  return (
    <div className="bg-white rounded-t-xl rounded-b-xl mt-8 mb-8 p-8 shadow-lg">
    <div className="w-full max-w-xl p-4 text-left py-8 px-8 rounded-lg bg-[#021639]">
      {/* Title */}
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>

      {/* Price Section */}
      <div className="mb-6">
        <p className="text-white text-3xl font-extrabold">{price}</p>
        <p className="text-white text-sm mt-1">for {hours}</p>
      </div>

      {/* Additional Price */}
      <p className="text-white text-sm mb-4">Additional price: {additionalPrice}</p>

      {/* Button */}
      <button
        className={`px-4 py-2 rounded ${buttonColor} text-white hover:opacity-90 transition-opacity duration-300`}
      >
        Select Package
      </button>
    </div>
    </div>
  );
};

export default SponsorshipPackage;
