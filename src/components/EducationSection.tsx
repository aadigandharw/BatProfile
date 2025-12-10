import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Yugantar Institute of Technology & Management",
    year: "2024",
    grade: "CGPA: Above 7.5 every semester",
    icon: GraduationCap,
  },
  {
    degree: "12th (PCM)",
    field: "Physics, Chemistry, Mathematics",
    institution: "Govt. Higher Secondary School (CGBSE)",
    year: "2019-2020",
    grade: "67.5%",
    icon: Award,
  },
  {
    degree: "10th Standard",
    field: "General Studies",
    institution: "Govt. Higher Secondary School (CGBSE)",
    year: "2017-2018",
    grade: "74.9%",
    icon: Award,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">05. EDUCATION</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <edu.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                      <Calendar size={14} />
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-primary/80 font-mono">{edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
