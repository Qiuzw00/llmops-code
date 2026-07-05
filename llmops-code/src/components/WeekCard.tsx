import { motion } from 'framer-motion'
import type { Week } from '../types'

interface WeekCardProps {
  week: Week
  index: number
}

export const WeekCard = ({ week, index }: WeekCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-2xl bg-card border border-border"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-sm font-bold">
        {week.weekNumber}
      </span>
      <h3 className="text-lg font-semibold text-foreground">{week.title}</h3>
    </div>
    <div className="space-y-4">
      {week.knowledgePoints.map((point, i) => (
        <div key={i} className="border-l-2 border-primary/20 pl-4">
          <h4 className="font-medium text-foreground mb-1">{point.title}</h4>
          <p className="text-sm text-muted leading-relaxed">{point.description}</p>
          {point.codeBlock && (
            <pre className="mt-2 p-3 rounded-lg bg-muted overflow-x-auto text-xs font-mono text-foreground">
              <code>{point.codeBlock}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  </motion.div>
)
