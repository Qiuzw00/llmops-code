export interface KnowledgePoint {
  title: string
  description: string
  codeBlock?: string
}

export interface Week {
  weekNumber: number
  title: string
  knowledgePoints: KnowledgePoint[]
}

export interface WeekSummary {
  weekNumber: number
  title: string
  points: string[]
}

export interface LearningObjective {
  icon: string
  title: string
  description: string
}

export interface Deliverable {
  label: string
  title: string
}

export interface PracticeProject {
  title: string
  description: string
  deliverables: Deliverable[]
}

export interface TechnicalHighlight {
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Stage {
  id: number
  number: string
  title: string
  weeks: string
  level: string
  description: string
  tags: string[]
  overview: string[]
  learningObjectives: LearningObjective[]
  weeksContent: Week[]
  weeklySummaries: WeekSummary[]
  practiceProject: PracticeProject
  technicalHighlights: TechnicalHighlight[]
  faq: FAQItem[]
}

export interface TechCategory {
  icon: string
  title: string
  items: string[]
}

export interface Project {
  icon: string
  title: string
  description: string
}
