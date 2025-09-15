"use client";

import LogoLoop from "../../../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiJavascript />,
    title: "Javascript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiPhp />,
    title: "PHP",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiLaravel />,
    title: "Laravel",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiExpress />,
    title: "Express",
    href: "https://tailwindcss.com",
  },
];

const SkillsSection = () => {
  return (
    <section id="SkillsSection" className="scroll-mt-24">
      <div className="px-6 text-center mb-6">
        <h1 className="font-bold text-4xl">Skills</h1>
        <p className="text-gray-500 pb-8">
          These are the technologies and languages I’ve worked with.
        </p>
        <div
          style={{ height: "100px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
