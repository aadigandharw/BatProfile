import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Code2, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, label: "Tech Stack", value: "React + Django" },
    { icon: Briefcase, label: "Experience", value: "Full Stack Dev" },
    { icon: MapPin, label: "Location", value: "Raipur, India" },
    { icon: Calendar, label: "Graduated", value: "2024" },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01. ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> currently 
              working at <span className="text-foreground font-semibold">YashviTech IT Solution Pvt Ltd</span>, 
              where I build robust web applications using React.js, Python, and Django.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a B.Tech in Computer Science from Yugantar Institute of Technology & Management, 
              I specialize in creating scalable solutions with clean code and intuitive user experiences. 
              My expertise spans from crafting responsive UIs to implementing secure backend architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on production projects including <span className="text-primary">AlgoTrading platforms</span>, 
              <span className="text-primary"> enterprise solutions</span>, and <span className="text-primary">real-time communication apps</span>. 
              I'm always eager to tackle new challenges and learn emerging technologies.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass p-6 rounded-2xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{label}</p>
                <p className="text-lg font-semibold text-foreground">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
