import Herot from "@/components/Herot";
import BackgroundEffect from "@/components/ui/BackgroundEffect";
import ProfileCard from "@/components/ui/ProfileCard";

const profiles = [
  {
    name: "Gregorius Natanael Anggalaksmana",
    role: "Sponext",
    img: "/user.png",
  },
  {
    name: "Fajriah Khairunnisa",
    role: "Finad",
    img: "/user.png",
  },
  {
    name: "Kusumastuti Windria",
    role: "Sosbrand",
    img: "/user.png",
  },
  {
    name: "Muhammad Gian Yudha Prawira",
    role: "Microcontroller",
    img: "/user.png",
  },
  {
    name: "Fatharanni Faza",
    role: "Electrical Design",
    img: "/user.png",
  },
  {
    name: "Muhammad Fazayyan Razzan Izzuddin",
    role: "Electrical Design",
    img: "/user.png",
  },
  {
    name: "Kaka Agastya Herlambang Wahyudi",
    role: "Web Development",
    img: "/user.png",
  },
  {
    name: "Muhammad Abdullah",
    role: "Programming",
    img: "/user.png",
  },
  {
    name: "Rizwan Ahmad Maulana",
    role: "Mechanical Production",
    img: "/user.png",
  },
  {
    name: "Fazlee Mawla Nasution",
    role: "Mechanical Production",
    img: "/user.png",
  },
  {
    name: "Rizqi Setya Cahyadi",
    role: "Mechanical Design",
    img: "/user.png",
  },
  {
    name: "M. Fakhri Tuffaahatii",
    role: "Mechanical Design",
    img: "/user.png",
  },
  {
    name: "M. Caesar Yudhistira Prabowo",
    role: "Mechanical Design",
    img: "/user.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <BackgroundEffect/>
      <Herot />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            img={profile.img}
          />
        ))}
      </div>
    </div>
  );
}
