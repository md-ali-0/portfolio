"use client";

import Photo from "@/assets/ali/1.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function FancyBanner() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8 lg:py-16">
            <div className="flex flex-col-reverse md:flex-row justify-center sm:justify-between items-center gap-12">
                <motion.div
                    className="space-y-3.5 w-full text-center sm:text-start lg:w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        className="inline-block text-sm stroke-text bg-white/10 text-primary rounded-full px-4 py-1.5 font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 150,
                        }}
                    >
                        Mohammad Ali
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-1.5">
                        Hey, I&apos;m <span className="text-primary">Ali</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <span className="text-muted-foreground">
                            I&apos;m a{" "}
                        </span>
                        <TypeAnimation
                            sequence={[
                                "Web Developer",
                                2000,
                                "Web Designer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-100"
                        />
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl  mt-2">
                        A passionate Full-Stack Developer dedicated to building impactful applications and constantly exploring technologies to grow and improve.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="group">
                            <Link href={'/contact'}>
                            
                            Contact Me
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link
                                href="https://drive.google.com/uc?export=download&id=1qXMQhYeSzcZWw7bi0nn7eHA1LcMUMfaA"
                                download
                            >
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <Image
                            src={Photo.src}
                            alt="Mohammad Ali"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full lg:rounded-2xl shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
