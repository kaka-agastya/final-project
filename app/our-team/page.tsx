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
  instagram?: string;
  linkedin?: string;
}

// Data profil dengan tipe eksplisit
const profiles: Profile[] = [
  { name: "Gregorius Natanael A.", role: "Sponsorship & External", img: "/3.webp", division: "NTC", instagram: "https://www.instagram.com/gregoriusnatanel/", linkedin: "https://www.linkedin.com/in/gregorius-natanel-anggalaksmana-114365323/" },
  { name: "Fajriah Khairunnisa", role: "Finance & Administration", img: "/15.webp", division: "NTC", instagram: "https://www.instagram.com/faajriah/", linkedin: "https://www.linkedin.com/in/fajriah-khairunnisa/" },
  { name: "Kusumastuti Windria", role: "Social Branding", img: "/11.webp", division: "NTC", instagram: "https://www.instagram.com/kusumastuti.w/", linkedin: "https://www.linkedin.com/in/kusumastuti-windria-765075161/" },
  { name: "M. Gian Yudha Prawira", role: "Microcontroller", img: "/10.webp", division: "EPR", instagram: "https://www.instagram.com/gianyudhaa/", linkedin: "https://www.linkedin.com/in/muhammad-yudha/" },
  { name: "Fatharanni Faza", role: "Electrical Design", img: "/9.webp", division: "EPR", instagram: "https://www.instagram.com/fthn.iii/", linkedin: "https://www.linkedin.com/in/fatharanni-faza-362940323/" },
  { name: "M. Fazayyan Razzan I.", role: "Electrical Design", img: "/14.webp", division: "EPR", instagram: "https://www.instagram.com/fazayyanrazzan/", linkedin: "https://www.linkedin.com/in/muhammad-fazayyan-razzan-izzuddin-b6115330a/" },
  { name: "Kaka Agastya H. W.", role: "Web Development", img: "/8.webp", division: "EPR", instagram:"https://www.instagram.com/kakaagastyahw._/", linkedin: "https://www.linkedin.com/in/kaka-agastya-hw/" },
  { name: "M. Abdullah", role: "Programming", img: "/7.webp", division: "EPR", instagram: "https://www.instagram.com/muh.abdd/", linkedin: "https://www.linkedin.com/in/muhammad-abdullah-680813340/" },
  { name: "Rizwan Ahmad Maulana", role: "Mechanical Production", img: "/6.webp", division: "MEC", instagram: "https://www.instagram.com/ry_zwan/", linkedin: "https://www.linkedin.com/in/rizwan-ahmad-530396327/" },
  { name: "Fazlee Mawla Nasution", role: "Mechanical Production", img: "/13.webp", division: "MEC", instagram: "https://www.instagram.com/fazleemn/", linkedin: "https://www.linkedin.com/in/fazlee-nasution-7a7488324/" },
  { name: "Rizqi Setya Cahyadi", role: "Mechanical Design", img: "/5.webp", division: "MEC", instagram: "https://www.instagram.com/setya_eqi31/", linkedin: "https://www.linkedin.com/in/rizqi-setya-cahyadi-891276312/" },
  { name: "M. Fakhri Tuffaahatii", role: "Mechanical Design", img: "/12.webp", division: "TEAM LEADER", instagram: "https://www.instagram.com/tuffaahatii/", linkedin: "https://www.linkedin.com/in/m-fakhri-tuffaahatii-630396327/" },
  { name: "M. Lukman Hakim, ST, MT", role: "Team Advisor", img: "/16.webp", division: "ADVISOR", instagram: "https://www.instagram.com/lukmanhakim_/", linkedin: "https://www.linkedin.com/in/lukman-hakim-3b0b0b1b/" },
  { name: "M. Caesar Yudhistira P.", role: "Mechanical Design", img: "/4.webp", division: "MEC", instagram: "https://www.instagram.com/caesarrr06/", linkedin: "https://www.linkedin.com/in/mcaesaryudhistiraprabowo/" },
];

// Definisikan array divisi
const divisions: string[] = ["TEAM LEADER", "NTC", "MEC", "EPR", "ADVISOR"];

// Komponen untuk bagian divisi
const TeamSection = ({ division, profiles }: { division: string; profiles: Profile[] }) => (
  <FadeInOnScroll>
    <Divider text={division.replace("TEAM LEADER", "Team Leader").replace("EPR", "EPR")} />
    <div
      className={`grid gap-8 ${
        profiles.length === 1 ? "place-items-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} name={profile.name} role={profile.role} img={profile.img} instagram={profile.instagram} linkedin={profile.linkedin} />
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
        <Heroteam />
      {groupedProfiles.map(({ division, profiles }) => (
        <TeamSection key={division} division={division} profiles={profiles} />
      ))}
    </div>
  );
}
