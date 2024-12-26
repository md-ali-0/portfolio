"use client";

import { motion } from "framer-motion";
import { Book } from "lucide-react";

export default function CoursesSection() {
    const coursesData = [
        {
            period: "July 2023 - 2024",
            course: "Web Development Course",
            institution: "Programming Hero",
        },
        {
            period: "July 2024 - Present",
            course: "Next Level Web Development",
            institution: "Programming Hero",
        },
    ];

    return (
        <div className="border rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="py-12">
                <motion.h6
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
                    data-backdrop-text="Courses"
                >
                    Courses
                </motion.h6>
                <div>
                    {coursesData.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border border-[#212425]
                            "
                            style={{ background: "transparent" }}
                        >
                            <Book className=" text-2xl mr-4" size={55} />
                            <div className="flex-grow border-l-2 border-gray-600 pl-4">
                                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                                    {course.period}
                                </span>
                                <h3 className="text-xl dark:text-white">
                                    {course.course}
                                </h3>
                                <p className="dark:text-[#b7b7b7]">
                                    {course.institution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
