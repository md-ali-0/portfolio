import AboutSection from "@/components/about/about-section";
import CoursesSection from "@/components/about/courses-section";
import EducationSection from "@/components/about/education-section";
import ExperienceSection from "@/components/about/experience-section";

export default async function About() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="space-y-5 md:space-y-10">
                <AboutSection />
                <ExperienceSection />
                <EducationSection/>
                <CoursesSection/>
            </div>
        </main>
    );
}
