import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient inline-block mb-2">
              AG<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-start">
              Designed & Built with <Heart className="text-primary" size={14} /> by Aditya Gandharv
            </p>
            <p className="text-muted-foreground/60 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/aadigandharw", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-gandharv/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aadigandharw22@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-3 glass rounded-lg text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
