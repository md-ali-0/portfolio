"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact, level: "Expert", progress: 90 },
  { name: "Node.js", icon: FaNodeJs, level: "Advanced", progress: 80 },
  { name: "TypeScript", icon: SiTypescript, level: "Intermediate", progress: 70 },
  { name: "Python", icon: FaPython, level: "Advanced", progress: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", progress: 95 },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced", progress: 80 },
  { name: "GraphQL", icon: SiGraphql, level: "Intermediate", progress: 65 },
  { name: "Databases", icon: FaDatabase, level: "Advanced", progress: 75 },
]

interface Skill {
  name: string;
  icon: React.ComponentType;
  level: string;
  progress: number;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{skill.name}</CardTitle>
        <skill.icon className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{skill.level}</div>
        <Progress value={skill.progress} className="mt-2" />
      </CardContent>
    </Card>
  </motion.div>
)

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  )
}

