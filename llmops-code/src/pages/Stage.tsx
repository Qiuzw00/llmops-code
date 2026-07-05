import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getStageById, getStageNavigation } from '../data/stages'
import { Icon } from '../components/Icon'

export const Stage = () => {
  const { id } = useParams<{ id: string }>()
  const stageId = Number(id)
  const stage = getStageById(stageId)
  const { prev, next } = getStageNavigation(stageId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [stageId])

  if (!stage) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h2 className="text-2xl font-serif-display text-foreground mb-2">阶段未找到</h2>
        <p className="text-muted-foreground mb-6">你访问的阶段不存在或尚未开放。</p>
        <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-primary text-primary-foreground font-medium hover:opacity-90">
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Stage Header */}
      <section className="border-b bg-card" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="font-serif-display text-[120px] leading-none text-primary" style={{ opacity: 0.18 }}>{stage.number}</div>
            </div>
            <div className="lg:col-span-9">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="font-mono-label text-primary">STAGE {stage.number} · {stage.weeks}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-[4px] border font-mono border-border text-muted-foreground">{stage.level}</span>
              </div>
              <h1 className="font-serif-display text-3xl md:text-4xl leading-[1.25] mb-5 text-foreground">
                {stage.title}
              </h1>
              <p className="text-[15px] leading-[1.8] max-w-[720px] text-muted-foreground">
                {stage.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-6">
                {stage.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] px-2 py-1 rounded-[4px] border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Overview */}
      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <span className="font-mono-label block mb-2 text-primary">OVERVIEW</span>
            <h2 className="font-serif-display text-xl text-foreground">阶段概述</h2>
          </div>
          <div className="lg:col-span-9">
            {stage.overview.map((paragraph, index) => (
              <p key={index} className={`text-[15px] mb-5 leading-[1.85] ${index === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* For You — Skill Match */}
      <section className="border-y bg-muted" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="mb-6">
            <span className="font-mono-label block mb-2 text-primary">FOR YOU</span>
            <h2 className="font-serif-display text-2xl text-foreground">与你经验的对照</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[8px] border p-5 bg-card" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="check-circle-2" className="w-4 h-4 text-primary" />
                <span className="font-serif-display text-sm text-foreground">可迁移的技能</span>
              </div>
              <ul className="text-xs space-y-2 text-muted-foreground">
                {stage.forYou.transferableSkills.map((skill, index) => (
                  <li key={index}><strong className="text-foreground">{skill.title}：</strong>{skill.description}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[8px] border p-5 bg-card" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="alert-triangle" className="w-4 h-4 text-primary" />
                <span className="font-serif-display text-sm text-foreground">需要补课的内容</span>
              </div>
              <ul className="text-xs space-y-2 text-muted-foreground">
                {stage.forYou.gaps.map((gap, index) => (
                  <li key={index}><strong className="text-foreground">{gap.title}：</strong>{gap.description}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[8px] border-2 p-5 bg-primary" style={{ borderColor: 'var(--color-primary)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="lightbulb" className="w-4 h-4 text-primary-foreground" />
                <span className="font-serif-display text-sm text-primary-foreground">学习建议</span>
              </div>
              <ul className="text-xs space-y-2 text-primary-foreground" style={{ opacity: 0.9 }}>
                {stage.forYou.advice.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="border-y bg-muted" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="mb-8">
            <span className="font-mono-label block mb-2 text-primary">LEARNING OBJECTIVES</span>
            <h2 className="font-serif-display text-2xl text-foreground">学习目标</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stage.learningObjectives.map((objective, index) => (
              <div
                key={objective.title}
                className={`flex items-start gap-3 rounded-[12px] border p-5 editorial-shadow bg-card ${index === stage.learningObjectives.length - 1 && stage.learningObjectives.length % 2 === 1 ? 'md:col-span-2' : ''}`}
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-[8px] flex items-center justify-center bg-muted">
                  <Icon name={objective.icon} className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-serif-display text-[15px] mb-1 text-foreground">{objective.title}</div>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Detailed Content */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-10">
          <span className="font-mono-label block mb-2 text-primary">WEEKLY BREAKDOWN</span>
          <h2 className="font-serif-display text-2xl text-foreground">每周详细内容</h2>
        </div>

        <div className="space-y-10">
          {stage.weeksContent.map((week) => (
            <article key={week.weekNumber} className="rounded-[12px] border overflow-hidden editorial-shadow bg-card" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-4 px-6 py-4 border-b" style={{ borderColor: 'var(--color-border)', background: 'var(--color-muted)' }}>
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                  <span className="font-serif-display text-base">W{week.weekNumber}</span>
                </div>
                <div>
                  <div className="font-mono-label text-primary">WEEK {String(week.weekNumber).padStart(2, '0')}</div>
                  <h3 className="font-serif-display text-lg text-foreground">{week.title}</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {week.knowledgePoints.map((point, pointIndex) => (
                  <div key={pointIndex}>
                    <h4 className="font-serif-display text-[15px] mb-2 flex items-center gap-2 text-foreground">
                      <span className="w-1 h-4 rounded-[2px] bg-primary" />
                      {point.title}
                    </h4>
                    <p className="text-[14px] leading-[1.8] mb-3 text-muted-foreground">
                      {point.description}
                    </p>
                    {point.codeBlock && (
                      <div className="rounded-[8px] border p-4 overflow-x-auto text-[12px] leading-[1.7] font-mono bg-muted" style={{ borderColor: 'var(--color-border)', color: 'var(--color-foreground)' }}>
                        <pre className="whitespace-pre">{point.codeBlock}</pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practice Project */}
      <section className="border-y bg-muted" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono-label block mb-2 text-primary">CAPSTONE</span>
              <h2 className="font-serif-display text-2xl mb-3 text-foreground">实践项目</h2>
              <p className="text-[13px] leading-[1.7] text-muted-foreground">阶段交付的工程项目，作为本阶段学习成果的检验。</p>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-[12px] border-2 p-6 editorial-shadow bg-card" style={{ borderColor: 'var(--color-primary)' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-[8px] flex items-center justify-center bg-primary text-primary-foreground">
                    <Icon name="package-check" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono-label mb-1 text-primary">DELIVERABLE</div>
                    <h3 className="font-serif-display text-lg text-foreground">{stage.practiceProject.title}</h3>
                  </div>
                </div>
                <p className="text-[14px] leading-[1.8] mb-4 text-muted-foreground">
                  {stage.practiceProject.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {stage.practiceProject.deliverables.map((deliverable) => (
                    <div key={deliverable.title} className="rounded-[8px] border p-3 bg-muted" style={{ borderColor: 'var(--color-border)' }}>
                      <div className="font-mono text-[10px] mb-1 text-primary">{deliverable.label}</div>
                      <div className="text-[13px] text-foreground">{deliverable.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Points */}
      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="mb-8">
          <span className="font-mono-label block mb-2 text-primary">TECHNICAL HIGHLIGHTS</span>
          <h2 className="font-serif-display text-2xl text-foreground">技术要点</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stage.technicalHighlights.map((highlight) => (
            <div key={highlight.title} className="rounded-[12px] border p-5 editorial-shadow bg-card" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name={highlight.icon} className="w-4 h-4 text-primary" />
                <span className="font-serif-display text-[15px] text-foreground">{highlight.title}</span>
              </div>
              <p className="text-[13px] leading-[1.7] text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-muted" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="mb-8">
            <span className="font-mono-label block mb-2 text-primary">FAQ</span>
            <h2 className="font-serif-display text-2xl text-foreground">常见问题</h2>
          </div>
          <div className="space-y-3">
            {stage.faq.map((item, index) => (
              <div key={index} className="rounded-[12px] border p-5 editorial-shadow bg-card" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded-[4px] flex-shrink-0 bg-primary text-primary-foreground">Q{index + 1}</span>
                  <h4 className="font-serif-display text-[15px] text-foreground">{item.question}</h4>
                </div>
                <p className="text-[13px] leading-[1.8] pl-[52px] text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="mb-6">
            <span className="font-mono-label block mb-2 text-primary">RESOURCES</span>
            <h2 className="font-serif-display text-2xl text-foreground">学习资料</h2>
            <p className="text-sm mt-1 text-muted-foreground">本阶段涉及的官方文档、视频教程与推荐阅读，学习时及时查阅。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stage.resources.map((category) => (
              <div key={category.title} className="rounded-[12px] border p-5 bg-card editorial-shadow" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name={category.icon} className="w-4 h-4 text-primary" />
                  <span className="font-serif-display text-sm text-foreground">{category.title}</span>
                </div>
                <div className="space-y-2">
                  {category.links.map((link) => (
                    <a key={link.title} href={link.url} target="_blank" rel="noreferrer" className="block text-xs text-primary hover:underline">
                      {link.title} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev ? (
            <Link to={`/stage/${prev.id}`} className="rounded-[12px] border p-5 transition-colors group bg-card hover:border-primary" style={{ borderColor: 'var(--color-border)' }}>
              <div className="font-mono-label mb-2 text-muted-foreground">PREVIOUS</div>
              <div className="font-serif-display text-[15px] flex items-center gap-2 text-foreground">
                <ArrowLeft className="w-4 h-4" />
                {prev.title}
              </div>
            </Link>
          ) : (
            <div className="rounded-[12px] border p-5 opacity-60 bg-card" style={{ borderColor: 'var(--color-border)' }}>
              <div className="font-mono-label mb-2 text-muted-foreground">PREVIOUS</div>
              <div className="font-serif-display text-[15px] flex items-center gap-2 text-muted-foreground">
                <ArrowLeft className="w-4 h-4" />
                已是起点
              </div>
            </div>
          )}

          {next ? (
            <Link to={`/stage/${next.id}`} className="rounded-[12px] border p-5 transition-colors group bg-card hover:border-primary" style={{ borderColor: 'var(--color-border)' }}>
              <div className="font-mono-label mb-2 text-right text-primary">NEXT · STAGE {next.number}</div>
              <div className="font-serif-display text-[15px] flex items-center justify-end gap-2 text-foreground">
                {next.title}
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
          ) : (
            <div className="rounded-[12px] border p-5 opacity-60 bg-card" style={{ borderColor: 'var(--color-border)' }}>
              <div className="font-mono-label mb-2 text-right text-muted-foreground">NEXT</div>
              <div className="font-serif-display text-[15px] flex items-center justify-end gap-2 text-muted-foreground">
                已是终点
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
