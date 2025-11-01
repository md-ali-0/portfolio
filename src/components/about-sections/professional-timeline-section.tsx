"use client";

import { ArrowRight, Briefcase, Code } from "lucide-react";

export default function ProfessionalTimelineSection() {
    const experiences = [
        {
            icon: <Briefcase className="h-5 w-5" />,
            title: "Full Stack Web Developer",
            company: "Naria It Solutions",
            period: "March 2025 - Present",
            description:
                "Leading development of cutting-edge web applications with a focus on performance and user experience.",
            achievements: [
                "Architected and deployed 5+ production applications using Next.js and React",
                "Optimized application performance resulting in 40% faster load times",
                "Mentored junior developers and established coding best practices",
            ],
            technologies: ["Next.js", "React", "TypeScript", "Node.js"],
        },
        {
            icon: <Code className="h-5 w-5" />,
            title: "Full Stack Web Developer",
            company: "Edupy Academy",
            period: "May 2024 - February 2025",
            description:
                "Developed comprehensive educational platforms and learning management systems.",
            achievements: [
                "Built scalable LMS platform serving 1000+ students",
                "Implemented real-time features using WebSocket technology",
                "Collaborated with design team to create pixel-perfect UI components",
            ],
            technologies: ["React", "Node.js", "WebSocket", "MongoDB"],
        },
    ];

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Professional
                    <span className="ms-3.5 text-2xl sm:text-3xl md:text-4xl font-medium text-emerald-400 relative">
                        Timeline
                        <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                    </span>
                </h3>
            </div>

            <div className="relative mx-auto">
                {/* Central timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-teal-500 to-emerald-700 hidden lg:block rounded-md" />

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center ${
                                index % 2 === 0
                                    ? "lg:flex-row"
                                    : "lg:flex-row-reverse"
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-zinc-950 timeline-pulse hidden lg:block z-10" />

                            <div
                                className={`w-full lg:w-6/12 ${
                                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                                }`}
                            >
                                <div className="morph-card p-8 relative overflow-hidden rounded-xl sm:rounded-2xl">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br from-emerald-500/50 to-teal-500/50 opacity-5`}
                                    />
                                    

                                    <div className="relative z-10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="flex-shrink-0 w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center">
                                                {exp.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-white mb-2">
                                                    {exp.title}
                                                </h4>
                                                <p className="text-emerald-400 font-semibold mb-1">
                                                    {exp.company}
                                                </p>
                                                <div className="text-zinc-400 text-sm sm:hidden">
                                                    {exp.period}
                                                </div>
                                            </div>
                                            <div className="text-zinc-400 text-sm hidden sm:block">
                                                {exp.period}
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            {exp.achievements.map(
                                                (achievement, achIndex) => (
                                                    <div
                                                        key={achIndex}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                                        <span className="text-zinc-300 text-sm">
                                                            {achievement}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
