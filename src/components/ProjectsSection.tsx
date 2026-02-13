import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

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
    type: "Full Stack",
    image: projectHominex,
  },
  {
    title: "Option AlgoTrading",
    description: "Full-stack algorithmic trading platform with broker API integration, authentication, and real-time data processing.",
    tech: ["Django", "React", "PostgreSQL", "REST API", "SMTP"],
    type: "Full Stack",
    image: projectAlgotrading,
  },
  {
    title: "TeamFlow Suite",
    description: "Team collaboration and project management suite with kanban boards and real-time updates.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    type: "Full Stack",
    github: "https://github.com/aadigandharw/teamflow-suite",
    image: projectTeamflow,
  },
  {
    title: "Sr Enterprises",
    description: "Enterprise solution for business operations with comprehensive CRUD functionality and optimized workflows.",
    tech: ["React", "Material UI", "Django", "Serializers"],
    type: "Full Stack",
    image: projectEnterprise,
  },
  {
    title: "ShreeTalk",
    description: "Real-time communication platform with advanced React patterns and seamless Google Sheets integration.",
    tech: ["React", "React Router", "Hooks", "Google Sheets API"],
    type: "Live Project",
    github: "https://github.com/aadigandharw/ShreeTalk",
    live: "https://shreetalk.in/",
    image: projectShreetalk,
  },
  {
    title: "Spotify Clone",
    description: "A fully functional Spotify UI clone with playlist management, playback controls, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Frontend Project",
    github: "https://github.com/aadigandharw/SpotiiFy_Clone",
    image: projectSpotify,
  },
  {
    title: "Bright Future",
    description: "Responsive multi-page educational website showcasing modern frontend design patterns.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    type: "Personal Project",
    github: "https://github.com/aadigandharw/Bright_Future",
    live: "https://aadigandharw.github.io/Bright_Future/",
    image: projectBrightfuture,
  },
  {
    title: "Todo List App",
    description: "A full-featured task management application built with PHP for backend CRUD operations.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    type: "Full Stack",
    github: "https://github.com/aadigandharw/todo_list",
    image: projectTodolist,
  },
  {
    title: "Books Management System",
    description: "A comprehensive book management system with catalog browsing, search, and admin features.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    type: "Full Stack",
    github: "https://github.com/aadigandharw/Books_ManageMent",
    image: projectBooks,
  },
  {
    title: "Library Management System",
    description: "Python-based library management system with book tracking and user management.",
    tech: ["Python", "SQLite", "CLI"],
    type: "Python Project",
    github: "https://github.com/aadigandharw/library_management",
    image: projectLibrary,
  },
  {
    title: "Quiz Game",
    description: "An interactive quiz game with multiple choice questions, scoring, and progress tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    type: "Frontend Project",
    github: "https://github.com/aadigandharw/Quiz-game",
    image: projectQuiz,
  },
  {
    title: "Marksheet Generator",
    description: "Web-based marksheet generator with login, student data input, and dynamic result generation.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Frontend Project",
    github: "https://github.com/aadigandharw/MarksheetPage",
    image: projectMarksheet,
  },
];

const INITIAL_COUNT = 6;

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 * i,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass rounded-2xl hover:border-primary/40 transition-all duration-500 group h-full flex flex-col overflow-hidden relative"
      style={{ perspective: "1000px" }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "0 0 40px hsl(174 72% 56% / 0.15), inset 0 0 40px hsl(174 72% 56% / 0.05)"
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
        
        {/* Floating action buttons */}
        <motion.div
          className="absolute top-3 right-3 flex gap-2"
          animate={{ y: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-background/80 backdrop-blur-md rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={16} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-background/80 backdrop-blur-md rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </motion.div>

        {/* Type badge */}
        <motion.span
          className="absolute bottom-3 left-4 text-xs font-mono px-3 py-1 bg-primary/20 backdrop-blur-md text-primary rounded-full border border-primary/30"
          animate={{ x: isHovered ? 0 : -5, opacity: isHovered ? 1 : 0.8 }}
        >
          {project.type}
        </motion.span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <motion.h3
          className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack with stagger animation */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/50">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded-full border border-primary/20"
              whileHover={{ scale: 1.1, backgroundColor: "hsl(174 72% 56% / 0.2)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

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
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Show More / Less Button */}
        {projects.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 glass rounded-xl text-primary font-semibold hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(174 72% 56% / 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : `Show All Projects (${projects.length})`}
              <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
