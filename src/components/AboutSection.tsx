import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, Code, Layers } from 'lucide-react';

const highlights = [
  { icon: Brain, label: 'Machine Learning' },
  { icon: Database, label: 'Data Engineering' },
  { icon: Code, label: 'Full-Stack AI' },
  { icon: Layers, label: 'Multimodal Systems' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="card-elevated p-4 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a graduate student in Artificial Intelligence at the University at Buffalo with a strong focus on building <span className="text-foreground font-medium">practical, end-to-end AI and data systems</span>. My work sits at the intersection of <span className="text-foreground font-medium">data science, applied machine learning, multimodal AI, and data engineering</span>, where I enjoy transforming raw data into scalable, interpretable, and deployable solutions.
            </p>
            <p>
              Through research and industry internships, I have designed systems that combine <span className="text-foreground font-medium">structured data pipelines, deep learning models, large language models, and vision-language models</span> to solve real-world problems. I am particularly interested in hybrid AI systems that blend <span className="text-foreground font-medium">symbolic reasoning, machine learning, and multimodal perception</span> to improve reliability and decision-making.
            </p>
            <p>
              I enjoy working on problems that require both analytical depth and engineering rigor, and I thrive in collaborative environments where ideas move from experimentation to production. I am actively seeking opportunities in <span className="text-primary font-medium">Data Science, Applied ML, and AI Engineering</span> where I can contribute to impactful, real-world systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
