import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { stages } from '../data/stages'
import { techStack } from '../data/techStack'
import { projects } from '../data/projects'
import { personalizedPlan } from '../data/personalizedPlan'
import { Icon } from '../components/Icon'

const stats = [
  { value: '21', label: '学习周数' },
  { value: '8', label: '进阶阶段' },
  { value: '5', label: '商业级实战' },
  { value: '20+', label: '技术栈覆盖' },
]

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="font-mono-label inline-block mb-5 text-primary">CURRICULUM ROADMAP</span>
            <h1 className="font-serif-display text-4xl md:text-5xl leading-[1.2] mb-6 text-foreground">
              从架构基础到<br />商业级 AI 应用
            </h1>
            <p className="text-[15px] leading-[1.8] mb-8 text-muted-foreground">
              21 周系统化学习，覆盖 LLMOps 平台搭建、RAG 与 Agent 开发、多模态工具集成，最终交付五大商业级 AI 应用。每个阶段以可运行的工程项目为里程碑。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#stages"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-sm font-medium transition-opacity bg-primary text-primary-foreground hover:opacity-90"
              >
                查看完整路径
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-sm font-medium border transition-colors border-border text-foreground hover:border-primary"
              >
                实战项目
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-[12px] overflow-hidden border border-border">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20warm%20editorial%20illustration%20of%20an%20AI%20learning%20journey%2C%20featuring%20a%20gentle%20path%20through%20abstract%20neural%20network%20nodes%2C%20soft%20indigo%20and%20paper%20tones%2C%20minimalist%20geometric%20shapes%2C%20clean%20modern%20design%2C%20no%20text"
                alt="AI 学习旅程"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: 'linear-gradient(transparent, rgba(30,27,46,0.7))' }}>
                <span className="font-mono-label" style={{ color: 'rgba(250,247,242,0.85)' }}>LEARNING JOURNEY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-[12px] overflow-hidden border border-border" style={{ background: 'var(--color-border)' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 bg-card">
              <div className="font-serif-display text-3xl mb-1 text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Stage Breakdown */}
      <section id="stages" className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-12">
          <span className="font-mono-label block mb-3 text-primary">STAGE TIMELINE</span>
          <h2 className="font-serif-display text-3xl mb-3 text-foreground">八阶段进阶路径</h2>
          <p className="text-sm max-w-[640px] text-muted-foreground">
            每个阶段拆解为周次学习单元，明确学习目标与交付成果。从基础聊天机器人起步，逐步构建完整的 LLMOps 平台与商业级 AI 应用。
          </p>
        </div>

        <div className="space-y-6">
          {stages.map((stage) => {
            const isHighlighted = stage.id === 7
            return (
              <div
                key={stage.id}
                className={`rounded-[12px] border overflow-hidden bg-card group transition-colors hover:border-primary editorial-shadow ${isHighlighted ? 'border-2' : ''}`}
                style={{ borderColor: isHighlighted ? 'var(--color-primary)' : 'var(--color-border)' }}
              >
                <div
                  className="flex items-center gap-4 px-6 py-4 border-b"
                  style={{
                    borderColor: isHighlighted ? 'var(--color-primary)' : 'var(--color-border)',
                    background: isHighlighted ? 'var(--color-primary)' : 'var(--color-muted)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: isHighlighted ? 'var(--color-card)' : 'var(--color-primary)',
                      color: isHighlighted ? 'var(--color-primary)' : 'var(--color-primary-foreground)',
                    }}
                  >
                    <span className="font-serif-display text-base">{stage.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono-label" style={{ color: isHighlighted ? 'var(--color-primary-foreground)' : 'var(--color-primary)' }}>
                        {stage.weeks}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-[4px] border font-mono"
                        style={{
                          borderColor: isHighlighted ? 'var(--color-card)' : 'var(--color-border)',
                          color: isHighlighted ? 'var(--color-primary)' : 'var(--color-muted-foreground)',
                          background: isHighlighted ? 'var(--color-card)' : 'transparent',
                        }}
                      >
                        {stage.level}
                      </span>
                    </div>
                    <h3 className="font-serif-display text-lg" style={{ color: isHighlighted ? 'var(--color-primary-foreground)' : 'var(--color-foreground)' }}>
                      {stage.title}
                    </h3>
                    <Link to={`/stage/${stage.id}`} className="inline-flex items-center gap-1 text-xs mt-1 text-primary hover:underline" style={{ color: isHighlighted ? 'var(--color-primary-foreground)' : undefined }}>
                      查看详细学习内容 <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`grid grid-cols-1 ${stage.weeklySummaries.length <= 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-3 mb-5`}>
                    {stage.weeklySummaries.map((week) => (
                      <div key={week.weekNumber} className="rounded-[8px] border p-4 bg-muted" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="font-mono text-[10px] mb-2 text-primary">WEEK {String(week.weekNumber).padStart(2, '0')}</div>
                        <div className="font-serif-display text-sm mb-2 text-foreground">{week.title}</div>
                        <ul className="text-xs space-y-1.5 text-muted-foreground">
                          {week.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mb-4 px-4 py-3 rounded-[8px] bg-muted" style={{ borderLeft: '3px solid var(--color-primary)' }}>
                    <Icon name={isHighlighted ? 'trophy' : 'package-check'} className="w-4 h-4 flex-shrink-0 text-primary" />
                    <span className="text-xs text-foreground">
                      <strong>阶段交付：</strong>{stage.practiceProject.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] px-2 py-1 rounded-[4px] border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Personalized Learning Advice */}
      <section id="advice" className="border-y" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="mb-10">
            <span className="font-mono-label block mb-3 text-primary">{personalizedPlan.subtitle}</span>
            <h2 className="font-serif-display text-3xl mb-3 text-foreground">{personalizedPlan.title}</h2>
            <p className="text-sm max-w-[600px] text-muted-foreground">{personalizedPlan.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Advantages */}
            <div className="rounded-[12px] border p-6 bg-card editorial-shadow" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-5">
                <Icon name="trending-up" className="w-5 h-5 text-primary" />
                <h3 className="font-serif-display text-lg text-foreground">你的已有优势</h3>
              </div>
              <div className="space-y-3">
                {personalizedPlan.advantages.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="check-circle-2" className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs mt-0.5 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="rounded-[12px] border p-6 bg-card editorial-shadow" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-5">
                <Icon name="target" className="w-5 h-5 text-primary" />
                <h3 className="font-serif-display text-lg text-foreground">需要重点突破</h3>
              </div>
              <div className="space-y-3">
                {personalizedPlan.challenges.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="alert-circle" className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs mt-0.5 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pace Suggestions */}
          <div className="rounded-[12px] border p-6 bg-muted" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-2 mb-5">
              <Icon name="calendar-clock" className="w-5 h-5 text-primary" />
              <h3 className="font-serif-display text-lg text-foreground">学习节奏建议</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {personalizedPlan.pace.map((item, index) => (
                <div key={index} className="rounded-[8px] border p-4 bg-card" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-mono text-[10px] mb-2 text-primary">{item.stage}</div>
                  <p className="text-xs font-medium mb-1 text-foreground">{item.title}</p>
                  <p className="text-[11px] text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path */}
          <div className="mt-6 rounded-[12px] border p-6 bg-card editorial-shadow" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="route" className="w-5 h-5 text-primary" />
              <h3 className="font-serif-display text-lg text-foreground">职业转型路径建议</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {personalizedPlan.career.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="rounded-[8px] border px-4 py-2"
                    style={{
                      borderColor: step.highlighted ? 'var(--color-primary)' : 'var(--color-border)',
                      background: step.highlighted ? 'var(--color-primary)' : 'var(--color-muted)',
                    }}
                  >
                    <span className="font-mono text-[10px] block mb-1" style={{ color: step.highlighted ? 'var(--color-primary-foreground)' : 'var(--color-primary)' }}>
                      {step.stage}
                    </span>
                    <span className="font-medium" style={{ color: step.highlighted ? 'var(--color-primary-foreground)' : 'var(--color-foreground)' }}>
                      {step.title}
                    </span>
                  </div>
                  {index < personalizedPlan.career.length - 1 && (
                    <Icon name="arrow-right" className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs mt-4 text-muted-foreground">{personalizedPlan.closing}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section id="tech" className="border-y bg-muted" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="mb-10">
            <span className="font-mono-label block mb-3 text-primary">TECH STACK</span>
            <h2 className="font-serif-display text-3xl mb-3 text-foreground">技术栈矩阵</h2>
            <p className="text-sm max-w-[600px] text-muted-foreground">
              课程覆盖从后端服务、向量检索到 LLM 框架的完整工具链，每一项均在项目实战中落地。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((category) => (
              <div key={category.title} className="rounded-[12px] border p-5 bg-card editorial-shadow" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name={category.icon} className="w-4 h-4 text-primary" />
                  <span className="font-serif-display text-sm text-foreground">{category.title}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span key={item} className="font-mono text-[11px] px-2 py-1 rounded-[4px] border border-border text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-10">
          <span className="font-mono-label block mb-3 text-primary">CAPSTONE PROJECTS</span>
          <h2 className="font-serif-display text-3xl mb-3 text-foreground">五大商业级实战</h2>
          <p className="text-sm max-w-[600px] text-muted-foreground">第 7 阶段交付的五个完整应用，每一个均可作为独立产品部署。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[12px] border p-6 transition-colors bg-card group hover:border-primary editorial-shadow"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="w-10 h-10 rounded-[8px] flex items-center justify-center mb-4 bg-muted">
                <Icon name={project.icon} className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif-display text-base mb-2 text-foreground">{project.title}</h3>
              <p className="text-xs leading-[1.7] text-muted-foreground">{project.description}</p>
            </div>
          ))}
          <Link
            to="/stage/1"
            className="rounded-[12px] border p-6 flex flex-col justify-center items-center text-center transition-colors bg-primary border-primary group hover:opacity-90"
          >
            <ArrowRight className="w-6 h-6 mb-3 text-primary-foreground" />
            <span className="font-serif-display text-sm text-primary-foreground">开启学习旅程</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
