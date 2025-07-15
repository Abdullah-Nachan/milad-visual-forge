import { motion } from 'framer-motion';
import { 
  BracketsCurly, 
  Globe, 
  Rocket, 
  Lightning,
  DeviceMobile,
  Palette,
  Database,
  Code
} from 'phosphor-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: BracketsCurly, color: 'text-neon-cyan' },
    { name: 'React/Next.js', icon: Globe, color: 'text-neon-blue' },
    { name: 'GSAP', icon: Lightning, color: 'text-neon-purple' },
    { name: 'Mobile Dev', icon: DeviceMobile, color: 'text-neon-pink' },
    { name: 'UI/UX', icon: Palette, color: 'text-neon-violet' },
    { name: 'Backend', icon: Database, color: 'text-neon-cyan' },
    { name: 'TypeScript', icon: Code, color: 'text-neon-blue' },
    { name: 'Performance', icon: Rocket, color: 'text-neon-purple' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="relative">
              {/* Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ 
                  rotateY: 15,
                  scale: 1.05,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                className="relative w-80 h-80 mx-auto"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-blue">
                  <img 
                    src="/lovable-uploads/f19680b0-e3ff-40ec-9b9b-2bd7bfdbb355.png"
                    alt="Milad - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Orbs around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full animate-pulse-glow opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '-1s' }} />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-neon-pink rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '-2s' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold"
              >
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I'm a passionate web developer specializing in creating immersive digital experiences. 
                With expertise in modern frameworks and cutting-edge animation libraries, I bring ideas 
                to life through clean code and stunning visuals.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                My focus is on performance, accessibility, and creating user interfaces that not only 
                look incredible but also provide seamless user experiences across all devices.
              </motion.p>
            </div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-foreground"
              >
                Skills & Technologies
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="glass-card p-4 text-center group cursor-pointer"
                  >
                    <skill.icon 
                      size={32} 
                      className={`mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <p className="text-sm font-medium text-foreground">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '3+', label: 'Years Exp' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;