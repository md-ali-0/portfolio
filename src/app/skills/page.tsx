import SkillShowcase from "@/components/skill/skill-showcase";
import config from "@/config";

async function fetchSkills() {
    const response = await fetch(`${config.host}/api/skill`, {
        cache: "no-store",
    });
    const data = await response.json();
    return data;
}

export default async function SkillsPage() {
    const skills = await fetchSkills();

    return (
        <div className="container mx-auto px-4 py-16 pt-24">
            <SkillShowcase skills={skills} />
        </div>
    );
}
