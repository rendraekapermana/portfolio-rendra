"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lanyard from "@/components/Lanyard";
import RunningText from "./RunningText";
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />;

const roles = ["Web Developer", "Mobile Developer", "UI/UX Designer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Animasi pergantian role
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="About" className="h-screen flex p-6">
      <div className="flex-2 text-left pt-48 ">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="text-6xl font-bold text-white">
            <RunningText />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={roles[roleIndex]}
            className="text-4xl pt-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[roleIndex]}
          </motion.p>
        </AnimatePresence>
        <p className="pt-4 text-gray-500">
          I am a passionate Software Developer with 1 year of experience,
          specializing in the MERN stack. I have hands-on expertise in building
          dynamic and responsive web applications, leveraging MongoDB,
          Express.js, React, and Node.js to deliver efficient and scalable
          solutions. I am eager to continue growing my skills and contributing
          to innovative projects.
        </p>
      </div>

      <div className="flex-1 text-right">
        <Lanyard />
      </div>
    </div>
  );
};

export default Hero;
