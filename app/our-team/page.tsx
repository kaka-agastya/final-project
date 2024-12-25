import React from 'react';
import BackgroundEffect from '@/components/ui/BackgroundEffect';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';
import Heroteam from '@/components/Heroteam';
import ProfileCard from '@/components/ui/ProfileCard';
import Divider from '@/components/ui/Divider';

const profiles = [
  { name: "Gregorius Natanael A.", role: "Sponsorship & External", img: "Copy of Barunastra ITS. (5).svg", division: "NTC" },
  { name: "Fajriah Khairunnisa", role: "Finance & Administration", img: "/user.png", division: "NTC" },
  { name: "Kusumastuti Windria", role: "Social Branding", img: "/11.svg", division: "NTC" },
  { name: "M. Gian Yudha Prawira", role: "Microcontroller", img: "/10.svg", division: "EPR" },
  { name: "Fatharanni Faza", role: "Electrical Design", img: "/9.svg", division: "EPR" },
  { name: "M. Fazayyan Razzan I.", role: "Electrical Design", img: "/user.png", division: "EPR" },
  { name: "Kaka Agastya H. W.", role: "Web Development", img: "/8.svg", division: "EPR" },
  { name: "M. Abdullah", role: "Programming", img: "/7.svg", division: "EPR" },
  { name: "Rizwan Ahmad Maulana", role: "Mechanical Production", img: "/6.svg", division: "MEC" },
  { name: "Fazlee Mawla Nasution", role: "Mechanical Production", img: "/user.png", division: "MEC" },
  { name: "Rizqi Setya Cahyadi", role: "Mechanical Design", img: "/5.svg", division: "MEC" },
  { name: "M. Fakhri Tuffaahatii", role: "Mechanical Design", img: "/user.png", division: "TEAM LEADER" },
  { name: "Dr. Rudy Dikairono, S.T., M.T, M.Sc.", role: "Mechanical Design", img: "/user.png", division: "ADVISOR" },
  { name: "M. Caesar Yudhistira P.", role: "Mechanical Design", img: "/4.svg", division: "MEC" },
];

export default function Home() {
  const ntcProfiles = profiles.filter(profile => profile.division === "NTC");
  const mecProfiles = profiles.filter(profile => profile.division === "MEC");
  const eprProfiles = profiles.filter(profile => profile.division === "EPR");
  const tlProfiles = profiles.filter(profile => profile.division === "TEAM LEADER");
  const advProfiles = profiles.filter(profile => profile.division === "ADVISOR");

  return (
    <div className="flex flex-col items-center space-y-10">
      <BackgroundEffect />
      <FadeInOnScroll>
        <Heroteam />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Divider text="Team Leader" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tlProfiles.map((profile, index) => (
            <ProfileCard key={index} name={profile.name} role={profile.role} img={profile.img} />
          ))}
        </div>
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
        <Divider text="Advisor" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advProfiles.map((profile, index) => (
            <ProfileCard key={index} name={profile.name} role={profile.role} img={profile.img} />
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}