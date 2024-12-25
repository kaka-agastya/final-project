import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  img: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, img }) => {
  return (
    <div className="w-full max-w-xs px-6 py-6 text-center rounded-lg border-2 
    border-blue-70 mb-5 bg-dark-blue relative mt-12"> {/* Menambahkan kelas mt-10 untuk margin atas */}
      {/* Gambar dengan posisi muncul ke atas */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <img
          className="rounded-full h-50 w-50"
          src={img}
          alt={`${name} avatar`}
        />
      </div>
      {/* Konten kartu */}
      <div className="pt-16 bg-[#051227] p-4 rounded-lg shadow-lg">
        <div className="space-y-2">
          <h3 className="text-white text-lg font-bold">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;