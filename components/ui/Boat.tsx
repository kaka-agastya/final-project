import React from "react";
import Image from "next/image";

interface BoatProps {
  name: string;
  role: string;
  img: string;
}

const Boat: React.FC<BoatProps> = React.memo(({ name, role, img }) => {
  return (
    <div
      className="w-full max-w-8xl px-64 py-64 text-center rounded-3xl border-2 border-blue-70 mb-8 bg-dark-blue relative mt-32"
      aria-labelledby={`${name}-role`}
      aria-describedby={`${name}-description`}
    >
      {/* Gambar dengan ukuran lebih besar */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <Image
          className=""
          src={img}
          alt={`${name}'s avatar`}
          width={550}
          height={550}
          priority={true}
        />
      </div>

      {/* Konten kartu */}
      <div
        className="pt-32 bg-[#051227] p-32 rounded-2xl shadow-lg"
        id={`${name}-description`}
      >
        <div className="space-y-4">
          <h3
            className="text-white text-5xl font-bold"
            id={`${name}-role`}
          >
            {name}
          </h3>
          <p className="text-gray-400 text-2xl">{role}</p>
        </div>
      </div>
    </div>
  );
});

export default Boat;