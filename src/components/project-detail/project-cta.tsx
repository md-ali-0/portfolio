"use client";

import MagneticElement from "@/components/magnetic-element";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCTA() {
    return (
        <section className="relative py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
            <div className="container mx-auto">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
                    <p className="text-zinc-300 mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                        vision.
                    </p>
                    <MagneticElement strength={60}>
                        <Link href="/#contact">
                            <Button
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black px-8 py-6 text-lg"
                                data-cursor="button"
                            >
                                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </MagneticElement>
                </motion.div>
            </div>
        </section>
    );
}
