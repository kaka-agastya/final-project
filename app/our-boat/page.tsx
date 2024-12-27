import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Heroboat from "@/components/Heroboat";
import React, { useMemo } from "react";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import ProfileCard from "@/components/ui/ProfileCard";
import Boat from "@/components/ui/Boat";

// Definisikan tipe untuk setiap profil
interface Profile {
  name: string;
  role: string;
  img: string;
  division: string;
  instagram?: string;
  linkedin?: string;
}

// Data profil dengan tipe eksplisit
const profiles: Profile[] = [
  { name: "M. Fakhri Tuffaahatii", role: "Mechanical Design", img: "/12.webp", division: "TEAM LEADER", instagram: "https://www.instagram.com/tuffaahatii/", linkedin: "https://www.linkedin.com/in/m-fakhri-tuffaahatii-630396327/" },
];

// Definisikan array divisi
const divisions: string[] = ["TEAM LEADER", "NTC", "MEC", "EPR", "ADVISOR"];

// Komponen untuk bagian divisi
const TeamSection = ({ division, profiles }: { division: string; profiles: Profile[] }) => (
  <FadeInOnScroll>
    <div>
      {profiles.map((profile) => (
        <Boat key={profile.name} name={profile.name} role={profile.role} img={profile.img} instagram={profile.instagram} linkedin={profile.linkedin} />
      ))}
    </div>
  </FadeInOnScroll>
);


// Komponen utama
export default function Home() {
  const groupedProfiles = useMemo(
    () =>
      divisions.map((division) => ({
        division,
        profiles: profiles.filter((profile) => profile.division === division),
      })),
    []
  );

  return (
    <div className="flex flex-col items-center space-y-10">
      <BackgroundEffect />
        <Heroboat />
      {groupedProfiles.map(({ division, profiles }) => (
        <TeamSection key={division} division={division} profiles={profiles} />
      ))}
    </div>
  );
}

