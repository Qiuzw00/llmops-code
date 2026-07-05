import { motion } from 'framer-motion'
import type { FAQItem as FAQItemType } from '../types'

interface FAQItemProps {
  item: FAQItemType
  index: number
}

export const FAQItem = ({ item, index }: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="p-5 rounded-2xl bg-card border border-border"
  >
    <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
    <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
  </motion.div>
)
