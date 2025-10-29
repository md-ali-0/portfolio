import {
    SiDocker,
    SiGit,
    SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export default function FloatingIcons() {
    const iconSet = [
        <SiReact key="react" className="w-8 h-8 text-emerald-400/50" />,
        <SiNextdotjs key="next" className="w-8 h-8 text-teal-400/50" />,
        <SiTypescript key="ts" className="w-8 h-8 text-blue-400/50" />,
        <SiTailwindcss key="tailwind" className="w-8 h-8 text-cyan-400/50" />,
        <SiNodedotjs key="node" className="w-8 h-8 text-green-400/50" />,
        <SiPrisma key="prisma" className="w-8 h-8 text-indigo-400/50" />,
        <SiPostgresql key="postgres" className="w-8 h-8 text-blue-500/50" />,
        <SiMongodb key="mongo" className="w-8 h-8 text-green-500/50" />,
        <SiRedis key="redis" className="w-8 h-8 text-red-400/50" />,
        <SiGit key="git" className="w-8 h-8 text-orange-400/50" />,
        <SiGithub key="github" className="w-8 h-8 text-gray-400/50" />,
        <SiDocker key="docker" className="w-8 h-8 text-cyan-400/50" />,
    ];

    // Positions that start from middle and have more towards the end
    const positions = [
        { top: "10%", right: "30%" }, // Start from middle
        { top: "0%", right: "20%" },
        { top: "80%", right: "40%" },
        { top: "55%", right: "25%" },
        { top: "5%", right: "80%" },
        { top: "65%", right: "95%" },
        { top: "70%", right: "70%" }, // More towards the end
        { top: "75%", right: "20%" },
        { top: "80%", right: "30%" },
        { top: "85%", right: "25%" },
        { top: "15%", right: "40%" },
        { top: "20%", left: "15%" },
    ];

    return (
        <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden">
            {iconSet.map((icon, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        top: positions[i].top,
                        right: positions[i].right,
                        left: positions[i].left,
                    }}
                >
                    {icon}
                </div>
            ))}
        </div>
    );
}
