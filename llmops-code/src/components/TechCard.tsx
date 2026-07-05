import { motion } from 'framer-motion'
import type { TechCategory } from '../types'
import { Icon } from './Icon'

interface TechCardProps {
  category: TechCategory
  index: number
}

export const TechCard = ({ category, index }: TechCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon name={category.icon} size={20} />
      </div>
      <h3 className="font-semibold text-foreground">{category.title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.items.map((item) => (
        <span key={item} className="px-2.5 py-1 rounded-lg bg-muted text-xs text-foreground">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
)
