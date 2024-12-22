import React from 'react';
import BackgroundEffect from '@/components/ui/BackgroundEffect';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';
import Heroteam from '@/components/Heroteam';
import ProfileCard from '@/components/ui/ProfileCard';
import Divider from '@/components/ui/Divider';

const profiles = [
  { name: "Gregorius Natanael Anggalaksmana", role: "Sponext", img: "/user.png", division: "NTC" },
  { name: "Fajriah Khairunnisa", role: "Finad", img: "/user.png", division: "NTC" },
  { name: "Kusumastuti Windria", role: "Sosbrand", img: "/user.png", division: "NTC" },
  { name: "Muhammad Gian Yudha Prawira", role: "Microcontroller", img: "/user.png", division: "EPR" },
  { name: "Fatharanni Faza", role: "Electrical Design", img: "/user.png", division: "EPR" },
  { name: "Muhammad Fazayyan Razzan Izzuddin", role: "Electrical Design", img: "/user.png", division: "EPR" },
  { name: "Kaka Agastya Herlambang Wahyudi", role: "Web Development", img: "/user.png", division: "EPR" },
  { name: "Muhammad Abdullah", role: "Programming", img: "/user.png", division: "EPR" },
  { name: "Rizwan Ahmad Maulana", role: "Mechanical Production", img: "/user.png", division: "MEC" },
  { name: "Fazlee Mawla Nasution", role: "Mechanical Production", img: "/user.png", division: "MEC" },
  { name: "Rizqi Setya Cahyadi", role: "Mechanical Design", img: "/user.png", division: "MEC" },
  { name: "M. Fakhri Tuffaahatii", role: "Mechanical Design", img: "/user.png", division: "MEC" },
  { name: "M. Caesar Yudhistira Prabowo", role: "Mechanical Design", img: "/user.png", division: "MEC" },
];

export default function Home() {
  const ntcProfiles = profiles.filter(profile => profile.division === "NTC");
  const mecProfiles = profiles.filter(profile => profile.division === "MEC");
  const eprProfiles = profiles.filter(profile => profile.division === "EPR");

  return (
    <div className="flex flex-col items-center space-y-10">
      <BackgroundEffect />
      <FadeInOnScroll>
        <Heroteam />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Divider text="Non-Technical (NTC)" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ntcProfiles.map((profile, index) => (
            <ProfileCard key={index} name={profile.name} role={profile.role} img={profile.img} />
          ))}
        </div>
        <Divider text="Mechanical (MEC)" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mecProfiles.map((profile, index) => (
            <ProfileCard key={index} name={profile.name} role={profile.role} img={profile.img} />
          ))}
        </div>
        <Divider text="Electrical Programming (EPR)" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eprProfiles.map((profile, index) => (
            <ProfileCard key={index} name={profile.name} role={profile.role} img={profile.img} />
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}