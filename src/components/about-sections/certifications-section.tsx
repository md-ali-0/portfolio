"use client";

import SectionHeader from "@/components/section-header";
import { Award, CheckCircle } from "lucide-react";

type Certification = {
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
};

export default function CertificationsSection() {
  const certificationsData: Certification[] = [
    {
      title: "AWS Certified Developer - Associate",
      organization: "Amazon Web Services",
      date: "April 2024",
      credentialId: "AWS-123456789",
      verificationUrl: "#",
      description: "Validates technical expertise in developing and maintaining applications on AWS platform.",
      skills: ["AWS", "Cloud Computing", "Serverless", "Security"]
    },
    {
      title: "Google Professional Cloud Developer",
      organization: "Google Cloud",
      date: "February 2024",
      credentialId: "GCP-987654321",
      verificationUrl: "#",
      description: "Demonstrates proficiency in designing, building, and monitoring cloud applications using Google Cloud technologies.",
      skills: ["Google Cloud", "Kubernetes", "Microservices", "CI/CD"]
    },
    {
      title: "MongoDB Certified Developer Associate",
      organization: "MongoDB University",
      date: "December 2023",
      credentialId: "MDB-456789123",
      verificationUrl: "#",
      description: "Proves expertise in building MongoDB-based applications and working with MongoDB features.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"]
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      organization: "Microsoft",
      date: "October 2023",
      credentialId: "AZ-204",
      verificationUrl: "#",
      description: "Validates skills in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
      skills: ["Azure", "Cloud Services", "API Management", "DevOps"]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional"
          highlight="Certifications"
          description="Industry-recognized credentials validating my expertise in various technologies and platforms."
        />

        <div className="grid grid-cols-1 gap-6 mt-12">
          {certificationsData.map((cert, index) => (
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
                      <CheckCircle className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-emerald-400 font-semibold">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="px-3 py-1.5 bg-zinc-800/50 text-zinc-200 text-sm font-medium rounded-full border border-zinc-700/50">
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="text-xs text-zinc-500">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-zinc-800/50 text-zinc-200 text-sm rounded-lg border border-zinc-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-300 text-sm"
                    >
                      <Award className="h-4 w-4" />
                      <span>Verify Credential</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}