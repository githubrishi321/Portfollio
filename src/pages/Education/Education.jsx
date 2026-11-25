import React, { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  ShieldCheck,
  Medal,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "B.E. Computer Engineering",
      school: "Sinhgad Institute of Technology, Pune",
      affiliation: "Savitribai Phule Pune University",
      mascot: "🎓",
      year: "2025",
      achievements: ["CGPA: 8.06 / 10"],
      skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
      description:
        "Comprehensive engineering curriculum covering core computer science principles, database architectures, and distributed software engineering.",
    },
    {
      degree: "Higher Secondary Education (HSC)",
      school: "Late Dr. A. G. Thakare Junior College, Baglan",
      affiliation: "Maharashtra State Board",
      mascot: "📚",
      year: "2021",
      achievements: ["Percent: 89.83%"],
      skills: ["Mathematics", "Physics", "Chemistry"],
      description:
        "Rigorous science and mathematics education establishing strong analytical and logical foundations.",
    },
    {
      degree: "Class X (Secondary School)",
      school: "SKD International School",
      affiliation: "Central Board of Secondary Education (CBSE)",
      mascot: "🏫",
      year: "2019",
      achievements: ["Percent: 73.80%"],
      skills: ["Mathematics", "Science", "Social Sciences", "English"],
      description:
        "Foundational secondary schooling with strong academic performance in science and mathematics.",
    },
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      badge: "Oracle Certified AI",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon",
      badge: "AWS Certified",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      title: "Full Stack Development Training",
      issuer: "FirstBit Solutions, Pune",
      period: "July 2025 – Feb 2026",
      badge: "Full Stack MERN",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
    },
  ];

  const achievements = [
    {
      title: "Dr. Homi Bhabha Balvaidnyanik Competition",
      description: "Qualified in the Dr. Homi Bhabha Balvaidnyanik Competition (problem-solving and scientific reasoning).",
      badge: "State Qualifier",
      icon: Medal,
    },
    {
      title: "100+ Coding Problems Solved",
      description: "Solved 100+ coding problems (75+ on LeetCode), strengthening data structures and algorithms (DSA).",
      badge: "DSA & Problem Solving",
      icon: Trophy,
      link: "https://leetcode.com/u/rishichavanrpc/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.04] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">04. Education & Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mt-2 mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Academic degrees, verified professional certifications, and competitive achievements.
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-2xl p-6 sm:p-7 transition-all duration-300 bg-gray-900/60 backdrop-blur-sm flex flex-col justify-between ${
                hoveredIndex === index
                  ? "border-cyan-500 scale-[1.02] shadow-lg shadow-cyan-500/10"
                  : "border-gray-800"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{edu.mascot}</span>
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-sm text-cyan-300 flex items-center gap-2 font-medium">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span>{edu.affiliation}</span>
                  </div>
                </div>

                <div className="pt-2">
                  {edu.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-l-2 border-cyan-500/60 pl-3">
                  {edu.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-gray-800">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[11px] rounded bg-gray-800/80 text-gray-300 border border-gray-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Certifications</span>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mt-2 mb-2">
              Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-gradient-to-br ${cert.color} bg-gray-900/90 border ${cert.borderColor} backdrop-blur-md flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Certified</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/10 text-white">
                      {cert.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium">
                    {cert.issuer} {cert.period ? `(${cert.period})` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="text-center mb-8">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Honors</span>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mt-2 mb-2">
              Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                        {item.badge}
                      </span>
                    </div>
                    <h5 className="text-base font-bold text-white">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1.5"
                    >
                      <span>View LeetCode Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
