import type { TechCategory } from '../types'

export const techStack: TechCategory[] = [
  {
    icon: 'Server',
    title: '后端服务',
    items: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Redis'],
  },
  {
    icon: 'Layout',
    title: '前端开发',
    items: ['Node.js', 'TypeScript', 'Vue'],
  },
  {
    icon: 'BrainCircuit',
    title: 'LLM 框架',
    items: ['LangChain', 'LangGraph', 'LCEL', 'MCP'],
  },
  {
    icon: 'Database',
    title: '向量检索',
    items: ['Faiss', 'Pinecone', 'Weaviate', 'TCVectorDB'],
  },
  {
    icon: 'Sparkles',
    title: 'AI 能力',
    items: ['OpenAI API', 'RAG', 'Embedding', 'Agent', 'ReACT'],
  },
  {
    icon: 'Rocket',
    title: '工程部署',
    items: ['生产部署', '性能优化', '监控统计'],
  },
]
