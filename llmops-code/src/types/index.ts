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

export interface SkillMatch {
  title: string
  description: string
}

export interface ForYou {
  transferableSkills: SkillMatch[]
  gaps: SkillMatch[]
  advice: string[]
}

export interface ResourceLink {
  title: string
  url: string
}

export interface ResourceCategory {
  icon: string
  title: string
  links: ResourceLink[]
}

export interface LessonNode {
  code: string
  title: string
  description: string
  tags: string[]
  isRecap?: boolean
}

export interface LessonSection {
  sectionNumber: number
  title: string
  lessons: LessonNode[]
}

export interface LessonChapter {
  chapterNumber: number
  title: string
  weekNumber: number
  sections: LessonSection[]
}

export interface StageOverviewStats {
  duration: string
  durationLabel: string
  structure: string
  structureLabel: string
  lessonsCount: string
  lessonsLabel: string
  titleParts?: [string, string]
}

export interface BaseStage {
  id: number
  number: string
  title: string
  weeks: string
  level: string
  description: string
  tags: string[]
  overview: string[]
  forYou: ForYou
  learningObjectives: LearningObjective[]
  weeksContent: Week[]
  weeklySummaries: WeekSummary[]
  practiceProject: PracticeProject
  technicalHighlights: TechnicalHighlight[]
  faq: FAQItem[]
  resources: ResourceCategory[]
}

export interface Stage extends BaseStage {
  stageOverview: StageOverviewStats
  lessonChapters: LessonChapter[]
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

export interface Advantage {
  title: string
  description: string
}

export interface Challenge {
  title: string
  description: string
}

export interface PaceSuggestion {
  stage: string
  title: string
  description: string
}

export interface CareerStep {
  stage: string
  title: string
  highlighted?: boolean
}

export interface PersonalizedPlan {
  subtitle: string
  title: string
  description: string
  advantages: Advantage[]
  challenges: Challenge[]
  pace: PaceSuggestion[]
  career: CareerStep[]
  closing: string
}
