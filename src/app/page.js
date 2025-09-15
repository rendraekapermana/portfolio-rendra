import ContactSection from "./pages/contact/ContactSection"
import ExperienceSection from "./pages/experience/ExperienceSection"
import Hero from "./pages/hero/Hero"
import Navbar from "./pages/layout/Navbar"
import ProjectSection from "./pages/project/ProjectSection"
import SkillsSection from "./pages/skill/SkillsSection"

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="px-24">
      <Hero />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    </>
  )
}
