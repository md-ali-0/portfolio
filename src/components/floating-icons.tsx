"use client"

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
} from "react-icons/si"

export default function FloatingIcons() {
  const iconSet = [
    { icon: <SiReact key="react" />, color: "from-cyan-400 to-blue-500", label: "React" },
    { icon: <SiNextdotjs key="next" />, color: "from-gray-300 to-gray-500", label: "Next.js" },
    { icon: <SiTypescript key="ts" />, color: "from-blue-400 to-blue-600", label: "TypeScript" },
    { icon: <SiTailwindcss key="tailwind" />, color: "from-cyan-300 to-cyan-500", label: "Tailwind" },
    { icon: <SiNodedotjs key="node" />, color: "from-green-400 to-green-600", label: "Node.js" },
    { icon: <SiPrisma key="prisma" />, color: "from-slate-300 to-slate-500", label: "Prisma" },
    { icon: <SiPostgresql key="postgres" />, color: "from-blue-500 to-blue-700", label: "PostgreSQL" },
    { icon: <SiMongodb key="mongo" />, color: "from-green-500 to-green-700", label: "MongoDB" },
    { icon: <SiRedis key="redis" />, color: "from-red-400 to-red-600", label: "Redis" },
    { icon: <SiGit key="git" />, color: "from-orange-400 to-orange-600", label: "Git" },
    { icon: <SiGithub key="github" />, color: "from-gray-400 to-gray-600", label: "GitHub" },
    { icon: <SiDocker key="docker" />, color: "from-blue-400 to-cyan-500", label: "Docker" },
  ]

  const positions = [
    { top: "10%", right: "30%" },
    { top: "0%", right: "20%" },
    { top: "80%", right: "40%" },
    { top: "55%", right: "25%" },
    { top: "5%", right: "80%" },
    { top: "65%", right: "95%" },
    { top: "70%", right: "70%" },
    { top: "75%", right: "20%" },
    { top: "80%", right: "30%" },
    { top: "85%", right: "25%" },
    { top: "15%", right: "40%" },
    { top: "20%", left: "15%" },
  ]

  return (
    <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden">
      {iconSet.map((item, i) => (
        <div
          key={i}
          className="absolute group"
          style={{
            top: positions[i].top,
            right: positions[i].right,
            left: positions[i].left,
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Glow background */}
            <div
              className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${item.color}`}
            />

            {/* Icon container with gradient background */}
            <div
              className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1`}
            >
              <div className="w-full h-full flex items-center justify-center text-white">{item.icon}</div>
            </div>

            {/* Tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900/90 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
