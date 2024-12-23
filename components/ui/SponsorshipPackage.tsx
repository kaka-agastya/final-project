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
    <div className="w-full max-w-xs p-6 text-left py-8 px-8 rounded-lg bg-white shadow-md hover:shadow-2xl hover:shadow-blue-500 transition-shadow duration-300">
      {/* Title */}
      <h3 className="text-gray-800 text-xl font-bold mb-4">{title}</h3>

      {/* Price Section */}
      <div className="mb-6">
        <p className="text-gray-800 text-3xl font-extrabold">{price}</p>
        <p className="text-gray-500 text-sm mt-1">for {hours}</p>
      </div>

      {/* Additional Price */}
      <p className="text-gray-500 text-sm mb-4">Additional price: {additionalPrice}</p>

      {/* Button */}
      <button
        className={`px-4 py-2 rounded ${buttonColor} text-white hover:opacity-90 transition-opacity duration-300`}
      >
        Select Package
      </button>
    </div>
  );
};

export default SponsorshipPackage;
