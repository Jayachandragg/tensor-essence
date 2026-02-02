import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-heading mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8 mx-auto" />

          <p className="text-lg text-muted-foreground mb-10">
            Open to opportunities in <span className="text-primary font-medium">Data Science</span>, <span className="text-primary font-medium">Applied Machine Learning</span>, and <span className="text-primary font-medium">AI Engineering</span>.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Buffalo, NY</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:galdajayachandra@gmail.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://github.com/Jayachandragg" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/jaya-chandra-galda-077aa624b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
