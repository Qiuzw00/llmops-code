import type { LessonNode } from '../types'

interface LessonCardProps {
  lesson: LessonNode
}

export const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <div
      className={`rounded-[8px] border p-4 transition-colors ${
        lesson.isRecap
          ? 'bg-muted hover:border-primary'
          : 'bg-card hover:border-primary'
      }`}
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="font-mono text-[10px] px-2 py-1 rounded-[4px] shrink-0"
          style={{
            background: lesson.isRecap ? 'var(--color-muted-foreground)' : 'var(--color-primary)',
            color: lesson.isRecap ? 'var(--color-primary-foreground)' : 'var(--color-primary-foreground)',
          }}
        >
          {lesson.code}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium mb-1 text-foreground">{lesson.title}</p>
          <p className="text-xs text-muted-foreground">{lesson.description}</p>
          {lesson.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {lesson.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded-[4px] border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
