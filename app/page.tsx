"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Radio,
  Layers3,
  Rocket,
  Wrench,
  Box,
  Code2,
  CircuitBoard,
  ExternalLink,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AeroDuel",
    category: "Embedded Systems + Real-Time Product",
    description:
      "A real-time RC aerial combat system using onboard vision, wireless communication, and synchronized app feedback. Built to connect hardware, firmware, and software into one interactive experience.",
    tags: ["ESP32", "OpenMV", "LoRa", "Firmware", "System Design"],
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80",
    links: [
      { label: "GitHub", href: "https://github.com/Aeroduel" },
      { label: "Demo", href: "https://lnkd.in/gpDyZxcH" },
    ],
    featured: true,
  },
  {
    title: "Record Player",
    category: "Interactive Frontend Experience",
    description:
      "A retro-inspired music experience that blends vinyl-style visuals with modern streaming controls and animated playback behavior.",
    tags: ["JavaScript", "UI Animation", "YouTube API", "Responsive UI"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    links: [{ label: "GitHub", href: "https://github.com/maxnchief/dj-turntable" }],
  },
  {
    title: "Tourist Sim",
    category: "Gameplay + Procedural Logic",
    description:
      "A procedurally generated maze game built with Python, Flask, and JavaScript, focused on logic, progression, and interactive exploration.",
    tags: ["Python", "Flask", "JavaScript", "Game Logic"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    links: [{ label: "GitHub", href: "https://github.com/chepeniv/tourist_sim" }],
  },
  {
    title: "Seinfeld Quotes API",
    category: "Backend + Data Workflow",
    description:
      "A custom API project centered around ingesting quote data, shaping clean endpoints, and serving structured content through a backend workflow.",
    tags: ["Python", "PostgreSQL", "APIs", "Data Loading"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    links: [{ label: "GitHub", href: "https://github.com/SpaceDandy15" }],
  },
  {
    title: "3D Printed Systems Lab",
    category: "Future Project Lane",
    description:
      "A dedicated space for custom 3D printed builds, embedded devices, product prototypes, and physical projects I design and document myself.",
    tags: ["3D Printing", "CAD", "Embedded", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
    links: [{ label: "Coming Soon", href: "#" }],
  },
];

const skillGroups = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Flask", "REST APIs", "PostgreSQL"],
  },
  {
    icon: <CircuitBoard className="h-5 w-5" />,
    title: "Embedded",
    items: ["ESP32", "LoRa", "OpenMV", "C/C++", "Serial Communication"],
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: "Build Direction",
    items: ["3D Printing", "Prototype Design", "Interactive Systems", "Product Thinking"],
  },
];

const focusAreas = [
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Real-world systems",
    text: "I like software that drives something physical, interactive, or measurable in the real world.",
  },
  {
    icon: <Radio className="h-5 w-5" />,
    title: "Connected devices",
    text: "Wireless communication, device coordination, feedback loops, and turning prototypes into experiences.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Build-first mindset",
    text: "I enjoy going from idea to prototype, combining software, electronics, and fabrication into one workflow.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">{body}</p>
    </div>
  );
}

export default function MalikPortfolioReact() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-6%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[25%] h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">Malik Vance</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Full-Stack Developer · Embedded Builder
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Software · Embedded Systems · 3D Printed Projects
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                I build products where code,
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  {" "}hardware,
                </span>
                and physical design meet.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I’m Malik Vance — a developer focused on full-stack apps, embedded systems,
                and hands-on technical builds. I want this portfolio to showcase more than websites:
                it should reflect interactive systems, 3D printed projects, prototypes, and the kind
                of work that turns ideas into something real.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href="#projects">
                    Explore Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href="docs/Resume.pdf" target="_blank" rel="noreferrer">
                    View Resume
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Focus", value: "Embedded + Product Systems" },
                  { label: "Build Style", value: "Prototype to polished demo" },
                  { label: "Next Layer", value: "3D printing + personal builds" },
                ].map((item) => (
                  <Card key={item.label} className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
                    <CardContent className="p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="images/headshot.jpg"
                      alt="Creative technology workspace"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                        <Cpu className="h-4 w-4" />
                        Systems Builder
                      </div>
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">Software with a physical layer.</h3>
                      <p className="mt-3 max-w-md text-sm leading-7 text-slate-200/90">
                        This portfolio shall showcase my journey of building interactive systems that blend software, hardware, and physical design. It’s meant to reflect the kind of work I want to do: projects that go beyond the screen and into real-world experiences!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Work"
              title="Projects that show how I like to build"
              body="This layout is meant to support software projects, embedded systems, and eventually your own 3D printed product builds without making the site feel cramped or generic."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <Card className="group h-full overflow-hidden rounded-[1.75rem] border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                        {project.category}
                      </div>
                      {project.featured && (
                        <div className="absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                          Featured
                        </div>
                      )}
                    </div>
                    <CardContent className="flex h-full flex-col p-6">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3 pt-2">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                          >
                            {link.label} <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About"
              title="More than a web portfolio"
              body="This redesign leans into your strongest differentiator: you do software, but you also think in systems, devices, interaction, and physical builds."
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="p-7 sm:p-8">
                  <p className="text-lg leading-8 text-slate-200">
                    I’m interested in building systems that feel alive — software connected to hardware,
                    interfaces with feedback loops, products that move beyond the screen, and prototypes
                    that can evolve into something tangible. That includes embedded systems, interactive tools,
                    and a growing lane of 3D printed personal projects I want to share here too.
                  </p>

                  <div className="mt-8 grid gap-4">
                    {focusAreas.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-slate-900/60 p-5"
                      >
                        <div className="mb-3 flex items-center gap-3 text-cyan-200">
                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                            {item.icon}
                          </div>
                          <h3 className="text-base font-semibold text-white">{item.title}</h3>
                        </div>
                        <p className="text-sm leading-7 text-slate-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur">
                  <CardContent className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                      Positioning
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">
                      Full-Stack Developer + Embedded Builder + Prototype Maker
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      That combo gives your site a much stronger identity than a standard junior developer portfolio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur">
                  <CardContent className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      Future content lane
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-white">3D printed project pages</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      You can use this design system to add detailed case studies for printed parts, CAD iterations,
                      wiring diagrams, firmware notes, photos, demo videos, and finished builds.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Capabilities"
              title="The stack behind the builds"
              body="This section is structured to make it easy for recruiters and collaborators to see both your software range and your hardware direction at a glance."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/5 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                        {group.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/50 backdrop-blur">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    Contact
                  </p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Want to build something that mixes code, systems, and real-world hardware?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                    I’m interested in software roles, embedded systems work, and opportunities where product thinking,
                    prototyping, and practical engineering all come together.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Button asChild size="lg" className="rounded-full px-6">
                    <a href="mailto:MalikOVance@Atlasschool.com">
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                    <a href="https://github.com/SpaceDandy15" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                    <a href="https://www.linkedin.com/in/malik-vance" target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <p>© 2026 Malik Vance — software, systems, prototypes, and physical builds.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/SpaceDandy15" target="_blank" rel="noreferrer" className="transition hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/malik-vance" target="_blank" rel="noreferrer" className="transition hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:MalikOVance@Atlasschool.com" className="transition hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
