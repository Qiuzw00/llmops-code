import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import type { Stage } from '../types'
import { Tag } from './Tag'

interface StageCardProps {
  stage: Stage
  index: number
}

export const StageCard = ({ stage, index }: StageCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link
      to={`/stage/${stage.id}`}
      className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
    >
      <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-serif text-2xl font-bold">
        {stage.number}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary-light px-2 py-0.5 rounded-full">
            <Calendar size={12} /> {stage.weeks}
          </span>
          <span className="text-xs text-muted">{stage.level}</span>
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {stage.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-3">{stage.description}</p>
        <div className="flex flex-wrap gap-2">
          {stage.tags.map((tag) => (
            <Tag key={tag} variant="primary">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <ArrowRight className="text-muted group-hover:text-primary transition-colors" size={20} />
      </div>
    </Link>
  </motion.div>
)
