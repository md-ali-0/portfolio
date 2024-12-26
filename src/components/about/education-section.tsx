"use client"

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
    const educationData = [
        {
            period: "2020 - 2024",
            degree: "BSC in EEE",
            institution: "Rabindra Maitree University",
        },
        {
            period: "2014 - 2018",
            degree: "Diploma in Electronics",
            institution: "Jhenaidah Polytechnic Institute",
        },
    ];

    return (
        <div className="border rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="py-12">
                <motion.h6
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
                    data-backdrop-text="Education"
                >
                    Education
                </motion.h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border"
                            style={{ background: "transparent" }}
                        >
                            <GraduationCap
                                className=" text-2xl mr-4"
                                size={55}
                            />
                            <div className="flex-grow border-l-2 border-gray-600 pl-4">
                                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                                    {edu.period}
                                </span>
                                <h3 className="text-xl dark:text-white">
                                    {edu.degree}
                                </h3>
                                <p className="dark:text-[#b7b7b7]">
                                    {edu.institution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
