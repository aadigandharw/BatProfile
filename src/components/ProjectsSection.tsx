import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Option AlgoTrading",
    description: "Full-stack algorithmic trading platform with broker API integration, authentication, and real-time data processing.",
    tech: ["Django", "React", "PostgreSQL", "REST API", "SMTP"],
    features: [
      "Integrated broker API with Django backend",
      "Implemented Authentication & Django REST Framework",
      "Advanced permissions, pagination & mailing system",
    ],
    type: "Full Stack",
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
    type: "Live Project",
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
    github: "https://github.com/aadigandharw",
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
    github: "https://github.com/aadigandharw",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background */}
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

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-all group h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="text-primary" size={24} />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="text-xs text-primary font-mono mb-2 block">{project.type}</span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground/80 text-sm flex items-start gap-2">
                      <span className="text-primary">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
