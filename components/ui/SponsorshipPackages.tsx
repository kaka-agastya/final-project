"use client";
import React, { useState, useEffect } from "react";
import SponsorshipPackage from "./SponsorshipPackage";

const packages = [
  { title: "Bronze Package", price: "$500", hours: "3 months", additionalPrice: "$50", buttonColor: "bg-gray-500" },
  { title: "Silver Package", price: "$1000", hours: "3 months", additionalPrice: "$100", buttonColor: "bg-gray-700" },
  { title: "Gold Package", price: "$2000", hours: "3 months", additionalPrice: "$200", buttonColor: "bg-yellow-500" },
  { title: "Platinum Package", price: "$5000", hours: "3 months", additionalPrice: "$500", buttonColor: "bg-blue-500" },
  { title: "Diamond Package", price: "$10000", hours: "3 months", additionalPrice: "$1000", buttonColor: "bg-purple-500" },
];

const SponsorshipPackages: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleCount(3);
      } else if (screenWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="relative w-full max-container padding-container gap-20">
      <div className="flex overflow-x-auto hide-scrollbar space-x-8 transition-transform duration-500 snap-x snap-mandatory">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`flex-shrink-0 snap-center ${
              visibleCount === 1 ? "w-full max-w-xs" : visibleCount === 2 ? "w-1/2 max-w-sm" : "w-1/3 max-w-md"
            }`}
          >
            <SponsorshipPackage
              title={pkg.title}
              price={pkg.price}
              hours={pkg.hours}
              additionalPrice={pkg.additionalPrice}
              buttonColor={pkg.buttonColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorshipPackages;