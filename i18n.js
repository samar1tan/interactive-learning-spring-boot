window.I18N = {
  languages: [
    { code: "en", label: "EN", name: "English" },
    { code: "zh-CN", label: "简中", name: "简体中文" },
  ],
  ui: {
    "zh-CN": {
      metaTitle: "Spring Boot 架构训练场",
      metaDescription:
        "面向初级 Java 工程师的 Spring Boot 互动学习训练场，强调动手练习、架构判断和 AI 时代仍然值得训练的能力。",
      brandAria: "Spring Boot 架构训练场",
      brandEyebrow: "互动式 Spring Boot 学习",
      brandTitle: "架构训练场",
      languageAria: "语言",
      searchLabel: "搜索课程和依赖",
      searchPlaceholder: "搜索 boot、测试、配置...",
      resetProgress: "重置",
      exportPlan: "复制计划",
      curriculumAria: "课程",
      progressLabel: "练习进度",
      progressCopy: "{done}/{total} 个检查点已完成",
      tracksEyebrow: "路径",
      tracksTitle: "从新手到架构思维",
      learningViewsAria: "学习视图",
      tabLearn: "学习",
      tabPractice: "练习",
      tabRadar: "雷达",
      tabLab: "实验室",
      versionNote: "Spring Boot 文档核对于 2026-05-24",
      coachAria: "LLM 教练",
      coachEyebrow: "LLM 帮助",
      coachTitle: "教练，而不是自动驾驶",
      coachModeAria: "教练模式",
      modeSocratic: "提示",
      modeReview: "审查",
      modePair: "结对",
      coachPromptAria: "生成的 LLM 提示词",
      copyPrompt: "复制提示词",
      shuffleDrill: "新练习",
      currentDrillEyebrow: "当前练习",
      emptyDrillTitle: "选择一个模块",
      timerStart: "开始",
      timerPause: "暂停",
      complete: "已完成",
      incomplete: "未完成",
      doneMark: "OK",
      checks: "检查",
      min: "分钟",
      noModuleMatches: "没有模块匹配当前搜索。",
      track: "路径",
      architectMove: "架构动作：",
      runtimeMapAria: "运行时概念图",
      snapshot: "快照",
      currentBaseline: "当前基线",
      stableDocs: "稳定文档",
      javaBaseline: "Java 基线",
      mentalModel: "心智模型",
      understandBeforeTyping: "敲代码前要先理解什么",
      handsDirty: "开始动手",
      checkpointChecklist: "检查点清单",
      quickQuiz: "快速测验",
      checkInstinct: "检查直觉",
      minuteSession: "{minutes} 分钟练习",
      scenario: "场景",
      deliverable: "交付物",
      constraints: "约束",
      scratchpad: "你的草稿",
      selfScore: "自评分",
      selfScoreAria: "自评分",
      copyDrill: "复制练习",
      hideReview: "隐藏点评",
      revealReview: "查看点评",
      mentorReview: "导师点评：",
      all: "全部",
      learnNow: "现在学",
      later: "稍后",
      aiEra: "AI 时代",
      history: "历史",
      dependencyRadar: "依赖雷达",
      dependencyRadarSubtitle: "哪些现在学，哪些推迟，哪些只需要认识",
      dependencyFiltersAria: "依赖筛选",
      noDependencyMatches: "没有依赖匹配当前筛选条件。",
      architectQuestion: "架构问题：",
      watch: "注意：",
      categoryCore: "核心",
      categoryLater: "稍后",
      categoryAi: "AI",
      categoryLegacy: "历史",
      architectureLab: "架构实验室",
      choosePressureTest: "选择一个压力测试",
      decisionBoard: "决策板",
      recommendedFirstDecision: "推荐的第一决策：",
      adrDrill: "ADR 练习",
      adrDrillCopy:
        "写下上下文、决策、后果和被拒绝的替代方案。然后把 LLM 教练切到审查模式，让它挑战你最薄弱的假设。",
      copied: "已复制。",
      practiceCopied: "练习已复制。",
      promptCopied: "提示词已复制。",
      planCopied: "学习计划已复制。",
      resetConfirm: "要重置此浏览器里的本地进度和笔记吗？",
      practiceCopyModule: "模块：",
      practiceCopyTimebox: "时间盒：{minutes} 分钟",
      practiceCopyScenario: "## 场景",
      practiceCopyDeliverable: "## 交付物",
      practiceCopyConstraints: "## 约束",
      practiceCopyStarter: "## 起手模板",
      planTitle: "# Spring Boot 架构训练计划",
      planProgress: "进度：{done}/{total} 个检查点",
      planCurrentModule: "当前模块：{title}",
      planNextCheckpoint: "下一个检查点：{title}",
      planPracticeDrill: "练习：{title}",
      planTrackStatus: "## 路径状态",
      planNext30: "## 接下来 30 分钟",
      planStep1: "1. 回顾当前模块的心智模型。",
      planStep2: "2. 完成检查点：{title}。",
      planStep3: "3. 完成练习：{title}。",
      planStep4: "4. 把教练提示词粘贴到你的 LLM 中，请它做审查。",
      planCoachPrompt: "## 教练提示词",
      coachPromptShared: [
        "你是我的 Spring Boot 学习教练。",
        "学习者：入门级 Java 工程师，目标是在 AI 编码时代像架构师一样思考。",
        "模块：{moduleTitle}",
        "心智模型：{moduleTheme}",
        "练习场景：{practiceScenario}",
        "交付物：{practiceDeliverable}",
        "约束：{practiceConstraints}",
        "文档快照：Spring Boot {springVersion}，核对日期 {checkedOn}。如果涉及生产版本选择，请提醒我再次核对官方文档。",
      ],
      coachPromptModes: {
        socratic: [
          "模式：苏格拉底式提示。",
          "不要一开始就给完整答案。",
          "一次只问一个聚焦的问题。",
          "如果我卡住了，给一个小提示和一个具体的下一步动作。",
          "让我继续对架构决策负责。",
        ],
        review: [
          "模式：资深代码和设计审查。",
          "找出缺失的边界、薄弱的测试、不安全的默认值、不清晰的配置和生产风险。",
          "先输出发现的问题，并按严重程度排序。",
          "建议一个我能在 15 分钟内完成的小改进。",
        ],
        pair: [
          "模式：结对程序员。",
          "用短步骤推进。",
          "展示代码前，先让我预测下一个设计动作。",
          "出现代码时保持最小化，并解释它表达了哪个架构决策。",
        ],
      },
      coachPromptScratchpad: "我的当前草稿：",
      coachPromptEmptyScratchpad: "我的当前草稿是空的。请先帮我把工作框定清楚。",
    },
  },
  content: {
    "zh-CN": {
      docs: {
        checkedOn: "2026-05-24",
        currentStable: "4.0.6",
        javaBaseline: "Java 17+",
        note:
          "官方 Spring Boot 参考文档在上述日期列出 4.0.6 为稳定版本。做生产版本选择前请再次核对官方文档。",
        links: [
          {
            label: "Spring Boot 参考文档",
            url: "https://docs.spring.io/spring-boot/reference/index.html",
          },
          {
            label: "系统要求",
            url: "https://docs.spring.io/spring-boot/system-requirements.html",
          },
          {
            label: "文档总览",
            url: "https://docs.spring.io/spring-boot/documentation.html",
          },
        ],
      },
      modules: [
        {
          id: "runtime-map",
          number: "01",
          title: "编码前先画运行时地图",
          theme: "把 Spring Boot 看成运行时对象图，而不是注解魔法。",
          minutes: 40,
          level: "第一性原理",
          tags: ["ApplicationContext", "自动配置", "Bean"],
          pitch:
            "新手会问该粘贴哪个注解。架构师会先问运行时会出现什么对象图、它为什么会存在，以及怎样证明它。",
          architectMove:
            "每一个便利默认值都是一个设计决策：你可以检查它、覆盖它，或者用测试保护它。",
          lesson: [
            "学习 Spring Boot 时，最好先把它理解成一个启动系统。main 方法启动 SpringApplication，Spring 创建 ApplicationContext，自动配置根据 classpath 和属性做判断，最后 Bean 组成应用真正使用的运行时对象图。",
            "不要把 starter 当购物清单来背。要练习追问：每个 starter 往 classpath 里加了什么信号，哪些自动配置因此有资格生效，以及你正在依赖哪些默认值。",
            "第一个最有价值的习惯，是在应用行为出乎意料时阅读条件报告或 Actuator 的 beans 端点。这样框架魔法会重新变成证据。",
          ],
          flow: [
            ["Main", "SpringApplication.run"],
            ["Classpath", "Starter 加入信号"],
            ["Conditions", "自动配置匹配"],
            ["Beans", "对象图被构建"],
            ["Runtime", "请求使用对象图"],
          ],
          checkpoints: [
            {
              id: "decode-annotation",
              title: "拆解 @SpringBootApplication",
              copy:
                "说明它组合了哪些关注点，以及组件扫描范围为什么会影响包结构。",
            },
            {
              id: "classpath-to-beans",
              title: "从 classpath 追到 Bean",
              copy:
                "选择一个 starter，描述从依赖到候选自动配置再到具体 Bean 的链路。",
            },
            {
              id: "override-default",
              title: "有意识地覆盖一个默认值",
              copy:
                "说出真实服务中你会覆盖的一个默认值，以及哪个测试或 Actuator 检查能抓住错误覆盖。",
            },
          ],
          quiz: [
            {
              q: "为什么添加一个 starter 可能在你写业务代码前就改变应用行为？",
              choices: [
                "因为 starter 会加入依赖，这些依赖可能满足自动配置条件。",
                "因为 starter 会在编译时改写你的 Java 源码。",
                "因为 Spring Boot 总是默认启用所有模块。",
              ],
              answer: 0,
              why:
                "Starter 是经过策划的依赖集合。自动配置会响应类、属性和缺失的 Bean。",
            },
            {
              q: "当一个 Bean 意外出现时，最强的第一步调试动作是什么？",
              choices: [
                "不断删除依赖，直到它消失。",
                "先检查条件和 Bean 证据，再改代码。",
                "把类移动到一个随机包里。",
              ],
              answer: 1,
              why:
                "证据胜过猜测。条件报告和 Bean 列表会告诉你这个 Bean 为什么存在。",
            },
          ],
          practice: {
            title: "编码前先映射一个服务",
            minutes: 15,
            scenario:
              "你要为创建训练班级做一个小型内部 API。编码代理可以生成 CRUD 外壳，但在生成之前，你必须先定义运行时形状。",
            deliverable:
              "写一页运行时地图，包含入口点、starter、关键 Bean、接受的默认值、拒绝的默认值，以及一个检查命令。",
            constraints: [
              "不要从实体或控制器开始。",
              "至少包含一个你预计会出现的自动配置。",
              "包含一个生成式 CRUD 应用很可能漏掉的风险。",
            ],
            starter:
              "服务目标：\n运行时入口：\n我会添加的 starter：\n我预计出现的 Bean：\n我接受的默认值：\n我拒绝的默认值：\n检查证据：\n代码生成器可能漏掉的风险：",
            mentor:
              "强答案会提到 spring-boot-starter-web 或 webmvc、validation、需要可见性时加入 actuator，并且只有在持久化决策明确后才加入数据库 starter。它会解释 classpath 加属性如何产生自动配置的 Web 服务器、JSON mapper、校验和 MVC 基础设施。它还会有意识地拒绝至少一个默认值，比如过宽的包扫描、隐式错误响应或无边界连接池。",
          },
        },
        {
          id: "web-boundary",
          number: "02",
          title: "带契约的 HTTP 边界",
          theme: "构建表达意图的 Web 边界，而不是暴露数据库表。",
          minutes: 45,
          level: "API 设计",
          tags: ["Web MVC", "校验", "错误契约"],
          pitch:
            "CRUD 现在很便宜，边界思维并不便宜。价值在于决定客户端能依赖什么，以及服务拒绝泄漏什么。",
          architectMove:
            "把控制器当作契约适配器。领域不应该变成第一个 JSON 形状的镜像。",
          lesson: [
            "Spring Boot 让 HTTP 端点非常容易，所以学习陷阱是把容易当成设计。控制器应该把 HTTP 翻译成用例调用，校验输入，塑造错误，并把持久化细节留在契约之外。",
            "入门工程师应该在使用代理生成代码前，先练习写请求和响应契约。这个习惯能避免大量意外耦合。",
            "校验不是装饰性的注解。它是公开承诺的一部分：哪些内容会被拒绝、如何解释拒绝，以及哪些非法状态永远不能进入服务层。",
          ],
          flow: [
            ["Client", "请求契约"],
            ["Controller", "HTTP 适配器"],
            ["Validator", "拒绝坏状态"],
            ["Use case", "业务规则"],
            ["Response", "稳定形状"],
          ],
          checkpoints: [
            {
              id: "dto-boundary",
              title: "把 DTO 和实体分开",
              copy:
                "描述一个把持久化实体直接暴露为 API body 时会出现的 bug。",
            },
            {
              id: "error-shape",
              title: "定义错误形状",
              copy:
                "草拟一个校验错误响应，让前端或合作方 API 可以稳定解析。",
            },
            {
              id: "contract-test",
              title: "保护边界",
              copy:
                "选择一个 Web MVC 测试，证明状态码、内容类型和一个校验失败。",
            },
          ],
          quiz: [
            {
              q: "为什么控制器应该避免直接返回 JPA 实体？",
              choices: [
                "因为 JSON 序列化不能处理对象。",
                "因为这会把 API 形状耦合到持久化形状，并可能泄漏字段或 lazy loading 行为。",
                "因为 Spring Boot 要求每个响应都必须是 record。",
              ],
              answer: 1,
              why:
                "问题是架构耦合和运行时惊喜，而不是 Java 对象序列化本身。",
            },
            {
              q: "请求 DTO 通常应该在哪里被校验？",
              choices: [
                "在 HTTP 边界，在用例接受它之前。",
                "只在数据库拒绝它之后。",
                "只在前端校验。",
              ],
              answer: 0,
              why:
                "边界校验能让非法状态远离核心用例，并给客户端稳定反馈。",
            },
          ],
          practice: {
            title: "设计一个非 CRUD 端点",
            minutes: 20,
            scenario:
              "团队需要一个端点，把学习者安排进练习班级。天真的 CRUD 设计会把 CohortEnrollment 当成表形资源暴露出去。",
            deliverable:
              "在生成代码前，设计端点契约、校验失败和控制器职责。",
            constraints: [
              "使用匹配业务动作的动词或资源表达，而不是表名。",
              "包含两个校验失败和一个冲突失败。",
              "命名控制器应该调用的用例方法。",
            ],
            starter:
              "端点：\n请求体：\n成功响应：\n校验失败：\n冲突失败：\n控制器职责：\n用例方法：\n不应该暴露什么：",
            mentor:
              "强答案会使用以动作或意图为中心的路由，例如 POST /cohorts/{cohortId}/enrollments 或 POST /enrollment-requests；校验学习者身份和容量规则；返回稳定的响应 DTO；并把内部 ID、时间戳或 lazy 关系等实体字段留在公共契约之外。",
          },
        },
        {
          id: "configuration",
          number: "03",
          title: "把配置当作运行时策略",
          theme: "Profile 和属性会决定行为，所以要像对待代码一样对待它们。",
          minutes: 35,
          level: "具备运维意识",
          tags: ["Properties", "Profiles", "Secrets"],
          pitch:
            "让配置到部署日才变得可见，是交付坏掉的 Spring Boot 服务的最快方式。",
          architectMove:
            "从散落的字符串属性，走向类型化、可校验、环境感知的策略。",
          lesson: [
            "外部化配置是 Spring Boot 的强大能力之一。如果你从不建模它，它也会制造隐藏行为。尽早学习属性优先级、profile 激活和类型化配置。",
            "Profile 应该选择环境相关的装配，而不是变成随机 feature flag 的袋子。属性应该按它控制的决策命名，而不是按今天读取它的类命名。",
            "密钥不属于 GitHub Pages 示例、仓库或截图。学习应用应该先教占位符和环境变量，再教方便做法。",
          ],
          flow: [
            ["Property", "决策名称"],
            ["Binding", "@ConfigurationProperties"],
            ["Validation", "启动即失败"],
            ["Profile", "环境策略"],
            ["Runtime", "可观察配置"],
          ],
          checkpoints: [
            {
              id: "typed-config",
              title: "使用类型化配置",
              copy:
                "写出一个配置属性类名，以及它应该拥有的两个字段。",
            },
            {
              id: "profile-purpose",
              title: "区分 profile 和 flag",
              copy:
                "解释什么时候用 profile，什么时候用普通属性。",
            },
            {
              id: "secret-handling",
              title: "让密钥远离仓库",
              copy:
                "说出本地、CI 和生产环境中密钥应该来自哪里。",
            },
          ],
          quiz: [
            {
              q: "为什么优先使用类型化配置属性？",
              choices: [
                "它们让运行时策略可发现，并且可以在启动时校验。",
                "它们让文档永远不再需要。",
                "它们强制所有值都必须是字符串。",
              ],
              answer: 0,
              why:
                "类型化、可校验的属性让配置可见，并在必需值缺失或格式错误时尽早失败。",
            },
            {
              q: "哪一种 profile 用法更健康？",
              choices: [
                "按个人喜好随机开关功能。",
                "选择环境相关行为，例如本地测试基础设施。",
                "在生产环境隐藏编译错误。",
              ],
              answer: 1,
              why:
                "Profile 最适合环境相关装配。功能行为通常应该有明确属性或功能管理。",
            },
          ],
          practice: {
            title: "让配置可审查",
            minutes: 15,
            scenario:
              "一个生成出的服务会连接外部测评提供方。第一版在 application.yml 里硬编码了超时时间和假 token。",
            deliverable: "设计配置表面和失败行为。",
            constraints: [
              "使用类型化配置属性。",
              "至少为两个字段加入校验。",
              "描述不提交真实密钥的本地开发方式。",
            ],
            starter:
              "配置类：\n属性前缀：\n字段和校验：\n默认值：\n本地开发来源：\nCI 来源：\n生产来源：\n我希望的启动失败：",
            mentor:
              "强答案会创建 provider 专属配置类，例如 AssessmentProviderProperties，包含 url、apiToken、connectTimeout 和 readTimeout。它会校验必填值和正数 Duration，把 token 放在环境变量或密钥存储里，并在 provider 已启用但凭据缺失时让应用启动失败。",
          },
        },
        {
          id: "persistence",
          number: "04",
          title: "持久化边界",
          theme: "先选择一致性、所有权和迁移，再使用数据工具。",
          minutes: 50,
          level: "数据判断",
          tags: ["JPA", "事务", "迁移"],
          pitch:
            "AI 可以立刻生成 repository。除非你说清楚，否则它不能决定哪些不变量必须被事务保护。",
          architectMove:
            "从不变量和数据生命周期开始，再选择 JPA、JDBC、Redis、事件，或更简单的文件型原型。",
          lesson: [
            "Spring Boot data starter 很强，但它们不能替代持久化设计。在实体之前，先命名聚合或数据所有者、事务边界和迁移策略。",
            "Repository 不会自动成为领域边界。如果查询、lazy 关系和实体变更散落到每个 service，它反而会把持久化泄漏到系统各处。",
            "迁移是学习材料，不是生产琐事。它迫使你思考不可逆变更、部署顺序，以及旧数据如何在新代码中存活。",
          ],
          flow: [
            ["Invariant", "必须保持什么为真"],
            ["Boundary", "事务范围"],
            ["Model", "实体或查询形状"],
            ["Migration", "Schema 历史"],
            ["Proof", "数据测试"],
          ],
          checkpoints: [
            {
              id: "transaction-boundary",
              title: "命名事务边界",
              copy:
                "选择一个业务动作，说明哪些数据变更必须一起提交或一起回滚。",
            },
            {
              id: "migration-first",
              title: "先草拟迁移",
              copy:
                "在勾画 repository 方法前，先写表或索引变更。",
            },
            {
              id: "query-risk",
              title: "识别查询风险",
              copy:
                "在生成出的 repository 设计里，找出一个 N+1、分页或锁风险。",
            },
          ],
          quiz: [
            {
              q: "生成 JPA 实体之前通常应该先做什么？",
              choices: [
                "决定不变量、所有权和事务边界。",
                "为产品说明里的每个名词随机建一张表。",
                "为每个数据库操作写一个控制器方法。",
              ],
              answer: 0,
              why:
                "持久化是为了保护你需要的行为，而不只是镜像名词。",
            },
            {
              q: "为什么要尽早教迁移？",
              choices: [
                "因为迁移让 schema 变更显式、可审查、可部署。",
                "因为迁移可以替代测试。",
                "因为 JPA 在开发环境不能建表。",
              ],
              answer: 0,
              why:
                "即使开发环境可以自动 DDL，真实系统也需要显式 schema 历史。",
            },
          ],
          practice: {
            title: "保护一个不变量",
            minutes: 25,
            scenario:
              "一个班级有最大容量。两个学习者同时尝试报名。生成式 CRUD 服务先 count 再 insert。",
            deliverable:
              "设计一个能在并发下保护容量的持久化方案。",
            constraints: [
              "命名事务边界。",
              "选择一种锁或约束策略。",
              "包含一个能让天真 CRUD 失败的测试。",
            ],
            starter:
              "不变量：\n事务边界：\n数据模型草图：\n迁移或约束：\n并发策略：\nRepository 形状：\n证明它的测试：",
            mentor:
              "强答案会把报名当成用例，而不是普通 insert。它可能使用 learner/cohort 唯一约束、事务内容量检查、cohort version 的乐观锁、cohort 行悲观锁，或数据库约束策略。测试应该模拟并发报名，并证明容量规则仍然成立。",
          },
        },
        {
          id: "testing-observability",
          number: "05",
          title: "测试与可观察性",
          theme: "先在本地证明行为，再让生产行为可见。",
          minutes: 45,
          level: "反馈回路",
          tags: ["测试切片", "Actuator", "指标"],
          pitch:
            "在 AI 时代，测试不是仪式。它们是把生成代码变成可信系统的方式。",
          architectMove:
            "先设计反馈回路：快速本地测试、真实集成测试，以及能回答运维问题的运行时信号。",
          lesson: [
            "Spring Boot 测试很宽，因为应用本身很宽。要学会区分普通单元测试、Web slice、data slice 和完整应用集成测试。",
            "Actuator 不是生产出事后才补上的东西。健康检查、指标、info、logger 和 trace 应该出现在第一张架构草图里。",
            "可观察性是一种设计习惯：值班工程师会问什么问题，哪个信号能快速回答它？",
          ],
          flow: [
            ["Question", "什么会坏"],
            ["Test", "快速证明"],
            ["Container", "真实依赖"],
            ["Actuator", "运行时证据"],
            ["Metric", "运维问题"],
          ],
          checkpoints: [
            {
              id: "test-slice",
              title: "选择最小有用测试",
              copy:
                "把一个行为映射到单元测试、Web slice、data slice 或完整集成测试。",
            },
            {
              id: "runtime-question",
              title: "提出一个运维问题",
              copy:
                "写一个生产问题，并命名回答它的指标、健康检查或日志。",
            },
            {
              id: "generated-code-review",
              title: "用测试审查生成代码",
              copy:
                "说出接受 AI 生成的 service class 前，你会要求的一个测试。",
            },
          ],
          quiz: [
            {
              q: "为什么不要把每个测试都做成完整 Spring Boot 集成测试？",
              choices: [
                "因为完整上下文测试更慢，并且可能隐藏到底是哪一层失败。",
                "因为 Spring Boot 不支持集成测试。",
                "因为单元测试永远足够。",
              ],
              answer: 0,
              why:
                "用能给出有意义信心的最小测试；只有在装配重要时再加入更完整的测试。",
            },
            {
              q: "Actuator 主要用于什么？",
              choices: [
                "生成控制器。",
                "暴露生产级运行信息，例如健康、指标和管理端点。",
                "替代应用日志。",
              ],
              answer: 1,
              why:
                "Actuator 暴露运行时管理和可观察性能力；它补充日志和 tracing，而不是替代它们。",
            },
          ],
          practice: {
            title: "设计反馈回路",
            minutes: 20,
            scenario:
              "一个代理生成了报名 service 和 controller。它能编译，但你不知道它是否处理了校验、容量冲突或生产可见性。",
            deliverable:
              "为接受这次生成变更写一份测试和可观察性清单。",
            constraints: [
              "包含一个快速测试和一个装配或集成测试。",
              "包含一个 Actuator 或指标信号。",
              "包含一个应该能在日志或 trace 中观察到的失败模式。",
            ],
            starter:
              "快速测试：\nWeb 或 data slice：\n集成测试：\n指标或健康信号：\n日志或 trace 字段：\nAI 生成代码的接受门槛：",
            mentor:
              "强答案会用 service 单元测试验证容量规则，用 Web MVC 测试验证校验和错误形状，用数据集成测试验证持久化行为。它会加入依赖健康检查、报名尝试的 counter 或 timer，以及围绕被拒绝报名的结构化日志或 trace。",
          },
        },
        {
          id: "ai-era-architecture",
          number: "06",
          title: "AI 时代的 Spring 架构",
          theme: "让代理写样板代码，你负责决策和边界。",
          minutes: 50,
          level: "架构习惯",
          tags: ["ADR", "模块化", "代码审查"],
          pitch:
            "新的基线不是更快地敲控制器，而是给机器更好的架构约束，并审查它生成的东西。",
          architectMove:
            "把模糊需求转成边界、验收测试、风险清单，以及强迫权衡思考的提示词。",
          lesson: [
            "编码代理让 CRUD demo 的教育价值下降，因为难点已经移动。你的练习应该聚焦问题框定、依赖选择、边界、测试和生产风险。",
            "好的 Spring Boot 提示词会包含领域意图、约束、包边界、测试期望、运维要求，以及不要生成什么。",
            "架构决策记录是轻量学习产物。它迫使你说明为什么选 Spring MVC 而不是 WebFlux、JPA 而不是 JDBC、模块化单体而不是微服务、同步 HTTP 而不是消息。",
          ],
          flow: [
            ["Brief", "澄清结果"],
            ["Boundary", "守住模块"],
            ["Prompt", "约束代理"],
            ["Review", "找风险"],
            ["ADR", "记录决策"],
          ],
          checkpoints: [
            {
              id: "prompt-contract",
              title: "带约束地提示代理",
              copy:
                "写一个代理提示词，包含包边界、测试和禁止的捷径。",
            },
            {
              id: "adr-habit",
              title: "创建一个迷你 ADR",
              copy:
                "为一个 Spring Boot 选择写上下文、决策、后果和被拒绝的替代方案。",
            },
            {
              id: "review-generated-code",
              title: "像负责人一样审查",
              copy:
                "列出接受生成式 Spring Boot 代码前你会检查的三个风险。",
            },
          ],
          quiz: [
            {
              q: "给编码代理做 Spring Boot 工作时，最有用的输入是什么？",
              choices: [
                "只有一个类名。",
                "清晰的边界、验收测试、约束和运维期望。",
                "让它尽可能多生成代码的请求。",
              ],
              answer: 1,
              why:
                "当你定义好解决方案的形状，而不只是语法时，代理才更有用。",
            },
            {
              q: "学习时为什么要写一个小 ADR？",
              choices: [
                "它迫使你解释权衡，并让未来审查更容易。",
                "它可以替代所有代码注释。",
                "Spring Boot 启动时强制要求它。",
              ],
              answer: 0,
              why: "重点是养成把决策显式化的纪律。",
            },
          ],
          practice: {
            title: "把模糊 ticket 变成代理可执行 brief",
            minutes: 25,
            scenario:
              "Ticket：给学习平台添加进度跟踪。弱提示词会让代理为 progress record 添加 CRUD。",
            deliverable:
              "写一个代理可执行 brief，讲清边界、测试、验收标准和非目标。",
            constraints: [
              "包含一个 ADR 风格决策。",
              "包含代理不能做什么。",
              "先写验收测试，再写实现任务。",
            ],
            starter:
              "目标结果：\n边界：\n数据所有权：\n验收测试：\n运维信号：\n非目标：\n代理实现提示词：\n迷你 ADR：",
            mentor:
              "强答案会把进度定义为学习状态行为，而不是原始 CRUD。它会说明本地或服务端持久化、可测试的完成规则、幂等性、隐私边界，以及清晰的非目标，例如暂不加入认证。它会要求代理基于测试实现，并输出审查摘要。",
          },
        },
      ],
      dependencies: [
        {
          name: "spring-boot-starter-web",
          category: "core",
          phase: "现在学",
          use: "用于 Servlet Web 应用，包含 Spring MVC、JSON、校验集成和嵌入式服务器默认值。",
          question: "我是否需要请求响应式 HTTP 边界？什么契约必须稳定？",
          caution: "不要因为 starter 让控制器很容易，就直接暴露持久化实体。",
        },
        {
          name: "spring-boot-starter-validation",
          category: "core",
          phase: "现在学",
          use: "用于边界校验和配置校验。",
          question: "哪些非法状态永远不应该进入服务层？",
          caution: "注解不是完整策略。错误响应也要设计。",
        },
        {
          name: "spring-boot-starter-actuator",
          category: "core",
          phase: "现在学",
          use: "提供健康、指标、info、运行时管理和生产行为可见性。",
          question: "凌晨两点服务异常时，我需要知道什么？",
          caution: "端点要有意识地暴露。可见性和安全性必须一起设计。",
        },
        {
          name: "spring-boot-starter-data-jpa",
          category: "core",
          phase: "数据设计之后",
          use: "当实体生命周期和事务边界适配问题时，用于 ORM 持久化。",
          question: "我正在保护哪个聚合或不变量？",
          caution: "注意 lazy loading、N+1 查询、实体泄漏和事务蔓延。",
        },
        {
          name: "Flyway or Liquibase",
          category: "core",
          phase: "第一个真实数据库同时",
          use: "维护可审查的 schema 迁移历史。",
          question: "这个 schema 变更如何在每个环境中向前滚动？",
          caution: "开发环境自动 DDL 会隐藏迁移设计，容易教坏直觉。",
        },
        {
          name: "spring-boot-starter-test",
          category: "core",
          phase: "始终需要",
          use: "支持单元、切片和完整 Spring Boot 测试。",
          question: "证明这个行为的最小测试是什么？",
          caution: "所有东西都用完整上下文测试，会拖慢反馈并模糊失败原因。",
        },
        {
          name: "Testcontainers",
          category: "core",
          phase: "尽早接触",
          use: "针对数据库或消息系统等真实基础设施做集成测试。",
          question: "哪个行为依赖真实依赖，而不是 mock？",
          caution: "把它用于重要装配和持久化行为，而不是每条小规则。",
        },
        {
          name: "spring-boot-starter-security",
          category: "core",
          phase: "有意识地学习",
          use: "用于认证、授权和安全默认值。",
          question: "谁可以做什么？测试如何证明访问规则？",
          caution: "安全复制粘贴很危险。先从明确访问决策开始。",
        },
        {
          name: "spring-boot-starter-webflux",
          category: "later",
          phase: "稍后",
          use: "当非阻塞行为确实是需求时，用于响应式 Web 应用或客户端。",
          question: "我真的需要端到端 reactive 行为吗？",
          caution: "不要因为听起来现代就选择它。混入阻塞代码会抹掉收益。",
        },
        {
          name: "Spring Cloud",
          category: "later",
          phase: "稍后",
          use: "用于配置、网关、服务发现、韧性等分布式系统模式。",
          question: "我是否真的在运营多个服务，并有真实的分布式问题？",
          caution: "在模块化之前上微服务工具，会制造昂贵的混乱。",
        },
        {
          name: "Spring Modulith",
          category: "later",
          phase: "基础之后",
          use: "用于模块化单体结构、模块验证和应用事件。",
          question: "拆服务之前，我能否先在一个部署单元里守住边界？",
          caution: "工具会帮忙，但你仍然需要有意义的模块边界。",
        },
        {
          name: "Spring AI",
          category: "ai",
          phase: "构建 AI 功能时",
          use: "用于集成模型提供方、提示词、向量库和 AI 工作流。",
          question: "AI 是产品的一部分，还是只是我的学习工作流的一部分？",
          caution: "这个静态站点只做提示词式 LLM 帮助。真正的 Spring AI 后端是另一个项目。",
        },
        {
          name: "Lombok",
          category: "ai",
          phase: "谨慎使用",
          use: "在某些代码库里减少 Java 样板代码。",
          question: "这是在隐藏有用学习，还是只是在去除噪音？",
          caution: "对初学者来说，record 和显式构造函数通常更能教清模型。",
        },
        {
          name: "RestTemplate",
          category: "legacy",
          phase: "认识它，不从这里开始",
          use: "存在于旧项目中的同步 HTTP 客户端代码。",
          question: "我是在维护遗留代码，还是在选择新客户端？",
          caution: "看到它时要认得，但新项目应考虑现代客户端。",
        },
        {
          name: "XML configuration",
          category: "legacy",
          phase: "历史背景",
          use: "旧 Spring 应用和企业历史中的配置方式。",
          question: "理解当前 Spring Boot 设计真的需要它吗？",
          caution: "学到能读遗留项目即可，然后回到现代 Boot 实践。",
        },
      ],
      scenarios: [
        {
          id: "modular-learning",
          title: "学习平台模块",
          brief:
            "你需要在一个早期产品里同时处理进度跟踪、练习、审查和公开内容。",
          pressure: "快速迭代，未来规模不清晰，团队很小。",
          decision:
            "从模块化单体开始。把学习内容、进度状态和审查工作流放在不同包或模块里，并用明确契约连接。",
          tradeoffs: [
            ["部署", "一个部署单元能让产品仍在探索形状时保持运维简单。"],
            ["边界", "必须用包和测试边界约束自己，因为网络不会替你隔离。"],
            ["数据", "一个数据库可以接受，但所有权规则和迁移必须清楚。"],
            ["AI 代理", "生成代码前，先给代理模块规则和禁止 import 的清单。"],
          ],
        },
        {
          id: "partner-webhook",
          title: "合作方 webhook 接入",
          brief:
            "外部合作方会推送测评完成事件。事件可能重复、延迟或格式错误。",
          pressure: "可靠性比控制器速度更重要。",
          decision:
            "在持久化代码之前，先设计幂等性、校验、审计日志和重试行为。",
          tradeoffs: [
            ["HTTP 契约", "返回稳定状态码，避免暴露内部处理细节。"],
            ["持久化", "存储外部事件 ID 和处理状态，以安全处理重复事件。"],
            ["可观察性", "加入 accepted、rejected、duplicated 和 failed 事件指标。"],
            ["测试", "用契约测试验证 payload 形状，用集成测试验证幂等性。"],
          ],
        },
        {
          id: "batch-report",
          title: "夜间报表任务",
          brief:
            "管理者想要一份每日学习进度报表，数据来自多张表和一个很慢的外部提供方。",
          pressure: "批处理时长、重试和部分失败可见性。",
          decision:
            "把任务建模成运维工作流。先理解 restart 和 chunking 需求，再决定是否需要 Spring Batch。",
          tradeoffs: [
            ["复杂度", "小报表可能一个定时任务就够；当需要可重启和 chunk 处理时 Spring Batch 更有价值。"],
            ["数据访问", "优先使用匹配报表需求的查询形状，而不是遍历对象图。"],
            ["失败", "记录运行状态、计数和 provider 失败，方便支持。"],
            ["AI 代理", "要求围绕重启和部分失败写测试，而不只是 happy path。"],
          ],
        },
        {
          id: "ai-generated-feature",
          title: "AI 生成特性的审查",
          brief:
            "一个代理打开了 pull request，加入报名、控制器、repository 和测试。",
          pressure: "diff 很大，能编译，看起来很厉害。",
          decision:
            "按架构门禁审查：边界、不变量、测试、配置、可观察性，以及删除意外复杂度。",
          tradeoffs: [
            ["速度", "生成很快，但接受错误边界代价很高。"],
            ["测试", "通过的测试只有在编码了重要失败时才有用。"],
            ["安全", "生成的端点通常需要显式授权审查。"],
            ["可维护性", "偏好更小、可审查的变更；有意义的决策要写 ADR。"],
          ],
        },
      ],
    },
  },
};
