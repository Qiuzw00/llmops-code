import type { BaseStage, Stage } from '../types'

export const stages: BaseStage[] = [
  {
    id: 1,
    number: `01`,
    title: `架构设计与基础聊天机器人开发`,
    weeks: `WEEK 01 — 03`,
    level: `基础`,
    description: `本阶段是整个 LLMOps 学习路径的起点。我们将从理解大模型运维（LLMOps）的核心概念出发，逐步搭建一个完整的三层平台架构——应用层、服务层与基础设施层，明确各模块的职责边界与协作方式。`,
    tags: [
      `Flask`,
      `SQLAlchemy`,
      `PostgreSQL`,
      `Vue`,
      `TypeScript`,
      `OpenAI API`,
    ],
    overview: [
      `本阶段是整个 LLMOps 学习路径的起点。我们将从理解大模型运维（LLMOps）的核心概念出发，逐步搭建一个完整的三层平台架构——应用层、服务层与基础设施层，明确各模块的职责边界与协作方式。`,
      `在工程实现上，第一周聚焦于开发环境与 OpenAI API 对接，建立 LLM 调用的统一工具层；第二周使用 Flask + SQLAlchemy + PostgreSQL 搭建后端服务，完成数据建模与 RESTful API 设计；第三周使用 Vue 3 + TypeScript 构建前端聊天界面，并通过 SSE 实现流式响应的前后端联调。`,
      `阶段结束时，学员将交付一个前后端完整闭环、可进行多轮对话的基础 ChatBot 应用，为后续记忆模块、RAG 检索与 Agent 编排打下坚实的工程基础。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `Flask 后端`,
          description: `类似你用 Python 写自动化报表服务，Flask 只是多了 Web 路由层`,
        },
        {
          title: `PostgreSQL + SQLAlchemy`,
          description: `你在星巴克项目已深度使用 PostgreSQL，SQLAlchemy ORM 是新概念但不难`,
        },
        {
          title: `API 设计`,
          description: `你做过 rds 数据库配置表设计和后端接口，RESTful API 规范可以快速掌握`,
        },
      ],
      gaps: [
        {
          title: `Vue 3 + TypeScript`,
          description: `你的简历无前端经验，这是本阶段最大挑战，建议提前看 Vue 3 官方文档`,
        },
        {
          title: `SSE 流式响应`,
          description: `数据工程中不涉及，需要理解 Server-Sent Events 与传统 HTTP 的区别`,
        },
        {
          title: `OpenAI API 体系`,
          description: `理解 Chat Completion 接口、Token 计费、stream 参数`,
        },
      ],
      advice: [
        `Week 1-2 后端部分可以2天过完，你的 Python+SQL 能力完全够用`,
        `把省下的时间全部投入 Week 3 前端开发，Vue 3 Composition API 是重点`,
        `建议用你做星巴克BI的思路理解：LLMOps平台 = 数据平台 + LLM引擎`,
      ],
    },
    learningObjectives: [
      {
        icon: `network`,
        title: `理解平台整体架构`,
        description: `掌握 LLMOps 平台三层架构与各模块职责，画出清晰的架构图。`,
      },
      {
        icon: `server`,
        title: `搭建 Flask 后端框架`,
        description: `使用应用工厂模式与蓝图组织路由，建立可扩展的服务骨架。`,
      },
      {
        icon: `database`,
        title: `数据建模与持久化`,
        description: `使用 SQLAlchemy ORM + PostgreSQL 设计用户、会话、消息表。`,
      },
      {
        icon: `layout`,
        title: `搭建 Vue 前端项目`,
        description: `使用 Vite 创建 Vue 3 + TypeScript 项目，配置组件库与代码规范。`,
      },
      {
        icon: `plug-zap`,
        title: `前后端联调与对话功能`,
        description: `完成端到端对话流程，实现 SSE 流式响应接收与基础对话功能上线。`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 1,
        title: `LLMOps 平台基础`,
        knowledgePoints: [
          {
            title: `LLMOps 概念与发展`,
            description: `LLMOps 是 MLOps 在大模型时代的延伸，涵盖模型部署、Prompt 管理、监控评估等环节。理解 LLMOps 与传统 MLOps 的区别——重点关注 Prompt 工程、RAG 管道、Agent 编排。 传统 MLOps 关注特征工程与模型重训练，而 LLMOps 的核心挑战在于 Prompt 版本管理、上下文窗口控制、Token 成本治理与幻觉监控。`,
          },
          {
            title: `平台架构设计`,
            description: `整体架构分为三层——应用层（ChatBot/应用接口）、服务层（Prompt 管理/RAG/Agent 引擎）、基础设施层（数据库/向量库/缓存）。画出架构图，明确各模块边界。`,
            codeBlock: `# 三层架构示意
┌─────────────────────────────────────────────┐
│  应用层  ChatBot · 应用接口 · Web UI        │
├─────────────────────────────────────────────┤
│  服务层  Prompt 管理 · RAG 引擎 · Agent 编排 │
├─────────────────────────────────────────────┤
│  基础设施 PostgreSQL · Faiss · Redis · LLM  │
└─────────────────────────────────────────────┘`,
          },
          {
            title: `开发环境搭建`,
            description: `Python 3.10+ 虚拟环境，VS Code 开发配置，Git 仓库初始化，Docker Desktop 安装。创建项目骨架目录结构，约定后端、前端、文档、配置的目录规范。`,
          },
          {
            title: `OpenAI API 对接`,
            description: `注册 OpenAI API Key，理解 Chat Completion 接口参数（model/messages/temperature/max_tokens），封装统一的 LLM 调用工具类，实现流式响应处理。`,
            codeBlock: `from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": prompt}],
    temperature=0.7,
    stream=True,  # 流式响应
)`,
          },
        ],
      },
      {
        weekNumber: 2,
        title: `后端搭建`,
        knowledgePoints: [
          {
            title: `Flask 服务搭建`,
            description: `Flask 轻量级 Web 框架，适合微服务架构。创建 Flask 应用工厂模式，配置蓝图（Blueprint）组织路由，设置 CORS 跨域支持。`,
            codeBlock: `from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    from .api.chat import chat_bp
    app.register_blueprint(chat_bp, url_prefix="/api/v1")
    return app`,
          },
          {
            title: `数据库设计`,
            description: `使用 SQLAlchemy ORM 定义数据模型——User 表（用户信息）、ChatSession 表（对话会话）、ChatMessage 表（对话消息）。配置 PostgreSQL 连接，执行数据库迁移。`,
            codeBlock: `class ChatSession(db.Model):
    __tablename__ = "chat_sessions"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    title = db.Column(db.String(128))
    messages = db.relationship("ChatMessage", backref="session")`,
          },
          {
            title: `RESTful API 开发`,
            description: `设计 API 路由规范（/api/v1/...），实现对话接口 POST /api/v1/chat、会话管理接口、用户认证接口。统一响应格式 {code, message, data}，保证接口语义清晰、可被前端与第三方消费。`,
          },
          {
            title: `接口测试`,
            description: `使用 Postman 或 Apifox 进行接口测试，编写单元测试 pytest，覆盖正常路径与异常边界，建立持续可回归的测试基线。`,
          },
        ],
      },
      {
        weekNumber: 3,
        title: `前端搭建`,
        knowledgePoints: [
          {
            title: `Vue 3 项目搭建`,
            description: `使用 Vite 创建 Vue 3 + TypeScript 项目，配置 ESLint + Prettier，安装 Element Plus 或 Ant Design Vue 组件库，建立统一的目录约定与状态管理（Pinia）。`,
          },
          {
            title: `聊天界面开发`,
            description: `实现聊天列表组件、消息输入框、流式消息展示。处理 Markdown 渲染与代码高亮，保证长消息与代码块的可读性。`,
          },
          {
            title: `前后端联调`,
            description: `配置 Vite 代理解决跨域，使用 axios 封装 HTTP 请求层，实现 SSE 流式响应接收。处理加载状态与错误重试。`,
            codeBlock: `// vite.config.ts
server: {
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true,
    }
  }
}`,
          },
          {
            title: `基础对话功能上线`,
            description: `完成端到端对话流程测试，部署到本地开发环境，验证从用户输入到 LLM 流式返回的完整链路。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `可对话的基础 ChatBot 应用`,
      description: `交付一个前后端完整闭环的 ChatBot 应用：后端 Flask 提供 RESTful 对话接口与数据持久化，前端 Vue 3 实现聊天界面与流式消息展示，通过 OpenAI API 完成大模型调用。用户可创建会话、发送消息并接收流式回复。`,
      deliverables: [
        {
          label: `FRONTEND`,
          title: `Vue 3 + TS 聊天界面`,
        },
        {
          label: `BACKEND`,
          title: `Flask + SQLAlchemy`,
        },
        {
          label: `LLM`,
          title: `OpenAI 流式调用`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `layers`,
        title: `Flask 蓝图模式`,
        description: `使用应用工厂 create_app 配合 Blueprint 拆分路由模块，支持配置隔离与多环境部署，是构建可扩展后端的基石。`,
      },
      {
        icon: `database`,
        title: `SQLAlchemy ORM`,
        description: `通过 ORM 抽象数据库操作，定义 User / ChatSession / ChatMessage 三张核心表，配合 Flask-Migrate 实现版本化迁移。`,
      },
      {
        icon: `component`,
        title: `Vue 3 Composition API`,
        description: `使用 setup 语法糖与 ref/reactive 管理组件状态，Pinia 管理全局会话状态，组合式 API 提升逻辑复用性。`,
      },
      {
        icon: `radio`,
        title: `SSE 流式传输`,
        description: `Server-Sent Events 实现服务端逐 Token 推送，前端通过 ReadableStream 解析 data 字段，实现打字机效果与低延迟体验。`,
      },
    ],
    faq: [
      {
        question: `OpenAI API 调用超时怎么办？`,
        answer: `设置合理的 timeout 参数（建议 30s），实现重试机制（指数退避），流式响应使用 stream=True 以避免长时间等待整体返回。`,
      },
      {
        question: `前端如何接收 SSE 流式数据？`,
        answer: `使用 fetch + ReadableStream 或 EventSource，逐块解析 data 字段，遇到 [DONE] 标记结束。注意处理断线重连与错误边界。`,
      },
      {
        question: `PostgreSQL 连接池如何配置？`,
        answer: `使用 SQLAlchemy 的 pool_size 和 max_overflow 参数，建议 pool_size=10、max_overflow=20，配合 pool_pre_ping 检测连接活性，避免长连接断开。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `Flask 官方文档 →`,
            url: `https://flask.palletsprojects.com/`,
          },
          {
            title: `SQLAlchemy 官方文档 →`,
            url: `https://docs.sqlalchemy.org/`,
          },
          {
            title: `PostgreSQL 官方文档 →`,
            url: `https://www.postgresql.org/docs/`,
          },
          {
            title: `Vue 3 官方文档 →`,
            url: `https://vuejs.org/`,
          },
          {
            title: `TypeScript 官方文档 →`,
            url: `https://www.typescriptlang.org/docs/`,
          },
          {
            title: `OpenAI API 文档 →`,
            url: `https://platform.openai.com/docs`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `Flask 入门到实战（B站）→`,
            url: `https://www.bilibili.com/video/BV1rT4y1v7p4`,
          },
          {
            title: `Vue 3 + TypeScript 入门（B站）→`,
            url: `https://www.bilibili.com/video/BV1nV41187oT`,
          },
          {
            title: `PostgreSQL 数据库教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1Sv411r87d`,
          },
          {
            title: `OpenAI API 完整教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=VqgUkExPv58`,
          },
          {
            title: `前后端联调 SSE 流式响应（B站）→`,
            url: `https://www.bilibili.com/video/BV1YT4y1v7YB`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `MDN: Server-Sent Events 指南 →`,
            url: `https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events`,
          },
          {
            title: `Flask 应用工厂模式 →`,
            url: `https://flask.palletsprojects.com/en/latest/patterns/flask/`,
          },
          {
            title: `Vue 3 Composition API FAQ →`,
            url: `https://vuejs.org/guide/extras/composition-api-faq.html`,
          },
          {
            title: `OpenAI Chat Completions 指南 →`,
            url: `https://platform.openai.com/docs/guides/chat`,
          },
          {
            title: `RESTful API 设计规范 →`,
            url: `https://restfulapi.net/`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 1,
        title: `LLMOps 平台基础`,
        points: [
          `LLMOps 平台架构认知`,
          `开发环境搭建与项目初始化`,
          `OpenAI API 调用与模型对接`,
        ],
      },
      {
        weekNumber: 2,
        title: `后端搭建`,
        points: [
          `Flask 服务搭建与路由设计`,
          `SQLAlchemy + PostgreSQL 数据建模`,
          `RESTful API 接口开发`,
        ],
      },
      {
        weekNumber: 3,
        title: `前端搭建`,
        points: [
          `Vue + TypeScript 项目搭建`,
          `聊天界面 UI 开发`,
          `前后端联调与基础对话功能`,
        ],
      },
    ],
  },
  {
    id: 2,
    number: `02`,
    title: `商业级聊天机器人开发`,
    weeks: `WEEK 04 — 06`,
    level: `进阶`,
    description: `基础 ChatBot 只能依赖单轮上下文，无法记住用户偏好，也无法检索私有知识。本阶段将赋予它三个核心能力：长期记忆、知识检索与工具调用，使其从"能对话"升级为"能用"。`,
    tags: [
      `Redis`,
      `Faiss`,
      `Embedding`,
      `RAG`,
      `Agent`,
      `ReACT`,
    ],
    overview: [
      `基础 ChatBot 只能依赖单轮上下文，无法记住用户偏好，也无法检索私有知识。本阶段将赋予它三个核心能力：长期记忆、知识检索与工具调用，使其从"能对话"升级为"能用"。`,
      `第四周聚焦记忆模块，通过 Redis 实现短期与长期记忆，结合滑动窗口与摘要机制突破上下文长度限制；第五周搭建 RAG 数据管道，完成文档解析、分块、Embedding 向量化与 Faiss 相似度检索，实现基于知识库的精准回答。`,
      `第六周引入 Agent 与 ReACT 推理模式，让模型能够自主决策何时检索知识、何时调用外部工具，最终交付具备记忆 + RAG + Agent 三位一体能力的商业级 ChatBot。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `Redis 缓存`,
          description: `你在联通项目用过 Redis 缓存用户点击页面，记忆模块的 Redis 用法类似`,
        },
        {
          title: `文档处理管道`,
          description: `RAG 的"文档解析→分块→向量化→检索"本质就是 ETL，你做了5年`,
        },
        {
          title: `Faiss 向量检索`,
          description: `概念上类似 ClickHouse 的分布式检索，只是用向量相似度替代 SQL 条件`,
        },
      ],
      gaps: [
        {
          title: `Embedding 模型`,
          description: `理解文本如何变成向量，选型策略（BGE/M3E/OpenAI）`,
        },
        {
          title: `ReACT Agent 框架`,
          description: `从确定性数据流转到 LLM 自主决策，这是思维方式的转变`,
        },
        {
          title: `Function Calling`,
          description: `OpenAI 的工具调用接口规范，需要理解 JSON Schema 定义`,
        },
      ],
      advice: [
        `Week 4 记忆模块对你很简单，Redis 你已经会用，重点理解对话上下文管理策略`,
        `Week 5 RAG 是核心——用你做 ETL 的思维理解：文档分块 = 数据拆分，向量化 = 数据转换，检索 = 数据查询`,
        `Week 6 Agent 是本阶段难点，建议多写几遍 ReACT 循环代码加深理解`,
      ],
    },
    learningObjectives: [
      {
        icon: `messages-square`,
        title: `多轮对话记忆管理`,
        description: `实现会话上下文管理与长期记忆，突破上下文窗口限制。`,
      },
      {
        icon: `file-search`,
        title: `搭建 RAG 检索管道`,
        description: `完成文档处理→向量化→检索→生成的端到端 RAG 流程。`,
      },
      {
        icon: `brain-circuit`,
        title: `掌握 Agent 与 ReACT`,
        description: `理解 ReACT 推理模式，实现工具调用与多步编排。`,
      },
      {
        icon: `vector-square`,
        title: `理解 Embedding 与向量库`,
        description: `掌握 Embedding 模型选型与向量数据库的索引原理。`,
      },
      {
        icon: `trophy`,
        title: `交付商业级 ChatBot`,
        description: `交付具备记忆 + RAG + Agent 能力的商业可用智能助手。`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 4,
        title: `记忆模块`,
        knowledgePoints: [
          {
            title: `对话上下文管理`,
            description: `理解对话上下文窗口限制，实现滑动窗口策略保留最近 N 轮对话。设计对话摘要机制——当对话超过窗口时自动摘要前文，确保关键信息不丢失。 滑动窗口保留最近若干轮原始对话，超出部分由 LLM 生成结构化摘要注入系统提示，兼顾上下文连贯性与 Token 成本。`,
          },
          {
            title: `Redis 长期记忆`,
            description: `搭建 Redis 服务，设计记忆存储结构（短期记忆：最近对话列表；长期记忆：用户偏好摘要）。实现记忆的读写与过期策略。`,
            codeBlock: `# Redis 记忆结构
short_term:{user_id}   → List[message]   # 最近 N 轮
long_term:{user_id}    → String(summary) # 偏好摘要
TTL: short_term = 1h · long_term = 7d`,
          },
          {
            title: `多轮对话优化`,
            description: `实现对话历史压缩、关键信息提取、上下文相关性排序。处理多用户并发会话隔离，确保不同用户的记忆互不污染。`,
          },
        ],
      },
      {
        weekNumber: 5,
        title: `RAG 数据模块`,
        knowledgePoints: [
          {
            title: `文档处理管道`,
            description: `支持 PDF / Word / Markdown 文档解析，实现文档分块策略（固定长度分块、语义分块、递归分块）。理解 chunk_size 和 overlap 参数对检索效果的影响。`,
          },
          {
            title: `Embedding 向量化`,
            description: `选择 Embedding 模型（OpenAI text-embedding-3-small / BGE / M3E），理解向量维度与质量的关系。批量向量化文档块。`,
            codeBlock: `from openai import OpenAI
client = OpenAI()
resp = client.embeddings.create(
    model="text-embedding-3-small",
    input=chunks  # List[str]
)
vectors = [d.embedding for d in resp.data]`,
          },
          {
            title: `向量数据库 Faiss`,
            description: `搭建 Faiss 本地向量索引，理解 IVF、HNSW 索引类型。实现相似度检索（余弦相似度 / L2 距离），返回 Top-K 相关文档块。`,
          },
          {
            title: `RAG 生成流程`,
            description: `检索相关文档 → 构造增强 Prompt（context + question）→ 调用 LLM 生成回答。实现引用标注，标注回答来源的文档段落。`,
            codeBlock: `def rag_answer(question, top_k=3):
    docs = faiss.search(embed(question), k=top_k)
    context = "\\n".join(d.text for d in docs)
    prompt = f"参考资料：{context}\\n问题：{question}"
    return llm.chat(prompt), docs  # 返回引用`,
          },
        ],
      },
      {
        weekNumber: 6,
        title: `工具功能 (Agent)`,
        knowledgePoints: [
          {
            title: `ReACT 推理模式`,
            description: `理解 ReACT（Reasoning + Acting）框架——Thought → Action → Observation 循环。设计 Agent 的推理链与工具选择逻辑。`,
            codeBlock: `Thought: 用户问今天天气，我需要调用搜索工具
Action: search_weather(city="北京")
Observation: 晴, 26℃
Thought: 已获得结果，可以回答用户
Final Answer: 北京今天晴，气温 26℃。`,
          },
          {
            title: `自定义工具定义`,
            description: `定义搜索工具、计算器工具、数据库查询工具等。使用 OpenAI Function Calling 或 LangChain Tool 接口规范工具定义，明确参数 schema 与返回格式。`,
          },
          {
            title: `Agent 多步编排`,
            description: `实现 Agent 多步推理与工具调用循环，处理工具调用失败与异常。设置最大迭代次数防止死循环，并在超出时优雅降级。`,
          },
          {
            title: `Agent 与 RAG 结合`,
            description: `让 Agent 能自主决定何时检索知识库、何时调用外部工具，实现智能路由。这是从"被动问答"到"主动解决问题"的关键跃迁。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `具备记忆 + RAG + Agent 的商业级 ChatBot`,
      description: `在阶段一基础上集成三大能力：Redis 实现长期记忆与上下文压缩；Faiss + Embedding 搭建 RAG 知识检索，支持文档上传与引用标注；ReACT Agent 实现工具自主调用与多步推理。最终交付可服务于真实业务场景的智能助手。`,
      deliverables: [
        {
          label: `MEMORY`,
          title: `Redis 长期记忆`,
        },
        {
          label: `RAG`,
          title: `Faiss 知识检索`,
        },
        {
          label: `AGENT`,
          title: `ReACT 工具调用`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `zap`,
        title: `Redis 缓存策略`,
        description: `短期记忆用 List、长期记忆用 String，配合 TTL 与摘要压缩，平衡召回率与成本。`,
      },
      {
        icon: `grid-3x3`,
        title: `Faiss 向量索引`,
        description: `使用 IVF 或 HNSW 索引加速近邻搜索，支持余弦相似度与 L2 距离度量。`,
      },
      {
        icon: `sliders-horizontal`,
        title: `Embedding 模型选型`,
        description: `中文场景优先 BGE-large-zh / M3E，英文场景可用 OpenAI text-embedding-3，需权衡维度与存储成本。`,
      },
      {
        icon: `git-branch`,
        title: `ReACT Agent 编排`,
        description: `Thought-Action-Observation 循环驱动工具调用，结合 max_iterations 防止死循环。`,
      },
    ],
    faq: [
      {
        question: `RAG 检索效果不好怎么办？`,
        answer: `优化分块策略（减小 chunk_size）、尝试语义分块、增加 overlap、使用 reranker 重排序检索结果，并校验 Embedding 模型与语种匹配。`,
      },
      {
        question: `Agent 工具调用陷入死循环？`,
        answer: `设置 max_iterations（建议 5-10 次），添加终止条件检测，实现 fallback 策略——超过阈值后直接返回当前最佳结果。`,
      },
      {
        question: `Embedding 模型怎么选？`,
        answer: `中文场景推荐 BGE-large-zh 或 M3E，英文场景推荐 OpenAI text-embedding-3，注意向量维度与存储成本的权衡。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `Redis 官方文档 →`,
            url: `https://redis.io/docs/`,
          },
          {
            title: `Faiss 官方文档 →`,
            url: `https://faiss.ai/`,
          },
          {
            title: `LangChain 官方文档 →`,
            url: `https://python.langchain.com/docs/`,
          },
          {
            title: `HuggingFace Embeddings 指南 →`,
            url: `https://huggingface.co/blog/getting-started-with-embeddings`,
          },
          {
            title: `OpenAI Function Calling 文档 →`,
            url: `https://platform.openai.com/docs/guides/function-calling`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `RAG 从原理到实战（B站）→`,
            url: `https://www.bilibili.com/video/BV1BV4y1v7nR`,
          },
          {
            title: `LangChain Agent 开发教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1xm4y1s7Hb`,
          },
          {
            title: `Faiss 向量检索入门（B站）→`,
            url: `https://www.bilibili.com/video/BV1TV411r7wp`,
          },
          {
            title: `ReACT Agent 原理讲解（YouTube）→`,
            url: `https://www.youtube.com/watch?v=bZQun8Y4L2A`,
          },
          {
            title: `Embedding 模型完整教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=azUyI-x3Hb8`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `ReACT 论文：Reasoning+Acting →`,
            url: `https://arxiv.org/abs/2210.03629`,
          },
          {
            title: `LangChain Agent 文档 →`,
            url: `https://python.langchain.com/docs/modules/agents/`,
          },
          {
            title: `RAG 分块策略详解 →`,
            url: `https://www.pinecone.io/learn/chunking-strategies/`,
          },
          {
            title: `GraphRAG 知识图谱检索 →`,
            url: `https://microsoft.github.io/graphrag/`,
          },
          {
            title: `LLM Agent 综述（Lilian Weng）→`,
            url: `https://lilianweng.github.io/posts/2023-06-23-agent/`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 4,
        title: `记忆模块`,
        points: [
          `对话上下文管理与会话保持`,
          `Redis 长期记忆缓存`,
          `多轮对话历史摘要`,
        ],
      },
      {
        weekNumber: 5,
        title: `RAG 数据模块`,
        points: [
          `文档解析与分块策略`,
          `Embedding 向量化与 Faiss 索引`,
          `知识检索与注入生成`,
        ],
      },
      {
        weekNumber: 6,
        title: `工具功能 (Agent)`,
        points: [
          `ReACT 推理与行动模式`,
          `自定义工具定义与调用`,
          `Agent 多步编排与决策`,
        ],
      },
    ],
  },
  {
    id: 3,
    number: `03`,
    title: `LLMOps 应用平台可视化`,
    weeks: `WEEK 07 — 09`,
    level: `平台化`,
    description: `当 ChatBot 具备记忆、RAG 与 Agent 能力后，下一个挑战是"可管理性"。本阶段将构建一个可视化的 LLMOps 管理平台，让 Prompt、模型响应与用户权限都成为可控的资产。`,
    tags: [
      `JWT`,
      `SSE`,
      `Prompt Engineering`,
      `RBAC`,
    ],
    overview: [
      `当 ChatBot 具备记忆、RAG 与 Agent 能力后，下一个挑战是"可管理性"。本阶段将构建一个可视化的 LLMOps 管理平台，让 Prompt、模型响应与用户权限都成为可控的资产。`,
      `第七周聚焦 Prompt 模块——设计模板数据模型、变量注入与版本管理，支持 A/B 测试与可视化编辑；第八周深入响应模块——SSE 流式协议、Redis 响应缓存、多模型切换与降级、监控仪表盘。`,
      `第九周搭建授权认证体系——用户注册登录、JWT 双 Token 机制、RBAC 权限模型与安全加固。最终交付一个具备 Prompt 管理 + 流式响应 + 认证的 LLMOps 可视化管理平台。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `平台化管理`,
          description: `你做过报表平台、数据中台，Prompt 管理平台概念上完全一致`,
        },
        {
          title: `调度编排`,
          description: `DataWorks 调度经验直接迁移到 Prompt 模板版本管理和 A/B 测试`,
        },
        {
          title: `用户认证`,
          description: `你设计过 rds 配置表和后端接口，JWT 认证是标准 Web 安全方案`,
        },
      ],
      gaps: [
        {
          title: `SSE 流式响应深入`,
          description: `不只是概念，需要处理断线重连、心跳保活等工程细节`,
        },
        {
          title: `JWT + RBAC`,
          description: `你可能没做过完整的认证体系，需要学习双 Token 机制`,
        },
        {
          title: `前端权限守卫`,
          description: `Vue Router 的路由级权限控制，需要前端知识`,
        },
      ],
      advice: [
        `这个阶段是你的舒适区——把 LLMOps 平台当成"带 LLM 引擎的 DataWorks"来理解`,
        `Prompt 模板管理 = SQL 模板管理，版本控制逻辑一样`,
        `重点放在 SSE 和 JWT 上，这两个是需要补课的工程技能`,
      ],
    },
    learningObjectives: [
      {
        icon: `file-text`,
        title: `Prompt 模板管理`,
        description: `设计模板系统，支持版本控制、变量注入与 A/B 测试。`,
      },
      {
        icon: `radio`,
        title: `SSE 流式与多模型切换`,
        description: `实现 SSE 端点与多模型动态切换、降级策略。`,
      },
      {
        icon: `shield-check`,
        title: `认证与 RBAC 权限`,
        description: `搭建 JWT 双 Token 认证与角色权限控制体系。`,
      },
      {
        icon: `layout-dashboard`,
        title: `可视化管理后台`,
        description: `构建管理后台界面，集成监控面板与运营工具。`,
      },
      {
        icon: `package-check`,
        title: `完成平台核心管理功能`,
        description: `交付 LLMOps 平台核心管理能力，使 AI 应用可管理、可监控、可运营。`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 7,
        title: `Prompt 模块`,
        knowledgePoints: [
          {
            title: `Prompt 模板管理`,
            description: `设计 Prompt 模板数据模型（模板名 / 内容 / 变量 / 版本号），实现模板 CRUD 接口。支持模板分类与标签管理。`,
            codeBlock: `PromptTemplate:
  id · name · content · variables[] · version
  category · tags[] · created_at · updated_at`,
          },
          {
            title: `变量注入与渲染`,
            description: `实现 Jinja2 模板引擎变量注入，支持系统变量（日期 / 用户名）与自定义变量。设计变量校验机制。`,
            codeBlock: `from jinja2 import Template
tpl = Template("你好 {{user}}，今天是 {{date}}")
rendered = tpl.render(user="张三", date="周一")`,
          },
          {
            title: `A/B 测试与效果对比`,
            description: `实现 Prompt 模板版本管理，支持多版本对比测试。设计效果评估指标（响应质量评分 / 用户满意度 / Token 消耗），用数据驱动 Prompt 迭代。`,
          },
          {
            title: `Prompt 可视化编辑器`,
            description: `开发在线 Prompt 编辑器，支持变量高亮、实时预览、历史版本回滚。让运营人员无需改代码即可调整 Prompt。`,
          },
        ],
      },
      {
        weekNumber: 8,
        title: `响应模块`,
        knowledgePoints: [
          {
            title: `SSE 流式响应`,
            description: `深入理解 Server-Sent Events 协议，实现 Flask SSE 端点。处理连接断开重连、心跳保活机制。`,
            codeBlock: `@app.route("/api/v1/chat/stream")
def stream():
    def generate():
        for chunk in llm.stream(prompt):
            yield f"data: {chunk}\\n\\n"
    return Response(generate(), mimetype="text/event-stream")`,
          },
          {
            title: `响应缓存策略`,
            description: `基于 Redis 实现响应缓存，相同 Prompt + 参数直接返回缓存结果。设计缓存失效策略（TTL / 主动失效），降低重复调用的 Token 成本。`,
          },
          {
            title: `多模型切换`,
            description: `支持 OpenAI GPT-4 / GPT-3.5 / Claude 等多模型接入，实现模型动态切换与降级策略（主模型超时自动切换备选模型），保障服务可用性。`,
          },
          {
            title: `响应监控面板`,
            description: `开发响应耗时监控、Token 使用统计、错误率仪表盘，让平台运营状态可视化、可预警。`,
          },
        ],
      },
      {
        weekNumber: 9,
        title: `授权认证`,
        knowledgePoints: [
          {
            title: `用户注册登录`,
            description: `实现用户注册 / 登录 / 找回密码流程，密码 bcrypt 加密存储。支持邮箱验证与第三方登录（GitHub / Google OAuth）。`,
          },
          {
            title: `JWT Token 认证`,
            description: `实现 JWT Token 签发与校验，Access Token + Refresh Token 双 Token 机制。处理 Token 过期与自动续签。`,
            codeBlock: `Access Token  → 前端内存 · 短时效 (15min)
Refresh Token → HttpOnly Cookie · 长时效 (7d)
# Access 过期时用 Refresh 换新`,
          },
          {
            title: `RBAC 权限管理`,
            description: `设计角色-权限模型（管理员 / 开发者 / 普通用户），实现 API 级别权限控制。前端路由级权限守卫，做到接口与界面双重防护。`,
          },
          {
            title: `安全加固`,
            description: `接口限流（Rate Limiting）、SQL 注入防护、XSS 过滤、CSRF 防护，构建多层纵深防御体系。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `LLMOps 可视化管理平台`,
      description: `交付包含 Prompt 管理 + 流式响应 + 认证的可视化管理平台：运营人员可在后台管理 Prompt 模板与版本，开发者可监控响应耗时与 Token 用量，用户通过 JWT 认证访问，RBAC 控制不同角色的可见范围。`,
      deliverables: [
        {
          label: `PROMPT`,
          title: `模板管理与 A/B 测试`,
        },
        {
          label: `RESPONSE`,
          title: `SSE 流式 + 多模型`,
        },
        {
          label: `AUTH`,
          title: `JWT + RBAC 权限`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `file-code-2`,
        title: `Jinja2 模板引擎`,
        description: `使用 Jinja2 实现 Prompt 变量注入与渲染，支持系统变量与自定义变量校验。`,
      },
      {
        icon: `radio`,
        title: `SSE 协议`,
        description: `基于 text/event-stream 实现服务端推送，配合心跳保活与断点续传。`,
      },
      {
        icon: `key-round`,
        title: `JWT 双 Token 认证`,
        description: `Access Token 短时效存内存，Refresh Token 长时效存 HttpOnly Cookie，自动续签。`,
      },
      {
        icon: `users`,
        title: `RBAC 权限模型`,
        description: `角色-权限映射实现 API 级与路由级双重控制，支撑多租户场景。`,
      },
    ],
    faq: [
      {
        question: `SSE 连接经常断开？`,
        answer: `实现 Last-Event-ID 机制支持断点续传，添加心跳包（每 15s 发送注释行），Nginx 配置 proxy_buffering off 避免缓冲堆积。`,
      },
      {
        question: `JWT Token 存哪里？`,
        answer: `Access Token 存内存（前端 Vuex / Pinia），Refresh Token 存 HttpOnly Cookie，避免 XSS 攻击窃取。`,
      },
      {
        question: `Prompt 版本管理怎么做？`,
        answer: `每次修改创建新版本，保留历史版本，支持 diff 对比与一键回滚，配合 A/B 测试用数据驱动迭代。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `Jinja2 模板引擎文档 →`,
            url: `https://jinja.palletsprojects.com/`,
          },
          {
            title: `JWT 官方文档 →`,
            url: `https://jwt.io/`,
          },
          {
            title: `FastAPI 文档（可对比Flask）→`,
            url: `https://fastapi.tiangolo.com/`,
          },
          {
            title: `MDN: SSE 协议 →`,
            url: `https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events`,
          },
          {
            title: `Auth0 认证文档（RBAC参考）→`,
            url: `https://auth0.com/docs/`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `JWT 认证完整教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1ob4y1L7pL`,
          },
          {
            title: `Flask SSE 流式响应实战（B站）→`,
            url: `https://www.bilibili.com/video/BV1zT4y1T7E2`,
          },
          {
            title: `RBAC 权限系统设计（B站）→`,
            url: `https://www.bilibili.com/video/BV1Sb411M7Yv`,
          },
          {
            title: `OAuth 2.0 认证流程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=7Q17ubWHj2c`,
          },
          {
            title: `Prompt Engineering 教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=UbYZUarpm1c`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `JWT RFC 7519 标准 →`,
            url: `https://datatracker.ietf.org/doc/html/rfc7519`,
          },
          {
            title: `OWASP 访问控制指南 →`,
            url: `https://owasp.org/www-community/ access_control`,
          },
          {
            title: `Prompt Engineering 指南 →`,
            url: `https://www.promptingguide.ai/`,
          },
          {
            title: `GitHub Actions CI/CD →`,
            url: `https://docs.github.com/en/actions`,
          },
          {
            title: `Swagger/OpenAPI 规范 →`,
            url: `https://swagger.io/docs/specification/about/`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 7,
        title: `Prompt 模块`,
        points: [
          `Prompt 模板管理与版本控制`,
          `变量注入与模板渲染`,
          `A/B 测试与效果对比`,
        ],
      },
      {
        weekNumber: 8,
        title: `响应模块`,
        points: [
          `SSE 流式响应传输`,
          `响应缓存与超时处理`,
          `多模型切换与降级策略`,
        ],
      },
      {
        weekNumber: 9,
        title: `授权认证`,
        points: [
          `用户注册登录体系`,
          `JWT Token 签发与校验`,
          `RBAC 权限管理`,
        ],
      },
    ],
  },
  {
    id: 4,
    number: `04`,
    title: `LLMOps 可视化续`,
    weeks: `WEEK 10 — 12`,
    level: `平台化`,
    description: `本阶段是 LLMOps 平台能力建设的收尾。在前三阶段已具备对话、记忆、RAG、Agent 与可视化管理的基础上，补齐内容安全、开放接入与工作流编排三大能力，让平台从"能用"走向"可对外服务、可复杂编排"。`,
    tags: [
      `API Gateway`,
      `LangGraph`,
      `DAG`,
      `内容安全`,
      `Multi-Agent`,
    ],
    overview: [
      `本阶段是 LLMOps 平台能力建设的收尾。在前三阶段已具备对话、记忆、RAG、Agent 与可视化管理的基础上，补齐内容安全、开放接入与工作流编排三大能力，让平台从"能用"走向"可对外服务、可复杂编排"。`,
      `第十周聚焦审核模块——对接内容安全 API、构建敏感词 AC 自动机、设计多级审核策略与可视化复审面板；第十一周开放 API——搭建网关、API Key 管理、Token 计费与 Swagger 文档，让第三方可安全接入。`,
      `第十二周引入多应用工作流——基于 DAG 与 LangGraph StateGraph 实现多 Agent 协作编排，支持串行、并行与分层协作模式，最终交付完整的 LLMOps 平台。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `数据治理`,
          description: `你做过数据质量管理、元数据管理，内容审核模块的审核策略类似数据校验`,
        },
        {
          title: `API 网关`,
          description: `你做过阿里云到华为云迁移，API 网关和计费体系的概念你已经熟悉`,
        },
        {
          title: `工作流编排`,
          description: `DataWorks 的调度编排经验，直接迁移到 LangGraph 的 DAG 工作流`,
        },
      ],
      gaps: [
        {
          title: `AC 自动机算法`,
          description: `敏感词过滤的高效匹配算法，需要理解 Trie 树和 AC 自动机原理`,
        },
        {
          title: `LangGraph 状态图`,
          description: `比传统 DAG 更复杂，支持条件分支和循环，需要专门学习`,
        },
        {
          title: `多 Agent 协作`,
          description: `串行/并行/分层协作模式，是 Agent 工程的进阶内容`,
        },
      ],
      advice: [
        `Week 10 审核模块对你不难——用你做数据质量校验的思路理解内容安全审核`,
        `Week 11 开放 API 类似你做过的数据服务平台，API Key 管理和计费体系直接套用经验`,
        `Week 12 LangGraph 是重点，把它类比为"带 LLM 决策能力的 DataWorks 调度"`,
      ],
    },
    learningObjectives: [
      {
        icon: `shield-alert`,
        title: `内容安全审核`,
        description: `实现敏感词过滤与多级审核策略，保障平台内容合规。`,
      },
      {
        icon: `webhook`,
        title: `开放 API 与计费`,
        description: `设计 API 网关、Key 管理与 Token 计费体系。`,
      },
      {
        icon: `git-fork`,
        title: `LangGraph 状态图编排`,
        description: `掌握 StateGraph 状态机与条件分支、循环、并行节点。`,
      },
      {
        icon: `bot`,
        title: `多 Agent 协作`,
        description: `实现串行、并行与分层多 Agent 协作工作流。`,
      },
      {
        icon: `package-check`,
        title: `完成完整 LLMOps 平台`,
        description: `交付具备审核 + 开放 API + 工作流编排的完整 LLMOps 平台。`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 10,
        title: `审核模块`,
        knowledgePoints: [
          {
            title: `内容安全审核`,
            description: `对接内容安全 API（阿里云 / 腾讯云内容安全），实现输入输出双重审核。设计审核策略（先审后发 / 先发后审），平衡安全性与体验流畅度。`,
          },
          {
            title: `敏感词过滤`,
            description: `构建敏感词库与 AC 自动机算法实现高效匹配，支持通配符与变体识别。实现分级过滤（替换 / 拒绝 / 人工审核）。`,
            codeBlock: `from pyahocorasick import Automaton
ac = Automaton()
for idx, word in enumerate(sensitive_words):
    ac.add_word(word, (idx, word))
ac.make_automaton()
# O(n) 扫描文本命中所有敏感词`,
          },
          {
            title: `多级审核策略`,
            description: `根据用户等级配置不同审核策略——新用户严格审核、信任用户快速通道。审核日志记录与审计追踪，满足合规要求。`,
          },
          {
            title: `审核结果可视化`,
            description: `开发审核记录管理面板，支持申诉处理与人工复审，形成"机器初审 + 人工复核"的闭环。`,
          },
        ],
      },
      {
        weekNumber: 11,
        title: `开放 API`,
        knowledgePoints: [
          {
            title: `API 网关`,
            description: `搭建 API 网关（Kong / APISIX），实现统一入口、路由转发、鉴权。配置 API 限流策略（令牌桶算法 / 漏桶算法），保护后端服务免受突发流量冲击。`,
          },
          {
            title: `API Key 管理`,
            description: `实现 API Key 申请 / 审批 / 吊销流程，支持多应用隔离。设计 Key 权限范围控制，区分只读、读写、管理等权限级别。`,
          },
          {
            title: `计费体系`,
            description: `基于 Token 用量计费，实现用量统计与配额管理。支持预付费套餐与后付费两种模式。`,
            codeBlock: `计费公式: fee = tokens_used × unit_price
预付费: 套餐包 → 用量扣减 → 余额不足拦截
后付费: 月度结算 → 按阶梯计价 → 发账单`,
          },
          {
            title: `Swagger 文档`,
            description: `自动生成 API 接口文档，提供在线调试工具。支持多语言 SDK 自动生成，降低第三方接入成本。`,
          },
        ],
      },
      {
        weekNumber: 12,
        title: `多应用工作流`,
        knowledgePoints: [
          {
            title: `应用编排概念`,
            description: `理解 DAG（有向无环图）工作流编排模型，节点表示任务、边表示数据流。设计可视化编排界面，让用户通过拖拽配置复杂流程。`,
          },
          {
            title: `LangGraph 状态图`,
            description: `深入学习 LangGraph 框架，理解 StateGraph 状态机模型。实现条件分支、循环、并行节点。`,
            codeBlock: `from langgraph.graph import StateGraph, END

graph = StateGraph(State)
graph.add_node("retrieve", retrieve_fn)
graph.add_node("generate", generate_fn)
graph.add_conditional_edges("retrieve", should_generate)
graph.add_edge("generate", END)
app = graph.compile()`,
          },
          {
            title: `多 Agent 协作`,
            description: `实现多 Agent 协作模式——串行协作（A→B→C）、并行协作（A+B→C）、分层协作（主 Agent 调度子 Agent）。`,
            codeBlock: `串行: A → B → C      # 流水线
并行: A ┐
        B ┘→ C        # 汇总
分层: 主Agent → [子A, 子B, 子C]  # 调度`,
          },
          {
            title: `工作流调试与监控`,
            description: `实现工作流执行追踪、节点耗时统计、错误定位与重试机制，让复杂编排也可观测、可调试。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `完整 LLMOps 平台`,
      description: `交付包含审核 + 开放 API + 工作流编排的完整 LLMOps 平台：内容安全模块实现输入输出双重审核与敏感词过滤；开放 API 通过网关统一接入并按 Token 计费；工作流编排基于 LangGraph 支持多 Agent 串行、并行与分层协作。平台可对外提供服务，支撑复杂业务场景。`,
      deliverables: [
        {
          label: `AUDIT`,
          title: `内容安全与敏感词`,
        },
        {
          label: `API`,
          title: `网关 + Key + 计费`,
        },
        {
          label: `WORKFLOW`,
          title: `LangGraph 多 Agent`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `filter`,
        title: `AC 自动机敏感词匹配`,
        description: `Aho-Corasick 算法实现 O(n) 多模式串匹配，支持通配符与变体识别，高效过滤敏感词。`,
      },
      {
        icon: `gauge`,
        title: `令牌桶限流算法`,
        description: `Redis + Lua 脚本实现分布式令牌桶，支持突发流量与平滑限流，保护后端服务。`,
      },
      {
        icon: `git-fork`,
        title: `LangGraph StateGraph`,
        description: `基于状态机模型实现条件分支、循环与并行节点，构建有状态的多步骤 Agent 工作流。`,
      },
      {
        icon: `bot`,
        title: `多 Agent 协作模式`,
        description: `支持串行、并行、分层三种协作模式，主 Agent 调度子 Agent 完成复杂任务分解。`,
      },
    ],
    faq: [
      {
        question: `敏感词过滤误报率高？`,
        answer: `结合上下文语义判断，使用 LLM 二次确认，建立白名单机制，针对正常业务词进行豁免。`,
      },
      {
        question: `API 限流怎么实现？`,
        answer: `Redis + Lua 脚本实现令牌桶，或使用网关自带限流插件，注意分布式环境下的一致性问题。`,
      },
      {
        question: `LangGraph 和 LangChain 有什么区别？`,
        answer: `LangGraph 是 LangChain 的扩展，专门用于构建有状态的、多步骤的 Agent 工作流，支持循环和条件分支。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `LangGraph 官方文档 →`,
            url: `https://langchain-ai.github.io/langgraph/`,
          },
          {
            title: `Kong API 网关文档 →`,
            url: `https://konghq.com/`,
          },
          {
            title: `APISIX 文档 →`,
            url: `https://apisix.apache.org/docs/`,
          },
          {
            title: `Elasticsearch 文本分析 →`,
            url: `https://www.elastic.co/guide/en/elasticsearch/reference/current/text-analysis.html`,
          },
          {
            title: `Swagger 文档 →`,
            url: `https://swagger.io/docs/`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `LangGraph 多Agent协作（B站）→`,
            url: `https://www.bilibili.com/video/BV1hT4y1v7YH`,
          },
          {
            title: `API 网关搭建教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1WV411r7pB`,
          },
          {
            title: `敏感词过滤算法（B站）→`,
            url: `https://www.bilibili.com/video/BV1xV411r7mY`,
          },
          {
            title: `LangGraph 完整教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=R4PPjIpUqbo`,
          },
          {
            title: `AC自动机算法讲解（YouTube）→`,
            url: `https://www.youtube.com/watch?v=vy0VL3RZJzw`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `LangGraph 论文：Multi-Agent 编排 →`,
            url: `https://arxiv.org/abs/2308.10848`,
          },
          {
            title: `Chain of Thought 推理 →`,
            url: `https://research.google/blog/chain-of-thought-prompting-elicits-reasoning/`,
          },
          {
            title: `HuggingFace 博客：内容审核 →`,
            url: `https://huggingface.co/blog`,
          },
          {
            title: `CoT Prompting 指南 →`,
            url: `https://www.promptingguide.ai/techniques/cot`,
          },
          {
            title: `分布式限流设计 →`,
            url: `https://redis.io/docs/manual/patterns/distributed-locks/`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 10,
        title: `审核模块`,
        points: [
          `内容安全审核机制`,
          `敏感词过滤与替换`,
          `多级审核策略配置`,
        ],
      },
      {
        weekNumber: 11,
        title: `开放 API`,
        points: [
          `API 网关与限流策略`,
          `API Key 管理与计费`,
          `Swagger 接口文档生成`,
        ],
      },
      {
        weekNumber: 12,
        title: `多应用工作流`,
        points: [
          `应用编排与 DAG 工作流`,
          `LangGraph 状态图编排`,
          `多 Agent 协作模式`,
        ],
      },
    ],
  },
  {
    id: 5,
    number: `05`,
    title: `前端调优及生产部署`,
    weeks: `WEEK 13 — 14`,
    level: `工程化`,
    description: `本阶段聚焦多 LLM 接入、统计模块与生产部署，将前四个阶段构建的 LLMOps 平台从开发环境推向生产可用。`,
    tags: [
      `多LLM接入`,
      `配置部署`,
      `统计监控`,
      `WebApp发布`,
      `Docker部署`,
    ],
    overview: [
      `本阶段聚焦多 LLM 接入、统计模块与生产部署，将前四个阶段构建的 LLMOps 平台从开发环境推向生产可用。第 13 章完成多模型管理器与本地 LLM（Ollama）接入，第 14 章补齐 Token 统计、WebApp 发布与项目优化部署，系统性提升平台可用性与交付标准。`,
      `在多 LLM 层面，通过 YAML 配置 + 动态导入设计模型管理器，支持 GPT、Ollama 等供应商快速切换与 function calling 扩展；在统计层面，分别统计输入 / 输出 Token 并接入 ECharts 可视化面板；在发布层面，打通 WebApp 凭证、会话与对话接口，并接入 markdown-it 渲染 AI 消息。`,
      `最后通过 404/403 错误页面、Vue hooks 优化、TypeScript 类型补全与前后端 Dockerfile 容器化，将项目交付到生产环境，构建一个稳定运行、可观测、可快速迭代的生产级 AI 平台。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `接口性能优化`,
          description: `你做过 SQL 查询优化、数据倾斜处理，后端性能优化思路一致`,
        },
        {
          title: `统计监控`,
          description: `你做过 BI 报表和数据可视化，ECharts 监控面板可以直接上手`,
        },
        {
          title: `云平台部署`,
          description: `你有阿里云/华为云实操经验，Nginx 和部署概念不陌生`,
        },
      ],
      gaps: [
        {
          title: `Docker 容器化`,
          description: `你的简历无 Docker 实操经验，Dockerfile 和 docker-compose 是本阶段重点`,
        },
        {
          title: `CI/CD 流程`,
          description: `GitHub Actions 自动化部署，你可能没有实操过完整流水线`,
        },
        {
          title: `前端性能优化`,
          description: `路由懒加载、按需加载等，需要前端工程知识`,
        },
      ],
      advice: [
        `这是你需要重点投入的阶段——Docker 部署是数据工程师转全栈的关键技能`,
        `建议把星巴克项目的部署场景迁移过来：如果 LLMOps 平台要部署到阿里云，你会怎么做？`,
        `Docker 学习建议：先跑通官方示例，再写自己项目的 Dockerfile，最后学 docker-compose 编排`,
      ],
    },
    learningObjectives: [
      {
        icon: `layers`,
        title: `实现多 LLM 接入与模型管理`,
        description: `YAML 配置 + 动态导入设计模型管理器，支持快速切换与 function calling`,
      },
      {
        icon: `bar-chart-3`,
        title: `搭建 Token 统计与可视化面板`,
        description: `输入/输出 Token 分别统计，ECharts 图表展示与调试面板优化`,
      },
      {
        icon: `share-2`,
        title: `完成 WebApp 发布与会话链路`,
        description: `凭证管理、会话/消息接口、对话交互与 markdown 渲染`,
      },
      {
        icon: `container`,
        title: `实现项目优化与 Docker 部署`,
        description: `错误页面、TS 类型补全、前后端 Dockerfile 容器化部署`,
      },
      {
        icon: `package-check`,
        title: `交付生产级 LLMOps 平台`,
        description: `含多模型接入、统计监控、WebApp 发布与容器化部署的完整平台`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 13,
        title: `后端优化 + 生产部署`,
        knowledgePoints: [
          {
            title: `接口性能优化`,
            description: `分析接口瓶颈，定位数据库查询、LLM 调用与序列化等耗时环节。优化数据库查询——建立合理索引、解决 N+1 问题、使用预加载（eager loading）减少查询次数。引入 Celery 异步任务队列处理耗时操作，将 LLM 长耗时调用从同步请求中剥离。`,
          },
          {
            title: `Docker 容器化`,
            description: `编写 Dockerfile 构建后端镜像，使用多阶段构建减小镜像体积。通过 docker-compose 编排多服务（Flask + PostgreSQL + Redis），配置数据卷持久化保证数据安全，使用 .env 文件管理环境变量，实现开发/测试/生产环境配置隔离。`,
          },
          {
            title: `Nginx 反向代理`,
            description: `配置 Nginx 反向代理与负载均衡，将请求分发到多个后端实例。配置 SSL 证书实现 HTTPS 加密传输，制定静态资源缓存策略减轻后端压力。针对 WebSocket 与 SSE 流式响应进行特殊代理配置，确保流式数据正确传输。`,
          },
          {
            title: `CI/CD 流程`,
            description: `搭建 GitHub Actions 自动化构建部署流程：代码提交 → 自动测试 → 构建镜像 → 推送镜像仓库 → 部署到生产服务器。掌握蓝绿部署与滚动更新策略，实现零停机发布与快速回滚能力。`,
          },
        ],
      },
      {
        weekNumber: 14,
        title: `统计模块 + 前端优化`,
        knowledgePoints: [
          {
            title: `调用统计面板`,
            description: `统计 API 调用次数、响应耗时、错误率与 Token 消耗等核心指标，使用 ECharts 进行数据可视化呈现。支持按时间维度、用户维度、应用维度交叉分析，为运营决策与成本优化提供数据支撑。`,
          },
          {
            title: `前端性能优化`,
            description: `实施路由懒加载减少首屏加载时间，组件按需加载避免冗余打包。图片懒加载配合 CDN 加速静态资源分发。使用 Webpack Bundle Analyzer 分析打包体积，识别并优化过大的依赖包。`,
          },
          {
            title: `用户体验调优`,
            description: `引入骨架屏优化加载状态感知，消息发送增加防抖避免重复请求，错误场景提供友好提示与重试机制。适配暗色模式提升夜间使用体验，响应式布局适配移动端与平板设备。`,
          },
          {
            title: `监控告警`,
            description: `接入 Sentry 错误监控平台，实时捕获前后端异常。配置告警规则——设定错误率阈值与响应时间阈值，触发时通过邮件与 Webhook 自动通知运维人员，实现问题的快速响应与闭环处理。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `生产环境部署的 LLMOps 平台`,
      description: `将前四个阶段构建的 LLMOps 平台完整部署到生产环境，包含多 LLM 模型管理器、Token 统计可视化面板、WebApp 发布链路与前后端 Dockerfile 容器化。交付一个稳定运行、可观测、可快速迭代的生产级 AI 平台。`,
      deliverables: [
        {
          label: `多LLM接入`,
          title: `YAML 配置 + 动态导入模型管理器，Ollama 本地模型`,
        },
        {
          label: `统计与发布`,
          title: `ECharts 统计面板 + WebApp 凭证会话链路`,
        },
        {
          label: `容器化部署`,
          title: `Vue 与 API 双 Dockerfile，项目优化与 TS 补全`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `layers`,
        title: `模型管理器`,
        description: `YAML 配置 + 动态导入，多供应商快速切换`,
      },
      {
        icon: `cpu`,
        title: `Ollama 本地LLM`,
        description: `本地部署开源模型，Faiss 向量索引`,
      },
      {
        icon: `bar-chart-3`,
        title: `ECharts 可视化`,
        description: `输入/输出 Token 统计与指标卡片`,
      },
      {
        icon: `container`,
        title: `Dockerfile 部署`,
        description: `Vue 与 API 双镜像构建，生产容器化`,
      },
    ],
    faq: [
      {
        question: `模型管理器如何支持新供应商？`,
        answer: `在 YAML 配置文件中新增供应商条目，利用动态导入按配置项加载对应服务类，pydantic 校验初始化参数，无需修改核心代码即可接入新供应商。`,
      },
      {
        question: `WebApp 凭证失效如何重生成？`,
        answer: `调用发布模块的凭证重生成接口，旧凭证立即失效并写入新凭证标识，前端 WebApp 通过新凭证获取基础信息与对话接口。`,
      },
      {
        question: `前后端 Dockerfile 有何区别？`,
        answer: `Vue 前端使用多阶段构建，先 node 构建静态资源再用 nginx 托管；API 后端基于 python 镜像安装依赖并启动 Flask 服务，两者可独立构建与部署。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `Docker 官方文档 →`,
            url: `https://docs.docker.com/`,
          },
          {
            title: `Docker Compose 文档 →`,
            url: `https://docs.docker.com/compose/`,
          },
          {
            title: `Nginx 官方文档 →`,
            url: `https://nginx.org/en/docs/`,
          },
          {
            title: `GitHub Actions 文档 →`,
            url: `https://docs.github.com/en/actions`,
          },
          {
            title: `ECharts 官方文档 →`,
            url: `https://echarts.apache.org/zh/index.html`,
          },
          {
            title: `Celery 异步任务文档 →`,
            url: `https://docs.celeryq.dev/`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `Docker 入门到精通（B站）→`,
            url: `https://www.bilibili.com/video/BV1Hp4y1t7zM`,
          },
          {
            title: `Docker Compose 实战（B站）→`,
            url: `https://www.bilibili.com/video/BV1zV41187pn`,
          },
          {
            title: `Nginx 配置详解（B站）→`,
            url: `https://www.bilibili.com/video/BV1F5411j7vk`,
          },
          {
            title: `ECharts 数据可视化（B站）→`,
            url: `https://www.bilibili.com/video/BV1Yb4y1T7rn`,
          },
          {
            title: `GitHub Actions CI/CD 教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=R8_veQiY4jM`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `Docker 最佳实践 →`,
            url: `https://docs.docker.com/develop/dev-best-practices/`,
          },
          {
            title: `Docker Compose 示例集合 →`,
            url: `https://github.com/dylanlin/awesome-docker-compose`,
          },
          {
            title: `前端性能优化指南 →`,
            url: `https://web.dev/performance/`,
          },
          {
            title: `Sentry 错误监控 →`,
            url: `https://sentry.io/`,
          },
          {
            title: `Dockerfile 参考手册 →`,
            url: `https://docs.docker.com/engine/reference/builder/`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 13,
        title: `后端优化 + 生产部署`,
        points: [
          `接口性能优化与缓存策略`,
          `Docker 容器化部署`,
          `Nginx 反向代理与负载均衡`,
        ],
      },
      {
        weekNumber: 14,
        title: `统计模块 + 前端优化`,
        points: [
          `调用统计与用量监控面板`,
          `前端性能优化与懒加载`,
          `用户体验调优`,
        ],
      },
    ],
  },
  {
    id: 6,
    number: `06`,
    title: `多模态工具功能与平台部署`,
    weeks: `WEEK 15`,
    level: `拓展`,
    description: `本阶段扩展 Agent 工具链，支持图像、语音等多模态输入输出，并完成平台生产部署与第三方社交平台对接，让 AI 能看、能听、能说，还能发布到微信公众号。`,
    tags: [
      `多模态`,
      `GPT-4V`,
      `Whisper ASR`,
      `TTS`,
      `Nginx部署`,
      `微信发布`,
    ],
    overview: [
      `本阶段扩展 Agent 工具链，支持图像、语音等多模态输入输出，并完成平台生产部署与第三方社交平台对接，让 AI 能看、能听、能说，还能发布到微信公众号。`,
      `15-1 节聚焦多模态输入：接入 GPT-4V 实现图像理解，对接 Whisper 实现语音转文本，并完善前端图片上传与语音配置 UI；15-2 节处理生产部署前的优化——日志冲突、Weaviate/Postgres 优化、Celery 环境隔离与 LangChain 0.3 升级。`,
      `15-3 节完成 Docker 容器化与 Nginx 反向代理、SSL 证书、腾讯云部署与 Azure OpenAI 接入；15-4 节打通微信公众号发布链路，并扩展接入 DeepSeek 开源模型，构建完整的多模态 + 多平台 LLMOps 系统。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `Python SDK 集成`,
          description: `你有丰富的 Python 第三方库使用经验，多模态 API 对接不难`,
        },
        {
          title: `数据流处理`,
          description: `多模态交互链路的"输入→处理→输出"和你做实时数仓的流处理思路一致`,
        },
        {
          title: `工具封装`,
          description: `你封装过邮件推送 SDK，多模态工具封装是同样的模式`,
        },
      ],
      gaps: [
        {
          title: `多模态 API`,
          description: `GPT-4 Vision、Whisper ASR、TTS 等接口的使用方式和参数`,
        },
        {
          title: `音频处理`,
          description: `音频格式转换、噪声抑制等，数据工程中不常见`,
        },
        {
          title: `多模态 Agent 路由`,
          description: `让 Agent 自主选择处理图文语音的方式，是进阶内容`,
        },
      ],
      advice: [
        `这个阶段只有1周，但内容很新——建议动手做一个完整的多模态 Demo`,
        `用你的 Python 优势：写一个脚本同时处理图片+语音+文字三种输入`,
        `把多模态链路理解为"带感官的数据管道"——输入端多了图片和音频`,
      ],
    },
    learningObjectives: [
      {
        icon: `image`,
        title: `实现多模态输入与输出`,
        description: `GPT-4V 图像理解、Whisper ASR、边缘 TTS 语音播放`,
      },
      {
        icon: `database`,
        title: `完成平台部署优化`,
        description: `日志/向量库/Postgres 优化，Celery 环境隔离与依赖管理`,
      },
      {
        icon: `container`,
        title: `实现 Docker + Nginx 生产部署`,
        description: `容器化编排、Nginx 反向代理、SSL 证书与腾讯云部署`,
      },
      {
        icon: `share-2`,
        title: `打通第三方平台发布`,
        description: `微信公众号对接、消息推送，扩展接入 DeepSeek`,
      },
      {
        icon: `route`,
        title: `交付多模态 + 多平台 LLMOps 系统`,
        description: `能看听说 + 生产部署 + 社交平台发布的完整 AI 平台`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 15,
        title: `多模态输入`,
        knowledgePoints: [
          {
            title: `图像理解`,
            description: `接入 GPT-4 Vision / Claude Vision API，实现图像描述、OCR 文字识别与图表理解能力。封装统一的视觉理解工具接口，供 Agent 按需调用，支持多图输入与区域标注识别。`,
          },
          {
            title: `语音识别 (ASR)`,
            description: `接入 Whisper API 或阿里云语音识别服务，实现实时语音转文字。处理音频格式转换（WAV / MP3 / WebM），引入噪声抑制与静音检测提升识别准确率，支持中英文混合识别。`,
          },
          {
            title: `多模态 Agent 工具`,
            description: `定义图像分析工具、语音转文字工具等标准 Agent 工具接口，让 Agent 能根据用户输入类型自动选择处理方式。实现多模态输入路由——文本走 LLM 直答、图片走视觉工具、音频走 ASR 再推理。`,
          },
          {
            title: `语音合成 (TTS)`,
            description: `接入 Azure TTS 或 Edge TTS 服务，实现文字转语音输出。支持多音色选择（男声/女声/不同语言），调节语速与音调参数，使用 SSML 标记控制停顿与重音，输出自然流畅的语音。`,
          },
          {
            title: `图片生成工具`,
            description: `接入 DALL-E / Stable Diffusion API，实现文生图能力。封装为标准 Agent 工具，支持指令式图片生成——用户描述需求，Agent 自动构造 prompt 并调用生成接口，返回图片结果。`,
          },
          {
            title: `多模态交互链路`,
            description: `打通两条完整多模态链路：语音链路"语音输入 → ASR 转文字 → LLM 推理 → TTS 语音输出"；视觉链路"图片输入 → 视觉理解 → LLM 推理 → 图片/文字输出"。实现全链路低延迟流转与状态管理。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `多模态 + 多平台部署的 LLMOps 系统`,
      description: `在阶段 5 平台基础上扩展多模态能力（GPT-4V / Whisper / TTS），完成 Docker + Nginx + SSL 生产部署到腾讯云，并打通微信公众号发布链路与 DeepSeek 开源模型接入，交付一个能看听说、可社交分发的完整 AI 平台。`,
      deliverables: [
        {
          label: `多模态能力`,
          title: `GPT-4V 图像理解 + Whisper ASR + 边缘 TTS`,
        },
        {
          label: `生产部署`,
          title: `Docker 编排 + Nginx + SSL + 腾讯云 + Azure`,
        },
        {
          label: `平台发布`,
          title: `微信公众号对接 + DeepSeek 开源模型接入`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `image`,
        title: `GPT-4V`,
        description: `多模态图片输入与图像理解`,
      },
      {
        icon: `mic`,
        title: `Whisper ASR`,
        description: `语音转文本，流式 TTS 语音播放`,
      },
      {
        icon: `container`,
        title: `Docker + Nginx`,
        description: `容器编排、反向代理与 SSL 部署`,
      },
      {
        icon: `message-circle`,
        title: `微信公众号`,
        description: `wechatpy 对接与消息推送`,
      },
      {
        icon: `cpu`,
        title: `DeepSeek`,
        description: `开源模型扩展接入与 Azure OpenAI`,
      },
    ],
    faq: [
      {
        question: `切换模型后 GPT2 词表报错？`,
        answer: `不同模型 Tokenizer 词表不一致，切换模型时需重新加载对应词表，避免复用旧 Tokenizer 导致编码错乱，15-1-7 课时给出了解决方案。`,
      },
      {
        question: `同步与异步 Weaviate 冲突？`,
        answer: `Weaviate 同步客户端与 Gevent 异步协程存在兼容问题，需区分运行环境并配置 Celery 猴子补丁，15-3-6 课时详细分析了该影响。`,
      },
      {
        question: `微信公众号如何对接 Agent？`,
        answer: `利用 wechatpy SDK 简化对接流程，设计三方平台发布模块的数据库表与 API，用户消息经公众号回调推送至 Agent，回复再通过消息推送接口返回公众号。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `GPT-4 Vision 官方文档 →`,
            url: `https://platform.openai.com/docs/guides/vision`,
          },
          {
            title: `Whisper 语音识别文档 →`,
            url: `https://platform.openai.com/docs/guides/whisper`,
          },
          {
            title: `OpenAI TTS 文档 →`,
            url: `https://platform.openai.com/docs/guides/text-to-speech`,
          },
          {
            title: `DALL-E 图片生成文档 →`,
            url: `https://platform.openai.com/docs/guides/images`,
          },
          {
            title: `Azure TTS 服务 →`,
            url: `https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `GPT-4 Vision 图像识别实战（B站）→`,
            url: `https://www.bilibili.com/video/BV1Lm4y1U7pZ`,
          },
          {
            title: `Whisper 语音识别教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1hV411r7Yv`,
          },
          {
            title: `TTS 语音合成教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1GN411h7vS`,
          },
          {
            title: `多模态AI应用开发（YouTube）→`,
            url: `https://www.youtube.com/watch?v=sqQrN0iZBs0`,
          },
          {
            title: `DALL-E 3 图片生成教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=VIwl7UySP5w`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `Whisper 论文 →`,
            url: `https://arxiv.org/abs/2304.08485`,
          },
          {
            title: `HuggingFace 图像理解 →`,
            url: `https://huggingface.co/spaces/tonyassi/image-to-text`,
          },
          {
            title: `GPT-4V Prompt 指南 →`,
            url: `https://www.promptingguide.ai/models/gpt-4-vision`,
          },
          {
            title: `人脸识别开源项目 →`,
            url: `https://github.com/ageitgey/face_recognition`,
          },
          {
            title: `Azure 语音服务文档 →`,
            url: `https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 15,
        title: `多模态输入`,
        points: [
          `图像理解与视觉描述`,
          `语音识别 (ASR) 接入`,
          `多模态 Agent 工具定义`,
        ],
      },
      {
        weekNumber: 15,
        title: `多模态输出`,
        points: [
          `语音合成 (TTS) 输出`,
          `图片生成与处理工具`,
          `多模态交互链路打通`,
        ],
      },
    ],
  },
  {
    id: 7,
    number: `07`,
    title: `五大商业级 AI 应用实战`,
    weeks: `WEEK 17 — 19`,
    level: `实战`,
    description: `本阶段综合运用前六个阶段所学，从零构建五个可落地的商业级 AI 应用，覆盖客服、教育、创意与生产力场景。每个应用均可独立部署运行，具备完整的前后端、AI 能力与用户体验。`,
    tags: [
      `全栈开发`,
      `RAG`,
      `多模态`,
      `Agent`,
      `生产部署`,
    ],
    overview: [
      `本阶段综合运用前六个阶段所学，从零构建五个可落地的商业级 AI 应用，覆盖客服、教育、创意与生产力场景。每个应用均可独立部署运行，具备完整的前后端、AI 能力与用户体验。`,
      `Week 17 构建智能客服系统（RAG 知识库 + 人工转接）与口语助手（语音交互链路 + 场景化练习）。Week 18 实现图片转 HTML（视觉模型识别设计稿生成代码）与虚拟数字人（多模态驱动形象与对话）。`,
      `Week 19 开发 PPT 生成应用（主题输入自动生成演示文稿），随后将五大应用整合到统一管理入口，打通用户体系与数据共享，完善项目文档与部署脚本，交付完整的商业级 AI 应用矩阵。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `智能客服`,
          description: `你做过联通权益平台，客服系统的业务逻辑（转人工/满意度统计）你已经熟悉`,
        },
        {
          title: `数据驱动`,
          description: `你有 BI 数据分析经验，客服后台的知识库管理和对话统计分析可以直接迁移`,
        },
        {
          title: `Python 工程化`,
          description: `你用 Python 做过自动化报表服务，PPT 生成的 python-pptx 库使用方式类似`,
        },
      ],
      gaps: [
        {
          title: `全栈开发`,
          description: `五个应用都需要前端+后端完整开发，前端仍是挑战`,
        },
        {
          title: `Vision API`,
          description: `GPT-4 Vision 识别设计稿生成代码，需要理解图像理解能力边界`,
        },
        {
          title: `数字人 SDK`,
          description: `D-ID/SadTalker 等第三方 SDK 集成，是新领域`,
        },
      ],
      advice: [
        `这是你转型 AI 工程师的核心作品集——每个项目都要完整交付并写入简历`,
        `智能客服项目可以复用你的联通项目经验，重点加上 RAG 知识库和 Agent 能力`,
        `PPT 生成项目用 python-pptx，你的 Python 能力可以快速上手`,
        `建议按"客服→PPT生成→图片转HTML→口语助手→数字人"顺序，难度递增`,
      ],
    },
    learningObjectives: [
      {
        icon: `code-2`,
        title: `独立完成商业级 AI 应用全栈开发`,
        description: `从需求分析、架构设计到编码实现与部署`,
      },
      {
        icon: `layers`,
        title: `综合运用 RAG/Agent/多模态技术`,
        description: `将核心技术融合到真实业务场景`,
      },
      {
        icon: `workflow`,
        title: `掌握需求分析到部署上线完整流程`,
        description: `全生命周期项目管理与工程实践`,
      },
      {
        icon: `package-check`,
        title: `交付五个可独立运行的 AI 应用`,
        description: `每个应用均可作为独立产品部署`,
      },
      {
        icon: `trophy`,
        title: `积累商业项目实战经验`,
        description: `从工程师视角体验完整商业项目开发流程`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 17,
        title: `智能客服 + 口语助手`,
        knowledgePoints: [
          {
            title: `智能客服系统`,
            description: `基于 RAG 构建企业知识库客服系统，支持多轮对话与意图识别。实现人工转接机制——当 AI 置信度低于阈值时自动转接人工坐席。开发客服后台管理，涵盖知识库管理、对话记录查看与满意度统计分析。`,
          },
          {
            title: `口语助手应用`,
            description: `构建语音输入 → ASR → LLM 口语纠错 → TTS 语音反馈的完整链路。实现场景化口语练习（日常对话 / 商务英语 / 面试模拟），设计多维度评分机制——发音准确度、语法正确性、流利度评估。`,
          },
        ],
      },
      {
        weekNumber: 18,
        title: `图片转 HTML + 虚拟数字人`,
        knowledgePoints: [
          {
            title: `图片转 HTML`,
            description: `使用 GPT-4 Vision 识别设计稿元素——布局结构、颜色方案、组件类型，生成对应的 HTML + CSS 代码。实现组件识别与代码模板匹配，支持输出 Vue / React 组件代码，提升前端开发效率。`,
          },
          {
            title: `虚拟数字人`,
            description: `多模态驱动数字人——文字输入 → LLM 生成回复 → TTS 语音合成 → 口型同步动画。接入数字人 SDK（D-ID / SadTalker），实现表情与语音的实时同步，打造沉浸式交互体验。`,
          },
        ],
      },
      {
        weekNumber: 19,
        title: `PPT 生成 + 项目完善`,
        knowledgePoints: [
          {
            title: `PPT 生成应用`,
            description: `输入主题 → LLM 生成大纲 → 自动填充内容 → 选择模板 → 生成 PPT 文件。支持样式自定义、图表插入、导出 PPTX / PDF 格式。使用 python-pptx 库实现程序化文档生成。`,
          },
          {
            title: `五大应用整合`,
            description: `统一应用管理入口，将五大应用整合到 LLMOps 平台。优化应用间数据共享与用户体系打通，实现单点登录与统一鉴权。完善项目文档与部署脚本，确保每个应用可独立部署也可协同运行。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `五个可独立部署的商业级 AI 应用`,
      description: `从零构建五个完整的商业级 AI 应用：智能客服、口语助手、图片转 HTML、虚拟数字人、PPT 生成。每个应用均可独立部署运行，同时整合到统一的 LLMOps 平台中协同工作。`,
      deliverables: [
        {
          label: `CHATBOT`,
          title: `智能客服`,
        },
        {
          label: `SPEECH`,
          title: `口语助手`,
        },
        {
          label: `FRONTEND`,
          title: `图片转 HTML`,
        },
        {
          label: `AVATAR`,
          title: `虚拟数字人`,
        },
        {
          label: `PPT`,
          title: `PPT 生成`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `database`,
        title: `RAG 知识库客服`,
        description: `企业知识库检索 + 意图识别 + 人工转接`,
      },
      {
        icon: `audio-waveform`,
        title: `语音交互链路`,
        description: `ASR + LLM + TTS 全链路口语练习`,
      },
      {
        icon: `code`,
        title: `GPT-4 Vision 代码生成`,
        description: `设计稿识别 + HTML/Vue/React 代码输出`,
      },
      {
        icon: `user-round`,
        title: `数字人 SDK`,
        description: `D-ID / SadTalker 口型同步与表情驱动`,
      },
      {
        icon: `file-text`,
        title: `python-pptx 文档生成`,
        description: `程序化 PPT 生成，模板与图表插入`,
      },
    ],
    faq: [
      {
        question: `智能客服如何判断转人工？`,
        answer: `设置置信度阈值（如 0.6），当 RAG 检索匹配度低于阈值时标记为低置信。连续 2 次无法匹配知识库则自动转人工，同时支持用户主动请求"转人工"关键词触发即时转接。`,
      },
      {
        question: `图片转 HTML 代码质量差？`,
        answer: `提供详细的设计规范 prompt，明确布局结构与样式约定。使用 few-shot 示例引导模型输出符合预期的代码风格，后处理校验 HTML 合法性与组件规范性，必要时引入代码模板库辅助匹配。`,
      },
      {
        question: `数字人口型不同步？`,
        answer: `使用 viseme 音素映射实现精细口型控制，调整动画帧率与音频匹配（建议 30fps），预处理音频对齐时间戳，确保语音与口型动画的时间轴严格同步。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `python-pptx 官方文档 →`,
            url: `https://python-pptx.readthedocs.io/`,
          },
          {
            title: `D-ID 数字人 API →`,
            url: `https://www.d-id.com/`,
          },
          {
            title: `SadTalker 数字人开源 →`,
            url: `https://github.com/OpenTalker/SadTalker`,
          },
          {
            title: `GPT-4 Vision 文档 →`,
            url: `https://platform.openai.com/docs/guides/vision`,
          },
          {
            title: `RAG 客服系统设计参考 →`,
            url: `https://rivian.com/meet`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `AI智能客服系统开发（B站）→`,
            url: `https://www.bilibili.com/video/BV1oV411r7VY`,
          },
          {
            title: `python-pptx 自动生成PPT（B站）→`,
            url: `https://www.bilibili.com/video/BV1RT4y1v7mN`,
          },
          {
            title: `数字人开发教程（B站）→`,
            url: `https://www.bilibili.com/video/BV1Vt4y1H7pD`,
          },
          {
            title: `图片转HTML代码实战（YouTube）→`,
            url: `https://www.youtube.com/watch?v=AZMPe5g8oVo`,
          },
          {
            title: `AI口语助手开发（YouTube）→`,
            url: `https://www.youtube.com/watch?v=wXf_EE7RyKU`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `AI客服开源项目 →`,
            url: `https://github.com/waydabnier/AI-customer-service`,
          },
          {
            title: `聊天机器人 Prompt 指南 →`,
            url: `https://www.promptingguide.ai/use-cases/chatbots`,
          },
          {
            title: `HuggingFace 博客：数字人 →`,
            url: `https://huggingface.co/blog`,
          },
          {
            title: `Python XML 处理（PPTX底层）→`,
            url: `https://docs.python.org/3/library/xml.etree.elementtree.html`,
          },
          {
            title: `Vue 组件开发指南 →`,
            url: `https://v3.vuejs.org/guide/component-basics.html`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 17,
        title: `智能客服 + 口语助手`,
        points: [
          `智能客服：RAG 知识库 + 自动应答`,
          `口语助手：语音交互 + 实时纠错`,
          `部署上线与测试`,
        ],
      },
      {
        weekNumber: 18,
        title: `图片转 HTML + 虚拟数字人`,
        points: [
          `图片转 HTML：视觉模型识别设计稿生成代码`,
          `虚拟数字人：多模态驱动形象与对话`,
          `部署上线与测试`,
        ],
      },
      {
        weekNumber: 19,
        title: `PPT 生成 + 项目完善`,
        points: [
          `PPT 生成：主题输入自动生成演示文稿`,
          `五大应用整合与优化`,
          `项目文档与部署完善`,
        ],
      },
    ],
  },
  {
    id: 8,
    number: `08`,
    title: `课程回顾与 LLM 进阶`,
    weeks: `WEEK 20 — 21`,
    level: `进阶`,
    description: `本阶段回顾全链路知识体系，深入预训练微调技术，掌握 LangChain v1 与 MCP 协议前沿实践，完成从工程师到 LLMOps 专家的跃迁。系统梳理 21 周所学，形成完整的知识地图与技能清单。`,
    tags: [
      `进阶`,
      `Fine-tuning`,
      `LoRA`,
      `LangChain v1`,
      `MCP`,
    ],
    overview: [
      `本阶段回顾全链路知识体系，深入预训练微调技术，掌握 LangChain v1 与 MCP 协议前沿实践，完成从工程师到 LLMOps 专家的跃迁。系统梳理 21 周所学，形成完整的知识地图与技能清单。`,
      `Week 20 聚焦预训练微调：理解预训练到微调的范式转变，区分全量微调与参数高效微调（PEFT）。深入学习 LoRA 低秩适配原理——冻结原始权重，仅训练低秩分解矩阵。使用 PEFT 库实践 LoRA 微调，配置 rank / alpha / dropout 参数，训练领域专属模型。`,
      `Week 21 探索前沿技术：了解 LangChain v1 架构变化与 LCEL 表达式语言，掌握 v0 到 v1 的迁移最佳实践。学习 Anthropic 提出的 MCP 协议——标准化 LLM 与外部工具的连接方式，实现自定义 MCP Server。最后规划 LLM 技术职业发展路径。`,
    ],
    forYou: {
      transferableSkills: [
        {
          title: `数学基础`,
          description: `数学与应用数学本科（GPA 3.66），LoRA 低秩分解的线性代数原理对你毫无障碍`,
        },
        {
          title: `机器学习基础`,
          description: `大学学过机器学习课程，理解预训练→微调范式`,
        },
        {
          title: `系统架构`,
          description: `你做过数据中台架构设计，MCP 协议的 Server/Client 架构理解起来很直观`,
        },
      ],
      gaps: [
        {
          title: `PEFT 库实操`,
          description: `LoRA 微调的代码实现，需要学习 HuggingFace PEFT 库 API`,
        },
        {
          title: `GPU 显存管理`,
          description: `微调需要理解显存优化（4-bit 量化/梯度累积），数据工程中不涉及`,
        },
        {
          title: `LangChain v1`,
          description: `从 v0 迁移到 LCEL 语法的新特性`,
        },
      ],
      advice: [
        `你的数学基础是巨大优势——LoRA 论文中的 SVD 分解和低秩近似，你比大部分同学理解更深`,
        `建议实际跑一次 LoRA 微调：用你的领域知识微调一个"数据工程助手"模型`,
        `MCP 协议是前沿内容，理解后可以写在简历上作为技术亮点`,
        `课程结束后，把21周的知识体系整理成思维导图，作为个人技术栈地图`,
      ],
    },
    learningObjectives: [
      {
        icon: `map`,
        title: `系统回顾 21 周完整知识体系`,
        description: `梳理知识脉络，制作知识地图与技能清单`,
      },
      {
        icon: `brain-circuit`,
        title: `掌握 Fine-tuning 与 LoRA 微调`,
        description: `参数高效微调，训练领域专属模型`,
      },
      {
        icon: `git-branch`,
        title: `理解 LangChain v1 新特性`,
        description: `LCEL 表达式语言与 v0 迁移方案`,
      },
      {
        icon: `plug`,
        title: `学习 MCP 协议原理与应用`,
        description: `标准化工具连接，实现自定义 MCP Server`,
      },
      {
        icon: `trending-up`,
        title: `规划 LLM 技术职业发展路径`,
        description: `从 LLM 应用工程师到 LLMOps 工程师再到 AI 架构师`,
      },
    ],
    weeksContent: [
      {
        weekNumber: 20,
        title: `预训练微调`,
        knowledgePoints: [
          {
            title: `Fine-tuning 原理`,
            description: `理解预训练到微调的范式——大规模无监督预训练获取通用语言能力，微调适配特定任务。区分全量微调（更新所有参数）与参数高效微调（PEFT，仅训练少量参数）。学习 LoRA（Low-Rank Adaptation）原理：冻结原始权重，训练低秩分解矩阵实现高效适配。`,
          },
          {
            title: `LoRA 实践`,
            description: `使用 PEFT 库实现 LoRA 微调，配置 rank（秩）、alpha（缩放因子）、dropout 等核心参数。准备 instruction tuning 格式的微调数据集，训练领域专属模型，在保持基座模型能力的同时适配垂直场景需求。`,
          },
          {
            title: `知识体系回顾`,
            description: `梳理 21 周知识脉络——基础架构 → 商业 ChatBot → LLMOps 平台 → 生产部署 → 多模态 → 商业应用 → 进阶。制作知识地图与技能清单，形成系统化的技术认知框架，为后续职业发展奠定基础。`,
          },
        ],
      },
      {
        weekNumber: 21,
        title: `LangChain v1 + MCP`,
        knowledgePoints: [
          {
            title: `LangChain v1 新特性`,
            description: `了解 LangChain v1 架构变化——LCEL（LangChain Expression Language）声明式链式编排、统一接口抽象、改进的 Agent 执行引擎。掌握从 v0 迁移到 v1 的最佳实践，利用兼容层平滑过渡并逐步重构为 LCEL 语法。`,
          },
          {
            title: `MCP 协议`,
            description: `Model Context Protocol（MCP）是 Anthropic 提出的模型上下文协议，标准化 LLM 与外部工具/数据源的连接方式。理解 MCP Server / Client 架构，实现自定义 MCP Server，让任意 LLM 都能通过统一协议接入自定义工具链。`,
          },
          {
            title: `技术前沿与职业发展`,
            description: `关注 LLM 领域最新进展——多模态大模型、Agent 框架演进、RAG 进阶技术。规划技术成长路径：LLM 应用工程师 → LLMOps 工程师 → AI 架构师，明确各阶段能力要求与成长方向。`,
          },
        ],
      },
    ],
    practiceProject: {
      title: `完整知识体系回顾报告 + 前沿技术实践`,
      description: `交付一份完整的 21 周知识体系回顾报告，包含知识地图与技能清单。同时完成两项前沿技术实践：使用 PEFT 库实现 LoRA 微调训练领域专属模型，以及实现一个自定义 MCP Server 接入工具链。`,
      deliverables: [
        {
          label: `REPORT`,
          title: `知识体系回顾报告`,
        },
        {
          label: `FINETUNE`,
          title: `LoRA 微调实践`,
        },
        {
          label: `MCP`,
          title: `自定义 MCP Server`,
        },
      ],
    },
    technicalHighlights: [
      {
        icon: `brain-circuit`,
        title: `LoRA 低秩适配`,
        description: `冻结原始权重，训练低秩分解矩阵实现高效微调`,
      },
      {
        icon: `settings-2`,
        title: `PEFT 库`,
        description: `参数高效微调框架，rank / alpha / dropout 配置`,
      },
      {
        icon: `git-branch`,
        title: `LangChain v1 LCEL`,
        description: `声明式链式编排，统一接口与 Agent 执行引擎`,
      },
      {
        icon: `plug`,
        title: `MCP Server / Client`,
        description: `标准化协议，跨模型工具连接架构`,
      },
    ],
    faq: [
      {
        question: `LoRA 微调需要多少显存？`,
        answer: `7B 模型 LoRA 微调约需 16GB 显存。使用 4-bit 量化技术（QLoRA）可将显存需求降至 8GB，使消费级显卡也能完成微调任务，大幅降低硬件门槛。`,
      },
      {
        question: `LangChain v1 和 v0 兼容吗？`,
        answer: `v1 提供兼容层支持 v0 代码运行，但建议逐步迁移到 LCEL 语法。LCEL 性能更好、更易调试、支持流式与异步原生处理，是 LangChain 未来推荐的开发范式。`,
      },
      {
        question: `MCP 和 Function Calling 有什么区别？`,
        answer: `MCP 是标准化协议（跨模型、跨工具的通用连接标准），Function Calling 是特定模型的能力。MCP 可以基于 Function Calling 实现，但提供了更高层次的抽象与互操作性——一个 MCP Server 可同时服务多个不同模型的客户端。`,
      },
    ],
    resources: [
      {
        title: `官方文档`,
        icon: `book-open`,
        links: [
          {
            title: `PEFT 库官方文档 →`,
            url: `https://huggingface.co/docs/peft`,
          },
          {
            title: `HuggingFace Transformers →`,
            url: `https://huggingface.co/docs/transformers`,
          },
          {
            title: `LangChain v1 文档 →`,
            url: `https://python.langchain.com/docs/`,
          },
          {
            title: `MCP 官方文档 →`,
            url: `https://modelcontextprotocol.io/`,
          },
          {
            title: `MCP GitHub 仓库 →`,
            url: `https://github.com/modelcontextprotocol`,
          },
        ],
      },
      {
        title: `视频教程`,
        icon: `play-circle`,
        links: [
          {
            title: `LoRA 微调从零开始（B站）→`,
            url: `https://www.bilibili.com/video/BV1kt4y1H7nZ`,
          },
          {
            title: `QLoRA 4bit量化微调（B站）→`,
            url: `https://www.bilibili.com/video/BV1FV411r7mY`,
          },
          {
            title: `LangChain v1 新特性（B站）→`,
            url: `https://www.bilibili.com/video/BV1xz4y1m7tZ`,
          },
          {
            title: `MCP 协议详解（YouTube）→`,
            url: `https://www.youtube.com/watch?v=wd1sOxJwlkM`,
          },
          {
            title: `LoRA 微调实战教程（YouTube）→`,
            url: `https://www.youtube.com/watch?v=YWVCtP6W6Ew`,
          },
        ],
      },
      {
        title: `推荐阅读`,
        icon: `file-text`,
        links: [
          {
            title: `LoRA 论文：Low-Rank Adaptation →`,
            url: `https://arxiv.org/abs/2106.09685`,
          },
          {
            title: `QLoRA 论文：高效微调 →`,
            url: `https://arxiv.org/abs/2305.14314`,
          },
          {
            title: `PEFT 技术博客 →`,
            url: `https://huggingface.co/blog/peft`,
          },
          {
            title: `MCP 协议规范 →`,
            url: `https://spec.modelcontextprotocol.io/`,
          },
          {
            title: `Anthropic MCP 发布说明 →`,
            url: `https://www.anthropic.com/news/model-context-protocol`,
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 20,
        title: `预训练微调`,
        points: [
          `Fine-tuning 原理与实践`,
          `LoRA / PEFT 参数高效微调`,
          `课程全链路知识体系回顾`,
        ],
      },
      {
        weekNumber: 21,
        title: `LangChain v1 + MCP`,
        points: [
          `LangChain v1 新特性与迁移`,
          `MCP 协议原理与应用`,
          `LLM 技术前沿与职业发展`,
        ],
      },
    ],
  },
]

import { stageOverviewMap, stageLessonChaptersMap } from './stageDetails'

export function getStageById(id: number): Stage | undefined {
  const stage = stages.find((stage) => stage.id === id)
  if (!stage) return undefined
  return {
    ...stage,
    stageOverview: stageOverviewMap[id] ?? {
      duration: '',
      durationLabel: '',
      structure: '',
      structureLabel: '',
      lessonsCount: '',
      lessonsLabel: '',
    },
    lessonChapters: stageLessonChaptersMap[id] ?? [],
  }
}

export function getStageNavigation(id: number): { prev: Stage | null; next: Stage | null } {
  const index = stages.findIndex((stage) => stage.id === id)
  return {
    prev: index > 0 ? getStageById(stages[index - 1].id) ?? null : null,
    next: index < stages.length - 1 ? getStageById(stages[index + 1].id) ?? null : null,
  }
}
