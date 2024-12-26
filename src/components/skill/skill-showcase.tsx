"use client"

import { Skill } from "@/types";
import { motion } from "framer-motion";
import SkillCard from "./skill-card";

export default function SkillShowcase({
    skills,
}: {
    skills: { data: Skill[] };
}) {
    return (
        <>
            <motion.h6
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono font-medium uppercase text-xl tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:-top-3.5 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-6xl after:opacity-15 mb-10"
                data-backdrop-text="Skills"
            >
                My Skills
            </motion.h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills?.data.map((skill: Skill, index: number) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </>
    );
}
