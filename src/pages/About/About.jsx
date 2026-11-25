import HeroImg from "@/assets/images/hero.jpg";
import { Code2, Award, GraduationCap, Trophy, Terminal, FileText } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Problems Solved", value: "100+", sub: "75+ on LeetCode", icon: Code2, color: "text-amber-400" },
    { label: "B.E. Computer Eng.", value: "8.06", sub: "CGPA / 10 · 2025", icon: GraduationCap, color: "text-emerald-400" },
    { label: "HSC Education", value: "89.83%", sub: "Late Dr. A. G. Thakare", icon: Award, color: "text-cyan-400" },
    { label: "Certifications", value: "3", sub: "Oracle, AWS & FirstBit", icon: Trophy, color: "text-purple-400" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 text-white bg-[#04081A] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl space-y-12 px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">01. About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Professional Summary
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-gray-900 to-[#091121] p-2 shadow-2xl shadow-cyan-500/10 max-w-sm w-full group">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <img
                  src={HeroImg}
                  className="rounded-xl object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  alt="Rishikesh Chavan Profile Picture"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="mt-3 p-3.5 rounded-xl bg-gray-900/90 backdrop-blur-md border border-gray-800">
                <p className="text-sm font-semibold text-white">
                  <span className="text-cyan-400">Rishikesh Chavan</span> — Pune, Maharashtra, India
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Sinhgad Institute of Technology, Pune — B.E. Computer Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Text & Story directly from Resume */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Computer Engineering graduate with hands-on experience in <span className="text-cyan-300 font-semibold">full-stack development</span> and <span className="text-purple-300 font-semibold">Generative AI</span>.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Built a Retrieval-Augmented Generation (RAG) chatbot using <span className="text-white font-medium">LangChain, Google Gemini, and Qdrant</span>, along with an AI-powered blog application using <span className="text-white font-medium">LLMs and prompt engineering</span>.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Experienced in <span className="text-teal-300 font-medium">Node.js, REST APIs, databases, and cloud deployment</span>, with a strong foundation in software development, problem-solving, and AI-driven application development.
            </p>

            <blockquote className="border-l-4 border-cyan-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
              <p className="text-sm text-gray-300 italic">
                "Qualified in the Dr. Homi Bhabha Balvaidnyanik Competition and solved 100+ coding problems (75+ on LeetCode) strengthening data structures and algorithms."
              </p>
              <div className="mt-2 text-xs font-semibold text-cyan-400">
                Sinhgad Institute of Technology, Pune · CGPA: 8.06/10 (2025)
              </div>
            </blockquote>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-gray-900/60 border border-gray-800 backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-xl sm:text-2xl font-bold text-white">{item.value}</span>
                    </div>
                    <div className="text-xs font-medium text-gray-300">{item.label}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{item.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
