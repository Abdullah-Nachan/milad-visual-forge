import { motion } from 'framer-motion';
import { ArrowUpRight, GithubLogo, Eye } from 'phosphor-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Business Growth Platform',
      description: 'Marketing analytics dashboard with real-time data visualization.',
      image: '/lovable-uploads/faa13c6d-7363-4ae9-8a7f-0b2adb91f1d0.png',
      tech: ['Next.js', 'Chart.js', 'MongoDB', 'Express'],
      category: 'Dashboard'
    },
    {
      id: 2,
      title: 'Gaming Dashboard',
      description: 'Real-time gaming statistics and performance monitoring system.',
      image: '/lovable-uploads/2b00f27e-1ab0-4480-91d8-97b9746c2a7d.png',
      tech: ['React', 'WebSocket', 'Redis', 'Node.js'],
      category: 'Real-time'
    },
    {
      id: 3,
      title: 'Prison Management System',
      description: 'Comprehensive facility management with advanced analytics.',
      image: '/lovable-uploads/f16fa640-5d62-4fee-b36c-dd51e0ee79c7.png',
      tech: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
      category: 'Enterprise'
    },
    {
      id: 4,
      title: 'AZIZ Phone Hub',
      description: 'E-commerce platform with sleek product showcase and smooth UX.',
      image: '/lovable-uploads/d7bf0239-fa78-49d1-bafa-500fed6a13e6.png',
      tech: ['React', 'Stripe', 'Node.js', 'MongoDB'],
      category: 'E-commerce'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern web technologies, creative solutions, 
            and pixel-perfect implementations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Eye size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <GithubLogo size={20} />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-primary/30 text-primary hover:bg-primary/10 rounded-xl font-semibold transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight 
              size={20} 
              className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;