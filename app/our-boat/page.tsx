import BackgroundEffect from "@/components/ui/BackgroundEffect";
import Heroboat from "@/components/Heroboat";
import React, { useMemo } from "react";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Boat from "@/components/ui/Boat";

// Definisikan tipe untuk setiap profil
interface Profile {
  name: string;
  role: string;
  img: string;
  division: string;
}

// Data profil dengan tipe eksplisit
const profiles: Profile[] = [
  { name: "VISTA MARA", role: "Our Boat", img: "/boatt.webp", division: "TEAM LEADER" },
];

// Definisikan array divisi
const divisions: string[] = ["TEAM LEADER", "NTC", "MEC", "EPR", "ADVISOR"];

// Komponen untuk bagian divisi
const TeamSection = ({ division, profiles }: { division: string; profiles: Profile[] }) => (
  <FadeInOnScroll>
    <div>
      {profiles.map((profile) => (
        <Boat key={profile.name} name={profile.name} role={profile.role} img={profile.img} />
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

