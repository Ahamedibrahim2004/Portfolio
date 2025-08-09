"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, GraduationCap, Briefcase, Code, Brain, Phone, MapPin, Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypingEffect } from "@/components/typing-effect"
import { ResumeViewer } from "@/components/resume-viewer"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [heroRef, heroVisible] = useScrollAnimation(0.1)
  const [aboutRef, aboutVisible] = useScrollAnimation(0.1)
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1)
  const [skillsRef, skillsVisible] = useScrollAnimation(0.1)
  const [contactRef, contactVisible] = useScrollAnimation(0.1)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const roles = ["Data Scientist", "AI Enthusiast", "ML Developer"]

  const skillsData = [
    { name: "Python", level: 90, color: "blue" },
    { name: "Java", level: 75, color: "orange" },
    { name: "JavaScript", level: 80, color: "yellow" },
    { name: "HTML", level: 95, color: "red" },
    { name: "CSS", level: 90, color: "blue" },
    { name: "Bootstrap", level: 85, color: "purple" },
    { name: "Web Design", level: 80, color: "pink" },
    { name: "Data Science", level: 88, color: "green" },
    { name: "Machine Learning", level: 85, color: "indigo" },
    { name: "Front End Coding", level: 82, color: "cyan" },
    { name: "Problem-Solving", level: 92, color: "emerald" },
    { name: "Tableau", level: 70, color: "rose" },
    { name: "MongoDB", level: 65, color: "lime" },
    { name: "SQL", level: 80, color: "teal" },
    { name: "Big Data", level: 70, color: "amber" },
    { name: "A.I (learning)", level: 70, color: "violet" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black text-slate-800 dark:text-slate-200 scroll-smooth">
      {/* Header with scroll effect */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Ahamed Ibrahim M</h1>
          <nav className="hidden md:flex gap-6 items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex gap-4 items-center">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:sathikibrahim143@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section with parallax effect */}
      <section
        id="hero"
        ref={heroRef}
        className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`, // Reduced parallax for smoother feel
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 dark:from-blue-950 dark:to-purple-950 dark:opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`mb-8 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl hover:scale-105 transition-all duration-500 animate-float">
              <Image
                src="/profile.png"
                alt="Ahamed Ibrahim M"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1
              className={`text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-all duration-1000 delay-200 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Hi, I'm Ahamed Ibrahim M
            </h1>
            <p
              className={`text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <TypingEffect words={roles} />
            </p>
            <div
              className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-600 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Badge variant="secondary" className="px-4 py-2 animate-pulse-slow">
                <Brain className="w-4 h-4 mr-2" />
                Data Science
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 animate-pulse-slow">
                <Code className="w-4 h-4 mr-2" />
                Machine Learning
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 animate-pulse-slow">
                <GraduationCap className="w-4 h-4 mr-2" />
                Computer Science
              </Badge>
            </div>
            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-800 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="hover:scale-105 transition-all duration-300 hover:shadow-md"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </a>
              </Button>
              <ResumeViewer />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100 transition-all duration-1000 ${
              aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p
              className={`text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Self-motivated and hardworking graduate seeking an opportunity to work in a challenging environment to
              prove my coding skills and utilize my knowledge of various databases for the growth of the organization.
              My objective is to be a part of an organization where I can fully utilize my skills in programming
              languages to make a significant contribution to the success of the employer, while at the same time
              pursuing my individual growth.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card
                className={`hover:shadow-lg hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-white to-slate-50 dark:from-gray-700 dark:to-gray-800 ${
                  aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800 dark:text-slate-100">
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-blue-400 dark:border-blue-600 animate-slide-in-left">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">MCA (Pursuing)</h4>
                    <p className="text-slate-600 dark:text-slate-300">Measi Institute Of Information Technology</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Current</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-400 dark:border-blue-600 animate-slide-in-left delay-100">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">Data Science & AI (Pursuing)</h4>
                    <p className="text-slate-600 dark:text-slate-300">Datamites Institute</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Current</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-400 dark:border-blue-600 animate-slide-in-left delay-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">B.Sc Computer Science</h4>
                    <p className="text-slate-600 dark:text-slate-300">The New College</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2021 - 2024 (69%)</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-400 dark:border-blue-600 animate-slide-in-left delay-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">Secondary School</h4>
                    <p className="text-slate-600 dark:text-slate-300">Qalam international matric hr. sec. school</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2020-2021</p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`hover:shadow-lg hover:scale-[1.02] transition-all duration-500 delay-200 bg-gradient-to-br from-white to-slate-50 dark:from-gray-700 dark:to-gray-800 ${
                  aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800 dark:text-slate-100">
                    <Briefcase className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-green-400 dark:border-green-600 animate-slide-in-right">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">Software Development Intern</h4>
                    <p className="text-slate-600 dark:text-slate-300">Evolve IT Solution Company</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">1 Month Internship</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                      Gained practical experience in software development and worked on real-world projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-16 px-4 bg-slate-50 dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/20"></div>
        <div className="container mx-auto relative z-10">
          <h2
            className={`text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100 transition-all duration-1000 ${
              projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Machine Learning Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Customer Transaction Prediction",
                description:
                  "Identify which customers will make a specific transaction in the future, irrespective of the amount of money transacted. Built the logic for a streamlined ad-serving platform that scaled.",
                domain: "Banking",
                icon: Brain,
                color: "purple",
                tags: ["MACHINE LEARNING", "DATA SCIENCE", "Python", "Predictive Modeling"],
                delay: "delay-100",
              },
              {
                title: "Hospital Stay Prediction",
                description:
                  "Create a report stating the performance of multiple models on this data and suggest the best model for production. Dataset includes hospital type, city, region, ward, ward type, department, extra rooms, bed grade, admission type, severity of illness, visitors, age, admission deposit.",
                domain: "Healthcare",
                icon: Brain,
                color: "blue",
                tags: ["ML", "Healthcare AI", "Predictive Analytics", "Python"],
                delay: "delay-200",
              },
              {
                title: "Cell Phone Price Prediction",
                description:
                  "Machine Learning model to predict cell phone prices based on features and specifications.",
                domain: "E-commerce",
                icon: Brain,
                color: "green",
                tags: ["ML", "Regression", "Python", "Data Analysis"],
                delay: "delay-300",
              },
              {
                title: "WalkRunClass",
                description:
                  "The dataset comprises the readings of motion sensors recorded while users executed typical daily activities. The attributes correspond to raw sensor readings.",
                domain: "Activity Recognition",
                icon: Brain,
                color: "orange",
                tags: ["ML", "Sensor Data", "Classification", "Python"],
                delay: "delay-400",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-white to-slate-50 dark:from-gray-700 dark:to-gray-800 animate-bounce-in ${project.delay} ${
                  projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center text-${project.color}-600 dark:text-${project.color}-400`}>
                    <project.icon className="w-5 h-5 mr-2" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Domain:</span> {project.domain}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="animate-fade-in-tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-all duration-300 bg-transparent hover:bg-accent hover:text-accent-foreground"
                  >
                    <a
                      href="https://github.com/Ahamedibrahim2004/Data-science-project-"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100 transition-all duration-1000 ${
              skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 transition-all duration-700 ${
                    skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className={`h-2.5 rounded-full bg-${skill.color}-600 dark:bg-${skill.color}-400 animate-skill-bar`}
                      style={{ width: `${skillsVisible ? skill.level : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-16 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2
            className={`text-3xl font-bold mb-8 transition-all duration-1000 ${
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-xl text-slate-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm always interested in new opportunities and collaborations in data science and AI. Let's connect and
            discuss how we can work together!
          </p>
          <div
            className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-400 ${
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                href: "mailto:sathikibrahim143@gmail.com",
                icon: Mail,
                text: "Email Me",
                display: "sathikibrahim143@gmail.com",
                delay: "delay-100",
              },
              {
                href: "https://www.linkedin.com/in/ahamed-ibrahim-273733325",
                icon: Linkedin,
                text: "LinkedIn",
                display: "Ahamed Ibrahim",
                delay: "delay-200",
              },
              {
                href: "https://github.com/Ahamedibrahim2004/Data-science-project-",
                icon: Github,
                text: "GitHub",
                display: "Ahamedibrahim2004",
                delay: "delay-300",
              },
              {
                href: "tel:+919003750173",
                icon: Phone,
                text: "Call Me",
                display: "+91 9003750173",
                delay: "delay-400",
              },
            ].map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                className={`text-white border-white hover:bg-white hover:text-slate-800 bg-transparent hover:scale-110 transition-all duration-300 animate-contact-bounce ${contact.delay}`}
                asChild
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <contact.icon className="w-4 h-4 mr-2" />
                  {contact.text}
                </a>
              </Button>
            ))}
          </div>

          <div
            className={`grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8 text-slate-300 transition-all duration-1000 delay-600 ${
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-2 animate-pulse-slow">
              <Mail className="w-5 h-5" />
              <span>sathikibrahim143@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 animate-pulse-slow">
              <Phone className="w-5 h-5" />
              <span>+91 9003750173</span>
            </div>
            <div className="flex items-center justify-center gap-2 animate-pulse-slow md:col-span-2">
              <MapPin className="w-5 h-5" />
              <span>5/58, paruthikara Street, keelakarai, Ramanathapuram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 dark:bg-black">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Ahamed Ibrahim M. All rights reserved.</p>
          <p className="mt-2">Built with React, Next.js, and Tailwind CSS</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/ahamed-ibrahim-273733325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Ahamedibrahim2004/Data-science-project-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gray-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:sathikibrahim143@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+919003750173" className="text-slate-400 hover:text-green-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
