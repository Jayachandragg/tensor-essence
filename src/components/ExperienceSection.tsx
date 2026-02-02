import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'University at Buffalo',
    type: 'research',
    points: [
      'Designed and implemented an end-to-end multimodal AI pipeline to analyze adult–child interaction strategies from video data',
      'Built Python-based ETL pipelines to convert ELAN (.eaf) annotations into structured JSON and generate topic-level timestamps',
      'Integrated LLM-based semantic validation and vision-language models to improve reliability and reproducibility',
    ],
  },
  {
    title: 'Computer Vision Intern',
    company: 'Digitap.AI',
    type: 'work',
    points: [
      'Deployed real-time YOLOv8-based face, eye, and mask detection systems',
      'Designed 3D face alignment improving verification accuracy',
      'Built optimized CV pipelines for production environments',
    ],
  },
  {
    title: 'Research Intern',
    company: 'IIT Roorkee',
    type: 'research',
    points: [
      'Built plant disease classification pipelines using CNNs and ensemble models',
    ],
  },
  {
    title: 'Deep Learning Intern',
    company: 'National University of Singapore',
    type: 'work',
    points: [
      'Trained and optimized CNN-based vision models with interpretability analysis',
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />

          <div className="max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50 md:left-6" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title + exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12 md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary border border-border/50 flex items-center justify-center">
                      {exp.type === 'research' ? (
                        <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      ) : (
                        <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      )}
                    </div>

                    <div className="card-elevated p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary text-sm font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
