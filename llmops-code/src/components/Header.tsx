import { Link, useLocation } from 'react-router-dom'
import { LayoutGrid, ChevronRight } from 'lucide-react'

export const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ borderColor: 'var(--color-border)', background: 'rgba(250,247,242,0.92)' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-3.5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-[8px] flex items-center justify-center bg-primary text-primary-foreground">
            <span className="font-serif-display text-lg">L</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif-display text-[15px] text-foreground">LLMOps 学习路径</span>
            {isHome ? (
              <span className="font-mono-label text-muted-foreground">21 Weeks · 8 Stages</span>
            ) : (
              <span className="font-mono-label text-muted-foreground">CURRICULUM</span>
            )}
          </div>
        </Link>

        {isHome ? (
          <nav className="hidden md:flex items-center gap-6">
            <a href="#stages" className="text-sm transition-colors text-muted-foreground hover:text-primary">阶段路径</a>
            <a href="#tech" className="text-sm transition-colors text-muted-foreground hover:text-primary">技术栈</a>
            <a href="#projects" className="text-sm transition-colors text-muted-foreground hover:text-primary">实战项目</a>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-2 text-[13px] text-muted-foreground">
            <Link to="/" className="nav-link hover:text-primary">首页</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-medium text-foreground">阶段 {location.pathname.split('/').pop()}</span>
          </nav>
        )}

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] px-3 py-1.5 rounded-[8px] border nav-link border-border text-foreground hover:border-primary"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">返回总览</span>
        </Link>
      </div>
    </header>
  )
}
