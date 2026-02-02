import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  summary: string;
  details: string[];
  outcome?: string;
  techStack: string[];
  githubUrl: string;
  index: number;
}

export const ProjectCard = ({
  title,
  summary,
  details,
  outcome,
  techStack,
  githubUrl,
  index,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-elevated overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Button variant="ghost" size="icon" className="shrink-0" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border/50">
                <h4 className="text-sm font-semibold text-foreground mb-3">Details</h4>
                <ul className="space-y-2 mb-4">
                  {details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {outcome && (
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <span className="text-sm font-medium text-primary">Outcome: </span>
                    <span className="text-sm text-muted-foreground">{outcome}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Show details</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
