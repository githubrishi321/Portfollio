import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Brain, Database, Server, Cloud, Terminal, Search } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiCplusplus,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,200,255,0.08)] to-transparent group-hover:via-[rgba(100,200,255,0.15)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI / GenAI",
      color: "text-purple-400",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", icon: <Brain className="w-4 h-4 text-purple-400" /> },
        { name: "LangChain", icon: <Code2 className="w-4 h-4 text-emerald-400" /> },
        { name: "LangGraph", icon: <Code2 className="w-4 h-4 text-teal-400" /> },
        { name: "LLMs", icon: <Brain className="w-4 h-4 text-cyan-400" /> },
        { name: "Google Gemini", icon: <Brain className="w-4 h-4 text-blue-400" /> },
        { name: "Prompt Engineering", icon: <Terminal className="w-4 h-4 text-yellow-400" /> },
      ],
    },
    {
      icon: Search,
      title: "Vector Search & Data",
      color: "text-rose-400",
      skills: [
        { name: "Qdrant", icon: <Database className="w-4 h-4 text-rose-400" /> },
        { name: "Vector Databases", icon: <Database className="w-4 h-4 text-pink-400" /> },
        { name: "Embeddings", icon: <Code2 className="w-4 h-4 text-violet-400" /> },
        { name: "Semantic Search", icon: <Search className="w-4 h-4 text-amber-400" /> },
      ],
    },
    {
      icon: Terminal,
      title: "Programming Languages",
      color: "text-amber-400",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Core Java (OOP)", icon: <FaJava className="w-4 h-4 text-[#ED8B00]" /> },
        { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" /> },
        { name: "Python (Basic)", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <Server className="w-4 h-4 text-gray-200" /> },
        { name: "REST APIs", icon: <Code2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "JWT", icon: <Terminal className="w-4 h-4 text-cyan-400" /> },
        { name: "MVC", icon: <Code2 className="w-4 h-4 text-blue-400" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-cyan-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <Code2 className="w-4 h-4 text-white" /> },
        { name: "CI/CD", icon: <Cloud className="w-4 h-4 text-teal-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-20 lg:pt-10 text-white min-h-screen bg-[#04081A] relative pb-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">02. Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mt-2 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Expertise across full-stack development, Generative AI pipelines, vector databases, and cloud engineering.
          </p>
        </div>

        <div className="flex justify-center items-center mb-8">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
