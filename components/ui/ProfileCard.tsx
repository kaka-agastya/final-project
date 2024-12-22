import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  img: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, img }) => {
  return (
    <div className="w-72 px-6 py-6 text-center rounded-lg border-2 border-gray-700">
      <div className="space-y-4 xl:space-y-6">
        <img
          className="mx-auto rounded-full h-36 w-36"
          src={img}
          alt={`${name} avatar`}
        />
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-white bold-20">{name}</h3>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
