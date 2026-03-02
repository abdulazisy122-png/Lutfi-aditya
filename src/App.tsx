/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Cpu, 
  Globe, 
  Search,
  Code,
  Layout,
  BarChart3,
  Award,
  BookOpen
} from 'lucide-react';

// --- Data ---
const IDENTITY = {
  name: "LUTHFI ADITYA FIRMANSYAH",
  role: "POLICE OFFICER / TECH ENTHUSIAST",
  university: "Akademi Kepolisian",
  bio: "Membangun keamanan digital dengan filosofi 'High-Octane Execution'. Sebagai seorang abdi negara yang berdedikasi tinggi, saya mengintegrasikan disiplin kepolisian dengan ketajaman teknologi untuk menciptakan solusi yang aman, cepat, dan presisi.",
  philosophy: "Di dunia yang bergerak secepat kilat, presisi adalah segalanya. Saya tidak hanya membangun kode; saya membangun infrastruktur yang tangguh, sekuat integritas seorang polisi. Setiap baris kode adalah patroli keamanan, setiap optimasi adalah pengejaran keunggulan."
};

const EXPERIENCES = [
  {
    year: "2023 - PRESENT",
    role: "Cyber Security Specialist",
    company: "Kepolisian Negara Republik Indonesia",
    desc: "Memimpin inisiatif keamanan siber dan digital forensik untuk menjaga integritas data nasional."
  },
  {
    year: "2021 - 2023",
    role: "Digital Infrastructure Lead",
    company: "Akpol Tech Division",
    desc: "Mengelola infrastruktur jaringan internal dan pengembangan sistem manajemen taruna."
  },
  {
    year: "2020 - 2021",
    role: "Fullstack Developer",
    company: "Freelance / Open Source",
    desc: "Membangun berbagai aplikasi web performa tinggi menggunakan React dan Node.js."
  }
];

const PROJECTS = [
  {
    title: "SENTINEL-X",
    category: "Security Dashboard",
    tech: ["React", "Go", "Docker"],
    image: "https://picsum.photos/seed/sentinel/800/600",
    desc: "Real-time threat monitoring system dengan visualisasi data brutalist."
  },
  {
    title: "CORE-ENGINE",
    category: "Performance API",
    tech: ["Node.js", "Redis", "AWS"],
    image: "https://picsum.photos/seed/engine/800/600",
    desc: "High-throughput API gateway untuk sistem distribusi logistik."
  },
  {
    title: "POLICE-PORTAL",
    category: "Public Service",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    image: "https://picsum.photos/seed/portal/800/600",
    desc: "Portal layanan publik terintegrasi untuk pelaporan masyarakat yang cepat."
  },
  {
    title: "CYBER-PATROL",
    category: "Automation Tool",
    tech: ["Python", "Selenium", "ELK"],
    image: "https://picsum.photos/seed/patrol/800/600",
    desc: "Automated web crawler untuk deteksi dini konten ilegal di internet."
  }
];

const SERVICES = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    desc: "Membangun aplikasi web yang cepat, responsif, dan scalable dengan standar industri."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Security Audit",
    desc: "Audit keamanan menyeluruh untuk memastikan aplikasi Anda bebas dari kerentanan."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Optimization",
    desc: "Meningkatkan kecepatan load dan efisiensi runtime aplikasi hingga batas maksimal."
  }
];

const TECH_STACK = ["REACT", "NEXT.JS", "TAILWIND", "TYPESCRIPT", "GO", "AWS", "DOCKER", "PYTHON", "NODE.JS", "POSTGRESQL"];

// --- Components ---

const DeploymentSpeedTest = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTest = () => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setTime(0);
      setIsRunning(true);
      const startTime = Date.now();
      intervalRef.current = window.setInterval(() => {
        setTime((Date.now() - startTime) / 1000);
      }, 10);
      
      // Auto stop after a "random" fast time
      setTimeout(() => {
        setIsRunning(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }, 1200 + Math.random() * 1000);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 bg-black/80 backdrop-blur-md brutalist-border p-4 w-64 hidden md:block">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-display uppercase tracking-widest text-white/50 italic">Deployment Speed Test</span>
        <Activity className={`w-4 h-4 ${isRunning ? 'text-industrial-accent animate-pulse' : 'text-white/20'}`} />
      </div>
      <div className="text-4xl font-display italic font-black mb-4 tabular-nums">
        {time.toFixed(3)}s
      </div>
      <button 
        onClick={startTest}
        className="w-full bg-industrial-accent text-white font-display italic uppercase py-2 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <Zap className="w-4 h-4" />
        {isRunning ? 'DEPLOYING...' : 'START DEPLOY'}
      </button>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-[1px] flex-1 bg-industrial-line"></div>
      <span className="text-industrial-accent font-display italic uppercase tracking-tighter text-sm">{subtitle}</span>
    </div>
    <h2 className="text-6xl md:text-8xl font-display italic font-black uppercase leading-none tracking-tighter">
      {title}
    </h2>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-industrial-accent selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 industrial-grid opacity-20 pointer-events-none z-0"></div>

      {/* Navigation / Header Status */}
      <header className="fixed top-0 left-0 w-full z-50 brutalist-border border-t-0 border-x-0 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-industrial-accent flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-display italic font-bold tracking-tighter text-xl hidden sm:inline">L.A.F / UNIT-01</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-display uppercase tracking-widest text-white/70">System Status: Online</span>
          </div>
          <nav className="hidden md:flex gap-8 text-[10px] font-display uppercase tracking-widest">
            <a href="#about" className="hover:text-industrial-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-industrial-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-industrial-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-industrial-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-40 min-h-[80vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[15vw] md:text-[12vw] font-display italic font-black leading-[0.85] uppercase tracking-tighter mb-8">
              {IDENTITY.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-industrial-accent' : ''}>
                  {word}<br className="hidden md:block" />
                </span>
              ))}
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-white/60 font-light leading-tight">
                  {IDENTITY.role} — <span className="text-white">{IDENTITY.university}</span>. 
                  Spesialis dalam eksekusi teknologi performa tinggi dengan integritas tanpa kompromi.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#contact" className="bg-white text-black font-display italic uppercase px-8 py-4 hover:bg-industrial-accent hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  Get in Touch <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-24 brutalist-border border-x-0">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="PHILOSOPHY" subtitle="High-Octane Execution" />
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">
                {IDENTITY.philosophy}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-end"
            >
              <div className="brutalist-border p-8 bg-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Terminal className="w-32 h-32" />
                </div>
                <h3 className="text-industrial-accent font-display italic uppercase mb-4">Background</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {IDENTITY.bio}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Grid */}
        <section id="experience" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="EXPERIENCE" subtitle="Operational History" />
            <div className="grid gap-1">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group grid md:grid-cols-[200px_1fr_2fr] items-center p-8 brutalist-border hover:bg-white hover:text-black transition-all duration-500 cursor-default"
                >
                  <span className="font-display italic text-2xl opacity-50 group-hover:opacity-100">{exp.year}</span>
                  <div className="flex flex-col">
                    <span className="font-display italic uppercase text-xl font-bold">{exp.role}</span>
                    <span className="text-sm opacity-60 group-hover:opacity-100">{exp.company}</span>
                  </div>
                  <p className="text-lg opacity-60 group-hover:opacity-100 mt-4 md:mt-0">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase (Bento Grid) */}
        <section id="projects" className="px-6 py-24 brutalist-border border-x-0 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="PROJECTS" subtitle="Engineered Solutions" />
            <div className="grid md:grid-cols-12 gap-6">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`brutalist-border overflow-hidden group relative ${i === 0 || i === 3 ? 'md:col-span-7' : 'md:col-span-5'}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 bg-black/80 backdrop-blur-md absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-industrial-accent text-[10px] font-display uppercase tracking-widest">{project.category}</span>
                        <h4 className="text-2xl font-display italic font-black">{project.title}</h4>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/50" />
                    </div>
                    <p className="text-sm text-white/60 mb-4">{project.desc}</p>
                    <div className="flex gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-[10px] border border-white/20 px-2 py-1 uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="SERVICES" subtitle="Capabilities" />
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 brutalist-border bg-white/5 hover:border-industrial-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-industrial-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display italic font-bold uppercase mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="px-6 py-24 brutalist-border border-x-0">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-6 h-6 text-industrial-accent" />
                <h3 className="text-3xl font-display italic font-bold uppercase">Education</h3>
              </div>
              <div className="p-8 brutalist-border">
                <span className="text-industrial-accent font-display italic">2019 - 2023</span>
                <h4 className="text-xl font-bold mt-2">{IDENTITY.university}</h4>
                <p className="text-white/60 mt-2">Fokus pada Hukum, Kepemimpinan, dan Teknologi Keamanan.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-6 h-6 text-industrial-accent" />
                <h3 className="text-3xl font-display italic font-bold uppercase">Certifications</h3>
              </div>
              <div className="space-y-4">
                {["Certified Ethical Hacker (CEH)", "AWS Certified Solutions Architect", "Google Professional Cloud Security Engineer"].map((cert, i) => (
                  <div key={i} className="p-4 brutalist-border flex justify-between items-center group hover:bg-white hover:text-black transition-colors">
                    <span className="font-medium">{cert}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="CONTACT" subtitle="Establish Connection" />
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-2xl font-light mb-12 text-white/70">
                  Siap untuk membangun sesuatu yang luar biasa? Mari diskusikan bagaimana teknologi dan keamanan dapat berpadu untuk proyek Anda.
                </p>
                <div className="space-y-8">
                  <a href="mailto:contact@luthfiaditya.com" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 brutalist-border flex items-center justify-center group-hover:bg-industrial-accent transition-colors">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-display uppercase tracking-widest text-white/40">Email</span>
                      <span className="text-2xl font-display italic">contact@luthfiaditya.com</span>
                    </div>
                  </a>
                  <div className="flex gap-4">
                    {[
                      { icon: <Linkedin />, label: "LinkedIn" },
                      { icon: <Github />, label: "GitHub" },
                      { icon: <Instagram />, label: "Instagram" }
                    ].map((social, i) => (
                      <a key={i} href="#" className="w-16 h-16 brutalist-border flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-display uppercase tracking-widest text-white/40">Name</label>
                    <input type="text" className="w-full bg-white/5 brutalist-border p-4 focus:border-industrial-accent outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-display uppercase tracking-widest text-white/40">Email</label>
                    <input type="email" className="w-full bg-white/5 brutalist-border p-4 focus:border-industrial-accent outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-display uppercase tracking-widest text-white/40">Message</label>
                  <textarea rows={6} className="w-full bg-white/5 brutalist-border p-4 focus:border-industrial-accent outline-none transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-industrial-accent text-white font-display italic uppercase py-6 text-xl hover:bg-white hover:text-black transition-all duration-500">
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Marquee */}
      <footer className="brutalist-border border-x-0 border-b-0 py-12 overflow-hidden bg-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-6xl md:text-8xl font-display italic font-black text-white/10 hover:text-industrial-accent transition-colors cursor-default">
                {tech}
              </span>
              <div className="w-4 h-4 bg-industrial-accent mx-8 rotate-45"></div>
            </div>
          ))}
        </div>
        <div className="mt-12 px-6 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[10px] font-display uppercase tracking-widest">
          <span>© 2026 LUTHFI ADITYA FIRMANSYAH. ALL RIGHTS RESERVED.</span>
          <span>BUILT FOR HIGH-PERFORMANCE EXECUTION</span>
          <span>LATITUDE: -6.2088 / LONGITUDE: 106.8456</span>
        </div>
      </footer>

      {/* Widgets */}
      <DeploymentSpeedTest />
    </div>
  );
}
