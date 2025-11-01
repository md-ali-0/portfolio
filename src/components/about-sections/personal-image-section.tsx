"use client";

import {
    Camera,
    Github,
    Heart,
    Linkedin,
    Mail,
    MapPin,
    Twitter,
    User,
} from "lucide-react";
import Image from "next/image";

export default function PersonalImageSection() {
    const personalInterests = [
        {
            icon: <Heart className="h-5 w-5" />,
            title: "Photography",
            description:
                "Capturing authentic stories through my lens and exploring creative compositions.",
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            title: "Travel",
            description:
                "Immersing myself in new cultures and discovering diverse perspectives.",
        },
        {
            icon: <User className="h-5 w-5" />,
            title: "Mentoring",
            description:
                "Guiding aspiring developers and sharing real-world technical insights.",
        },
        {
            icon: <Camera className="h-5 w-5" />,
            title: "Tech Blogging",
            description:
                "Writing about modern web technologies and my learning experiences.",
        },
    ];

    const socialLinks = [
        {
            icon: <Github className="h-5 w-5" />,
            label: "GitHub",
            url: "https://github.com/yourusername",
            color: "hover:text-emerald-400",
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            label: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            color: "hover:text-blue-400",
        },
        {
            icon: <Twitter className="h-5 w-5" />,
            label: "Twitter",
            url: "https://twitter.com/yourusername",
            color: "hover:text-sky-400",
        },
        {
            icon: <Mail className="h-5 w-5" />,
            label: "Email",
            url: "mailto:youremail@example.com",
            color: "hover:text-emerald-400",
        },
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
            {/* Geometric background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 transform rotate-45"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 mt-8 items-center">
                    {/* Personal Image with new styling */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative">
                            {/* Floating image container with shadow effect */}
                            <div className="relative transform rotate-3 transition-transform duration-500 hover:rotate-0">
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30"></div>
                                <div className="relative bg-zinc-800 border-2 border-zinc-700 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/about-me-picture.png"
                                        alt="Mohammad Ali - Full Stack Developer"
                                        width={400}
                                        height={500}
                                        className="object-cover w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Decorative corner elements */}
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg"></div>
                            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg"></div>
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg"></div>
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400 rounded-br-lg"></div>
                        </div>
                    </div>

                    {/* Content with new layout */}
                    <div className="lg:w-3/5">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                        Mohammad Ali
                                    </h3>
                                    <p className="text-emerald-400 text-xl md:text-3xl font-medium mb-4">
                                        Full-Stack Developer
                                    </p>

                                    {/* Contact Information */}
                                    <div className="flex items-center gap-2 text-zinc-300 mb-6">
                                        <Mail className="h-5 w-5 text-emerald-400" />
                                        <span>md.ali.office@gmail.com</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-zinc-300 text-lg leading-relaxed">
                                        Outside of coding, I love blending
                                        creativity with technology to craft
                                        meaningful experiences. I constantly
                                        seek inspiration from art, people, and
                                        nature.
                                    </p>

                                    <p className="text-zinc-300 text-lg leading-relaxed">
                                        Over the years, I've learned that great
                                        software isn't just about code — it's
                                        about empathy, communication, and
                                        collaboration. These principles shape
                                        the way I work, mentor, and grow as a
                                        developer.
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="pt-4">
                                <h4 className="text-xl font-semibold text-white mb-4">
                                    Connect with me
                                </h4>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-zinc-800 transition-all duration-300 ${social.color}`}
                                        >
                                            {social.icon}
                                            <span>{social.label}</span>
                                        </a>
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
