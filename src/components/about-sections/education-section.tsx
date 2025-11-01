"use client";

import SectionHeader from "@/components/section-header";
import { BookOpen } from "lucide-react";

type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
  achievements: string[];
};

export default function EducationSection() {
  const educationData: EducationItem[] = [
    {
      institution: "University Name",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      period: "2020 - 2024",
      description: "Focused on software engineering and web development with a strong emphasis on modern technologies.",
      achievements: [
        "Graduated with Honors",
        "Dean's List for 3 consecutive years",
        "Led a team of 5 in senior project development"
      ]
    },
    {
      institution: "College Name",
      degree: "Higher Secondary Certificate",
      field: "Science",
      period: "2018 - 2020",
      description: "Specialized in Mathematics and Computer Science, laying the foundation for my programming journey.",
      achievements: [
        "Mathematics Olympiad Participant",
        "Top 5% in final examinations",
        "Captain of Computer Club"
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My"
          highlight="Education"
          description="Academic journey and qualifications that shaped my foundation in technology."
        />

        <div className="grid grid-cols-1 gap-8 mt-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 sm:p-8 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden"
            >
              {/* Static shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <BookOpen className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-emerald-400 font-semibold">
                        {edu.degree} in {edu.field}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 bg-zinc-800/50 text-zinc-200 text-sm font-medium rounded-full border border-zinc-700/50 self-start">
                    {edu.period}
                  </span>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-zinc-300 font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                        <span className="text-zinc-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}