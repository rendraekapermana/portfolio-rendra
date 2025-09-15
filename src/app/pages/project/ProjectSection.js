"use client";

import DataProject from "@/data/DataProject";
import SpotlightCard from "../../../components/SpotlightCard";

const ProjectSection = () => {
  return (
    <div id="ProjectSection" className="px-4 scroll-mt-24">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DataProject.map((project, index) => (
          <SpotlightCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
