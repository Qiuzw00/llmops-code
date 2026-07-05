import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
        <AlertCircle size={40} />
      </div>
      <h1 className="text-4xl font-serif-display text-foreground mb-3">404</h1>
      <h2 className="text-xl font-semibold text-foreground mb-2">页面未找到</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        你访问的页面不存在或已被移除。返回首页继续探索 LLMOps 学习路径吧。
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        <Home size={18} />
        返回首页
      </Link>
    </div>
  )
}
