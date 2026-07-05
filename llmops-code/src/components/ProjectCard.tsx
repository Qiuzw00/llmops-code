import { motion } from 'framer-motion'
import type { Project } from '../types'
import { Icon } from './Icon'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary mb-4">
      <Icon name={project.icon} size={24} />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
    <p className="text-sm text-muted leading-relaxed">{project.description}</p>
  </motion.div>
)
