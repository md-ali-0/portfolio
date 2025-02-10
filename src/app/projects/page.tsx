import ProjectsList from "@/components/project/projects-list";
import config from "@/config";

async function fetchProjects(page: number) {
    const response = await fetch(`${config.host}/api/project?page=${page}`, {
        cache: "no-store"
    });
    const data = await response.json();
    return data;
}

export default async function Projects() {
    const projectData = await fetchProjects(1);

    return (
        <div className="container mx-auto px-4 pt-20">
            <ProjectsList initialProjects={projectData.data} />
        </div>
    );
}
