import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "YashviTech IT Solution Pvt Ltd",
    role: "Full Stack Developer",
    period: "May 2025 – Present",
    location: "Raipur, C.G",
    description: [
      "Building full-stack web applications using React.js, Python, and Django",
      "Working on API integration, responsive UI, and optimizing backend logic",
      "Implemented REST APIs, authentication flows, and database operations",
    ],
    current: true,
  },
  {
    company: "Infosys SpringBoard",
    role: "Python Foundation Certification",
    period: "May 2025 – June 2025",
    location: "Remote",
    description: [
      "Learned core Python concepts, functions, modules, libraries, and OOPs",
      "Covered best practices, coding style, and hands-on Python assignments",
    ],
    current: false,
  },
  {
    company: "Digital Shakha",
    role: "Web Design & Development (Vocational Training)",
    period: "June 2022 – July 2022",
    location: "Bhilai, Chhattisgarh",
    description: [
      "Learned HTML, CSS, JavaScript, Bootstrap and built basic projects",
      "Gained backend fundamentals with MySQL and phpMyAdmin database handling",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02. EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass p-6 rounded-2xl hover:border-primary/30 transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
