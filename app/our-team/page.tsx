import React, { useMemo } from "react";
import BackgroundEffect from "@/components/ui/BackgroundEffect";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Heroteam from "@/components/Heroteam";
import ProfileCard from "@/components/ui/ProfileCard";
import Divider from "@/components/ui/Divider";

// Definisikan tipe untuk setiap profil
interface Profile {
  name: string;
  role: string;
  img: string;
  division: string;
}

// Data profil dengan tipe eksplisit
const profiles: Profile[] = [
  { name: "Gregorius Natanael A.", role: "Sponsorship & External", img: "/3.webp", division: "NTC" },
  { name: "Fajriah Khairunnisa", role: "Finance & Administration", img: "/user.png", division: "NTC" },
  { name: "Kusumastuti Windria", role: "Social Branding", img: "/11.webp", division: "NTC" },
  { name: "M. Gian Yudha Prawira", role: "Microcontroller", img: "/10.webp", division: "EPR" },
  { name: "Fatharanni Faza", role: "Electrical Design", img: "/9.webp", division: "EPR" },
  { name: "M. Fazayyan Razzan I.", role: "Electrical Design", img: "/14.webp", division: "EPR" },
  { name: "Kaka Agastya H. W.", role: "Web Development", img: "/8.webp", division: "EPR" },
  { name: "M. Abdullah", role: "Programming", img: "/7.webp", division: "EPR" },
  { name: "Rizwan Ahmad Maulana", role: "Mechanical Production", img: "/6.webp", division: "MEC" },
  { name: "Fazlee Mawla Nasution", role: "Mechanical Production", img: "/13.webp", division: "MEC" },
  { name: "Rizqi Setya Cahyadi", role: "Mechanical Design", img: "/5.webp", division: "MEC" },
  { name: "M. Fakhri Tuffaahatii", role: "Mechanical Design", img: "/12.webp", division: "TEAM LEADER" },
  { name: "Dr. Rudy Dikairono, S.T., M.T, M.Sc.", role: "Mechanical Design", img: "/user.png", division: "ADVISOR" },
  { name: "M. Caesar Yudhistira P.", role: "Mechanical Design", img: "/4.webp", division: "MEC" },
];

// Definisikan array divisi
const divisions: string[] = ["TEAM LEADER", "NTC", "MEC", "EPR", "ADVISOR"];

// Komponen untuk bagian divisi
const TeamSection = ({ division, profiles }: { division: string; profiles: Profile[] }) => (
  <FadeInOnScroll>
    <Divider text={division.replace("TEAM LEADER", "Team Leader").replace("EPR", "Electrical Programming (EPR)")} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} name={profile.name} role={profile.role} img={profile.img} />
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
      <FadeInOnScroll>
        <Heroteam />
      </FadeInOnScroll>
      {groupedProfiles.map(({ division, profiles }) => (
        <TeamSection key={division} division={division} profiles={profiles} />
      ))}
    </div>
  );
}
