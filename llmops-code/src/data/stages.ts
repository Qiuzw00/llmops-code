import type { Stage } from '../types'

export const stages: Stage[] = [
  {
    id: 1,
    number: '01',
    title: '架构设计与基础聊天机器人开发',
    weeks: 'WEEK 01 — 03',
    level: '基础',
    description:
      '从零开始搭建 LLMOps 平台基础架构，完成后端服务与前端界面，交付可对话的基础 ChatBot。',
    tags: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'Vue 3', 'OpenAI API'],
    overview: [
      '本阶段是整个 LLMOps 学习路径的起点。我们将从理解大模型运维的核心概念出发，逐步搭建一个完整的三层平台架构——应用层、服务层与基础设施层。',
      '第一周聚焦开发环境与 OpenAI API 对接，建立 LLM 调用的统一工具层；第二周使用 Flask + SQLAlchemy + PostgreSQL 搭建后端服务；第三周使用 Vue 3 构建前端聊天界面，并通过 SSE 实现流式响应。',
      '阶段结束时，学员将交付一个前后端完整闭环、可进行多轮对话的基础 ChatBot 应用。',
    ],
    learningObjectives: [
      { icon: 'network', title: '理解平台整体架构', description: '掌握 LLMOps 平台三层架构与各模块职责，画出清晰的架构图。' },
      { icon: 'server', title: '搭建 Flask 后端框架', description: '使用应用工厂模式与蓝图组织路由，建立可扩展的服务骨架。' },
      { icon: 'database', title: '数据建模与持久化', description: '使用 SQLAlchemy ORM + PostgreSQL 设计用户、会话、消息表。' },
      { icon: 'layout', title: '搭建 Vue 前端项目', description: '使用 Vite 创建 Vue 3 + TypeScript 项目，配置组件库与代码规范。' },
      { icon: 'plug-zap', title: '前后端联调与对话功能', description: '完成端到端对话流程，实现 SSE 流式响应接收与基础对话功能。' },
    ],
    weeksContent: [
      {
        weekNumber: 1,
        title: 'LLMOps 平台基础',
        knowledgePoints: [
          {
            title: 'LLMOps 概念与发展',
            description: 'LLMOps 是 MLOps 在大模型时代的延伸，涵盖模型部署、Prompt 管理、监控评估等环节。理解 LLMOps 与传统 MLOps 的区别。',
          },
          {
            title: '平台架构设计',
            description: '整体架构分为应用层、服务层与基础设施层，明确各模块边界与协作方式。',
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
            title: 'OpenAI API 对接',
            description: '理解 Chat Completion 接口参数，封装统一的 LLM 调用工具类，实现流式响应处理。',
            codeBlock: `from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": prompt}],
    temperature=0.7,
    stream=True,
)`,
          },
        ],
      },
      {
        weekNumber: 2,
        title: '后端搭建',
        knowledgePoints: [
          {
            title: 'Flask 服务搭建',
            description: '创建 Flask 应用工厂模式，配置蓝图组织路由，设置 CORS 跨域支持。',
            codeBlock: `from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(chat_bp, url_prefix="/api/v1")
    return app`,
          },
          {
            title: '数据库设计',
            description: '使用 SQLAlchemy ORM 定义 User、ChatSession、ChatMessage 三张核心表，配置 PostgreSQL 连接。',
          },
          {
            title: 'RESTful API 开发',
            description: '设计 API 路由规范，实现对话接口、会话管理接口，统一响应格式。',
          },
        ],
      },
      {
        weekNumber: 3,
        title: '前端搭建',
        knowledgePoints: [
          {
            title: 'Vue 3 项目搭建',
            description: '使用 Vite 创建 Vue 3 + TypeScript 项目，配置 ESLint + Prettier，安装组件库。',
          },
          {
            title: '聊天界面开发',
            description: '实现聊天列表组件、消息输入框、流式消息展示，处理 Markdown 渲染与代码高亮。',
          },
          {
            title: '前后端联调',
            description: '配置 Vite 代理解决跨域，使用 axios 封装 HTTP 请求层，实现 SSE 流式响应接收。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 1,
        title: 'LLMOps 平台基础',
        points: [
          '理解 LLMOps 概念与三层平台架构设计',
          '掌握 OpenAI API 对接与流式响应处理',
          '建立统一的 LLM 调用工具层',
        ],
      },
      {
        weekNumber: 2,
        title: '后端搭建',
        points: [
          '使用 Flask 应用工厂与蓝图组织路由',
          '使用 SQLAlchemy ORM 设计核心数据表',
          '实现 RESTful API 与统一响应格式',
        ],
      },
      {
        weekNumber: 3,
        title: '前端搭建',
        points: [
          '使用 Vite 搭建 Vue 3 + TypeScript 项目',
          '开发聊天界面与流式消息展示',
          '完成前后端联调与 SSE 响应接收',
        ],
      },
    ],
    practiceProject: {
      title: '可对话的基础 ChatBot 应用',
      description: '交付一个前后端完整闭环的 ChatBot 应用，后端提供 RESTful 对话接口与数据持久化，前端实现聊天界面与流式消息展示。',
      deliverables: [
        { label: 'FRONTEND', title: 'Vue 3 + TS 聊天界面' },
        { label: 'BACKEND', title: 'Flask + SQLAlchemy 服务' },
        { label: 'LLM', title: 'OpenAI 流式调用' },
      ],
    },
    technicalHighlights: [
      { icon: 'layers', title: 'Flask 蓝图模式', description: '使用应用工厂配合 Blueprint 拆分路由模块，支持配置隔离与多环境部署。' },
      { icon: 'database', title: 'SQLAlchemy ORM', description: '通过 ORM 抽象数据库操作，配合 Flask-Migrate 实现版本化迁移。' },
      { icon: 'component', title: 'Vue 3 Composition API', description: '使用 setup 语法糖与 ref/reactive 管理组件状态，Pinia 管理全局会话状态。' },
      { icon: 'radio', title: 'SSE 流式传输', description: 'Server-Sent Events 实现服务端逐 Token 推送，前端解析 data 字段实现打字机效果。' },
    ],
    faq: [
      { question: 'OpenAI API 调用超时怎么办？', answer: '设置合理的 timeout 参数，实现重试机制，流式响应使用 stream=True 以避免长时间等待。' },
      { question: '前端如何接收 SSE 流式数据？', answer: '使用 fetch + ReadableStream 或 EventSource，逐块解析 data 字段，注意处理断线重连。' },
      { question: 'PostgreSQL 连接池如何配置？', answer: '使用 SQLAlchemy 的 pool_size 和 max_overflow 参数，配合 pool_pre_ping 检测连接活性。' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: '商业级聊天机器人开发',
    weeks: 'WEEK 04 — 06',
    level: '进阶',
    description: '为 ChatBot 增加长期记忆、RAG 知识检索与 Agent 工具调用能力，升级为商业可用的智能助手。',
    tags: ['Redis', 'Faiss', 'Embedding', 'RAG', 'Agent'],
    overview: [
      '基础 ChatBot 只能依赖单轮上下文，无法记住用户偏好，也无法检索私有知识。本阶段将赋予它三个核心能力：长期记忆、知识检索与工具调用。',
      '第四周聚焦记忆模块，通过 Redis 实现短期与长期记忆，结合滑动窗口与摘要机制突破上下文长度限制；第五周搭建 RAG 数据管道。',
      '第六周引入 Agent 与 ReACT 推理模式，让模型能够自主决策何时检索知识、何时调用外部工具，最终交付商业级 ChatBot。',
    ],
    learningObjectives: [
      { icon: 'messages-square', title: '多轮对话记忆管理', description: '实现会话上下文管理与长期记忆，突破上下文窗口限制。' },
      { icon: 'file-search', title: '搭建 RAG 检索管道', description: '完成文档处理→向量化→检索→生成的端到端 RAG 流程。' },
      { icon: 'brain-circuit', title: '掌握 Agent 与 ReACT', description: '理解 ReACT 推理模式，实现工具调用与多步编排。' },
      { icon: 'vector-square', title: '理解 Embedding 与向量库', description: '掌握 Embedding 模型选型与向量数据库的索引原理。' },
      { icon: 'trophy', title: '交付商业级 ChatBot', description: '交付具备记忆 + RAG + Agent 能力的商业可用智能助手。' },
    ],
    weeksContent: [
      {
        weekNumber: 4,
        title: '记忆模块',
        knowledgePoints: [
          {
            title: '对话上下文管理',
            description: '理解对话上下文窗口限制，实现滑动窗口策略保留最近 N 轮对话，设计对话摘要机制。',
          },
          {
            title: 'Redis 长期记忆',
            description: '搭建 Redis 服务，设计短期记忆列表与长期记忆摘要，实现读写与过期策略。',
            codeBlock: `# Redis 记忆结构
short_term:{user_id} → List[message]   # 最近 N 轮
long_term:{user_id}  → String(summary) # 偏好摘要`,
          },
          {
            title: '多轮对话优化',
            description: '实现对话历史压缩、关键信息提取、上下文相关性排序，处理多用户并发会话隔离。',
          },
        ],
      },
      {
        weekNumber: 5,
        title: 'RAG 数据模块',
        knowledgePoints: [
          {
            title: '文档处理管道',
            description: '支持 PDF / Word / Markdown 文档解析，实现文档分块策略，理解 chunk_size 和 overlap 参数。',
          },
          {
            title: 'Embedding 向量化',
            description: '选择 Embedding 模型，理解向量维度与质量的关系，批量向量化文档块。',
            codeBlock: `resp = client.embeddings.create(
    model="text-embedding-3-small",
    input=chunks
)
vectors = [d.embedding for d in resp.data]`,
          },
          {
            title: '向量数据库 Faiss',
            description: '搭建 Faiss 本地向量索引，理解 IVF、HNSW 索引类型，实现相似度检索。',
          },
          {
            title: 'RAG 生成流程',
            description: '检索相关文档 → 构造增强 Prompt → 调用 LLM 生成回答，实现引用标注。',
          },
        ],
      },
      {
        weekNumber: 6,
        title: '工具功能 (Agent)',
        knowledgePoints: [
          {
            title: 'ReACT 推理模式',
            description: '理解 ReACT 框架——Thought → Action → Observation 循环，设计 Agent 推理链。',
            codeBlock: `Thought: 用户问今天天气，我需要调用搜索工具
Action: search_weather(city="北京")
Observation: 晴, 26℃
Final Answer: 北京今天晴，气温 26℃。`,
          },
          {
            title: '自定义工具定义',
            description: '定义搜索、计算器、数据库查询等工具，使用 Function Calling 规范工具定义。',
          },
          {
            title: 'Agent 多步编排',
            description: '实现 Agent 多步推理与工具调用循环，处理工具调用失败，设置最大迭代次数。',
          },
          {
            title: 'Agent 与 RAG 结合',
            description: '让 Agent 能自主决定何时检索知识库、何时调用外部工具，实现智能路由。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 4,
        title: '记忆模块',
        points: [
          '实现滑动窗口与对话摘要机制',
          '使用 Redis 存储短期与长期记忆',
          '优化多轮对话与并发会话隔离',
        ],
      },
      {
        weekNumber: 5,
        title: 'RAG 数据模块',
        points: [
          '构建文档处理与分块管道',
          '使用 Embedding 模型批量向量化文档',
          '搭建 Faiss 索引实现相似度检索',
        ],
      },
      {
        weekNumber: 6,
        title: '工具功能 (Agent)',
        points: [
          '理解 ReACT Thought-Action-Observation 循环',
          '使用 Function Calling 定义自定义工具',
          '实现 Agent 多步推理与工具调用',
        ],
      },
    ],
    practiceProject: {
      title: '具备记忆 + RAG + Agent 的商业级 ChatBot',
      description: '在阶段一基础上集成三大能力：Redis 长期记忆、Faiss RAG 知识检索、ReACT Agent 工具自主调用。',
      deliverables: [
        { label: 'MEMORY', title: 'Redis 长期记忆' },
        { label: 'RAG', title: 'Faiss 知识检索' },
        { label: 'AGENT', title: 'ReACT 工具调用' },
      ],
    },
    technicalHighlights: [
      { icon: 'zap', title: 'Redis 缓存策略', description: '短期记忆用 List、长期记忆用 String，配合 TTL 与摘要压缩。' },
      { icon: 'grid-3x3', title: 'Faiss 向量索引', description: '使用 IVF 或 HNSW 索引加速近邻搜索，支持余弦相似度与 L2 距离。' },
      { icon: 'sliders-horizontal', title: 'Embedding 模型选型', description: '中文场景优先 BGE-large-zh / M3E，英文场景可用 OpenAI text-embedding-3。' },
      { icon: 'git-branch', title: 'ReACT Agent 编排', description: 'Thought-Action-Observation 循环驱动工具调用，防止死循环。' },
    ],
    faq: [
      { question: 'RAG 检索效果不好怎么办？', answer: '优化分块策略、增加 overlap、使用 reranker 重排序，并校验 Embedding 模型与语种匹配。' },
      { question: 'Agent 工具调用陷入死循环？', answer: '设置 max_iterations，添加终止条件检测，实现超过阈值后的 fallback 策略。' },
      { question: 'Embedding 模型怎么选？', answer: '中文场景推荐 BGE-large-zh 或 M3E，英文场景推荐 OpenAI text-embedding-3。' },
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'LLMOps 应用平台可视化',
    weeks: 'WEEK 07 — 09',
    level: '平台化',
    description: '构建 LLMOps 可视化管理平台，实现 Prompt 模板管理、流式响应展示与用户授权认证体系。',
    tags: ['Jinja2', 'SSE', 'JWT', 'RBAC', 'Prompt Engineering'],
    overview: [
      '当 ChatBot 具备记忆、RAG 与 Agent 能力后，下一个挑战是“可管理性”。本阶段将构建一个可视化的 LLMOps 管理平台。',
      '第七周聚焦 Prompt 模块——设计模板数据模型、变量注入与版本管理；第八周深入响应模块——SSE 流式协议、Redis 响应缓存、多模型切换与监控仪表盘。',
      '第九周搭建授权认证体系——用户注册登录、JWT 双 Token 机制、RBAC 权限模型与安全加固。',
    ],
    learningObjectives: [
      { icon: 'file-text', title: 'Prompt 模板管理', description: '设计模板系统，支持版本控制、变量注入与 A/B 测试。' },
      { icon: 'radio', title: 'SSE 流式与多模型切换', description: '实现 SSE 端点与多模型动态切换、降级策略。' },
      { icon: 'shield-check', title: '认证与 RBAC 权限', description: '搭建 JWT 双 Token 认证与角色权限控制体系。' },
      { icon: 'layout-dashboard', title: '可视化管理后台', description: '构建管理后台界面，集成监控面板与运营工具。' },
      { icon: 'package-check', title: '完成平台核心管理功能', description: '交付 LLMOps 平台核心管理能力，使 AI 应用可管理、可监控、可运营。' },
    ],
    weeksContent: [
      {
        weekNumber: 7,
        title: 'Prompt 模块',
        knowledgePoints: [
          {
            title: 'Prompt 模板管理',
            description: '设计 Prompt 模板数据模型，实现模板 CRUD 接口，支持分类与标签管理。',
          },
          {
            title: '变量注入与渲染',
            description: '实现 Jinja2 模板引擎变量注入，支持系统变量与自定义变量，设计变量校验机制。',
          },
          {
            title: '版本控制与 A/B 测试',
            description: '为 Prompt 增加版本号字段，支持历史版本回滚与多版本 A/B 测试对比效果。',
          },
        ],
      },
      {
        weekNumber: 8,
        title: '响应模块',
        knowledgePoints: [
          {
            title: 'SSE 端点设计',
            description: '设计统一的 SSE 响应端点，支持多客户端并发，处理连接异常与断开重连。',
          },
          {
            title: '多模型切换与降级',
            description: '实现模型路由层，根据成本、延迟、可用性动态选择模型，实现失败降级。',
          },
          {
            title: '响应缓存与监控',
            description: '使用 Redis 缓存高频响应，搭建监控仪表盘记录 Token 消耗、响应延迟与错误率。',
          },
        ],
      },
      {
        weekNumber: 9,
        title: '授权认证模块',
        knowledgePoints: [
          {
            title: '用户注册登录',
            description: '实现用户注册、登录、密码重置接口，使用 bcrypt 进行密码哈希存储。',
          },
          {
            title: 'JWT 双 Token 机制',
            description: '使用 Access Token + Refresh Token 实现无状态认证，控制 Token 过期时间与刷新策略。',
          },
          {
            title: 'RBAC 权限模型',
            description: '设计角色与权限表，实现基于角色的资源访问控制，保护管理后台接口。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 7,
        title: 'Prompt 模块',
        points: [
          '设计 Prompt 模板数据模型与 CRUD 接口',
          '使用 Jinja2 实现变量注入与渲染',
          '支持版本控制与 A/B 测试',
        ],
      },
      {
        weekNumber: 8,
        title: '响应模块',
        points: [
          '设计统一 SSE 端点支持并发',
          '实现多模型切换与失败降级',
          '使用 Redis 缓存与监控仪表盘',
        ],
      },
      {
        weekNumber: 9,
        title: '授权认证模块',
        points: [
          '实现用户注册登录与密码哈希',
          '使用 JWT 双 Token 机制',
          '设计 RBAC 权限模型',
        ],
      },
    ],
    practiceProject: {
      title: 'LLMOps 可视化管理平台',
      description: '交付一个具备 Prompt 管理、流式响应监控、用户认证与权限控制的可视化管理后台。',
      deliverables: [
        { label: 'PROMPT', title: 'Prompt 编辑器' },
        { label: 'MONITOR', title: '响应监控面板' },
        { label: 'AUTH', title: '认证与权限系统' },
      ],
    },
    technicalHighlights: [
      { icon: 'file-text', title: 'Jinja2 模板渲染', description: '安全地注入变量到 Prompt 模板，防止模板注入攻击。' },
      { icon: 'radio', title: 'SSE 长连接管理', description: '优雅处理连接生命周期，支持并发与断线重连。' },
      { icon: 'shield-check', title: 'JWT 安全实践', description: 'Access Token 短期有效，Refresh Token 存储安全，支持吊销机制。' },
      { icon: 'layout-dashboard', title: '运营监控指标', description: '记录并可视化 Token 消耗、响应延迟、错误率等关键指标。' },
    ],
    faq: [
      { question: 'Prompt 版本回滚如何实现？', answer: '为每个 Prompt 维护版本历史，保存 content、variables 与元数据，切换时直接读取历史版本记录。' },
      { question: 'SSE 连接数过多怎么办？', answer: '使用连接池管理，限制单用户并发连接数，配合 Nginx 或负载均衡横向扩展。' },
      { question: 'Refresh Token 被盗怎么办？', answer: '设置较短的过期时间，使用 Token 黑名单或轮转机制，敏感操作要求重新认证。' },
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'LLMOps 可视化续',
    weeks: 'WEEK 10 — 12',
    level: '平台化',
    description: '扩展平台能力，实现应用管理、模型管理、知识库管理与全链路可观测性。',
    tags: ['LangChain', '知识库', '可观测性', 'API 网关', '多租户'],
    overview: [
      '本阶段在第三阶段基础上进一步扩展平台功能，让 LLMOps 平台能够支撑多个 AI 应用与多个团队的协作。',
      '第十周实现应用管理模块，支持创建、配置、发布 AI 应用；第十一周实现模型与知识库管理。',
      '第十二周聚焦可观测性——日志、追踪、指标采集，以及多租户隔离与 API 网关设计。',
    ],
    learningObjectives: [
      { icon: 'layout-template', title: '应用全生命周期管理', description: '实现 AI 应用的创建、配置、版本发布与下线。' },
      { icon: 'database', title: '知识库管理', description: '支持多知识库创建、文档上传、索引重建与权限隔离。' },
      { icon: 'activity', title: '可观测性体系建设', description: '接入日志、链路追踪与指标监控，快速定位线上问题。' },
      { icon: 'globe', title: 'API 网关与多租户', description: '设计 API 网关层，实现限流、鉴权与多租户资源隔离。' },
      { icon: 'package-check', title: '构建企业级平台能力', description: '交付可支撑多应用、多团队的企业级 LLMOps 平台。' },
    ],
    weeksContent: [
      {
        weekNumber: 10,
        title: '应用管理',
        knowledgePoints: [
          {
            title: '应用数据模型',
            description: '设计应用表结构，包含名称、描述、配置、发布状态、所属团队等字段。',
          },
          {
            title: '应用配置与发布',
            description: '实现应用配置编辑器，支持 Prompt、模型、知识库绑定，版本发布与回滚。',
          },
          {
            title: '应用接入 SDK',
            description: '提供前端 SDK 与后端 SDK，方便第三方系统快速接入平台能力。',
          },
        ],
      },
      {
        weekNumber: 11,
        title: '模型与知识库管理',
        knowledgePoints: [
          {
            title: '模型注册中心',
            description: '维护模型元数据、API 密钥、配额与可用性状态，支持多厂商模型统一接入。',
          },
          {
            title: '知识库管理',
            description: '实现知识库 CRUD、文档上传、解析、分块、索引重建与权限控制。',
          },
          {
            title: '检索效果评估',
            description: '建立检索质量评估指标，支持人工标注与自动评估，持续优化 RAG 效果。',
          },
        ],
      },
      {
        weekNumber: 12,
        title: '可观测性与网关',
        knowledgePoints: [
          {
            title: '日志与追踪',
            description: '接入结构化日志与分布式追踪，记录每次请求的完整调用链。',
          },
          {
            title: '指标监控与告警',
            description: '采集 QPS、延迟、错误率、Token 消耗等指标，配置告警规则。',
          },
          {
            title: 'API 网关与多租户',
            description: '设计网关层实现统一鉴权、限流、路由，保证租户间数据隔离。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 10,
        title: '应用管理',
        points: [
          '设计应用数据模型与配置',
          '实现应用版本发布与回滚',
          '提供前端与后端 SDK',
        ],
      },
      {
        weekNumber: 11,
        title: '模型与知识库管理',
        points: [
          '维护模型元数据与配额',
          '实现知识库文档上传与索引重建',
          '建立检索效果评估指标',
        ],
      },
      {
        weekNumber: 12,
        title: '可观测性与网关',
        points: [
          '接入结构化日志与分布式追踪',
          '采集指标与配置告警规则',
          '设计 API 网关与多租户隔离',
        ],
      },
    ],
    practiceProject: {
      title: '多应用企业级 LLMOps 平台',
      description: '交付支持多应用、多模型、多知识库与可观测性的企业级 LLMOps 平台。',
      deliverables: [
        { label: 'APP', title: '应用管理后台' },
        { label: 'KB', title: '知识库管理' },
        { label: 'OBSERVABILITY', title: '可观测性看板' },
      ],
    },
    technicalHighlights: [
      { icon: 'layout-template', title: '应用配置抽象', description: '将 Prompt、模型、知识库等配置抽象为应用模板，支持快速复制与版本管理。' },
      { icon: 'database', title: '向量索引管理', description: '支持多知识库独立索引，提供增量更新与全量重建能力。' },
      { icon: 'activity', title: 'OpenTelemetry 追踪', description: '标准化追踪数据格式，实现跨服务调用链可视化。' },
      { icon: 'globe', title: '网关限流策略', description: '基于 Token 桶算法实现限流，保护后端模型服务稳定性。' },
    ],
    faq: [
      { question: '多租户数据如何隔离？', answer: '在数据表中增加 tenant_id 字段，所有查询强制带租户过滤，关键资源使用行级安全策略。' },
      { question: '向量索引更新影响线上查询怎么办？', answer: '使用双索引切换策略，先构建新索引再原子切换，或采用增量更新降低影响。' },
      { question: '如何评估 RAG 检索效果？', answer: '使用 Recall、MRR、NDCG 等指标，结合人工标注数据集定期评估并迭代分块与 Embedding 策略。' },
    ],
  },
  {
    id: 5,
    number: '05',
    title: '前端调优及生产部署',
    weeks: 'WEEK 13 — 14',
    level: '工程化',
    description: '学习前端性能优化、工程化配置与生产环境部署，让 AI 应用真正稳定运行。',
    tags: ['Vite', 'Docker', 'Nginx', 'CI/CD', '性能优化'],
    overview: [
      '本阶段将目光从功能实现转向工程质量与部署运维，确保应用在生产环境中稳定、高效、可扩展。',
      '第十三周聚焦前端性能优化——代码分割、懒加载、缓存策略、打包分析与首屏优化。',
      '第十四周学习容器化与 CI/CD——使用 Docker 打包应用，配置 Nginx 反向代理，搭建 GitHub Actions 自动化部署流水线。',
    ],
    learningObjectives: [
      { icon: 'zap', title: '前端性能优化', description: '掌握代码分割、懒加载、资源压缩与缓存策略。' },
      { icon: 'container', title: 'Docker 容器化', description: '编写 Dockerfile 与 docker-compose，实现前后端容器化部署。' },
      { icon: 'globe', title: 'Nginx 反向代理', description: '配置 Nginx 静态资源服务、负载均衡与 HTTPS。' },
      { icon: 'git-branch', title: 'CI/CD 流水线', description: '搭建自动化测试、构建与部署流水线。' },
      { icon: 'activity', title: '线上问题排查', description: '使用监控与日志快速定位并修复生产问题。' },
    ],
    weeksContent: [
      {
        weekNumber: 13,
        title: '前端性能优化',
        knowledgePoints: [
          {
            title: '代码分割与懒加载',
            description: '使用 React.lazy 与动态 import 实现路由级组件分割，减少首屏加载体积。',
          },
          {
            title: '资源优化策略',
            description: '优化图片、字体与第三方库加载，配置 Tree Shaking 与 Gzip/Brotli 压缩。',
          },
          {
            title: '打包分析与缓存',
            description: '使用 rollup-plugin-visualizer 分析包体积，配置长期缓存与文件名哈希。',
          },
        ],
      },
      {
        weekNumber: 14,
        title: '生产部署',
        knowledgePoints: [
          {
            title: 'Docker 容器化',
            description: '编写前后端 Dockerfile，使用 docker-compose 编排服务，配置环境变量与数据卷。',
          },
          {
            title: 'Nginx 配置',
            description: '配置静态资源托管、API 反向代理、Gzip 压缩与 HTTPS 证书。',
          },
          {
            title: 'CI/CD 流水线',
            description: '使用 GitHub Actions 实现代码提交后自动测试、构建镜像并部署到服务器。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 13,
        title: '前端性能优化',
        points: [
          '使用代码分割与懒加载减少首屏体积',
          '优化图片、字体与第三方库',
          '分析包体积并配置长期缓存',
        ],
      },
      {
        weekNumber: 14,
        title: '生产部署',
        points: [
          '编写 Dockerfile 与 docker-compose',
          '配置 Nginx 反向代理与 HTTPS',
          '搭建 GitHub Actions CI/CD 流水线',
        ],
      },
    ],
    practiceProject: {
      title: '生产级部署的 LLMOps 应用',
      description: '将前面的 ChatBot 与管理平台打包为 Docker 镜像，通过 CI/CD 流水线部署到云服务器。',
      deliverables: [
        { label: 'DEVOPS', title: 'Docker 镜像' },
        { label: 'DEPLOY', title: 'Nginx 配置' },
        { label: 'CI/CD', title: '自动化流水线' },
      ],
    },
    technicalHighlights: [
      { icon: 'zap', title: 'Vite 构建优化', description: '利用 Vite 的按需编译与 Rollup 打包能力，生成高效的生产包。' },
      { icon: 'container', title: '多阶段构建', description: '使用 Docker 多阶段构建减小镜像体积，提升部署效率。' },
      { icon: 'globe', title: 'Nginx 缓存策略', description: '为静态资源配置长期缓存，为 API 配置禁用缓存。' },
      { icon: 'git-branch', title: 'GitHub Actions', description: '自动化测试、构建镜像并推送到镜像仓库。' },
    ],
    faq: [
      { question: '首屏加载慢怎么优化？', answer: '启用代码分割、懒加载、图片压缩、字体预加载，并使用 CDN 加速静态资源。' },
      { question: 'Docker 镜像太大怎么办？', answer: '使用 Alpine 基础镜像、多阶段构建、清理缓存与不必要的依赖。' },
      { question: 'CI/CD 部署失败如何回滚？', answer: '保留历史镜像版本，部署失败时快速切换回上一版本镜像。' },
    ],
  },
  {
    id: 6,
    number: '06',
    title: '多模态工具功能',
    weeks: 'WEEK 15',
    level: '进阶',
    description: '扩展 ChatBot 到多模态交互，集成图片理解、语音合成与语音识别能力。',
    tags: ['Vision Model', 'TTS', 'ASR', 'Whisper', '多模态'],
    overview: [
      '本阶段将 ChatBot 从纯文本交互扩展到多模态交互，支持图片输入、语音输入与语音回复。',
      '学习内容涵盖多模态大模型调用、语音合成（TTS）、语音识别（ASR）与前端媒体处理。',
      '最终交付一个支持图文对话与语音对话的智能助手。',
    ],
    learningObjectives: [
      { icon: 'image', title: '图片理解与生成', description: '集成 Vision Model 实现图片理解与描述。' },
      { icon: 'mic', title: '语音识别 ASR', description: '使用 Whisper 等模型将语音转换为文本。' },
      { icon: 'volume-2', title: '语音合成 TTS', description: '将文本回复转换为自然语音输出。' },
      { icon: 'monitor', title: '前端媒体处理', description: '实现录音、音频播放与图片上传预览组件。' },
      { icon: 'wand2', title: '多模态交互设计', description: '设计图文混排与语音对话的交互体验。' },
    ],
    weeksContent: [
      {
        weekNumber: 15,
        title: '多模态能力集成',
        knowledgePoints: [
          {
            title: 'Vision Model 调用',
            description: '使用 GPT-4V 等多模态模型处理图片输入，实现图片描述、理解与问答。',
          },
          {
            title: '语音识别 ASR',
            description: '集成 Whisper API 或开源模型，将用户语音转换为文本输入。',
          },
          {
            title: '语音合成 TTS',
            description: '使用 OpenAI TTS 或其他语音合成服务，将模型回复转换为语音。',
          },
          {
            title: '前端媒体组件',
            description: '实现录音组件、音频播放器和图片上传预览，处理浏览器媒体权限。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 15,
        title: '多模态能力集成',
        points: [
          '使用 Vision Model 处理图片输入',
          '集成 Whisper 实现语音识别',
          '使用 TTS 将文本转为语音',
        ],
      },
    ],
    practiceProject: {
      title: '多模态智能助手',
      description: '交付一个支持图片上传、语音输入与语音回复的多模态智能助手。',
      deliverables: [
        { label: 'VISION', title: '图片理解' },
        { label: 'ASR', title: '语音输入' },
        { label: 'TTS', title: '语音回复' },
      ],
    },
    technicalHighlights: [
      { icon: 'image', title: '多模态 Prompt', description: '构造包含图片 URL 或 base64 的多模态消息格式。' },
      { icon: 'mic', title: 'Web Audio API', description: '使用浏览器 Web Audio API 实现录音与音频可视化。' },
      { icon: 'volume-2', title: 'TTS 流式播放', description: '边接收语音流边播放，降低用户等待时间。' },
      { icon: 'monitor', title: '媒体权限管理', description: '优雅处理麦克风与文件权限申请与错误提示。' },
    ],
    faq: [
      { question: '多模态模型支持哪些图片格式？', answer: '常见支持 PNG、JPEG、WEBP 与 GIF，具体限制需参考模型文档。' },
      { question: '语音识别的准确率如何提升？', answer: '使用高质量麦克风、降低环境噪音、选择适合的模型尺寸与语言参数。' },
      { question: 'TTS 语音如何做到自然流畅？', answer: '选择高质量的 TTS 模型，调整语速、音调与停顿参数，使用流式播放。' },
    ],
  },
  {
    id: 7,
    number: '07',
    title: '五大商业级 AI 应用实战',
    weeks: 'WEEK 17 — 19',
    level: '实战',
    description: '综合运用所学知识，从零到一完成五大商业级 AI 应用项目。',
    tags: ['RAG', 'Agent', '多模态', '数字人', '自动化'],
    overview: [
      '本阶段是课程的实战高潮，学员将独立完成五大商业级 AI 应用项目，覆盖企业常见的 AI 应用场景。',
      '项目包括智能客服系统、英语口语陪练、图片转 HTML 生成器、虚拟数字人与 AI PPT 生成器。',
      '每个项目都要求完成需求分析、架构设计、核心功能开发与演示交付。',
    ],
    learningObjectives: [
      { icon: 'briefcase', title: '完整项目交付能力', description: '独立完成从需求到上线的完整项目流程。' },
      { icon: 'users', title: '团队协作与代码规范', description: '遵循代码规范，使用 Git 进行版本管理与协作。' },
      { icon: 'rocket', title: '产品化思维', description: '将技术能力转化为可落地的商业产品。' },
      { icon: 'trophy', title: '作品集打造', description: '产出 5 个可展示的商业级项目作品。' },
      { icon: 'lightbulb', title: '问题解决能力', description: '在实战中独立分析并解决技术与业务问题。' },
    ],
    weeksContent: [
      {
        weekNumber: 17,
        title: '项目一 & 项目二',
        knowledgePoints: [
          {
            title: '智能客服系统',
            description: '基于 RAG 架构实现企业客服，支持知识库管理、多轮对话与人工接管。',
          },
          {
            title: '英语口语陪练',
            description: '集成 ASR 与 TTS 技术，实现发音评估、语法纠正与对话练习。',
          },
        ],
      },
      {
        weekNumber: 18,
        title: '项目三 & 项目四',
        knowledgePoints: [
          {
            title: '图片转 HTML 生成器',
            description: '使用 Vision Model 分析设计稿，生成可维护的前端 HTML/CSS 代码。',
          },
          {
            title: '虚拟数字人',
            description: '融合大模型对话、语音克隆与数字人渲染，打造交互式虚拟主播。',
          },
        ],
      },
      {
        weekNumber: 19,
        title: '项目五 & 作品集',
        knowledgePoints: [
          {
            title: 'AI PPT 生成器',
            description: '根据主题自动生成大纲、配图与排版，输出可编辑的演示文稿。',
          },
          {
            title: '项目包装与演示',
            description: '整理项目文档、演示视频与代码仓库，打造高质量作品集。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 17,
        title: '项目一 & 项目二',
        points: [
          '基于 RAG 实现智能客服系统',
          '集成 ASR/TTS 开发英语口语陪练',
          '完成需求分析与架构设计',
        ],
      },
      {
        weekNumber: 18,
        title: '项目三 & 项目四',
        points: [
          '使用 Vision Model 实现图片转 HTML',
          '融合语音克隆与渲染实现虚拟数字人',
          '完成核心功能开发与测试',
        ],
      },
      {
        weekNumber: 19,
        title: '项目五 & 作品集',
        points: [
          '开发 AI PPT 生成器',
          '整理项目文档与演示材料',
          '打造高质量作品集',
        ],
      },
    ],
    practiceProject: {
      title: '五大商业级 AI 应用',
      description: '独立完成智能客服、口语陪练、图片转 HTML、虚拟数字人、PPT 生成五大项目。',
      deliverables: [
        { label: 'CHATBOT', title: '智能客服系统' },
        { label: 'EDUCATION', title: '英语口语陪练' },
        { label: 'MULTIMODAL', title: '图片转 HTML' },
      ],
    },
    technicalHighlights: [
      { icon: 'briefcase', title: '项目工程化', description: '使用规范的目录结构、类型定义与错误处理。' },
      { icon: 'users', title: '模块化设计', description: '将通用能力抽象为可复用模块，提高开发效率。' },
      { icon: 'rocket', title: '产品文档编写', description: '撰写 README、API 文档与项目演示材料。' },
      { icon: 'trophy', title: '端到端交付', description: '从需求分析到部署演示，完成完整交付闭环。' },
    ],
    faq: [
      { question: '五个项目都要完整实现吗？', answer: '是的，每个项目都需要完成核心功能并能够演示，鼓励在关键功能上做深做透。' },
      { question: '项目如何体现差异化？', answer: '在 UI 交互、功能细节与落地场景上加入自己的思考，避免简单复制示例。' },
      { question: '如何准备项目答辩？', answer: '准备清晰的架构图、演示流程与技术亮点说明，重点展示解决问题的能力。' },
    ],
  },
  {
    id: 8,
    number: '08',
    title: '课程回顾与 LLM 进阶',
    weeks: 'WEEK 20 — 21',
    level: '进阶',
    description: '系统回顾 21 周课程内容，学习 LLM 前沿技术，规划职业发展路径。',
    tags: ['课程回顾', '前沿技术', '职业规划', 'Fine-tuning', 'Agent 进阶'],
    overview: [
      '本阶段是课程的收尾与升华，帮助学员建立完整的知识体系，并展望未来发展方向。',
      '第二十周系统回顾前七个阶段的核心知识点，梳理从架构基础到商业应用的完整链路。',
      '第二十一周学习 LLM 前沿技术——Fine-tuning、模型量化、多 Agent 协作与 AI 产品趋势，并制定个人成长计划。',
    ],
    learningObjectives: [
      { icon: 'book-open', title: '建立完整知识体系', description: '梳理 21 周课程内容，形成清晰的 LLMOps 知识图谱。' },
      { icon: 'zap', title: '掌握前沿技术趋势', description: '了解 Fine-tuning、模型压缩、Agent 框架等前沿方向。' },
      { icon: 'target', title: '明确职业方向', description: '结合个人兴趣与市场需求，制定 AI 工程师成长路径。' },
      { icon: 'rocket', title: '持续学习能力', description: '建立跟踪前沿论文、开源项目与技术社区的习惯。' },
      { icon: 'trophy', title: '完成课程结业', description: '通过项目答辩与知识测评，顺利结业。' },
    ],
    weeksContent: [
      {
        weekNumber: 20,
        title: '课程回顾',
        knowledgePoints: [
          {
            title: '知识点串联',
            description: '从架构设计、后端开发、RAG、Agent、平台化到部署，梳理完整技术链路。',
          },
          {
            title: '常见问题复盘',
            description: '总结各阶段学员常见问题与最佳实践，强化关键概念理解。',
          },
          {
            title: '代码规范回顾',
            description: '强调类型安全、错误处理、日志记录与测试覆盖的重要性。',
          },
        ],
      },
      {
        weekNumber: 21,
        title: 'LLM 进阶与职业规划',
        knowledgePoints: [
          {
            title: 'Fine-tuning 与模型优化',
            description: '了解 SFT、LoRA、QLoRA 等微调技术，以及模型量化与推理加速。',
          },
          {
            title: '多 Agent 协作框架',
            description: '学习 AutoGen、CrewAI 等多 Agent 框架，理解复杂任务分解与协作。',
          },
          {
            title: 'AI 产品趋势与职业规划',
            description: '分析 AI 应用落地趋势，制定个人技术成长与职业发展计划。',
          },
        ],
      },
    ],
    weeklySummaries: [
      {
        weekNumber: 20,
        title: '课程回顾',
        points: [
          '串联架构到部署的完整技术链路',
          '复盘常见问题与最佳实践',
          '强化代码规范与测试覆盖',
        ],
      },
      {
        weekNumber: 21,
        title: 'LLM 进阶与职业规划',
        points: [
          '了解 Fine-tuning 与模型优化',
          '学习多 Agent 协作框架',
          '制定 AI 职业成长计划',
        ],
      },
    ],
    practiceProject: {
      title: '课程总结与个人作品集',
      description: '整理全部项目与学习笔记，形成个人作品集，准备结业答辩。',
      deliverables: [
        { label: 'NOTES', title: '学习笔记' },
        { label: 'PORTFOLIO', title: '作品集' },
        { label: 'DEMO', title: '结业答辩' },
      ],
    },
    technicalHighlights: [
      { icon: 'zap', title: 'Fine-tuning 基础', description: '理解 LoRA 等高效微调方法，掌握数据准备与训练流程。' },
      { icon: 'brain-circuit', title: '多 Agent 系统', description: '学习多 Agent 角色分工、任务规划与协作机制。' },
      { icon: 'rocket', title: '职业成长路径', description: '明确 AI 应用工程师、LLMOps 工程师等方向的能力要求。' },
      { icon: 'book-open', title: '持续学习习惯', description: '关注顶级会议论文、开源项目与技术社区动态。' },
    ],
    faq: [
      { question: '学完后适合什么岗位？', answer: '可投递 AI 应用工程师、LLMOps 工程师、全栈 AI 工程师、AI 产品经理等岗位。' },
      { question: '如何继续深入学习 LLM？', answer: '阅读经典论文、复现开源项目、参加 Kaggle 竞赛或贡献开源社区。' },
      { question: '需要掌握数学基础吗？', answer: '应用开发方向以工程能力为主，但了解 Transformer、Embedding 基本原理会更有优势。' },
    ],
  },
]

export function getStageById(id: number): Stage | undefined {
  return stages.find((stage) => stage.id === id)
}

export function getStageNavigation(id: number): { prev: Stage | null; next: Stage | null } {
  const index = stages.findIndex((stage) => stage.id === id)
  return {
    prev: index > 0 ? stages[index - 1] : null,
    next: index < stages.length - 1 ? stages[index + 1] : null,
  }
}
