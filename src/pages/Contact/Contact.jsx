import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Linkedin, Github, FileText, Code2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    const form = new FormData();
    form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Message for Rishikesh");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! I will reply soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rishikesh-c-rpc/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/githubrishi321",
      icon: Github,
      color: "hover:text-white",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/rishichavanrpc/",
      icon: Code2,
      color: "hover:text-amber-400",
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1SVHFOyInUE7phC_f22BO35hlZm6N52oC/view?usp=sharing",
      icon: FileText,
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <main className="pt-24 lg:pt-16 bg-[#04081A] text-white min-h-screen pb-16">
      <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">06. Contact</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let's Build Something Together
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  I'm actively seeking Software Engineer, Full Stack Developer, and GenAI / RAG Engineer roles. Have an opportunity or want to collaborate? Drop me a message!
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 border border-purple-500/20 p-3.5 rounded-xl">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-300">Email</h3>
                    <a
                      href="mailto:rishichavanrpc64@gmail.com"
                      className="text-white hover:text-cyan-300 text-sm sm:text-base font-medium transition-colors"
                    >
                      rishichavanrpc64@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3.5 rounded-xl">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-300">Phone</h3>
                    <a
                      href="tel:+918275242744"
                      className="text-white hover:text-cyan-300 text-sm sm:text-base font-medium transition-colors"
                    >
                      +91-8275242744
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 border border-pink-500/20 p-3.5 rounded-xl">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-300">Location</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social profile quick links */}
              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                  Connect & Socials
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 flex items-center gap-2 text-xs font-medium transition-all hover:scale-105 hover:border-cyan-500/40 ${item.color}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-gray-900/60 p-8 rounded-2xl shadow-2xl border border-gray-800/80">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500`}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } focus:border-cyan-500 focus:outline-none transition-colors resize-none text-white placeholder-gray-500`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center text-sm ${
                    status.includes("successfully")
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
