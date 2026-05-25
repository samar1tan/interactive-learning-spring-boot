const DOCS_SNAPSHOT = {
  checkedOn: "2026-05-24",
  currentStable: "4.0.6",
  javaBaseline: "Java 17+",
  note:
    "The official Spring Boot reference listed 4.0.6 as a stable release on the date above. Verify again before making production version choices.",
  links: [
    {
      label: "Spring Boot Reference",
      url: "https://docs.spring.io/spring-boot/reference/index.html",
    },
    {
      label: "System Requirements",
      url: "https://docs.spring.io/spring-boot/system-requirements.html",
    },
    {
      label: "Documentation Overview",
      url: "https://docs.spring.io/spring-boot/documentation.html",
    },
  ],
};

const MODULES = [
  {
    id: "runtime-map",
    number: "01",
    title: "Runtime Map Before Code",
    theme: "See Spring Boot as a runtime graph, not annotation magic.",
    minutes: 40,
    level: "First principles",
    tags: ["ApplicationContext", "Auto-configuration", "Beans"],
    pitch:
      "A rookie asks which annotation to paste. An architect asks what object graph will exist at runtime, why it exists, and how to prove it.",
    architectMove:
      "Every convenience default is a design decision you can inspect, override, or protect with a test.",
    lesson: [
      "Spring Boot is best learned as a bootstrapping system. Your main method starts a SpringApplication, Spring creates an ApplicationContext, auto-configuration reacts to the classpath and properties, and beans become the runtime graph your app actually uses.",
      "Do not memorize starters as shopping items. Learn to ask what each starter adds to the classpath, what auto-configurations become eligible, and what defaults you now rely on.",
      "The most valuable first habit is reading the condition report or Actuator beans endpoint when the app surprises you. That turns framework magic back into evidence.",
    ],
    flow: [
      ["Main", "SpringApplication.run"],
      ["Classpath", "Starters add signals"],
      ["Conditions", "Auto-config matches"],
      ["Beans", "Graph is built"],
      ["Runtime", "Requests use graph"],
    ],
    checkpoints: [
      {
        id: "decode-annotation",
        title: "Decode @SpringBootApplication",
        copy:
          "Explain which concerns it combines and why component scanning scope matters for package structure.",
      },
      {
        id: "classpath-to-beans",
        title: "Trace classpath to beans",
        copy:
          "Pick one starter and describe the chain from dependency to candidate auto-configuration to concrete bean.",
      },
      {
        id: "override-default",
        title: "Override one default deliberately",
        copy:
          "Name one default you would override in a real service and the test or Actuator check that would catch a bad override.",
      },
    ],
    quiz: [
      {
        q: "Why can adding a starter change application behavior before you write business code?",
        choices: [
          "Because starters add dependencies that can satisfy auto-configuration conditions.",
          "Because starters edit your Java source during compilation.",
          "Because Spring Boot always enables every module by default.",
        ],
        answer: 0,
        why:
          "Starters are curated dependencies. Auto-configuration reacts to classes, properties, and missing beans.",
      },
      {
        q: "What is the strongest first debugging move when a bean appears unexpectedly?",
        choices: [
          "Delete dependencies until it disappears.",
          "Inspect condition and bean evidence before changing code.",
          "Move the class into a random package.",
        ],
        answer: 1,
        why:
          "Evidence beats superstition. Condition reports and bean lists reveal why a bean exists.",
      },
    ],
    practice: {
      title: "Map a service before coding",
      minutes: 15,
      scenario:
        "You are asked to build a small internal API for creating training cohorts. A coding agent can generate the CRUD shell, but you must define the runtime shape before generation.",
      deliverable:
        "Write a one-page runtime map with entry point, starters, key beans, defaults you accept, defaults you reject, and one inspection command.",
      constraints: [
        "Do not start with entities or controllers.",
        "Include at least one auto-configuration you expect to appear.",
        "Include one risk that a generated CRUD app would probably miss.",
      ],
      starter:
        "Service goal:\nRuntime entry:\nStarters I would add:\nBeans I expect:\nDefaults I accept:\nDefaults I reject:\nInspection evidence:\nRisk a code generator may miss:",
      mentor:
        "A strong answer names spring-boot-starter-web or webmvc, validation, actuator if visibility matters, and a database starter only after the persistence decision is real. It explains that classpath plus properties produce auto-configured web server, JSON mapper, validation, and MVC infrastructure. It rejects at least one default deliberately, such as broad package scanning, implicit error responses, or unbounded connection pools.",
    },
  },
  {
    id: "web-boundary",
    number: "02",
    title: "HTTP Boundary With Contracts",
    theme: "Build web edges that expose intent, not database tables.",
    minutes: 45,
    level: "API design",
    tags: ["Web MVC", "Validation", "Error contracts"],
    pitch:
      "CRUD is cheap now. Boundary thinking is not. The value is deciding what a client can rely on and what your service refuses to leak.",
    architectMove:
      "Treat controllers as contract adapters. The domain should not become a reflection of whichever JSON shape arrived first.",
    lesson: [
      "Spring Boot makes HTTP endpoints easy, so the learning trap is to confuse ease with design. The controller should translate HTTP into use-case calls, validate input, shape errors, and keep persistence details out of the contract.",
      "Entry-level engineers should practice writing a request and response contract before using an agent to generate code. That one habit prevents an enormous amount of accidental coupling.",
      "Validation is not a decorative annotation pass. It is part of the public promise: what gets rejected, how it is explained, and which invalid states never reach the service layer.",
    ],
    flow: [
      ["Client", "Request contract"],
      ["Controller", "HTTP adapter"],
      ["Validator", "Reject bad state"],
      ["Use case", "Business rule"],
      ["Response", "Stable shape"],
    ],
    checkpoints: [
      {
        id: "dto-boundary",
        title: "Separate DTOs from entities",
        copy:
          "Describe one bug that appears when persistence entities are exposed directly as API bodies.",
      },
      {
        id: "error-shape",
        title: "Define error shape",
        copy:
          "Draft a validation error response that a front end or partner API can parse reliably.",
      },
      {
        id: "contract-test",
        title: "Protect the boundary",
        copy:
          "Choose a Web MVC test that proves status code, content type, and one validation failure.",
      },
    ],
    quiz: [
      {
        q: "Why should a controller avoid returning JPA entities directly?",
        choices: [
          "Because JSON serialization cannot handle objects.",
          "Because it couples API shape to persistence shape and can leak fields or lazy loading behavior.",
          "Because Spring Boot requires records for every response.",
        ],
        answer: 1,
        why:
          "The problem is architectural coupling and runtime surprises, not Java object serialization itself.",
      },
      {
        q: "Where should a request DTO usually be validated?",
        choices: [
          "At the HTTP boundary before the use case accepts it.",
          "Only after the database rejects it.",
          "Only in the front end.",
        ],
        answer: 0,
        why:
          "Boundary validation keeps invalid states away from core use cases and creates predictable client feedback.",
      },
    ],
    practice: {
      title: "Design a non-CRUD endpoint",
      minutes: 20,
      scenario:
        "A team needs an endpoint that schedules a learner for a practice cohort. The naive CRUD design would expose CohortEnrollment as a table-shaped resource.",
      deliverable:
        "Design the endpoint contract, validation failures, and controller responsibilities before code generation.",
      constraints: [
        "Use a verb that matches the business action, not the table name.",
        "Include two validation failures and one conflict failure.",
        "Name the use-case method the controller should call.",
      ],
      starter:
        "Endpoint:\nRequest body:\nSuccess response:\nValidation failures:\nConflict failure:\nController responsibilities:\nUse-case method:\nWhat not to expose:",
      mentor:
        "A strong answer uses an action-centered route such as POST /cohorts/{cohortId}/enrollments or POST /enrollment-requests, validates learner identity and capacity rules, returns a stable response DTO, and keeps entity fields like internal IDs, timestamps, or lazy relationships out of the public contract.",
    },
  },
  {
    id: "configuration",
    number: "03",
    title: "Configuration As Runtime Policy",
    theme: "Profiles and properties decide behavior, so treat them like code.",
    minutes: 35,
    level: "Operations aware",
    tags: ["Properties", "Profiles", "Secrets"],
    pitch:
      "The fastest way to ship a broken Spring Boot service is to make configuration invisible until deployment day.",
    architectMove:
      "Move from scattered string properties to typed, validated, environment-aware policy.",
    lesson: [
      "Externalized configuration is one of Spring Boot's superpowers. It also creates hidden behavior if you never model it. Learn property precedence, profile activation, and typed configuration early.",
      "A profile should select environment-specific wiring, not become a bag of random feature flags. Properties should be named by the decision they control, not by the class that happens to read them today.",
      "Secrets do not belong in GitHub Pages examples, repositories, or screenshots. A learning app should teach placeholders and environment variables before it teaches convenience.",
    ],
    flow: [
      ["Property", "Decision name"],
      ["Binding", "@ConfigurationProperties"],
      ["Validation", "Fail fast"],
      ["Profile", "Environment policy"],
      ["Runtime", "Observable config"],
    ],
    checkpoints: [
      {
        id: "typed-config",
        title: "Use typed configuration",
        copy:
          "Write a small configuration properties class name and two fields it would own.",
      },
      {
        id: "profile-purpose",
        title: "Separate profiles from flags",
        copy:
          "Explain when you would use a profile and when you would use a plain property.",
      },
      {
        id: "secret-handling",
        title: "Keep secrets out",
        copy:
          "Name the local, CI, and production places a secret should come from.",
      },
    ],
    quiz: [
      {
        q: "What is a good reason to prefer typed configuration properties?",
        choices: [
          "They make runtime policy discoverable and can be validated at startup.",
          "They remove the need for documentation forever.",
          "They force every value to be a string.",
        ],
        answer: 0,
        why:
          "Typed, validated properties make configuration visible and fail early when required values are missing or malformed.",
      },
      {
        q: "Which is the healthier use of a profile?",
        choices: [
          "Turning random features on and off by personal preference.",
          "Selecting environment-specific behavior such as local test infrastructure.",
          "Hiding compile errors in production.",
        ],
        answer: 1,
        why:
          "Profiles are best for environment-specific wiring. Feature behavior usually deserves explicit properties or feature management.",
      },
    ],
    practice: {
      title: "Make config reviewable",
      minutes: 15,
      scenario:
        "A generated service connects to an external assessment provider. The first draft hardcodes timeout values and a fake token in application.yml.",
      deliverable:
        "Design the configuration surface and failure behavior.",
      constraints: [
        "Use typed configuration properties.",
        "Include validation for at least two fields.",
        "Describe local development without committing a real secret.",
      ],
      starter:
        "Configuration class:\nProperty prefix:\nFields and validation:\nDefault values:\nLocal dev source:\nCI source:\nProduction source:\nStartup failure I want:",
      mentor:
        "A strong answer creates a provider-specific configuration class such as AssessmentProviderProperties with url, apiToken, connectTimeout, and readTimeout. It validates required values and positive durations, keeps tokens in environment variables or secret stores, and fails startup when the provider is enabled but credentials are absent.",
    },
  },
  {
    id: "persistence",
    number: "04",
    title: "Persistence Boundaries",
    theme: "Use data tools after choosing consistency, ownership, and migrations.",
    minutes: 50,
    level: "Data judgment",
    tags: ["JPA", "Transactions", "Migrations"],
    pitch:
      "AI can produce repositories instantly. It cannot decide which invariants must be transactionally protected unless you tell it.",
    architectMove:
      "Start with invariants and data lifecycle, then choose JPA, JDBC, Redis, events, or a simpler file-backed prototype.",
    lesson: [
      "Spring Boot data starters are powerful, but they are not a substitute for a persistence design. Before entities, name the aggregate or data owner, the transaction boundary, and the migration strategy.",
      "A repository is not automatically a domain boundary. It can become a leak from persistence into every service if queries, lazy relationships, and entity mutations spread unchecked.",
      "Migrations are learning material, not production trivia. They force you to think about irreversible changes, deploy order, and how old data survives new code.",
    ],
    flow: [
      ["Invariant", "What must stay true"],
      ["Boundary", "Transaction scope"],
      ["Model", "Entity or query shape"],
      ["Migration", "Schema history"],
      ["Proof", "Data test"],
    ],
    checkpoints: [
      {
        id: "transaction-boundary",
        title: "Name the transaction boundary",
        copy:
          "Pick one business action and state what data changes must commit or roll back together.",
      },
      {
        id: "migration-first",
        title: "Draft a migration",
        copy:
          "Write the table or index change before sketching the repository method.",
      },
      {
        id: "query-risk",
        title: "Spot query risk",
        copy:
          "Identify one N+1, pagination, or locking risk in a generated repository design.",
      },
    ],
    quiz: [
      {
        q: "What should usually come before generating JPA entities?",
        choices: [
          "A decision about invariants, ownership, and transaction boundaries.",
          "A random table for every noun in the product brief.",
          "A controller method for every database operation.",
        ],
        answer: 0,
        why:
          "Persistence exists to protect the behavior you need, not merely to mirror nouns.",
      },
      {
        q: "Why teach migrations early?",
        choices: [
          "Because migrations make schema changes explicit, reviewable, and deployable.",
          "Because they replace tests.",
          "Because JPA cannot create tables in development.",
        ],
        answer: 0,
        why:
          "Even when dev auto-ddl is available, real systems need explicit schema history.",
      },
    ],
    practice: {
      title: "Protect an invariant",
      minutes: 25,
      scenario:
        "A cohort has a maximum capacity. Two learners try to enroll at the same time. A generated CRUD service checks count then inserts.",
      deliverable:
        "Design a persistence approach that protects capacity under concurrency.",
      constraints: [
        "Name the transaction boundary.",
        "Choose one locking or constraint strategy.",
        "Include one test that would fail against naive CRUD.",
      ],
      starter:
        "Invariant:\nTransaction boundary:\nData model sketch:\nMigration or constraint:\nConcurrency strategy:\nRepository shape:\nTest that proves it:",
      mentor:
        "A strong answer treats enrollment as a use case, not plain insert. It may use a unique constraint for learner/cohort, a capacity check within a transaction, optimistic locking on cohort version, pessimistic lock for the cohort row, or a database constraint strategy. The test should simulate concurrent enrollments and prove the capacity rule holds.",
    },
  },
  {
    id: "testing-observability",
    number: "05",
    title: "Tests And Observability",
    theme: "Prove behavior locally, then make production behavior visible.",
    minutes: 45,
    level: "Feedback loops",
    tags: ["Test slices", "Actuator", "Metrics"],
    pitch:
      "In the AI era, tests are not ceremony. They are how you turn generated code into a system you can trust.",
    architectMove:
      "Design the feedback loop first: fast local tests, realistic integration tests, and runtime signals that answer operational questions.",
    lesson: [
      "Spring Boot testing is broad because applications are broad. Learn the difference between a plain unit test, a web slice, a data slice, and a full application integration test.",
      "Actuator is not something to bolt on after production breaks. Health, metrics, info, loggers, and traces should appear in your first architecture sketch.",
      "Observability is a design habit: what question will an on-call engineer ask, and which signal will answer it quickly?",
    ],
    flow: [
      ["Question", "What can break"],
      ["Test", "Fast proof"],
      ["Container", "Real dependency"],
      ["Actuator", "Runtime evidence"],
      ["Metric", "Operational question"],
    ],
    checkpoints: [
      {
        id: "test-slice",
        title: "Choose the smallest useful test",
        copy:
          "Map one behavior to unit, web slice, data slice, or full integration test.",
      },
      {
        id: "runtime-question",
        title: "Ask an operations question",
        copy:
          "Write a production question and name the metric, health indicator, or log that answers it.",
      },
      {
        id: "generated-code-review",
        title: "Review generated code with tests",
        copy:
          "Name one test you would demand before accepting an AI-generated service class.",
      },
    ],
    quiz: [
      {
        q: "Why not make every test a full Spring Boot integration test?",
        choices: [
          "Because full context tests are slower and can hide which layer actually failed.",
          "Because Spring Boot does not support integration tests.",
          "Because unit tests are always enough.",
        ],
        answer: 0,
        why:
          "Use the smallest test that gives meaningful confidence, then add fuller tests where wiring matters.",
      },
      {
        q: "What is Actuator mainly for?",
        choices: [
          "Generating controllers.",
          "Exposing production-ready operational information such as health, metrics, and management endpoints.",
          "Replacing application logs.",
        ],
        answer: 1,
        why:
          "Actuator exposes runtime management and observability features; it complements logs and tracing.",
      },
    ],
    practice: {
      title: "Design a feedback loop",
      minutes: 20,
      scenario:
        "An agent generated an enrollment service and controller. It compiles, but you do not know whether it handles validation, capacity conflicts, or production visibility.",
      deliverable:
        "Write a test and observability checklist for accepting the generated change.",
      constraints: [
        "Include one fast test and one wiring/integration test.",
        "Include one Actuator or metric signal.",
        "Include one failure mode that should be observable in logs or traces.",
      ],
      starter:
        "Fast test:\nWeb or data slice:\nIntegration test:\nMetric or health signal:\nLog or trace field:\nAcceptance gate for AI-generated code:",
      mentor:
        "A strong answer uses a service unit test for capacity rules, a Web MVC test for validation and error shape, and a data integration test for persistence behavior. It adds Actuator health for dependencies, a counter or timer for enrollment attempts, and structured logs or traces around rejected enrollments.",
    },
  },
  {
    id: "ai-era-architecture",
    number: "06",
    title: "AI-Era Spring Architecture",
    theme: "Let agents write boilerplate while you own decisions and boundaries.",
    minutes: 50,
    level: "Architect habits",
    tags: ["ADR", "Modularity", "Code review"],
    pitch:
      "The new baseline is not typing controllers faster. It is giving machines better architectural constraints and reviewing what they generate.",
    architectMove:
      "Convert vague feature requests into boundaries, acceptance tests, risk lists, and prompts that force trade-off thinking.",
    lesson: [
      "Coding agents make CRUD demos less educational because the hard part moved. Your practice should focus on problem framing, dependency choice, boundaries, tests, and production risk.",
      "A good Spring Boot prompt includes domain intent, constraints, package boundaries, test expectations, operational requirements, and what not to generate.",
      "Architectural decision records are lightweight learning artifacts. They make you state why Spring MVC instead of WebFlux, JPA instead of JDBC, modular monolith instead of microservices, or synchronous HTTP instead of messaging.",
    ],
    flow: [
      ["Brief", "Clarify outcome"],
      ["Boundary", "Keep modules honest"],
      ["Prompt", "Constrain agent"],
      ["Review", "Find risks"],
      ["ADR", "Record decision"],
    ],
    checkpoints: [
      {
        id: "prompt-contract",
        title: "Prompt with constraints",
        copy:
          "Write one agent prompt that includes package boundaries, tests, and forbidden shortcuts.",
      },
      {
        id: "adr-habit",
        title: "Create a mini ADR",
        copy:
          "Write context, decision, consequences, and rejected alternatives for one Spring Boot choice.",
      },
      {
        id: "review-generated-code",
        title: "Review like an owner",
        copy:
          "List three risks you check before accepting generated Spring Boot code.",
      },
    ],
    quiz: [
      {
        q: "What is the most useful thing to give a coding agent for Spring Boot work?",
        choices: [
          "Only a class name.",
          "Clear boundaries, acceptance tests, constraints, and operational expectations.",
          "A request to generate as much code as possible.",
        ],
        answer: 1,
        why:
          "Agents are more useful when you define the shape of a good solution, not just the syntax.",
      },
      {
        q: "Why write a small ADR while learning?",
        choices: [
          "It forces you to explain trade-offs and makes future review easier.",
          "It replaces all code comments.",
          "It is required by Spring Boot to start.",
        ],
        answer: 0,
        why:
          "The discipline of making decisions explicit is the point.",
      },
    ],
    practice: {
      title: "Turn a vague ticket into an agent-ready brief",
      minutes: 25,
      scenario:
        "Ticket: 'Add progress tracking to the learning platform.' A weak prompt asks an agent to add CRUD for progress records.",
      deliverable:
        "Write an agent-ready brief that teaches boundaries, tests, acceptance criteria, and non-goals.",
      constraints: [
        "Include one ADR-style decision.",
        "Include what the agent must not do.",
        "Include acceptance tests before implementation tasks.",
      ],
      starter:
        "Outcome:\nBoundary:\nData ownership:\nAcceptance tests:\nOperational signal:\nNon-goals:\nAgent implementation prompt:\nMini ADR:",
      mentor:
        "A strong answer defines progress as learning-state behavior, not raw CRUD. It specifies local or server persistence, testable completion rules, idempotency, privacy boundaries, and clear non-goals such as not adding authentication yet. It asks the agent to implement against tests and produce a review summary.",
    },
  },
];

const DEPENDENCIES = [
  {
    name: "spring-boot-starter-web",
    category: "core",
    phase: "Learn now",
    use: "Servlet web apps with Spring MVC, JSON, validation integration, and embedded server defaults.",
    question:
      "Do I need a request-response HTTP boundary, and what contract must stay stable?",
    caution:
      "Do not expose persistence entities just because the starter makes controllers easy.",
  },
  {
    name: "spring-boot-starter-validation",
    category: "core",
    phase: "Learn now",
    use: "Boundary and configuration validation.",
    question: "Which invalid states should never reach my service layer?",
    caution:
      "Annotations are not the whole policy. Design the error response too.",
  },
  {
    name: "spring-boot-starter-actuator",
    category: "core",
    phase: "Learn now",
    use: "Health, metrics, info, runtime management, and visibility into production behavior.",
    question: "What would I need to know at 2:00 AM when this service misbehaves?",
    caution:
      "Expose endpoints deliberately. Visibility and security must be designed together.",
  },
  {
    name: "spring-boot-starter-data-jpa",
    category: "core",
    phase: "After data design",
    use: "ORM-backed persistence when entity lifecycle and transaction boundaries fit the problem.",
    question: "Which aggregate or invariant am I protecting?",
    caution:
      "Watch lazy loading, N+1 queries, entity leakage, and transaction sprawl.",
  },
  {
    name: "Flyway or Liquibase",
    category: "core",
    phase: "With first real database",
    use: "Reviewable schema migration history.",
    question: "How will this schema change roll forward in every environment?",
    caution:
      "Development auto-ddl can teach bad instincts if it hides migration design.",
  },
  {
    name: "spring-boot-starter-test",
    category: "core",
    phase: "Always",
    use: "Testing support for unit, slice, and full Spring Boot tests.",
    question: "What is the smallest test that proves this behavior?",
    caution:
      "A full context test for everything will slow feedback and blur failure causes.",
  },
  {
    name: "Testcontainers",
    category: "core",
    phase: "Soon",
    use: "Integration tests against realistic infrastructure such as databases or brokers.",
    question: "Which behavior depends on the real dependency and not a mock?",
    caution:
      "Use it for important wiring and persistence behavior, not every tiny rule.",
  },
  {
    name: "spring-boot-starter-security",
    category: "core",
    phase: "Learn deliberately",
    use: "Authentication, authorization, and secure defaults.",
    question: "Who can do what, and how will tests prove access rules?",
    caution:
      "Security copy-paste is dangerous. Start with explicit access decisions.",
  },
  {
    name: "spring-boot-starter-webflux",
    category: "later",
    phase: "Later",
    use: "Reactive web applications or clients where non-blocking behavior is a real requirement.",
    question: "Do I truly need reactive end-to-end behavior?",
    caution:
      "Do not choose it because it sounds modern. Mixing blocking code can erase the benefit.",
  },
  {
    name: "Spring Cloud",
    category: "later",
    phase: "Later",
    use: "Distributed system patterns such as config, gateway, discovery, and resilience.",
    question: "Am I operating multiple services with real distributed concerns?",
    caution:
      "Microservice tools before modularity can create expensive confusion.",
  },
  {
    name: "Spring Modulith",
    category: "later",
    phase: "After basics",
    use: "Modular monolith structure, module verification, and application events.",
    question: "Can I keep boundaries inside one deployable before splitting services?",
    caution:
      "The tool helps, but you still need meaningful module boundaries.",
  },
  {
    name: "Spring AI",
    category: "ai",
    phase: "When building AI features",
    use: "Application integration with model providers, prompts, vector stores, and AI workflows.",
    question: "Is AI part of the product, or only part of my learning workflow?",
    caution:
      "For this static site, LLM help is prompt-based. A real Spring AI backend is a separate project.",
  },
  {
    name: "Lombok",
    category: "ai",
    phase: "Use carefully",
    use: "Reduces Java boilerplate in some codebases.",
    question: "Is this hiding useful learning or just removing noise?",
    caution:
      "For beginners, records and explicit constructors often teach the model better.",
  },
  {
    name: "RestTemplate",
    category: "legacy",
    phase: "Recognize, do not start here",
    use: "Older synchronous HTTP client code in existing projects.",
    question: "Am I maintaining legacy code or choosing a new client?",
    caution:
      "Know it when you see it, but consider modern clients for new work.",
  },
  {
    name: "XML configuration",
    category: "legacy",
    phase: "Historical context",
    use: "Older Spring applications and enterprise history.",
    question: "Do I need this to understand current Spring Boot design?",
    caution:
      "Learn enough to read legacy projects, then return to modern Boot practices.",
  },
];

const SCENARIOS = [
  {
    id: "modular-learning",
    title: "Learning platform module",
    brief:
      "You need progress tracking, exercises, reviews, and public content in one early-stage product.",
    pressure: "Fast iteration, unclear future scale, one small team.",
    decision:
      "Start as a modular monolith. Keep learning content, progress state, and review workflows in separate packages or modules with explicit contracts.",
    tradeoffs: [
      ["Deployment", "One deployable keeps operations simple while the product is still searching for shape."],
      ["Boundary", "Package and test boundaries must be enforced because the network will not protect you."],
      ["Data", "One database can be acceptable if ownership rules and migrations stay clear."],
      ["AI agents", "Give agents module rules and forbidden imports before code generation."],
    ],
  },
  {
    id: "partner-webhook",
    title: "Partner webhook intake",
    brief:
      "External partners post assessment completion events. Events may be duplicated, delayed, or malformed.",
    pressure: "Reliability matters more than controller speed.",
    decision:
      "Design idempotency, validation, audit logging, and retry behavior before persistence code.",
    tradeoffs: [
      ["HTTP contract", "Return stable statuses and avoid revealing internal processing details."],
      ["Persistence", "Store external event IDs and processing state to handle duplicates safely."],
      ["Observability", "Add metrics for accepted, rejected, duplicated, and failed events."],
      ["Testing", "Use contract tests for payload shape and integration tests for idempotency."],
    ],
  },
  {
    id: "batch-report",
    title: "Nightly report job",
    brief:
      "Managers want a daily learning progress report from multiple tables and a slow external provider.",
    pressure: "Batch duration, retries, and partial failure visibility.",
    decision:
      "Model the job as operational workflow. Decide whether Spring Batch is warranted after understanding restart and chunking needs.",
    tradeoffs: [
      ["Complexity", "A scheduled task may be enough for a tiny report; Spring Batch helps when restartability and chunk processing matter."],
      ["Data access", "Prefer query shapes that match reporting needs instead of walking object graphs."],
      ["Failure", "Record run status, counts, and provider failures for support."],
      ["AI agents", "Ask for tests around restart and partial failure, not just the happy path."],
    ],
  },
  {
    id: "ai-generated-feature",
    title: "AI-generated feature review",
    brief:
      "An agent opened a pull request adding enrollments, controllers, repositories, and tests.",
    pressure: "The diff is large, compiles, and looks impressive.",
    decision:
      "Review against architecture gates: boundaries, invariants, tests, configuration, observability, and deletion of accidental complexity.",
    tradeoffs: [
      ["Speed", "Generation is fast, but accepting the wrong boundary is expensive."],
      ["Tests", "Passing tests are only useful if they encode the important failures."],
      ["Security", "Generated endpoints often need explicit authorization review."],
      ["Maintainability", "Prefer smaller, reviewable changes with an ADR when decisions are meaningful."],
    ],
  },
];

const UI_EN = {
  metaTitle: "Spring Boot Architect Gym",
  metaDescription:
    "An interactive Spring Boot learning gym for entry-level Java engineers who want hands-on practice and architecture judgment in the AI coding era.",
  brandAria: "Spring Boot Architect Gym",
  brandEyebrow: "Interactive Spring Boot learning",
  brandTitle: "Architect Gym",
  languageAria: "Language",
  searchLabel: "Search lessons and dependencies",
  searchPlaceholder: "Search boot, test, config...",
  resetProgress: "Reset",
  exportPlan: "Copy Plan",
  curriculumAria: "Curriculum",
  progressLabel: "Practice progress",
  progressCopy: "{done} of {total} checkpoints complete",
  tracksEyebrow: "Guided route",
  tracksTitle: "Follow the path",
  nextStepEyebrow: "Next step",
  nextStepTitle: "Your clearest move",
  nextStepCheckpoint: "Checkpoint",
  nextStepNextModule: "Next module",
  pathGuideAria: "Guided learning path",
  guidanceEyebrow: "Guided path",
  guidanceTitle: "Learn Spring Boot in a clear order",
  guidanceCopy:
    "Work the same loop in every module: build the mental model, prove one checkpoint, run the drill, then ask the coach to review your assumptions.",
  focusNow: "Focus now",
  pathStatusComplete: "Done",
  pathStatusCurrent: "Now",
  pathStatusReady: "Next",
  pathStatusOpen: "Open",
  pathProgress: "{done}/{total}",
  guideStepModelTitle: "Model first",
  guideStepModelCopy: "Read the mental model and runtime map before touching code.",
  guideStepCheckpointTitle: "Prove it",
  guideStepCheckpointCopy: "Complete the next checkpoint in your own words.",
  guideStepPracticeTitle: "Practice and review",
  guideStepPracticeCopy: "Draft the drill, score it, then ask the coach to challenge weak assumptions.",
  moduleCompleteTitle: "Module checkpoints complete",
  moduleCompleteCopy: "Run the practice drill or jump to the next unfinished module.",
  pathCompleteTitle: "Path complete",
  pathCompleteCopy: "Every checkpoint is complete. Use the lab and coach to turn the path into portfolio-grade decisions.",
  startCheckpoint: "Start checkpoint",
  openPractice: "Open practice",
  openLab: "Open lab",
  continueModule: "Continue module",
  learningViewsAria: "Learning views",
  tabLearn: "Learn",
  tabPractice: "Practice",
  tabRadar: "Radar",
  tabLab: "Lab",
  versionNote: "Spring Boot docs checked 2026-05-24",
  coachAria: "LLM coach",
  coachEyebrow: "LLM help",
  coachTitle: "Coach, not autopilot",
  coachModeAria: "Coach mode",
  modeSocratic: "Hint",
  modeReview: "Review",
  modePair: "Pair",
  coachPromptAria: "Generated LLM prompt",
  copyPrompt: "Copy Prompt",
  shuffleDrill: "New Drill",
  currentDrillEyebrow: "Current drill",
  emptyDrillTitle: "Choose a module",
  timerStart: "Start",
  timerPause: "Pause",
  complete: "Complete",
  incomplete: "Incomplete",
  doneMark: "OK",
  checks: "checks",
  min: "min",
  noModuleMatches: "No modules match the current search.",
  track: "Track",
  architectMove: "Architect move:",
  runtimeMapAria: "Runtime concept map",
  snapshot: "Snapshot",
  currentBaseline: "Current baseline",
  stableDocs: "Stable docs",
  javaBaseline: "Java baseline",
  mentalModel: "Mental model",
  understandBeforeTyping: "What to understand before typing",
  handsDirty: "Hands dirty",
  checkpointChecklist: "Checkpoint checklist",
  quickQuiz: "Quick quiz",
  checkInstinct: "Check the instinct",
  minuteSession: "{minutes} minute session",
  scenario: "Scenario",
  deliverable: "Deliverable",
  constraints: "Constraints",
  scratchpad: "Your scratchpad",
  selfScore: "Self score",
  selfScoreAria: "Self score",
  copyDrill: "Copy Drill",
  hideReview: "Hide Review",
  revealReview: "Reveal Review",
  mentorReview: "Mentor review:",
  all: "All",
  learnNow: "Learn now",
  later: "Later",
  aiEra: "AI era",
  history: "History",
  dependencyRadar: "Dependency radar",
  dependencyRadarSubtitle: "What to learn, what to postpone, what to only recognize",
  dependencyFiltersAria: "Dependency filters",
  noDependencyMatches: "No dependencies match the current filters.",
  architectQuestion: "Architect question:",
  watch: "Watch:",
  categoryCore: "core",
  categoryLater: "later",
  categoryAi: "ai",
  categoryLegacy: "legacy",
  architectureLab: "Architecture lab",
  choosePressureTest: "Choose a pressure test",
  decisionBoard: "Decision board",
  recommendedFirstDecision: "Recommended first decision:",
  adrDrill: "ADR drill",
  adrDrillCopy:
    "Write context, decision, consequences, and rejected alternatives. Then ask the LLM coach for review mode and make it challenge your weakest assumption.",
  copied: "Copied.",
  practiceCopied: "Practice drill copied.",
  promptCopied: "Coach prompt copied.",
  planCopied: "Learning plan copied.",
  resetConfirm: "Reset local progress and notes for this browser?",
  practiceCopyModule: "Module:",
  practiceCopyTimebox: "Timebox: {minutes} minutes",
  practiceCopyScenario: "## Scenario",
  practiceCopyDeliverable: "## Deliverable",
  practiceCopyConstraints: "## Constraints",
  practiceCopyStarter: "## Starter",
  planTitle: "# Spring Boot Architect Gym Plan",
  planProgress: "Progress: {done}/{total} checkpoints",
  planCurrentModule: "Current module: {title}",
  planNextCheckpoint: "Next checkpoint: {title}",
  planPracticeDrill: "Practice drill: {title}",
  planTrackStatus: "## Track status",
  planNext30: "## Next 30 minutes",
  planStep1: "1. Review the current module mental model.",
  planStep2: "2. Complete checkpoint: {title}.",
  planStep3: "3. Run the drill: {title}.",
  planStep4: "4. Paste the coach prompt into your LLM and ask for review.",
  planCoachPrompt: "## Coach prompt",
  coachPromptShared: [
    "You are my Spring Boot learning coach.",
    "Audience: entry-level Java engineer learning to think like an architect in the AI coding era.",
    "Module: {moduleTitle}",
    "Mental model: {moduleTheme}",
    "Practice scenario: {practiceScenario}",
    "Deliverable: {practiceDeliverable}",
    "Constraints: {practiceConstraints}",
    "Docs snapshot: Spring Boot {springVersion}, checked {checkedOn}. Ask me to verify official docs before production version choices.",
  ],
  coachPromptModes: {
    socratic: [
      "Mode: Socratic hint.",
      "Do not give me the full answer first.",
      "Ask one focused question at a time.",
      "If I am stuck, give a small hint and one concrete next action.",
      "Keep me responsible for the architecture decision.",
    ],
    review: [
      "Mode: senior code/design review.",
      "Find missing boundaries, weak tests, unsafe defaults, unclear configuration, and production risks.",
      "Return findings first, ordered by severity.",
      "Suggest one small improvement I can apply in 15 minutes.",
    ],
    pair: [
      "Mode: pair programmer.",
      "Work in short steps.",
      "Before showing code, ask me to predict the next design move.",
      "When code appears, keep it minimal and explain which architectural decision it expresses.",
    ],
  },
  coachPromptScratchpad: "My current scratchpad:",
  coachPromptEmptyScratchpad: "My current scratchpad is empty. Start by helping me frame the work.",
};

const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = window.I18N?.languages || [
  { code: "en", label: "EN", name: "English" },
];
const STORE_KEY = "spring-boot-architect-gym-state-v1";

const defaultState = {
  language: detectLanguage(),
  selectedModule: MODULES[0].id,
  activeView: "learn",
  coachMode: "socratic",
  dependencyFilter: "all",
  selectedScenario: SCENARIOS[0].id,
  completed: {},
  notes: {},
  scores: {},
  quiz: {},
  mentorVisible: {},
  search: "",
  timerSeconds: MODULES[0].practice.minutes * 60,
};

let state = loadState();
let timerId = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function detectLanguage() {
  const browserLanguage = navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE;
  return browserLanguage.toLowerCase().startsWith("zh") ? "zh-CN" : DEFAULT_LANGUAGE;
}

function activeLanguage() {
  const code = state?.language || DEFAULT_LANGUAGE;
  return SUPPORTED_LANGUAGES.some((language) => language.code === code) ? code : DEFAULT_LANGUAGE;
}

function uiText() {
  return {
    ...UI_EN,
    ...(window.I18N?.ui?.[activeLanguage()] || {}),
  };
}

function interpolate(value, replacements = {}) {
  return String(value).replace(/\{(\w+)\}/g, (_, key) => replacements[key] ?? "");
}

function t(key, replacements = {}) {
  return interpolate(uiText()[key] || UI_EN[key] || key, replacements);
}

function localizedContent() {
  const content = window.I18N?.content?.[activeLanguage()] || {};
  return {
    docs: content.docs || DOCS_SNAPSHOT,
    modules: content.modules || MODULES,
    dependencies: content.dependencies || DEPENDENCIES,
    scenarios: content.scenarios || SCENARIOS,
  };
}

function docsSnapshot() {
  return localizedContent().docs;
}

function modules() {
  return localizedContent().modules;
}

function dependencies() {
  return localizedContent().dependencies;
}

function scenarios() {
  return localizedContent().scenarios;
}

function englishModuleById(moduleId) {
  return MODULES.find((module) => module.id === moduleId);
}

function englishDependencyByName(name) {
  return DEPENDENCIES.find((dependency) => dependency.name === name);
}

function categoryLabel(category) {
  const keys = {
    core: "categoryCore",
    later: "categoryLater",
    ai: "categoryAi",
    legacy: "categoryLegacy",
  };
  return t(keys[category] || category);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return { ...defaultState };
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function selectedModule() {
  return modules().find((module) => module.id === state.selectedModule) || modules()[0];
}

function selectedScenario() {
  return scenarios().find((scenario) => scenario.id === state.selectedScenario) || scenarios()[0];
}

function normalize(text) {
  return text.toLowerCase().trim();
}

function matchesSearch(text) {
  const term = normalize(state.search || "");
  if (!term) return true;
  return normalize(text).includes(term);
}

function moduleSearchText(module) {
  const englishModule = englishModuleById(module.id);
  return [
    module.title,
    module.theme,
    module.pitch,
    module.tags.join(" "),
    module.lesson.join(" "),
    module.practice.title,
    module.practice.scenario,
    englishModule?.title,
    englishModule?.theme,
    englishModule?.tags.join(" "),
  ].join(" ");
}

function dependencySearchText(item) {
  const englishDependency = englishDependencyByName(item.name);
  return [
    item.name,
    item.phase,
    item.use,
    item.question,
    item.caution,
    item.category,
    englishDependency?.phase,
    englishDependency?.use,
    englishDependency?.question,
  ].join(" ");
}

function completedSet(moduleId) {
  return new Set(state.completed[moduleId] || []);
}

function totalCheckpointCount() {
  return modules().reduce((sum, module) => sum + module.checkpoints.length, 0);
}

function completedCheckpointCount() {
  return modules().reduce((sum, module) => sum + completedSet(module.id).size, 0);
}

function isModuleComplete(module) {
  return completedSet(module.id).size === module.checkpoints.length;
}

function moduleProgress(module) {
  const done = completedSet(module.id).size;
  const total = module.checkpoints.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const nextCheckpoint = module.checkpoints.find((item) => !completedSet(module.id).has(item.id));
  return {
    done,
    total,
    percent,
    complete: total > 0 && done === total,
    nextCheckpoint,
  };
}

function nextIncompleteModule() {
  return modules().find((module) => !moduleProgress(module).complete);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  renderStaticTranslations();
  renderTopControls();
  renderProgress();
  renderGuidancePanel();
  renderModuleList();
  renderTabs();
  renderLearnView();
  renderPracticeView();
  renderRadarView();
  renderLabView();
  renderCoach();
  renderTimer();
}

function renderStaticTranslations() {
  document.documentElement.lang = activeLanguage();
  document.title = t("metaTitle");
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", t("metaDescription"));

  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  $$("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}

function renderTopControls() {
  const search = $("#global-search");
  if (search && search.value !== state.search) {
    search.value = state.search || "";
  }

  $$(".language-button").forEach((button) => {
    const isActive = button.dataset.language === activeLanguage();
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderProgress() {
  const total = totalCheckpointCount();
  const done = completedCheckpointCount();
  const percent = total ? Math.round((done / total) * 100) : 0;
  $("#progress-ring").style.setProperty("--progress", `${Math.round((percent / 100) * 360)}deg`);
  $("#progress-number").textContent = `${percent}%`;
  $("#progress-copy").textContent = t("progressCopy", { done, total });
}

function renderGuidancePanel() {
  const panel = $("#next-step-panel");
  const module = selectedModule();
  const progress = moduleProgress(module);
  const nextModule = nextIncompleteModule();
  const allComplete = !nextModule;
  let label = t("nextStepCheckpoint");
  let title = progress.nextCheckpoint?.title || t("moduleCompleteTitle");
  let copy = progress.nextCheckpoint?.copy || t("moduleCompleteCopy");
  let action = `<button class="primary-button full-width" type="button" data-scroll-checkpoints>${escapeHtml(t("startCheckpoint"))}</button>`;

  if (progress.complete && nextModule && nextModule.id !== module.id) {
    label = t("nextStepNextModule");
    title = nextModule.title;
    copy = nextModule.theme;
    action = `<button class="primary-button full-width" type="button" data-module="${nextModule.id}">${escapeHtml(t("continueModule"))}</button>`;
  } else if (allComplete) {
    label = t("pathCompleteTitle");
    title = t("pathCompleteTitle");
    copy = t("pathCompleteCopy");
    action = `<button class="primary-button full-width" type="button" data-view="lab">${escapeHtml(t("openLab"))}</button>`;
  }

  panel.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">${escapeHtml(t("nextStepEyebrow"))}</p>
      <h2>${escapeHtml(t("nextStepTitle"))}</h2>
    </div>
    <div class="next-step-meta">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(t("pathProgress", { done: progress.done, total: progress.total }))}</strong>
    </div>
    <h3>${escapeHtml(title)}</h3>
    <p class="muted-copy">${escapeHtml(copy)}</p>
    <div class="rail-progress" aria-hidden="true">
      <span style="width: ${progress.percent}%"></span>
    </div>
    ${action}
  `;
}

function renderModuleList() {
  const list = $("#module-list");
  const moduleList = modules();
  const firstOpenIndex = moduleList.findIndex((module) => !moduleProgress(module).complete);
  const filtered = moduleList.filter((module) => matchesSearch(moduleSearchText(module)));

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">${escapeHtml(t("noModuleMatches"))}</div>`;
    return;
  }

  list.innerHTML = filtered
    .map((module) => {
      const progress = moduleProgress(module);
      const index = moduleList.findIndex((item) => item.id === module.id);
      const statusKey = progress.complete
        ? "pathStatusComplete"
        : module.id === state.selectedModule
          ? "pathStatusCurrent"
          : index === firstOpenIndex
            ? "pathStatusReady"
            : "pathStatusOpen";
      return `
        <button class="module-button ${module.id === state.selectedModule ? "active" : ""}" type="button" data-module="${module.id}">
          <span class="module-number">${module.number}</span>
          <span>
            <span class="module-title">${escapeHtml(module.title)}</span>
            <span class="module-meta">${escapeHtml(t("pathProgress", { done: progress.done, total: progress.total }))} ${escapeHtml(t("checks"))} - ${module.minutes} ${escapeHtml(t("min"))}</span>
            <span class="module-progress" aria-hidden="true"><span style="width: ${progress.percent}%"></span></span>
          </span>
          <span class="module-check ${progress.complete ? "complete" : ""}" aria-label="${progress.complete ? escapeHtml(t("complete")) : escapeHtml(t("incomplete"))}">${escapeHtml(t(statusKey))}</span>
        </button>
      `;
    })
    .join("");
}

function renderTabs() {
  $$(".tab-button").forEach((button) => {
    const isActive = button.dataset.view === state.activeView;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  $$(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `view-${state.activeView}`);
  });
}

function renderLearnView() {
  const module = selectedModule();
  const docs = docsSnapshot();
  const done = completedSet(module.id);
  const quizAnswers = state.quiz[module.id] || {};
  const progress = moduleProgress(module);
  const focusTitle = progress.nextCheckpoint?.title || module.practice.title;
  const focusCopy = progress.nextCheckpoint?.copy || t("moduleCompleteCopy");
  const focusAction = progress.nextCheckpoint
    ? `<button class="primary-button" type="button" data-scroll-checkpoints>${escapeHtml(t("startCheckpoint"))}</button>`
    : `<button class="primary-button" type="button" data-view="practice">${escapeHtml(t("openPractice"))}</button>`;
  const guidePhase = progress.done === 0 ? "model" : progress.complete ? "practice" : "checkpoint";

  $("#view-learn").innerHTML = `
    <section class="path-guide" aria-label="${escapeHtml(t("pathGuideAria"))}">
      <div class="path-guide-copy">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t("guidanceEyebrow"))}</p>
          <h2>${escapeHtml(t("guidanceTitle"))}</h2>
        </div>
        <p>${escapeHtml(t("guidanceCopy"))}</p>
      </div>
      <div class="guide-steps">
        <article class="guide-step ${guidePhase === "model" ? "active" : ""}">
          <span>01</span>
          <strong>${escapeHtml(t("guideStepModelTitle"))}</strong>
          <p>${escapeHtml(t("guideStepModelCopy"))}</p>
        </article>
        <article class="guide-step ${guidePhase === "checkpoint" ? "active" : ""}">
          <span>02</span>
          <strong>${escapeHtml(t("guideStepCheckpointTitle"))}</strong>
          <p>${escapeHtml(t("guideStepCheckpointCopy"))}</p>
        </article>
        <article class="guide-step ${guidePhase === "practice" ? "active" : ""}">
          <span>03</span>
          <strong>${escapeHtml(t("guideStepPracticeTitle"))}</strong>
          <p>${escapeHtml(t("guideStepPracticeCopy"))}</p>
        </article>
      </div>
      <div class="focus-strip">
        <div>
          <span>${escapeHtml(t("focusNow"))}</span>
          <strong>${escapeHtml(focusTitle)}</strong>
          <p>${escapeHtml(focusCopy)}</p>
        </div>
        ${focusAction}
      </div>
    </section>

    <div class="learn-grid">
      <section class="hero-panel">
        <div class="tag-row">
          <span class="tag">${escapeHtml(t("track"))} ${module.number}</span>
          <span class="tag">${escapeHtml(module.level)}</span>
          <span class="tag">${module.minutes} ${escapeHtml(t("min"))}</span>
          ${module.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(module.theme)}</p>
          <h2>${escapeHtml(module.title)}</h2>
        </div>
        <p class="lead-copy">${escapeHtml(module.pitch)}</p>
        <div class="callout"><strong>${escapeHtml(t("architectMove"))}</strong> ${escapeHtml(module.architectMove)}</div>
        <div class="architecture-map" aria-label="${escapeHtml(t("runtimeMapAria"))}">
          ${module.flow
            .map(
              ([label, copy]) => `
                <div class="map-node">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(copy)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="tool-panel tool-stack">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t("snapshot"))}</p>
          <h3>${escapeHtml(t("currentBaseline"))}</h3>
        </div>
        <div class="mini-grid">
          <div class="stat-box">
            <span>${escapeHtml(t("stableDocs"))}</span>
            <strong>${docs.currentStable}</strong>
          </div>
          <div class="stat-box">
            <span>${escapeHtml(t("javaBaseline"))}</span>
            <strong>${docs.javaBaseline}</strong>
          </div>
        </div>
        <p class="text-block">${escapeHtml(docs.note)}</p>
        <div class="source-list">
          ${docs.links
            .map(
              (link) => `
                <a class="source-link" href="${link.url}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>

    <section class="lesson-panel">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(t("mentalModel"))}</p>
        <h3>${escapeHtml(t("understandBeforeTyping"))}</h3>
      </div>
      ${module.lesson.map((paragraph) => `<p class="text-block">${escapeHtml(paragraph)}</p>`).join("")}
    </section>

    <section class="lesson-panel" data-checkpoint-panel>
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(t("handsDirty"))}</p>
        <h3>${escapeHtml(t("checkpointChecklist"))}</h3>
      </div>
      <div class="checklist">
        ${module.checkpoints
          .map(
            (item) => `
              <label class="check-item">
                <input type="checkbox" data-check="${item.id}" ${done.has(item.id) ? "checked" : ""}>
                <span>
                  <span class="check-title">${escapeHtml(item.title)}</span>
                  <span class="check-copy">${escapeHtml(item.copy)}</span>
                </span>
              </label>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="lesson-panel">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(t("quickQuiz"))}</p>
        <h3>${escapeHtml(t("checkInstinct"))}</h3>
      </div>
      <div class="quiz-list">
        ${module.quiz
          .map((quiz, quizIndex) => {
            const selected = quizAnswers[quizIndex];
            return `
              <div class="quiz-card">
                <p><strong>${quizIndex + 1}. ${escapeHtml(quiz.q)}</strong></p>
                <div class="choice-grid">
                  ${quiz.choices
                    .map((choice, choiceIndex) => {
                      const isSelected = Number(selected) === choiceIndex;
                      const isCorrect = quiz.answer === choiceIndex;
                      const resultClass = isSelected ? (isCorrect ? "correct" : "incorrect") : "";
                      return `
                        <button class="choice-button ${resultClass}" type="button" data-quiz="${quizIndex}" data-choice="${choiceIndex}">
                          ${escapeHtml(choice)}
                        </button>
                      `;
                    })
                    .join("")}
                </div>
                <p class="answer-note">${selected === undefined ? "" : escapeHtml(quiz.why)}</p>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderPracticeView() {
  const module = selectedModule();
  const practice = module.practice;
  const note = Object.prototype.hasOwnProperty.call(state.notes, module.id)
    ? state.notes[module.id]
    : practice.starter;
  const score = state.scores[module.id] || "";
  const isMentorVisible = Boolean(state.mentorVisible[module.id]);

  $("#view-practice").innerHTML = `
    <div class="practice-layout">
      <section class="practice-panel">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t("minuteSession", { minutes: practice.minutes }))}</p>
          <h3>${escapeHtml(practice.title)}</h3>
        </div>
        <div class="scenario-box">
          <h4>${escapeHtml(t("scenario"))}</h4>
          <p>${escapeHtml(practice.scenario)}</p>
        </div>
        <div class="scenario-box">
          <h4>${escapeHtml(t("deliverable"))}</h4>
          <p>${escapeHtml(practice.deliverable)}</p>
        </div>
        <div class="scenario-box">
          <h4>${escapeHtml(t("constraints"))}</h4>
          <ul>
            ${practice.constraints.map((constraint) => `<li>${escapeHtml(constraint)}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="practice-panel">
        <div class="scratchpad">
          <label for="practice-notes"><strong>${escapeHtml(t("scratchpad"))}</strong></label>
          <textarea id="practice-notes" spellcheck="true">${escapeHtml(note)}</textarea>
        </div>
        <div>
          <p class="metric-label">${escapeHtml(t("selfScore"))}</p>
          <div class="score-row" role="group" aria-label="${escapeHtml(t("selfScoreAria"))}">
            ${[1, 2, 3, 4, 5]
              .map(
                (value) => `
                  <button class="score-button ${Number(score) === value ? "active" : ""}" type="button" data-score="${value}">
                    ${value}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="button-row">
          <button class="primary-button" type="button" data-copy-practice>${escapeHtml(t("copyDrill"))}</button>
          <button class="ghost-button" type="button" data-toggle-mentor>${isMentorVisible ? escapeHtml(t("hideReview")) : escapeHtml(t("revealReview"))}</button>
        </div>
        <div class="mentor-answer ${isMentorVisible ? "visible" : ""}">
          <strong>${escapeHtml(t("mentorReview"))}</strong> ${escapeHtml(practice.mentor)}
        </div>
      </section>
    </div>
  `;

  const textarea = $("#practice-notes");
  textarea.addEventListener("input", (event) => {
    state.notes[module.id] = event.target.value;
    saveState();
    renderCoach();
  });
}

function renderRadarView() {
  const filters = [
    ["all", t("all")],
    ["core", t("learnNow")],
    ["later", t("later")],
    ["ai", t("aiEra")],
    ["legacy", t("history")],
  ];
  const filtered = dependencies().filter((item) => {
    const filterMatch = state.dependencyFilter === "all" || item.category === state.dependencyFilter;
    return filterMatch && matchesSearch(dependencySearchText(item));
  });

  $("#view-radar").innerHTML = `
    <section class="radar-panel">
      <div class="dependency-toolbar">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t("dependencyRadar"))}</p>
          <h3>${escapeHtml(t("dependencyRadarSubtitle"))}</h3>
        </div>
        <div class="filter-row" role="group" aria-label="${escapeHtml(t("dependencyFiltersAria"))}">
          ${filters
            .map(
              ([value, label]) => `
                <button class="filter-button ${state.dependencyFilter === value ? "active" : ""}" type="button" data-filter="${value}">
                  ${label}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="dependency-grid">
        ${
          filtered.length
            ? filtered
                .map(
                  (item) => `
                    <article class="dependency-item">
                      <div class="pill-line">
                        <span class="pill ${item.category}">${escapeHtml(item.phase)}</span>
                        <span class="pill">${escapeHtml(categoryLabel(item.category))}</span>
                      </div>
                      <h4>${escapeHtml(item.name)}</h4>
                      <p>${escapeHtml(item.use)}</p>
                      <p><strong>${escapeHtml(t("architectQuestion"))}</strong> ${escapeHtml(item.question)}</p>
                      <p><strong>${escapeHtml(t("watch"))}</strong> ${escapeHtml(item.caution)}</p>
                    </article>
                  `,
                )
                .join("")
            : `<div class="empty-state">${escapeHtml(t("noDependencyMatches"))}</div>`
        }
      </div>
    </section>
  `;
}

function renderLabView() {
  const scenario = selectedScenario();

  $("#view-lab").innerHTML = `
    <div class="lab-grid">
      <section class="lab-panel">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t("architectureLab"))}</p>
          <h3>${escapeHtml(t("choosePressureTest"))}</h3>
        </div>
        <div class="scenario-list">
          ${scenarios().map(
            (item) => `
              <button class="scenario-button ${item.id === state.selectedScenario ? "active" : ""}" type="button" data-scenario="${item.id}">
                <strong>${escapeHtml(item.title)}</strong>
                <span>${escapeHtml(item.pressure)}</span>
              </button>
            `,
          ).join("")}
        </div>
      </section>

      <section class="lab-panel">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t("decisionBoard"))}</p>
          <h3>${escapeHtml(scenario.title)}</h3>
        </div>
        <p class="text-block">${escapeHtml(scenario.brief)}</p>
        <div class="callout"><strong>${escapeHtml(t("recommendedFirstDecision"))}</strong> ${escapeHtml(scenario.decision)}</div>
        <div class="tradeoff-board">
          ${scenario.tradeoffs
            .map(
              ([label, copy]) => `
                <div class="decision-row">
                  <strong>${escapeHtml(label)}</strong>
                  <p>${escapeHtml(copy)}</p>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="scenario-box">
          <h4>${escapeHtml(t("adrDrill"))}</h4>
          <p>${escapeHtml(t("adrDrillCopy"))}</p>
        </div>
      </section>
    </div>
  `;
}

function renderCoach() {
  const module = selectedModule();
  const practice = module.practice;
  const prompt = buildCoachPrompt(module, state.coachMode);

  $$(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.coachMode);
  });

  $("#coach-prompt").value = prompt;
  $("#coach-drill-title").textContent = practice.title || t("emptyDrillTitle");
  $("#coach-drill-copy").textContent = `${module.title}: ${practice.deliverable}`;
}

function buildCoachPrompt(module, mode) {
  const practice = module.practice;
  const docs = docsSnapshot();
  const ui = uiText();
  const note = state.notes[module.id] || "";
  const shared = ui.coachPromptShared.map((line) =>
    interpolate(line, {
      moduleTitle: module.title,
      moduleTheme: module.theme,
      practiceScenario: practice.scenario,
      practiceDeliverable: practice.deliverable,
      practiceConstraints: practice.constraints.join(" | "),
      springVersion: docs.currentStable,
      checkedOn: docs.checkedOn,
    }),
  );

  const scratch = note.trim()
    ? [ui.coachPromptScratchpad, note.trim()]
    : [ui.coachPromptEmptyScratchpad];

  return [...shared, "", ...(ui.coachPromptModes[mode] || ui.coachPromptModes.socratic), "", ...scratch].join("\n");
}

function renderTimer() {
  $("#timer-display").textContent = formatSeconds(state.timerSeconds);
  $("#start-timer").textContent = timerId ? t("timerPause") : t("timerStart");
}

function formatSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setSelectedModule(moduleId) {
  const module = modules().find((item) => item.id === moduleId);
  if (!module) return;
  state.selectedModule = module.id;
  state.timerSeconds = module.practice.minutes * 60;
  saveState();
  stopTimer();
  renderAll();
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function toggleTimer() {
  if (timerId) {
    stopTimer();
    renderTimer();
    return;
  }

  if (state.timerSeconds <= 0) {
    state.timerSeconds = selectedModule().practice.minutes * 60;
  }

  timerId = setInterval(() => {
    state.timerSeconds = Math.max(0, state.timerSeconds - 1);
    renderTimer();
    if (state.timerSeconds === 0) {
      stopTimer();
      renderTimer();
    }
  }, 1000);
  renderTimer();
}

async function copyText(text, status = t("copied")) {
  try {
    await navigator.clipboard.writeText(text);
    setCopyStatus(status);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    setCopyStatus(status);
  }
}

function setCopyStatus(message) {
  const status = $("#copy-status");
  status.textContent = message;
  window.setTimeout(() => {
    if (status.textContent === message) status.textContent = "";
  }, 2200);
}

function buildPracticeCopy() {
  const module = selectedModule();
  const practice = module.practice;
  return [
    `# ${practice.title}`,
    "",
    `${t("practiceCopyModule")} ${module.title}`,
    t("practiceCopyTimebox", { minutes: practice.minutes }),
    "",
    t("practiceCopyScenario"),
    practice.scenario,
    "",
    t("practiceCopyDeliverable"),
    practice.deliverable,
    "",
    t("practiceCopyConstraints"),
    ...practice.constraints.map((constraint) => `- ${constraint}`),
    "",
    t("practiceCopyStarter"),
    practice.starter,
  ].join("\n");
}

function buildExportPlan() {
  const done = completedCheckpointCount();
  const total = totalCheckpointCount();
  const module = selectedModule();
  const completedLines = modules().map((item) => {
    const count = completedSet(item.id).size;
    return `- ${item.number} ${item.title}: ${count}/${item.checkpoints.length} ${t("checks")}`;
  });
  const nextUnchecked =
    module.checkpoints.find((item) => !completedSet(module.id).has(item.id)) || module.checkpoints[0];

  return [
    t("planTitle"),
    "",
    t("planProgress", { done, total }),
    t("planCurrentModule", { title: module.title }),
    t("planNextCheckpoint", { title: nextUnchecked.title }),
    t("planPracticeDrill", { title: module.practice.title }),
    "",
    t("planTrackStatus"),
    ...completedLines,
    "",
    t("planNext30"),
    t("planStep1"),
    t("planStep2", { title: nextUnchecked.title }),
    t("planStep3", { title: module.practice.title }),
    t("planStep4"),
    "",
    t("planCoachPrompt"),
    buildCoachPrompt(module, state.coachMode),
  ].join("\n");
}

function chooseRandomModule() {
  const moduleList = modules();
  const currentIndex = moduleList.findIndex((module) => module.id === state.selectedModule);
  const candidates = moduleList.filter((_, index) => index !== currentIndex);
  const next = candidates[Math.floor(Math.random() * candidates.length)] || moduleList[0];
  setSelectedModule(next.id);
  state.activeView = "practice";
  saveState();
  renderAll();
}

document.addEventListener("click", (event) => {
  const languageButton = event.target.closest("[data-language]");
  if (languageButton) {
    state.language = languageButton.dataset.language;
    saveState();
    renderAll();
    return;
  }

  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) {
    setSelectedModule(moduleButton.dataset.module);
    return;
  }

  if (event.target.closest("[data-scroll-checkpoints]")) {
    state.activeView = "learn";
    saveState();
    renderAll();
    window.requestAnimationFrame(() => {
      document.querySelector("[data-checkpoint-panel]")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return;
  }

  const tabButton = event.target.closest("[data-view]");
  if (tabButton) {
    state.activeView = tabButton.dataset.view;
    saveState();
    renderAll();
    return;
  }

  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    state.coachMode = modeButton.dataset.mode;
    saveState();
    renderCoach();
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.dependencyFilter = filterButton.dataset.filter;
    saveState();
    renderRadarView();
    return;
  }

  const scenarioButton = event.target.closest("[data-scenario]");
  if (scenarioButton) {
    state.selectedScenario = scenarioButton.dataset.scenario;
    saveState();
    renderLabView();
    return;
  }

  const checkbox = event.target.closest("[data-check]");
  if (checkbox) {
    const module = selectedModule();
    const done = completedSet(module.id);
    if (checkbox.checked) {
      done.add(checkbox.dataset.check);
    } else {
      done.delete(checkbox.dataset.check);
    }
    state.completed[module.id] = Array.from(done);
    saveState();
    renderAll();
    return;
  }

  const quizButton = event.target.closest("[data-quiz]");
  if (quizButton) {
    const module = selectedModule();
    state.quiz[module.id] = {
      ...(state.quiz[module.id] || {}),
      [quizButton.dataset.quiz]: Number(quizButton.dataset.choice),
    };
    saveState();
    renderLearnView();
    return;
  }

  const scoreButton = event.target.closest("[data-score]");
  if (scoreButton) {
    state.scores[selectedModule().id] = Number(scoreButton.dataset.score);
    saveState();
    renderPracticeView();
    return;
  }

  if (event.target.closest("[data-toggle-mentor]")) {
    const module = selectedModule();
    state.mentorVisible[module.id] = !state.mentorVisible[module.id];
    saveState();
    renderPracticeView();
    return;
  }

  if (event.target.closest("[data-copy-practice]")) {
    copyText(buildPracticeCopy(), t("practiceCopied"));
    return;
  }
});

$("#global-search").addEventListener("input", (event) => {
  state.search = event.target.value;
  saveState();
  renderModuleList();
  renderRadarView();
});

$("#copy-prompt").addEventListener("click", () => {
  copyText($("#coach-prompt").value, t("promptCopied"));
});

$("#shuffle-drill").addEventListener("click", chooseRandomModule);

$("#start-timer").addEventListener("click", toggleTimer);

$("#export-plan").addEventListener("click", () => {
  copyText(buildExportPlan(), t("planCopied"));
});

$("#reset-progress").addEventListener("click", () => {
  const shouldReset = window.confirm(t("resetConfirm"));
  if (!shouldReset) return;
  stopTimer();
  state = { ...defaultState, language: state.language };
  saveState();
  renderAll();
});

window.addEventListener("beforeunload", stopTimer);

renderAll();
