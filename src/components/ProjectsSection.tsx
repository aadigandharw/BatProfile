import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, ChevronDown } from "lucide-react";

import projectHominex from "@/assets/project-hominex.jpg";
import projectAlgotrading from "@/assets/project-algotrading.jpg";
import projectEnterprise from "@/assets/project-enterprise.jpg";
import projectShreetalk from "@/assets/project-shreetalk.jpg";
import projectBrightfuture from "@/assets/project-brightfuture.jpg";
import projectSpotify from "@/assets/project-spotify.jpg";
import projectTodolist from "@/assets/project-todolist.jpg";
import projectBooks from "@/assets/project-books.jpg";
import projectTeamflow from "@/assets/project-teamflow.jpg";
import projectLibrary from "@/assets/project-library.jpg";
import projectQuiz from "@/assets/project-quiz.jpg";
import projectMarksheet from "@/assets/project-marksheet.jpg";

const projects = [
  {
    title: "Hominex – AI Home Layout Generator",
    description: "AI-powered platform that generates complete home layouts based on user inputs like plot size, budget, and requirements.",
    tech: ["React", "Django", "Python", "REST API", "AI Integration"],
    features: [
      "AI-based home layout generation using user-defined inputs",
      "Interactive React frontend with modern UI",
      "Django backend with REST APIs",
      "Pre-generated layout templates",
      "Dashboard for managing generated layouts",
    ],
    type: "Full Stack",
    image: projectHominex,
  },
  {
    title: "Option AlgoTrading",
    description: "Full-stack algorithmic trading platform with broker API integration, authentication, and real-time data processing.",
    tech: ["Django", "React", "PostgreSQL", "REST API", "SMTP"],
    features: [
      "Integrated broker API with Django backend",
      "Authentication & Django REST Framework",
      "Advanced permissions, pagination & mailing system",
    ],
    type: "Full Stack",
    image: projectAlgotrading,
  },
  {
    title: "TeamFlow Suite",
    description: "Team collaboration and project management suite with kanban boards and real-time updates.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    features: [
      "Kanban board for project management",
      "Team collaboration features",
      "Modern TypeScript codebase",
    ],
    type: "Full Stack",
    github: "https://github.com/aadigandharw/teamflow-suite",
    image: projectTeamflow,
  },
  {
    title: "Sr Enterprises",
    description: "Enterprise solution for business operations with comprehensive CRUD functionality and optimized workflows.",
    tech: ["React", "Material UI", "Django", "Serializers"],
    features: [
      "Full-stack development on frontend and backend",
      "Material UI components for modern interface",
      "Built Serializers and CRUD APIs",
    ],
    type: "Full Stack",
    image: projectEnterprise,
  },
  {
    title: "ShreeTalk",
    description: "Real-time communication platform with advanced React patterns and seamless Google Sheets integration.",
    tech: ["React", "React Router", "Hooks", "Google Sheets API"],
    features: [
      "Built frontend UI using React and libraries",
      "Applied advanced React concepts",
      "Integrated Google Sheets API for forms",
    ],
    type: "Live Project",
    github: "https://github.com/aadigandharw/ShreeTalk",
    live: "https://shreetalk.in/",
    image: projectShreetalk,
  },
  {
    title: "Spotify Clone",
    description: "A fully functional Spotify UI clone with playlist management, playback controls, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Pixel-perfect Spotify UI recreation",
      "Responsive layout for all devices",
      "Built during YashviTech internship",
    ],
    type: "Frontend Project",
    github: "https://github.com/aadigandharw/SpotiiFy_Clone",
    image: projectSpotify,
  },
  {
    title: "Bright Future",
    description: "Responsive multi-page educational website showcasing modern frontend design patterns.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "Created responsive multi-page website",
      "Explored frontend design patterns",
      "Deployed on GitHub Pages",
    ],
    type: "Personal Project",
    github: "https://github.com/aadigandharw/Bright_Future",
    live: "https://aadigandharw.github.io/Bright_Future/",
    image: projectBrightfuture,
  },
  {
    title: "Todo List App",
    description: "A full-featured task management application built with PHP for backend CRUD operations.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Full CRUD task management",
      "PHP backend with MySQL database",
      "Clean minimal user interface",
    ],
    type: "Full Stack",
    github: "https://github.com/aadigandharw/todo_list",
    image: projectTodolist,
  },
  {
    title: "Books Management System",
    description: "A comprehensive book management system with catalog browsing, search, and admin features.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Book catalog with search and filters",
      "Admin dashboard for CRUD operations",
      "PHP backend with database integration",
    ],
    type: "Full Stack",
    github: "https://github.com/aadigandharw/Books_ManageMent",
    image: projectBooks,
  },
  {
    title: "Library Management System",
    description: "Python-based library management system with book tracking and user management.",
    tech: ["Python", "SQLite", "CLI"],
    features: [
      "Book tracking and management",
      "User management system",
      "MIT Licensed open source project",
    ],
    type: "Python Project",
    github: "https://github.com/aadigandharw/library_management",
    image: projectLibrary,
  },
  {
    title: "Quiz Game",
    description: "An interactive quiz game with multiple choice questions, scoring, and progress tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    features: [
      "Multiple choice quiz interface",
      "Score tracking and results",
      "Interactive and engaging design",
    ],
    type: "Frontend Project",
    github: "https://github.com/aadigandharw/Quiz-game",
    image: projectQuiz,
  },
  {
    title: "Marksheet Generator",
    description: "Web-based marksheet generator with login, student data input, and dynamic result generation.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Login/registration with JS validation",
      "Dynamic result generation",
      "Student data form input",
    ],
    type: "Frontend Project",
    github: "https://github.com/aadigandharw/MarksheetPage",
    image: projectMarksheet,
  },
];

const INITIAL_COUNT = 6;

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03. PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="glass rounded-2xl hover:border-primary/30 transition-all group h-full flex flex-col overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs text-primary font-mono mb-2 block">{project.type}</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Less Button */}
        {projects.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-primary font-semibold hover:border-primary/50 transition-all"
            >
              {showAll ? "Show Less" : `Show All Projects (${projects.length})`}
              <ChevronDown
                size={18}
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
