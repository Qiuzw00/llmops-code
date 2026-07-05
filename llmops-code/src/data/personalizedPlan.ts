import type { PersonalizedPlan } from '../types'

export const personalizedPlan: PersonalizedPlan = {
  subtitle: 'PERSONALIZED PLAN',
  title: '个性化学习建议',
  description:
    '基于你的数据工程背景（5年 Hive/Spark/Flink/ClickHouse 经验），以下是针对性的学习路径优化建议。',
  advantages: [
    {
      title: '数据管道与 ETL 全流程',
      description:
        '你精通 Hive/Spark/ETL，RAG 数据处理管道对你来说会非常直观——文档分块、向量化、增量同步本质就是 ETL',
    },
    {
      title: 'Python 自动化能力',
      description:
        '你有 Pandas/Openpyxl/Python SDK 开发经验，Flask 后端和 LLM API 对接可以快速上手',
    },
    {
      title: '数据建模与查询优化',
      description:
        'PostgreSQL/ClickHouse 经验直接迁移到向量数据库——Faiss/Pinecone 的检索逻辑类似 SQL 查询优化',
    },
    {
      title: '云原生与调度编排',
      description:
        'DataWorks/阿里云/华为云迁移经验，Docker 部署和 CI/CD 概念对你来说只需补充实操',
    },
    {
      title: '数学与机器学习基础',
      description:
        '数学与应用数学本科（GPA 3.66/前5%），Embedding/向量相似度/LoRA 微调的数学原理理解无障碍',
    },
  ],
  challenges: [
    {
      title: '前端开发（Vue 3 + TypeScript）',
      description:
        '你的简历中无前端开发经验，Stage 1-3 的前端搭建是最大挑战。建议提前自学 Vue 3 Composition API 基础',
    },
    {
      title: 'LLM 应用架构与 Prompt 工程',
      description:
        '从数据处理转向 LLM 对话编排，需要理解 Token 机制、上下文窗口、流式响应等新概念',
    },
    {
      title: 'Agent 与 ReACT 推理框架',
      description:
        '这是与传统 ETL 最大的思维差异——从确定性数据流转向 LLM 自主决策的工具调用链',
    },
    {
      title: 'Docker 容器化部署',
      description:
        '你有云平台使用经验但缺少 Docker 实操，Stage 5 的生产部署需要补课 Dockerfile 与 docker-compose',
    },
    {
      title: '向量数据库与 Embedding',
      description:
        '概念上类似 ClickHouse 的分布式检索，但需要学习向量索引（HNSW/IVF）和 Embedding 模型选型',
    },
  ],
  pace: [
    {
      stage: 'STAGE 1-2',
      title: '快速通过',
      description:
        '后端可加速，前端需补课。Flask/SQLAlchemy/PostgreSQL 对你来说是复习，重点放在 Vue 3 前端和 OpenAI API 对接。建议用 2 周完成 3 周内容。',
    },
    {
      stage: 'STAGE 3-4',
      title: '正常节奏',
      description:
        '平台化是你的舒适区。Prompt 管理、审核、开放 API 类似你做过的报表平台和数据治理，按课程节奏推进即可。',
    },
    {
      stage: 'STAGE 5-6',
      title: '重点投入',
      description:
        'Docker 部署 + 多模态。Docker/Nginx/CI-CD 是你的短板，需要多花时间实操。多模态是新领域，建议动手做完整 Demo。',
    },
    {
      stage: 'STAGE 7-8',
      title: '全力投入',
      description:
        '实战项目是核心竞争力。五大商业应用 + LoRA 微调是你转型 AI 工程师的关键作品集，每个项目都要完整交付并写入简历。',
    },
  ],
  career: [
    { stage: '当前', title: 'ETL / 数据工程师' },
    { stage: 'Stage 1-4 后', title: 'LLMOps 平台工程师' },
    { stage: 'Stage 5-6 后', title: 'AI 应用全栈工程师' },
    { stage: 'Stage 7-8 后', title: 'AI 架构师 / LLMOps 专家', highlighted: true },
  ],
  closing:
    '你的数据中台 + 云迁移经验是稀缺背景，结合 LLMOps 能力后，可在 AI 基础设施、MLOps 平台、数据智能应用方向形成独特竞争力。',
}
