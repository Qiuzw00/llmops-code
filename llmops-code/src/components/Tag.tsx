interface TagProps {
  children: React.ReactNode
  variant?: 'primary' | 'default'
}

export const Tag = ({ children, variant = 'default' }: TagProps) => (
  <span
    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
      variant === 'primary' ? 'bg-primary-light text-primary' : 'bg-muted text-muted-foreground'
    }`}
  >
    {children}
  </span>
)
