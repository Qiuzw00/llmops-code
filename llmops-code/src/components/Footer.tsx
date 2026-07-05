import { useLocation } from 'react-router-dom'

export const Footer = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-primary text-primary-foreground">
              <span className="font-serif-display text-sm">L</span>
            </div>
            <div>
              <div className="font-serif-display text-sm text-foreground">LLMOps 学习路径</div>
              <div className="font-mono-label text-muted-foreground">
                {isHome ? '21 WEEKS · 8 STAGES · 5 PROJECTS' : `STAGE ${location.pathname.split('/').pop()} · CURRICULUM`}
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">基于课程大纲设计 · 从架构基础到商业级 AI 应用</p>
        </div>
      </div>
    </footer>
  )
}
