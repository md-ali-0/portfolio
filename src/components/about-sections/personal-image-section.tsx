"use client";

import SectionHeader from "@/components/section-header";
import { Camera, Heart, MapPin, User } from "lucide-react";

export default function PersonalImageSection() {
  // Personal interests and hobbies data
  const personalInterests = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Photography",
      description: "Capturing moments and exploring creative perspectives through my lens"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Travel",
      description: "Exploring new cultures and places to broaden my horizons"
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "Mentoring",
      description: "Helping aspiring developers navigate their career paths"
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: "Tech Blogging",
      description: "Sharing knowledge and insights about emerging technologies"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Personal"
          highlight="Snapshot"
          description="A glimpse into my life beyond code and technology."
          icon={<User className="h-6 w-6 text-emerald-400" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Personal Image */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50">
                {/* Placeholder for personal image - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
                  <User className="h-24 w-24 text-zinc-600" />
                </div>
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">Your Name</h3>
                <p className="text-zinc-400">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Personal Information and Interests */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 sm:p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  When I'm not coding, you'll find me exploring the intersection of technology and creativity. 
                  I believe in continuous learning and personal growth, both professionally and personally.
                </p>
                
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  My journey in technology has taught me the importance of empathy, collaboration, and 
                  clear communication. These values extend beyond the code I write to how I interact 
                  with teams and approach problem-solving.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {personalInterests.map((interest, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-500/30 transition-colors duration-300"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        {interest.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {interest.title}
                        </h4>
                        <p className="text-zinc-400 text-sm">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}