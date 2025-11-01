"use client";

import SectionHeader from "@/components/section-header";
import { BookOpenCheck, Clock, UserCheck } from "lucide-react";

type Course = {
  title: string;
  platform: string;
  instructor: string;
  duration: string;
  completionDate: string;
  skills: string[];
  description: string;
};

export default function CoursesSection() {
  const coursesData: Course[] = [
    {
      title: "Advanced React and Redux",
      platform: "Udemy",
      instructor: "Stephen Grider",
      duration: "24 hours",
      completionDate: "March 2024",
      skills: ["React", "Redux", "Hooks", "Context API"],
      description: "Comprehensive course covering advanced React patterns, state management with Redux, and modern development practices."
    },
    {
      title: "Node.js: Advanced Concepts",
      platform: "Udemy",
      instructor: "Stephen Grider",
      duration: "18 hours",
      completionDate: "January 2024",
      skills: ["Node.js", "Performance", "Security", "Testing"],
      description: "Deep dive into Node.js advanced concepts including performance optimization, security best practices, and testing strategies."
    },
    {
      title: "Next.js 14 & React - The Complete Guide",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      duration: "32 hours",
      completionDate: "December 2023",
      skills: ["Next.js", "SSR", "Deployment", "API Routes"],
      description: "Complete guide to Next.js covering server-side rendering, static site generation, API routes, and deployment strategies."
    },
    {
      title: "Docker Mastery: The Complete Toolset",
      platform: "Udemy",
      instructor: "Bret Fisher",
      duration: "20 hours",
      completionDate: "November 2023",
      skills: ["Docker", "Containers", "Kubernetes", "DevOps"],
      description: "Master Docker containers, images, volumes, networks, and orchestration with Docker Compose and Kubernetes."
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Online"
          highlight="Courses"
          description="Professional development through online learning platforms to stay current with industry trends."
          icon={<BookOpenCheck className="h-6 w-6 text-emerald-400" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="group relative h-full bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Static shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {course.title}
                  </h3>
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20 whitespace-nowrap">
                    {course.platform}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <UserCheck className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <p className="text-zinc-400 mb-5 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-md border border-zinc-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500 whitespace-nowrap">
                    Completed: {course.completionDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}