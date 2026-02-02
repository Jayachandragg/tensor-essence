import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: 'AWS Certified Data Engineer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Apr 2025',
    expires: 'Apr 2028',
    credlyUrl: 'https://www.credly.com/badges/72d18a62-b9b0-4b52-b103-239a534f7590/linked_in_profile',
    logo: 'https://images.credly.com/size/340x340/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png',
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 glow-border group hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-secondary/50 border border-border/50 p-2 flex items-center justify-center overflow-hidden">
                      {cert.logo ? (
                        <img 
                          src={cert.logo} 
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Award className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <span>Issued {cert.issued}</span>
                    <span>•</span>
                    <span>Expires {cert.expires}</span>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-2 group-hover:border-primary/50 group-hover:text-primary transition-colors"
                      asChild
                    >
                      <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Credential
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
