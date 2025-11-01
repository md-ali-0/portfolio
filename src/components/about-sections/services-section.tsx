"use client";

import { Code, Database, Globe, Server } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express, and RESTful API development.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description:
        "Designing and optimizing databases using MongoDB, PostgreSQL, and implementing efficient data structures.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment with modern tech stacks.",
    },
  ];

  return (
    <div className="mb-16 sm:mb-20 md:mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative group">
            <div className="relative h-full p-6 md:p-8 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30 group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
              {/* Static shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl mb-6 text-emerald-400 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-all duration-300">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}