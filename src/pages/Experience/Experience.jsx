import React from "react";
import { Code2, Server, Radio, CheckCircle2 } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  points,
  technologies,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-2xl" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/95 rounded-2xl p-6 sm:p-8 h-full border border-gray-800/60 shadow-xl backdrop-blur-xl flex flex-col justify-between">
      <div>
        {/* Floating icon with pulse effect */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-full blur-lg group-hover:opacity-60 animate-pulse transition-all duration-500" />
            <div className="p-3 bg-gray-800/80 rounded-xl border border-cyan-500/20 relative z-10">
              <Icon className="w-8 h-8 text-cyan-400 transform group-hover:rotate-6 transition-transform duration-300" />
            </div>
          </div>
          <span className="text-xs sm:text-sm font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
            <span className="font-semibold text-white">{company}</span>
            {location && (
              <>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{location}</span>
              </>
            )}
          </div>

          {/* Bullet points from Resume */}
          <ul className="space-y-2.5 mt-4 text-gray-300 text-sm leading-relaxed">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech stack badges */}
      <div className="mt-6 pt-4 border-t border-gray-800 flex flex-wrap gap-1.5">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none">
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-cyan-500/40" />
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-cyan-500/40" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Radio,
      title: "Full-Stack Developer Intern",
      company: "StellarMind.ai",
      location: "Ahmedabad, Gujarat",
      period: "May 2026 – Aug 2026",
      points: [
        "Engineered an IoT/MQTT integration for a Smart Kitchen module: built backend APIs for hub and device pairing (BLE/Wi-Fi provisioning, QR-based device registration) and ingested real-time jar/tag sensor telemetry over an AWS-hosted MQTT broker.",
        "Automated inventory replenishment with an auto-reorder pipeline that maps device LOW_STOCK/EMPTY alerts to cart operations and triggers Firebase Cloud Messaging (FCM) push notifications to customers.",
        "Developed backend REST APIs endpoints and admin panel modules for authentication, products, categories, stores, orders, and address management on a grocery platform.",
        "Secured APIs with JWT authentication, a refresh token flow, password reset, and protected routes; documented them in Swagger so the team could test and collaborate.",
      ],
      technologies: [
        "IoT / MQTT",
        "AWS",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "Firebase FCM",
        "JWT",
        "Swagger",
      ],
    },
    {
      icon: Server,
      title: "Web Development Intern",
      company: "Octanet Services Pvt. Ltd",
      location: "Remote",
      period: "Jan 2024 – Feb 2024",
      points: [
        "Built a Task Management System on a microservices architecture (User, Task, and Notification services) so the remaining services keep running if one crashes.",
        "Implemented RabbitMQ for asynchronous service communication and containerized 3 services with Docker and Docker Compose, reducing setup to a single command.",
        "Built a fully responsive gym landing page (HTML, CSS, JavaScript) for mobile, tablet, and desktop.",
      ],
      technologies: [
        "Microservices",
        "RabbitMQ",
        "Docker",
        "Docker Compose",
        "Node.js",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20 bg-[#04081A]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content container */}
      <div className="relative container mx-auto px-6 mt-4">
        {/* Section header */}
        <div className="flex flex-col items-center space-y-4 mb-16 text-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">03. Experience</span>
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Work Experience
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-base md:text-lg text-gray-400 font-medium tracking-wide max-w-2xl">
            Hands-on professional engineering experience in IoT device telemetry, microservices architecture, and full-stack software development.
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      {/* Enhanced background glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 pointer-events-none" />
    </div>
  );
};

export default ExperienceSection;
