import React from "react";
import Image from "next/image";

interface BoatProps {
  name: string;
  role: string;
  img: string;
  instagram?: string; // Instagram URL spesifik untuk setiap profil
  linkedin?: string; // LinkedIn URL spesifik untuk setiap profil
}

const Boat: React.FC<BoatProps> = React.memo(({ name, role, img }) => {
  return (
    <div
      className="w-full max-w-xs px-6 py-6 text-center rounded-lg border-2 border-blue-70 mb-5 bg-dark-blue relative mt-12"
      aria-labelledby={`${name}-role`} // Menambahkan atribut aksesibilitas
      aria-describedby={`${name}-description`}
    >
      {/* Gambar dengan posisi muncul ke atas */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <Image
          className="rounded-full"
          src={img}
          alt={`${name}'s avatar`}
          width={200}
          height={200}
          priority={true} // Menambahkan prioritas jika elemen ini penting untuk LCP
        />
      </div>
      {/* Konten kartu */}
      <div
        className="pt-16 bg-[#051227] p-4 rounded-lg shadow-lg"
        id={`${name}-description`}
      >
        <div className="space-y-2">
          <h3
            className="text-white text-lg font-bold"
            id={`${name}-role`}
          >
            {name}
          </h3>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
});

export default Boat;
