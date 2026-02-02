import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'StrategyGen – Multimodal Interaction Strategy Detection',
    summary: 'End-to-end multimodal AI pipeline for detecting adult–child interaction strategies from educational videos.',
    details: [
      'Converted ELAN (.eaf) annotations into structured JSON using Python-based ETL pipelines',
      'Implemented rule-based temporal merging to generate topic-level timestamps',
      'Integrated LLMs to validate semantic consistency and topic alignment',
      'Applied Vision-Language Model (Qwen 2.5-VL) to classify object presence and visual context',
      'Built a hybrid AI system combining rules, LLM reasoning, and multimodal perception',
    ],
    outcome: 'Reduced manual analysis effort and improved reliability and reproducibility of research workflows.',
    techStack: ['Python', 'ELAN', 'JSON', 'LLMs', 'Vision-Language Models', 'Multimodal AI'],
    githubUrl: 'https://github.com/Jayachandragg',
  },
  {
    title: 'End-to-End E-Commerce Analytics Platform',
    summary: 'Full-stack analytics system from database design to business dashboards.',
    details: [
      'Designed normalized 3NF PostgreSQL schemas for 100k+ orders',
      'Built robust ETL pipelines using Python and SQL',
      'Developed Streamlit dashboards with KPIs, filters, and geospatial analytics',
      'Containerized the full stack using Docker and Docker Compose',
    ],
    outcome: 'Enabled business-friendly analytics with reproducible deployment.',
    techStack: ['PostgreSQL', 'SQL', 'Python', 'Streamlit', 'Docker'],
    githubUrl: 'https://github.com/Jayachandragg',
  },
  {
    title: 'Multi-Modal Movie Genre Classification',
    summary: 'Multi-label classification using text and image fusion.',
    details: [
      'Text model: Word2Vec + LSTM on plot synopses',
      'Image model: Fine-tuned ResNet-50 on movie posters',
      'Designed fusion architecture combining embeddings',
      'Evaluated using accuracy, macro/micro F1-score, confusion matrices',
    ],
    outcome: 'Improved performance over unimodal baselines.',
    techStack: ['PyTorch', 'NLP', 'Computer Vision', 'Multimodal Learning'],
    githubUrl: 'https://github.com/Jayachandragg',
  },
  {
    title: 'AI-Generated Image Detection',
    summary: 'Interpretable system for detecting AI-generated images.',
    details: [
      'Trained beta-VAE on mixed real and synthetic images',
      'Extracted latent embeddings and applied Logistic Regression',
      'Focused on representation learning and latent separability',
    ],
    techStack: ['PyTorch', 'beta-VAE', 'Logistic Regression'],
    githubUrl: 'https://github.com/Jayachandragg',
  },
  {
    title: 'Real-Time Computer Vision Systems',
    summary: 'Production-ready real-time CV pipelines.',
    details: [
      'Face, eye, mask detection using YOLOv8 (96.3% accuracy, 23% faster inference)',
      'Designed 3D face alignment (21% verification improvement)',
      'Built blur detection and face quality filtering pipelines',
      'Deployed lightweight SqueezeNet CNN (98% accuracy)',
    ],
    techStack: ['YOLOv8', 'PyTorch', 'Computer Vision'],
    githubUrl: 'https://github.com/Jayachandragg',
  },
  {
    title: 'Deep Reinforcement Learning on Atari',
    summary: 'Comparative study of modern RL algorithms.',
    details: [
      'Implemented DQN, Double DQN, Rainbow DQN, PPO',
      'Analyzed reward convergence and stability',
    ],
    techStack: ['PyTorch', 'Reinforcement Learning'],
    githubUrl: 'https://github.com/Jayachandragg',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
