import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const mailtoLink = `mailto:aadigandharw22@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    toast({
      title: "Opening email client...",
      description: "Your email client should open with the message.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aadigandharw22@gmail.com",
      href: "mailto:aadigandharw22@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9691472034",
      href: "tel:+919691472034",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Raipur, Chhattisgarh, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">06. CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 10 }}
                className="glass p-4 rounded-xl flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/aadigandharw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aditya-gandharv/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(174 72% 56% / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
