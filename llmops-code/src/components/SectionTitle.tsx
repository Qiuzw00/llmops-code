interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => (
  <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">{title}</h2>
    {subtitle && <p className="text-muted max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
)
