"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "@/data/DataExperience";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <section className="px-4 py-12 scroll-mt-12" id="ExperienceSection">
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.period}
            icon={exp.icon ? <exp.icon /> : <FaBriefcase />} // default ikon kalau exp.icon null
            iconStyle={{ background: "#4F46E5", color: "#fff" }} // contoh Tailwind warna dengan hex
            contentStyle={{ background: "#1F2937", color: "#F9FAFB" }}
            contentArrowStyle={{ borderRight: "7px solid #4F46E5" }}
            // bisa add className atau style tambahan
          >
            <h3 className="text-xl font-semibold">
              {exp.position} @ {exp.company}
            </h3>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceSection;
