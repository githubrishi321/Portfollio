import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

import ragChatbotImg from "@/assets/images/projects/rag-chatbot.jpg";
import aiBlogImg from "@/assets/images/projects/ai-blog.jpg";
import ecommerceImg from "@/assets/images/projects/ecommerce.jpg";
import urlShortenerImg from "@/assets/images/projects/url-shortener.jpg";
import schedulrImg from "@/assets/images/projects/schedulr.jpg";

const projects = [
  {
    title: "Grocery Store Knowledge-Base Chatbot (GenAI / RAG)",
    stack: "Node.js · Express.js · LangChain · Google Gemini · Qdrant Vector DB",
    description:
      "A production-ready Retrieval-Augmented Generation (RAG) conversational AI system designed to answer grocery product specifications, real-time availability, and pricing queries strictly grounded in proprietary PDF catalogs and documents, completely eliminating LLM hallucinations.",
    bullets: [
      "Document Ingestion & Chunking: Parsed product PDF documents, chunked text into 1,000-character segments with 200-character overlap using LangChain text splitters to preserve semantic context across chunk boundaries.",
      "Vector Embeddings & Semantic Search: Generated dense high-dimensional embeddings via Google Gemini Embedding APIs and indexed vectors into Qdrant Cloud vector database for rapid cosine similarity retrieval.",
      "Context-Grounded LLM Generation: Formulated dynamic context-augmented prompts fetching the top 5 most relevant document chunks per user query, strictly restricting the Google Gemini model to verified document facts.",
      "Backend Architecture: Built clean REST API endpoints in Node.js & Express.js with query validation, error handling, and structured response streaming.",
    ],
    tags: [
      "Generative AI",
      "RAG Architecture",
      "LangChain",
      "Google Gemini",
      "Qdrant Cloud",
      "Node.js",
      "Express.js",
      "Vector Embeddings",
    ],
    link: ragChatbotImg,
    color: "#22d3ee",
    githubLink: "https://github.com/githubrishi321/grocery-rag-chatbot",
    liveLink: "https://github.com/githubrishi321/grocery-rag-chatbot",
  },
  {
    title: "AI Powered Blog Application",
    stack: "Node.js · Express.js · MongoDB · Groq API (Llama 3.3 70B) · JWT · EJS",
    description:
      "A feature-rich full-stack blogging platform that bridges modern content management with an intelligent Generative AI writing assistant, enabling authors to compose articles, upload media, interact via comments, and rewrite content dynamically across multiple tones.",
    bullets: [
      "Generative AI Tone Converter: Integrated the Groq API running Llama 3.3 70B with zero-shot prompt engineering to rewrite post content across 6 distinct styles: Professional, Casual, Social, Polite, Emojify, and Original.",
      "Security & Authentication: Architected a secure JWT authentication flow with bcrypt password hashing, session control, and strict user ownership verification for post and comment CRUD operations.",
      "Media Uploads & Storage: Implemented Multer middleware for handling multipart image uploads with format validation, linked directly to MongoDB document schemas.",
      "Full-Stack MVC Design: Structured following the MVC pattern with dynamic server-side rendering using EJS and responsive styling with Bootstrap.",
    ],
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq AI (Llama 3.3 70B)",
      "Zero-Shot Prompting",
      "JWT Auth",
      "Multer",
      "EJS",
    ],
    link: aiBlogImg,
    color: "#818cf8",
    githubLink: "https://github.com/githubrishi321/Blog-Application",
    liveLink: "https://blog-application-lzce.onrender.com/",
  },
  {
    title: "Full-Stack E-Commerce Website",
    stack: "React.js · Tailwind CSS · Axios · AWS Elastic Beanstalk · REST APIs",
    description:
      "A scalable and performant enterprise-grade e-commerce web application featuring a dynamic product catalog, interactive cart management, dynamic checkout calculations, and cloud-hosted production infrastructure.",
    bullets: [
      "Frontend State & Search: Developed an interactive React.js interface with real-time product search, instant category filtering, persistent cart state, dynamic delivery-date estimations, and live checkout payment breakdowns.",
      "RESTful API Integration: Architected asynchronous data fetching and state synchronization using Axios to connect with backend REST APIs for order placements and real-time tracking.",
      "Order Management Flow: Built comprehensive order history and delivery tracking pages displaying chronological status updates.",
      "Cloud Deployment & DevOps: Deployed and configured on AWS Elastic Beanstalk, orchestrating environment variables, load management, and production web application scaling.",
    ],
    tags: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "AWS Elastic Beanstalk",
      "Cloud Deployment",
      "RESTful APIs",
      "State Management",
    ],
    link: ecommerceImg,
    color: "#f59e0b",
    githubLink: "https://github.com/githubrishi321/ecommerce",
    liveLink: "https://github.com/githubrishi321/ecommerce",
  },
  {
    title: "Smart URL Shortener & Analytics",
    stack: "MongoDB · Express.js · React.js · Node.js · Bootstrap · bcrypt",
    description:
      "A high-throughput full-stack URL shortening platform engineered with customizable vanity aliases, link expiration rules, real-time analytics telemetry, and automated QR code generation.",
    bullets: [
      "Link Shortening & Redirection: Engineered URL encoding algorithms with custom vanity aliases, automated expiration dates, and rapid MongoDB indexed lookups for minimal redirect latency.",
      "Authentication & Rate Limiting: Built session-based user authentication using bcrypt password hashing, protected management dashboards, and IP-based rate limiting to prevent spam and link abuse.",
      "Real-Time Click Telemetry: Captured detailed click analytics measuring total visits, geographic data, referrers, and device types, visualized via an intuitive dashboard.",
      "Utility Features: Added one-click dynamic QR code generation for shortened links, social media sharing shortcuts, and instant link copying.",
    ],
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Click Analytics",
      "Rate Limiting",
      "QR Generation",
      "Bootstrap",
    ],
    link: urlShortenerImg,
    color: "#ec4899",
    githubLink: "https://github.com/githubrishi321/url-shortener",
    liveLink: "https://url-shortener-qk0w.onrender.com/",
  },
  {
    title: "Schedulr — AI Smart Scheduling Platform",
    stack: "Next.js 14 · Supabase · NextAuth v5 · Groq AI (LLaMA 3.3) · Google Calendar API · Resend",
    description:
      "A full-stack, production-ready smart scheduling platform and Calendly alternative featuring automated Google Calendar two-way synchronization, an intelligent contextual AI assistant, and automated email workflows.",
    bullets: [
      "AI Scheduling Assistant: Integrated a floating Groq AI assistant (LLaMA 3.3 70B) into the dashboard that loads user availability, upcoming meetings, and calendar events as dynamic context to answer meeting queries and suggest optimal time slots.",
      "Google Calendar Two-Way Sync: Implemented bidirectional synchronization via Google Calendar OAuth 2.0 to detect conflicting busy times, create confirmed calendar invites, and delete events upon cancellation.",
      "Full-Stack Next.js 14 & Supabase: Built with Next.js 14 App Router (SSR, Server Components, Route Handlers) and Supabase (PostgreSQL with Row Level Security, custom schemas, and real-time data).",
      "Public Booking Flow & Timezones: Created an intuitive 3-step public booking flow (Calendar ➔ Time Slots ➔ Guest Details) with automatic guest timezone detection via date-fns-tz storing appointments in UTC.",
      "Automated Transactional Emails & Cron: Integrated Resend for branded HTML booking confirmation emails and set up Vercel Cron jobs for 24-hour meeting reminders.",
    ],
    tags: [
      "Next.js 14",
      "Supabase (PostgreSQL)",
      "NextAuth.js v5",
      "Groq AI (LLaMA 3.3 70B)",
      "Google Calendar API",
      "Resend Email",
      "Tailwind CSS",
      "Vercel Cron",
    ],
    link: schedulrImg,
    color: "#6366f1",
    githubLink:
      "https://github.com/githubrishi321/schedulr-ai-smart-scheduling-platform-with-chatbot-assistant",
    liveLink: "https://githubrishi321-schedulr-ai-smart-sc.vercel.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-[#04081A] pt-24 pb-16">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">05. Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mt-2 mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base px-4">
              Detailed breakdown of full-stack engineering, Generative AI pipelines, and cloud architecture implementations.
            </p>
          </div>

          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                stack={project.stack}
                color={project.color}
                description={project.description}
                bullets={project.bullets}
                tags={project.tags}
                progress={scrollYProgress}
                range={[i * (1 / projects.length), 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  stack,
  description,
  bullets,
  url,
  color,
  tags,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      ref={container}
      className="min-h-screen sm:h-screen flex items-center justify-center sticky top-0 project-container py-6 sm:py-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${typeof window !== 'undefined' && window.innerWidth < 768 ? '0vh' : '-5vh'} + ${i * 15}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative top-0 md:-top-[10%] lg:-top-[15%] h-auto w-[95%] sm:w-[90%] md:w-[88%] lg:w-[82%] xl:w-[75%] origin-top project-card"
        whileHover={{
          y: -6,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-gray-900/95 border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Image section: compact banner on mobile, side column on desktop */}
          <div className="w-full md:w-[40%] h-[160px] sm:h-[200px] md:h-auto md:min-h-[300px] relative overflow-hidden shrink-0">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.25 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number badge */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/70 backdrop-blur-md text-white px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold border border-white/10">
              Featured Project {i + 1}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[60%] p-4 sm:p-6 md:p-8 flex flex-col justify-between max-h-[72vh] sm:max-h-[78vh] md:max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 md:mb-2">
                <div
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-6 sm:w-10 bg-gray-700" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 truncate">
                  {stack}
                </span>
              </div>

              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2 leading-snug">
                {title}
              </h3>

              {/* Description: concise on mobile, full on desktop */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-2.5 md:mb-3 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                {description}
              </p>

              {/* Mobile toggle button for technical details */}
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="md:hidden text-xs text-cyan-400 font-medium inline-flex items-center gap-1 mb-2 hover:underline cursor-pointer"
              >
                <span>{showDetails ? "Hide technical details" : "View technical details"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
                    showDetails ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Technical Highlights / Bullets */}
              <div className={`${showDetails ? "block" : "hidden"} md:block space-y-1.5 md:space-y-2 mb-3 md:mb-4`}>
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                  Technical Implementation:
                </h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              {tags && (
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 md:mt-3">
                  {tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/60 ${
                        tIndex >= 3 ? "hidden sm:inline-block" : "inline-block"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="sm:hidden text-[10px] px-1 py-0.5 text-gray-400">
                      +{tags.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-gray-800">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 sm:gap-2 text-xs font-semibold"
                  style={{ color }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Code</span>
                </motion.a>

                {/* Live Link */}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 sm:gap-2 text-xs font-semibold"
                    style={{ color }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stack: PropTypes.string,
  description: PropTypes.string.isRequired,
  bullets: PropTypes.array.isRequired,
  url: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  tags: PropTypes.array,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};
