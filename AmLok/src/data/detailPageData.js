import AiService from '../assets/videos/services/AI.mp4'
import cloudService from '../assets/videos/services/cloud.mp4'
import dataService from '../assets/videos/services/dataAnalytics.mp4'
import ecommerceService from '../assets/videos/services/ecommerce.mp4'
import itService from '../assets/videos/services/itConsulting.mp4'
import qualityService from '../assets/videos/services/qualityEng.mp4'
import softwareService from '../assets/videos/services/software.mp4'

import AiSolution from '../assets/videos/solutions/aiSolutions.mp4'
import cloudSolution from '../assets/videos/solutions/cloudModernisation.mp4'
import dataSolution from '../assets/videos/solutions/dataModernization.mp4'
import digitalSolution from '../assets/videos/solutions/digitalTransformation.mp4'
import enterpriseSolution from '../assets/videos/solutions/enterpriseSolutions.mp4'
import intelligenceSolution from '../assets/videos/solutions/intelligentAutomation.mp4'

import banking from '../assets/videos/industries/banking.mp4'
import energy from '../assets/videos/industries/energy.mp4'
import healthcare from '../assets/videos/industries/healthcare.mp4'
import logistics from '../assets/videos/industries/logistics.mp4'
import retail from '../assets/videos/industries/retail.mp4'
import manufacturing from '../assets/videos/industries/manufacturing.mp4'
import technology from '../assets/videos/industries/technology.mp4'
import telecommunications from '../assets/videos/industries/telecommunications.mp4'

import s1 from '../assets/images/services/softwareServices/s1.webp';
import s2 from '../assets/images/services/softwareServices/s2.webp';
import s3 from '../assets/images/services/softwareServices/s3.webp';
import s4 from '../assets/images/services/softwareServices/s4.webp';
import s5 from '../assets/images/services/softwareServices/s5.jpg';

import c1 from '../assets/images/services/cloudServices/c1.webp';
import c2 from '../assets/images/services/cloudServices/c2.webp';
import c3 from '../assets/images/services/cloudServices/c3.avif';
import c4 from '../assets/images/services/cloudServices/c4.avif';
import c5 from '../assets/images/services/cloudServices/c5.jpg';

import d1 from '../assets/images/services/dataServices/d1.webp';
import d2 from '../assets/images/services/dataServices/d2.jpg';
import d3 from '../assets/images/services/dataServices/d3.jpg';
import d4 from '../assets/images/services/dataServices/d4.avif';
import d5 from '../assets/images/services/dataServices/d5.avif';

import a1 from '../assets/images/services/aiServices/a1.avif';
import a2 from '../assets/images/services/aiServices/a2.avif';
import a3 from '../assets/images/services/aiServices/a3.webp';
import a4 from '../assets/images/services/aiServices/a4.webp';
import a5 from '../assets/images/services/aiServices/a5.webp';

import q1 from '../assets/images/services/qualityServices/q1.avif';
import q2 from '../assets/images/services/qualityServices/q2.webp';
import q3 from '../assets/images/services/qualityServices/q3.avif';
import q4 from '../assets/images/services/qualityServices/q4.avif';
import q5 from '../assets/images/services/qualityServices/q5.avif';

import e1 from '../assets/images/services/enterpriseServices/e1.avif';
import e2 from '../assets/images/services/enterpriseServices/e2.avif';
import e3 from '../assets/images/services/enterpriseServices/e3.avif';
import e4 from '../assets/images/services/enterpriseServices/e4.avif';
import e5 from '../assets/images/services/enterpriseServices/e5.avif';

import i1 from '../assets/images/services/itServices/i1.avif';
import i2 from '../assets/images/services/itServices/i2.avif';
import i3 from '../assets/images/services/itServices/i3.avif';
import i4 from '../assets/images/services/itServices/i4.avif';
import i5 from '../assets/images/services/itServices/i5.webp';


export const serviceDetailContent = {
    'software-engineering': {
        heroDescription: 'AmLok brings product thinking, application architecture, API engineering, and delivery discipline together to build software that supports real business workflows. From new applications to modernization, we create dependable engineering foundations that are easier to integrate, operate, and evolve as priorities change.',
        overview: 'AmLok engineers business-critical applications from the domain model outward, aligning user experience, APIs, data boundaries, security, and operational needs before implementation. We combine product thinking with engineering discipline to create applications that are easier to operate, integrate, and evolve. The result is software that can grow with changing business priorities without sacrificing reliability or delivery speed.',
        whyThisMatters: 'Modern software needs to balance customer experience, business rules, integration complexity, and operational reliability. A clear engineering foundation makes future change safer and more predictable.',
        capabilities: [
            { image: s1, title: 'Custom Application Development', description: 'Build web applications around real operating workflows, integration needs, security expectations, and measurable user tasks.' },
            { image: s2, title: 'Enterprise Applications', description: 'Deliver modular business platforms with clear service boundaries, reusable components, and maintainable release paths.' },
            { image: s3, title: 'API & Microservices Engineering', description: 'Create versioned APIs, event interfaces, and independently deployable services that connect products without unnecessary coupling.' },
            { image: s4, title: 'Backend & Frontend Engineering', description: 'Coordinate application interfaces, business logic, accessibility, and data contracts as one coherent product.' },
            { image: s5, title: 'Application Modernization', description: 'Incrementally replace legacy capabilities while protecting critical operations, integrations, and data continuity.' },
        ],
        approach: [
            { title: 'Discover', description: 'Map users, domain workflows, constraints, and the application landscape.' },
            { title: 'Design', description: 'Define the experience, architecture, interfaces, and delivery sequence.' },
            { title: 'Engineer', description: 'Build in reviewable increments with automated quality checks.' },
            { title: 'Validate', description: 'Test behavior, integrations, accessibility, and operational readiness.' },
            { title: 'Evolve', description: 'Monitor adoption and platform health, then prioritize improvements.' },
        ],
        technologies: ['Java', 'Spring Boot', 'React', 'Node.js', 'Python', 'PostgreSQL'],
        outcomes: ['Applications aligned to business workflows', 'Clearer architecture and integration boundaries', 'Dependable, maintainable releases', 'A foundation ready for future product change'],
        related: ['cloud-modernization', 'quality-engineering', 'enterprise-solutions'],
        heroVideo: softwareService,
    },
    'cloud-modernization': {
        heroDescription: 'AmLok helps organizations move beyond simply hosting workloads in the cloud by modernizing the way applications are built, deployed, and operated. We connect migration planning, cloud-native engineering, automation, observability, and resilient operations to create a stronger foundation for continuous digital delivery.',
        overview: 'AmLok modernizes infrastructure and delivery practices as a connected effort. We assess workload constraints, dependencies, security requirements, and operating models before selecting a suitable cloud pattern. We then automate the path to production and establish observable, resilient operations so cloud adoption becomes an engineering capability rather than a one-time migration project.',
        whyThisMatters: 'Cloud value comes from changing how workloads are delivered and operated, not simply moving servers. A structured modernization path helps teams improve release speed, resilience, and visibility together.',
        capabilities: [
            { image: c1, title: 'Cloud Readiness & Migration', description: 'Classify workloads, dependencies, and data movement needs before selecting a migration path.' },
            { image: c2, title: 'Cloud-Native Platforms', description: 'Build managed, containerized application foundations that fit workload and operating needs.' },
            { image: c3, title: 'CI/CD & Release Engineering', description: 'Automate build, verification, and deployment stages to make delivery repeatable.' },
            { image: c4, title: 'Infrastructure as Code', description: 'Represent environments as reviewed, reusable code with controlled configuration changes.' },
            { image: c5, title: 'Cloud Operations', description: 'Connect logs, metrics, alerts, and runbooks so teams can understand production behavior.' },
        ],
        approach: [
            { title: 'Assess workloads', description: 'Document dependencies, service objectives, constraints, and readiness.' },
            { title: 'Shape the platform', description: 'Define landing zones, identity, networking, and operating guardrails.' },
            { title: 'Migrate in waves', description: 'Move or modernize workloads in sequenced, validated releases.' },
            { title: 'Automate delivery', description: 'Establish infrastructure and application pipelines with rollback paths.' },
            { title: 'Optimize operations', description: 'Use reliability and cost signals to guide platform improvements.' },
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
        outcomes: ['A migration path matched to workload needs', 'Repeatable environments and deployments', 'Improved reliability and cost visibility', 'A stronger foundation for scalable digital delivery'],
        related: ['software-engineering', 'quality-engineering', 'it-consulting'],
        heroVideo: cloudService,

    },
    'data-analytics': {
        heroDescription: 'AmLok connects data engineering, platforms, governance, and analytics into one dependable data lifecycle. We help organizations turn fragmented operational information into trusted, accessible insight that supports faster decisions, stronger visibility, and reusable data capabilities across the enterprise.',
        overview: 'AmLok connects data engineering and analytics so information can move reliably from operational systems into trusted reporting and decision workflows. We address ingestion, transformation, data quality, governance, platform architecture, and analytical experiences as one connected data lifecycle. This helps teams move from fragmented information toward dependable, reusable insight.',
        whyThisMatters: 'Analytics are only as useful as the data foundations behind them. Connecting engineering, governance, and analytical experiences helps teams trust the information they use to make decisions.',
        capabilities: [
            { image: d1, title: 'Data Engineering', description: 'Design batch and streaming pipelines with lineage, validation, and recovery behavior.' },
            { image: d2, title: 'Data Platforms', description: 'Create governed foundations connecting operational stores, warehouses, and cloud services.' },
            { image: d3, title: 'Business Intelligence', description: 'Model metrics and deliver dashboards that answer operational and strategic questions.' },
            { image: d4, title: 'Real-Time Analytics', description: 'Process events with appropriate latency, ordering, and monitoring requirements.' },
            { image: d5, title: 'Data Quality & Governance', description: 'Define ownership, validation, access controls, and shared data definitions.' },
        ],
        approach: [
            { title: 'Frame decisions', description: 'Identify the users, questions, and decisions the data product must support.' },
            { title: 'Connect sources', description: 'Inventory systems and define secure, reliable ingestion patterns.' },
            { title: 'Model & validate', description: 'Build transformations with explicit contracts and quality rules.' },
            { title: 'Deliver insights', description: 'Publish understandable metrics and analytical experiences.' },
            { title: 'Operate & improve', description: 'Monitor freshness, quality, usage, and pipeline health.' },
        ],
        technologies: ['Python', 'PostgreSQL', 'MySQL', 'MongoDB', 'Apache Kafka', 'Google Cloud'],
        outcomes: ['More trusted, traceable data', 'Faster access to operational insight', 'Analytics aligned with real decisions', 'Reusable data foundations for future use cases'],
        related: ['ai-automation', 'cloud-modernization', 'enterprise-solutions'],
        heroVideo: dataService,

    },
    'ai-automation': {
        heroDescription: 'AmLok applies AI and intelligent automation to practical business workflows where better speed, consistency, or decision support can create measurable value. We connect enterprise data, models, applications, workflow orchestration, and human oversight so AI solutions are useful, controlled, and ready for real-world operations.',
        overview: 'AmLok applies AI and automation to defined business tasks, connecting enterprise data, models, workflow rules, applications, and human review. We focus on practical use cases where automation can improve speed, consistency, or decision support while keeping appropriate controls in place. Solutions are designed around measurable outcomes, responsible usage, and operational readiness.',
        whyThisMatters: 'AI creates practical value when it is connected to a real workflow, trusted context, and measurable outcomes. Human review and operational controls help make adoption sustainable.',
        capabilities: [
            { image: a1, title: 'AI Opportunity Assessment', description: 'Prioritize use cases by value, feasibility, data readiness, and operational risk.' },
            { image: a2, title: 'Generative AI Integration', description: 'Connect language models to approved enterprise knowledge and user workflows.' },
            { image: a3, title: 'Machine Learning', description: 'Integrate predictive models with appropriate evaluation and monitoring.' },
            { image: a4, title: 'Intelligent Workflows', description: 'Orchestrate rules, model outputs, and human decisions across business systems.' },
            { image: a5, title: 'Responsible AI Operations', description: 'Design access, evaluation, audit, and fallback controls for production use.' },
        ],
        approach: [
            { title: 'Select a bounded use case', description: 'Define the task, baseline process, users, and acceptable outcomes.' },
            { title: 'Assess data & risk', description: 'Review information quality, permissions, privacy, and error consequences.' },
            { title: 'Prototype with controls', description: 'Validate a narrow workflow with human review and clear criteria.' },
            { title: 'Integrate systems', description: 'Connect the model or automation to approved data and applications.' },
            { title: 'Monitor in operation', description: 'Track quality, exceptions, adoption, and changing behavior.' },
        ],
        technologies: ['Python', 'Generative AI', 'Machine Learning', 'Intelligent Automation', 'Node.js'],
        outcomes: ['Automation focused on suitable repeatable tasks', 'Human oversight where decisions require it', 'AI workflows that can be evaluated and improved', 'Clearer operational visibility into AI-assisted processes'],
        related: ['data-analytics', 'software-engineering', 'quality-engineering'],
        heroVideo: AiService,

    },
    'quality-engineering': {
        heroDescription: 'AmLok embeds quality throughout the software delivery lifecycle rather than treating testing as a final checkpoint. We combine risk-based strategy, automation, API and integration testing, performance engineering, and release quality gates to give teams faster feedback and greater confidence in every release.',
        overview: 'AmLok embeds quality practices across product development and release operations. Test strategy is matched to system risk, customer impact, architecture, and release cadence, with automation focused on useful feedback rather than test volume alone. The goal is to make quality visible throughout delivery so teams can release with greater confidence and faster feedback.',
        whyThisMatters: 'Quality is strongest when it is part of engineering rather than a final checkpoint. Risk-based automation and fast feedback help teams detect issues earlier and release with greater confidence.',
        capabilities: [
            { image: q1, title: 'Quality Strategy', description: 'Set risk-based coverage goals, environments, ownership, and release criteria.' },
            { image: q2, title: 'Automated Testing', description: 'Automate stable user journeys and service behavior at appropriate test layers.' },
            { image: q3, title: 'API & Integration Testing', description: 'Verify contracts, failure behavior, and dependencies between connected systems.' },
            { image: q4, title: 'Performance Engineering', description: 'Evaluate latency, throughput, and resilience against realistic workloads.' },
            { image: q5, title: 'Release Quality Gates', description: 'Surface actionable quality signals in delivery workflows before production.' },
        ],
        approach: [
            { title: 'Understand risk', description: 'Map critical journeys, failure impact, and existing quality signals.' },
            { title: 'Set coverage', description: 'Choose manual and automated checks for each system layer.' },
            { title: 'Automate feedback', description: 'Integrate maintainable tests into build and deployment pipelines.' },
            { title: 'Validate resilience', description: 'Exercise performance, integration, and recovery behavior.' },
            { title: 'Improve the signal', description: 'Use escaped defects and flaky-test data to refine the system.' },
        ],
        technologies: ['Java', 'Python', 'React', 'Docker', 'Kubernetes', 'CI/CD'],
        outcomes: ['Earlier, clearer defect feedback', 'More reliable release decisions', 'Quality practices connected to delivery risk', 'A repeatable quality foundation across delivery teams'],
        related: ['software-engineering', 'cloud-modernization', 'enterprise-solutions'],
        heroVideo: qualityService,

    },
    'enterprise-solutions': {
        heroDescription: 'AmLok connects applications, data, platforms, and digital experiences through clear architecture and reliable integration patterns. We help organizations establish stronger interfaces, reusable platform capabilities, and practical ownership models so new digital capabilities can be introduced without adding unnecessary enterprise complexity.',
        overview: 'AmLok connects business applications, data, and digital experiences through platform and integration engineering. We focus on reliable interfaces, event and API contracts, understandable ownership, and architectures that can adapt across teams and systems. The result is a more connected enterprise foundation that supports new capabilities without creating unnecessary coupling.',
        whyThisMatters: 'Enterprise change depends on systems working together. Clear interfaces, platform ownership, and reusable integration patterns reduce friction as new digital capabilities are introduced.',
        capabilities: [
            { image: e1, title: 'Enterprise Integration', description: 'Connect packaged and custom systems using stable API and event contracts.' },
            { image: e2, title: 'Digital Experience Platforms', description: 'Unify content, customer journeys, and backend capabilities across channels.' },
            { image: e3, title: 'Platform Engineering', description: 'Create reusable foundations that help product teams deliver consistently.' },
            { image: e4, title: 'Application Architecture', description: 'Clarify service boundaries, data ownership, and modernization options.' },
            { image: e5, title: 'Operational Intelligence', description: 'Bring operational data into workflows that improve visibility and coordination.' },
        ],
        approach: [
            { title: 'Map the ecosystem', description: 'Identify systems, owners, information flows, and dependencies.' },
            { title: 'Define boundaries', description: 'Set integration contracts, platform responsibilities, and governance.' },
            { title: 'Deliver in increments', description: 'Build and connect priority capabilities without disruptive replacement.' },
            { title: 'Prove operations', description: 'Validate identity, monitoring, failure handling, and support.' },
            { title: 'Extend the platform', description: 'Apply reusable patterns to additional teams and capabilities.' },
        ],
        technologies: ['Java', 'Spring Boot', 'Node.js', 'React', 'Apache Kafka', 'AWS'],
        outcomes: ['More connected business systems', 'Clearer platform ownership and interfaces', 'Digital capabilities that evolve across teams', 'Reusable integration patterns that support future change'],
        related: ['software-engineering', 'data-analytics', 'it-consulting'],
        heroVideo: ecommerceService,

    },
    'it-consulting': {
        heroDescription: 'AmLok connects technology strategy with the realities of delivery, architecture, platforms, and business priorities. We help organizations understand their current landscape, evaluate practical options, sequence modernization initiatives, and create actionable roadmaps that engineering and business teams can execute together.',
        overview: 'AmLok advisory work connects technology decisions to business priorities and delivery realities. We help leaders assess platforms, clarify trade-offs, identify dependencies, and create actionable roadmaps engineering teams can execute and measure. Recommendations are grounded in the organization’s current technology landscape, delivery capacity, and desired business outcomes.',
        whyThisMatters: 'Technology decisions have lasting delivery and operating consequences. Practical advisory work helps teams make those decisions with clearer trade-offs, dependencies, and execution paths.',
        capabilities: [
            { image: i1, title: 'Technology Strategy', description: 'Align platform investments, capabilities, and sequencing to business objectives.' },
            { image: i2, title: 'Architecture Assessment', description: 'Review application, data, and infrastructure constraints with practical options.' },
            { image: i3, title: 'Modernization Roadmaps', description: 'Break complex change into governed stages, milestones, and dependencies.' },
            { image: i4, title: 'Cloud & Data Advisory', description: 'Evaluate platform patterns, operating models, and readiness.' },
            { image: i5, title: 'Delivery Governance', description: 'Establish decision forums, delivery measures, and risk visibility.' },
        ],
        approach: [
            { title: 'Listen & align', description: 'Understand goals, constraints, stakeholders, and decision timelines.' },
            { title: 'Assess the baseline', description: 'Review systems, delivery practices, dependencies, and operational risks.' },
            { title: 'Develop options', description: 'Compare architecture and sourcing choices with explicit trade-offs.' },
            { title: 'Build the roadmap', description: 'Sequence initiatives, ownership, dependencies, and validation points.' },
            { title: 'Support execution', description: 'Connect recommendations to delivery decisions and outcomes.' },
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Java', 'Python', 'Terraform'],
        outcomes: ['Clearer technology investment decisions', 'Roadmaps grounded in delivery constraints', 'Shared visibility into dependencies and risk', 'A practical execution path for technology priorities'],
        related: ['enterprise-solutions', 'cloud-modernization', 'data-analytics'],
        heroVideo: itService,

    },
};

export const solutionDetailContent = {
    'digital-transformation': {
        challenge: 'Organizations often have capable teams and systems that grew independently. Fragmented customer journeys, manual work, and aging platforms make it harder to adapt technology to business needs.',
        approach: 'AmLok aligns business priorities with an achievable sequence of process, platform, data, and engineering changes. Transformation is delivered in increments, with ownership and operational readiness built into each stage.',
        capabilities: [
            { image: i3, title: 'Transformation Roadmaps', description: 'Translate strategic goals into sequenced initiatives with clear dependencies.' },
            { title: 'Process Modernization', description: 'Simplify workflows before connecting them to new digital experiences.' },
            { title: 'Digital Platforms', description: 'Build adaptable application and integration foundations.' },
            { title: 'Delivery Governance', description: 'Keep teams aligned around scope, risks, adoption, and outcomes.' },
        ],
        steps: [
            { title: 'Align', description: 'Agree on priorities, measures, and stakeholders.' },
            { title: 'Assess', description: 'Map process, platform, data, and delivery constraints.' },
            { title: 'Sequence', description: 'Choose increments that deliver value while reducing dependencies.' },
            { title: 'Implement', description: 'Build and integrate capabilities with operational ownership.' },
            { title: 'Measure', description: 'Review adoption and performance to guide the next stage.' },
        ],
        technologies: ['React', 'Java', 'AWS', 'Microsoft Azure', 'Apache Kafka', 'Generative AI'],
        value: ['A roadmap tied to business priorities', 'Connected customer and employee workflows', 'Change delivered in manageable increments'],
        related: ['cloud-modernization', 'application-modernization', 'intelligent-automation'],
        heroVideo: digitalSolution,

    },
    'cloud-modernization': {
        challenge: 'Legacy infrastructure can limit release speed, resilience, and the ability to scale. Moving workloads without addressing dependencies and operations can simply relocate complexity.',
        approach: 'AmLok assesses workload characteristics and operating constraints, then plans a migration or modernization path for each component. Security, observability, automation, and cost visibility are designed into the target environment.',
        capabilities: [
            { title: 'Workload Discovery', description: 'Map dependencies, service requirements, and modernization readiness.' },
            { title: 'Migration Planning', description: 'Choose workload paths based on technical needs and operating context.' },
            { title: 'Cloud-Native Architecture', description: 'Design managed services with clear operational ownership.' },
            { title: 'Automated Operations', description: 'Use infrastructure as code, deployment automation, and observability.' },
        ],
        steps: [
            { title: 'Discover', description: 'Map workloads, dependencies, and service objectives.' },
            { title: 'Design', description: 'Set landing zones, identity, networking, and platform guardrails.' },
            { title: 'Migrate', description: 'Move workloads in tested waves with rollback plans.' },
            { title: 'Modernize', description: 'Refactor components where it improves operational fit.' },
            { title: 'Optimize', description: 'Use reliability and cost signals to refine the platform.' },
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
        value: ['Workloads aligned to suitable cloud patterns', 'Repeatable deployments and operations', 'Improved reliability and platform visibility'],
        related: ['digital-transformation', 'application-modernization', 'data-modernization'],
        heroVideo: cloudSolution,

    },
    'application-modernization': {
        challenge: 'Monolithic or aging applications can make every change risky and slow. Tight coupling, outdated interfaces, and limited test coverage often make full replacement unrealistic.',
        approach: 'AmLok modernizes around business capability boundaries. We identify seams for API enablement, data separation, experience updates, and incremental service extraction, validating each step against production needs.',
        capabilities: [
            { title: 'Legacy Assessment', description: 'Map code, integrations, data ownership, and the cost of change.' },
            { title: 'API Enablement', description: 'Expose stable interfaces that let capabilities evolve independently.' },
            { title: 'Incremental Decomposition', description: 'Extract services where clear boundaries and operational value exist.' },
            { title: 'Experience Renewal', description: 'Improve user journeys without forcing a backend replacement.' },
        ],
        steps: [
            { title: 'Map', description: 'Identify critical domains, dependencies, and change hotspots.' },
            { title: 'Prioritize', description: 'Choose a first capability by value, risk, and team readiness.' },
            { title: 'Strangle', description: 'Route new functionality through modern interfaces incrementally.' },
            { title: 'Validate', description: 'Protect behavior with automated tests and production measures.' },
            { title: 'Expand', description: 'Apply proven patterns to additional application capabilities.' },
        ],
        technologies: ['Java', 'Spring Boot', 'Node.js', 'React', 'Docker', 'Kubernetes'],
        value: ['Reduced coupling in critical systems', 'Lower-risk modernization steps', 'A platform prepared for continued change'],
        related: ['cloud-modernization', 'digital-transformation', 'intelligent-automation'],
        heroVideo: enterpriseSolution,

    },
    'ai-powered-solutions': {
        challenge: 'Teams need to turn growing enterprise information into useful actions while maintaining clear data access, oversight, and accountability.',
        approach: 'AmLok embeds AI into specific workflows, connecting approved context to model services, user interfaces, and business systems. Evaluation, human review, and fallback behavior are considered from the start.',
        capabilities: [
            { title: 'AI Use-Case Design', description: 'Define user tasks, data context, evaluation criteria, and risk boundaries.' },
            { title: 'Enterprise AI Integration', description: 'Connect models to approved knowledge sources and applications.' },
            { title: 'Intelligent Decision Support', description: 'Present recommendations with context and human review paths.' },
            { title: 'AI Workflow Automation', description: 'Coordinate model outputs with rules, APIs, and operating processes.' },
        ],
        steps: [
            { title: 'Select', description: 'Choose a bounded workflow with measurable user value.' },
            { title: 'Prepare', description: 'Assess data access, quality, and protection requirements.' },
            { title: 'Prototype', description: 'Test output quality and exception handling with users.' },
            { title: 'Integrate', description: 'Connect capabilities to enterprise applications and identity.' },
            { title: 'Govern', description: 'Monitor quality, usage, and the need for human intervention.' },
        ],
        technologies: ['Python', 'Generative AI', 'Machine Learning', 'Intelligent Automation', 'Node.js'],
        value: ['AI applied to concrete enterprise workflows', 'Decision support with clear review paths', 'Capabilities that can be monitored and refined'],
        related: ['intelligent-automation', 'data-modernization', 'digital-transformation'],
        heroVideo: AiSolution,

    },
    'data-modernization': {
        challenge: 'Siloed sources, inconsistent definitions, and aging pipelines make it difficult to trust or use data across teams. New analytics can add another disconnected layer if the foundations are not addressed.',
        approach: 'AmLok modernizes ingestion, storage, transformation, governance, and access as a connected data platform. Architecture follows the organization’s latency, ownership, and analytical needs.',
        capabilities: [
            { title: 'Data Platform Architecture', description: 'Design around workload, governance, access, and operating needs.' },
            { title: 'Pipeline Modernization', description: 'Improve ingestion, transformation, lineage, quality, and recovery.' },
            { title: 'Source Integration', description: 'Connect operational systems through secure, maintainable contracts.' },
            { title: 'Analytics Enablement', description: 'Publish governed models and reusable metrics for business teams.' },
        ],
        steps: [
            { title: 'Inventory', description: 'Identify sources, owners, consumers, and data quality needs.' },
            { title: 'Architect', description: 'Select patterns matched to access and workload requirements.' },
            { title: 'Ingest', description: 'Connect priority sources with explicit contracts and monitoring.' },
            { title: 'Govern', description: 'Define shared semantics, lineage, and access controls.' },
            { title: 'Enable', description: 'Deliver trusted data products and analytics experiences.' },
        ],
        technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Apache Kafka', 'Python', 'Google Cloud'],
        value: ['More trusted and discoverable information', 'Faster, consistent analytical access', 'A data platform ready for new use cases'],
        related: ['intelligent-automation', 'ai-powered-solutions', 'cloud-modernization'],
        heroVideo: dataSolution,

    },
    'intelligent-automation': {
        challenge: 'Manual handoffs and repetitive tasks slow service delivery and make outcomes harder to track. Automating one step without connecting surrounding systems can preserve the same friction.',
        approach: 'AmLok maps the end-to-end process, identifies suitable automation points, and connects workflow rules, data, applications, and human decisions. Exception handling and process visibility are part of the design.',
        capabilities: [
            { title: 'Process Discovery', description: 'Map workflows, handoffs, exception paths, and operational measures.' },
            { title: 'Workflow Orchestration', description: 'Coordinate approvals, business rules, and service actions across teams.' },
            { title: 'System Integration', description: 'Connect automation to authoritative APIs and enterprise records.' },
            { title: 'AI-Assisted Processing', description: 'Apply AI to classification or summaries where review and guardrails fit.' },
        ],
        steps: [
            { title: 'Observe', description: 'Document how the process works, including edge cases.' },
            { title: 'Simplify', description: 'Remove unnecessary handoffs before automation.' },
            { title: 'Orchestrate', description: 'Connect rules, systems, and human checkpoints.' },
            { title: 'Pilot', description: 'Validate a bounded flow with users and operators.' },
            { title: 'Improve', description: 'Use completion, exception, and cycle data to refine it.' },
        ],
        technologies: ['Intelligent Automation', 'Python', 'Node.js', 'Apache Kafka', 'Generative AI'],
        value: ['More consistent process execution', 'Clearer exception handling and ownership', 'Operational workflows connected end to end'],
        related: ['ai-powered-solutions', 'digital-transformation', 'data-modernization'],
        heroVideo: intelligenceSolution,

    },
};

export const industryDetailContent = {
    'banking-financial-services': {
        landscape: 'Financial organizations balance digital service expectations with complex core platforms, data estates, and operational controls. Modernization needs an incremental path that keeps customer and business workflows dependable.',
        challenges: [
            { title: 'Core Platform Change', description: 'Modernize legacy capabilities in increments while keeping connected business processes dependable.' },
            { title: 'Connected Customer Journeys', description: 'Align digital banking experiences across web, mobile, service, and account workflows.' },
            { title: 'Transaction Data Flow', description: 'Connect payment, account, and reporting data with clear ownership and traceability.' },
            { title: 'Operational Visibility', description: 'Bring service, risk, and business signals together for more informed oversight.' },
        ],
        serviceSlugs: ['software-engineering', 'cloud-modernization', 'data-analytics', 'quality-engineering'],
        solutionSlugs: ['digital-transformation', 'application-modernization', 'data-modernization'],
        technologies: ['Java', 'Spring Boot', 'React', 'Apache Kafka', 'PostgreSQL', 'AWS'],
        heroVideo: banking,
        useCases: [
            {
                title: 'Digital banking platform renewal',
                description:
                    'Modernize digital banking platforms to deliver faster, more intuitive, and connected customer experiences across web and mobile channels. AmLok can help evolve legacy capabilities while maintaining integration with core banking systems and critical financial workflows. The approach supports incremental modernization, API enablement, and improved platform scalability. This allows financial institutions to introduce new digital capabilities without disrupting established operations.'
            },
            {
                title: 'Payment workflow integration',
                description:
                    'Connect payment channels, transaction systems, APIs, and supporting financial applications to create more consistent payment workflows. AmLok can help integrate disparate systems and improve the flow of transaction information across the payment lifecycle. Modern integration patterns can provide better visibility, traceability, and operational coordination. This helps organizations build payment capabilities that can evolve with changing business requirements.'
            },
            {
                title: 'Customer and portfolio analytics',
                description:
                    'Bring together customer, account, transaction, and portfolio information to create a more connected view of financial activity. AmLok can help modernize data pipelines and analytics capabilities so organizations can make better use of information already available across their systems. The resulting data foundation can support reporting, customer insights, portfolio analysis, and operational decision-making. This enables financial teams to work with more accessible and actionable information.'
            },
            {
                title: 'Incremental core application modernization',
                description:
                    'Modernize core banking applications through manageable stages rather than replacing entire platforms at once. AmLok can help identify application capabilities that can be progressively transformed, integrated, or exposed through modern APIs. This approach helps reduce disruption to critical banking workflows while creating a path toward a more flexible technology landscape. Each modernization stage can be aligned with business priorities and existing operational dependencies.'
            }
        ],
    },
    'healthcare-life-sciences': {
        landscape: 'Healthcare and life sciences organizations coordinate patient, clinical, research, and operational information across systems with different ownership and workflows. Digital programs connect this information while respecting each organization’s privacy and governance requirements.',
        challenges: [
            { title: 'Disconnected Care Journeys', description: 'Coordinate patient-facing services across scheduling, engagement, and care teams.' },
            { title: 'Complex Data Exchange', description: 'Connect clinical and operational systems while respecting local governance and access requirements.' },
            { title: 'Legacy Care Applications', description: 'Modernize workflows incrementally around critical clinical and research systems.' },
            { title: 'Distributed Service Operations', description: 'Improve visibility into platform health and handoffs across care environments.' },
        ],
        serviceSlugs: ['software-engineering', 'data-analytics', 'cloud-modernization', 'quality-engineering'],
        solutionSlugs: ['digital-transformation', 'data-modernization', 'ai-powered-solutions'],
        technologies: ['React', 'Python', 'Microsoft Azure', 'PostgreSQL', 'Apache Kafka'],
        heroVideo: healthcare,
        useCases: [
            {
                title: 'Patient engagement platforms',
                description:
                    'Modernize digital platforms that connect patients with healthcare providers across different stages of their journey. AmLok can help integrate appointment, communication, engagement, and supporting healthcare workflows into more connected digital experiences. The focus is on creating scalable platforms that can work with existing enterprise and clinical systems. This can help organizations provide more consistent digital interactions while improving operational coordination.'
            },
            {
                title: 'Telehealth workflow integration',
                description:
                    'Connect virtual care experiences with the clinical and operational systems that support healthcare delivery. AmLok can help integrate telehealth workflows with scheduling, patient information, communication, and other supporting capabilities. Modern integration patterns can reduce disconnected processes and improve the flow of information between digital and operational systems. This provides a foundation for scalable virtual care experiences.'
            },
            {
                title: 'Clinical data exchange and analytics',
                description:
                    'Connect clinical data from different applications and sources to create a more accessible and consistent information environment. AmLok can help modernize data integration and analytics workflows so healthcare organizations can use information across operational and analytical scenarios. The solution can support reporting, data exploration, and improved visibility across connected systems. This creates a stronger foundation for data-driven healthcare operations.'
            },
            {
                title: 'Research data platform modernization',
                description:
                    'Modernize research data platforms to make information easier to integrate, access, manage, and analyze. AmLok can help evolve legacy research data environments while connecting relevant applications and data sources through modern integration approaches. Scalable architecture can support growing data volumes and changing research requirements. This enables teams to spend more time using research information and less time working around fragmented technology environments.'
            }
        ]
    },
    'retail-ecommerce': {
        landscape: 'Retailers connect customer journeys, product information, inventory, pricing, order management, and fulfillment. A coherent commerce ecosystem depends on timely data and reliable connections between customer-facing and operational platforms.',
        challenges: [
            { title: 'Fragmented Shopping Journeys', description: 'Create consistent product discovery and service across web, mobile, and store channels.' },
            { title: 'Product and Inventory Consistency', description: 'Keep catalog, stock, pricing, and order information aligned across systems.' },
            { title: 'Relevant Customer Experiences', description: 'Make customer context usable for personalization with appropriate data governance.' },
            { title: 'Fulfillment Coordination', description: 'Connect order, warehouse, and delivery workflows to improve operational visibility.' },
        ],
        serviceSlugs: ['software-engineering', 'data-analytics', 'ai-automation', 'enterprise-solutions'],
        solutionSlugs: ['digital-transformation', 'intelligent-automation', 'data-modernization'],
        technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Apache Kafka'],
        heroVideo: retail,
        useCases: [
            {
                title: 'Omnichannel commerce experiences',
                description:
                    'Create connected commerce experiences across websites, mobile applications, digital channels, and other customer touchpoints. AmLok can help integrate customer, product, order, and commerce capabilities so experiences remain consistent across channels. Modern application and API architectures can make it easier to introduce new digital journeys and capabilities. This provides retailers with a more flexible foundation for evolving customer expectations.'
            },
            {
                title: 'Product catalog and inventory integration',
                description:
                    'Connect product catalogs, pricing, inventory, and related information across commerce and enterprise systems. AmLok can help establish reliable integration between systems that manage product information and systems that expose it to customers and operational teams. Improved data synchronization can provide greater visibility into product availability and inventory conditions. This helps create more consistent information across digital and operational channels.'
            },
            {
                title: 'Order and fulfillment automation',
                description:
                    'Modernize and automate the workflows that connect customer orders with fulfillment, inventory, warehouse, and delivery processes. AmLok can help integrate order management capabilities with downstream systems to reduce disconnected manual activities. Event-driven and API-based integration can improve the flow of order information across the fulfillment lifecycle. This creates greater operational visibility and supports more scalable commerce operations.'
            },
            {
                title: 'Demand and customer analytics',
                description:
                    'Use customer, transaction, product, and commerce data to build a stronger understanding of demand and customer behavior. AmLok can help connect relevant data sources and modernize analytics platforms to support more accessible and timely insights. The resulting capabilities can support demand analysis, customer segmentation, product performance, and operational reporting. This provides teams with a stronger data foundation for day-to-day and long-term decision-making.'
            }
        ]
    },
    manufacturing: {
        landscape: 'Manufacturers bring production systems, industrial equipment, quality workflows, and supply networks together to improve operational visibility. Modern platforms make operational data more accessible without disrupting plant-level systems.',
        challenges: [
            { title: 'Production Visibility', description: 'Bring production status and quality signals into views teams can act on.' },
            { title: 'Operational System Integration', description: 'Connect plant technologies with planning, inventory, and enterprise applications.' },
            { title: 'Asset Maintenance Signals', description: 'Use equipment and service data to support more informed maintenance planning.' },
            { title: 'Supply Network Coordination', description: 'Improve information flow across facilities, suppliers, and fulfillment partners.' },
        ],
        serviceSlugs: ['enterprise-solutions', 'cloud-modernization', 'data-analytics', 'ai-automation'],
        solutionSlugs: ['intelligent-automation', 'data-modernization', 'digital-transformation'],
        technologies: ['Python', 'Apache Kafka', 'Microsoft Azure', 'PostgreSQL', 'Docker'],
        heroVideo: manufacturing,
        useCases: [
            {
                title: 'Production and asset monitoring',
                description:
                    'Connect production systems, equipment information, operational applications, and relevant data sources to improve manufacturing visibility. AmLok can help modernize integration between plant-level systems and enterprise platforms. This creates a more connected view of production activity and asset conditions across manufacturing environments. The resulting technology foundation can support better monitoring, reporting, and operational coordination.'
            },
            {
                title: 'Predictive maintenance data workflows',
                description:
                    'Bring equipment, operational, maintenance, and service information together to support more informed maintenance processes. AmLok can help integrate data from connected assets and existing maintenance applications into scalable workflows. This can improve access to equipment information and make maintenance-related data easier to analyze. The approach supports organizations as they progressively modernize their asset management capabilities.'
            },
            {
                title: 'Quality management integration',
                description:
                    'Connect quality management workflows with production, supply chain, and enterprise applications to improve information flow. AmLok can help integrate quality-related data across systems that operate at different stages of the manufacturing lifecycle. A connected architecture can provide greater visibility into quality processes and associated operational information. This helps teams coordinate quality activities while working with more consistent data across the organization.'
            },
            {
                title: 'Supplier and fulfillment visibility',
                description:
                    'Improve visibility across suppliers, manufacturing facilities, inventory operations, and fulfillment processes. AmLok can help connect supply chain applications and information sources so teams can access a more consistent view of operational activity. Modern integration can reduce information gaps between suppliers and internal systems. This creates a stronger technology foundation for coordinating supply and fulfillment operations.'
            }
        ]
    },
    telecommunications: {
        landscape: 'Telecommunications providers operate interconnected network, service, billing, and customer platforms. Modernization connects operational signals to service delivery and customer experience across large, evolving system estates.',
        challenges: [
            { title: 'Distributed Network Signals', description: 'Correlate operational data across network equipment, regions, and service layers.' },
            { title: 'Service and Customer Platforms', description: 'Connect service lifecycle, customer support, and billing workflows.' },
            { title: 'OSS/BSS Modernization', description: 'Evolve operational and business support systems through manageable integration steps.' },
            { title: 'Service Issue Visibility', description: 'Make network and customer experience signals easier to investigate together.' },
        ],
        serviceSlugs: ['data-analytics', 'enterprise-solutions', 'software-engineering', 'cloud-modernization'],
        solutionSlugs: ['data-modernization', 'application-modernization', 'intelligent-automation'],
        technologies: ['Java', 'Apache Kafka', 'Kubernetes', 'AWS', 'PostgreSQL'],
        heroVideo: telecommunications,
        useCases: [
            {
                title: 'Network operations analytics',
                description:
                    'Connect network operational information and analytics capabilities to create greater visibility into infrastructure and service conditions. AmLok can help integrate data from different network and operational systems into scalable analytics workflows. This can make operational information easier to access and analyze across teams. The resulting platform can support monitoring, reporting, and broader network operations initiatives.'
            },
            {
                title: 'OSS/BSS integration modernization',
                description:
                    'Modernize the integration between operational support systems and business support systems while preserving critical existing capabilities. AmLok can help evolve legacy integration patterns through APIs, modern services, and incremental application modernization. This approach can improve information flow between operational and business processes. It also provides a more flexible foundation for introducing future telecommunications capabilities.'
            },
            {
                title: 'Service activation workflow automation',
                description:
                    'Automate service activation workflows by connecting customer, product, provisioning, and operational systems. AmLok can help reduce disconnected activities by integrating the systems involved in service delivery. Modern workflow and API capabilities can improve consistency and visibility throughout the activation process. This creates a scalable foundation for supporting changing products and service models.'
            },
            {
                title: 'Customer service platform renewal',
                description:
                    'Modernize customer service platforms so support teams can work with information from customer, service, and operational systems in a more connected way. AmLok can help integrate existing applications while progressively improving the underlying customer service architecture. This can simplify access to relevant information across support workflows. The result is a technology environment that can evolve alongside changing customer and service requirements.'
            }
        ]
    },
    'technology-software': {
        landscape: 'Technology and software companies continually evolve products, SaaS platforms, developer experience, and cloud operations. Growth depends on dependable release practices and platform architecture that can support changing product demands.',
        challenges: [
            { title: 'Scaling Product Teams', description: 'Establish shared engineering patterns without limiting team autonomy.' },
            { title: 'Reliable SaaS Operations', description: 'Connect release automation, observability, and service ownership.' },
            { title: 'API and Platform Consistency', description: 'Define reusable interfaces and platform capabilities across products.' },
            { title: 'Continuous Product Evolution', description: 'Modernize software architecture while maintaining customer-facing services.' },
        ],
        serviceSlugs: ['software-engineering', 'cloud-modernization', 'quality-engineering', 'it-consulting'],
        solutionSlugs: ['application-modernization', 'ai-powered-solutions', 'digital-transformation'],
        technologies: ['React', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'Terraform'],
        heroVideo: technology,
        useCases: [
            {
                title: 'SaaS product architecture evolution',
                description:
                    'Evolve SaaS application architectures to support new product capabilities, changing customer requirements, and increasing scale. AmLok can help modernize application components, APIs, integrations, and cloud capabilities while maintaining existing product functionality. The approach can be applied incrementally so product teams can continue delivering business capabilities during modernization. This creates a more adaptable technology foundation for long-term product evolution.'
            },
            {
                title: 'Developer platform and CI/CD enablement',
                description:
                    'Strengthen developer platforms and software delivery pipelines to create more consistent and automated engineering workflows. AmLok can help improve CI/CD processes, development environments, automation, and integration between engineering tools. Modern delivery practices can reduce repetitive activities and improve visibility across the software lifecycle. This provides development teams with a stronger foundation for delivering applications consistently.'
            },
            {
                title: 'API ecosystem engineering',
                description:
                    'Design, build, and evolve APIs that allow applications, platforms, products, and enterprise capabilities to work together. AmLok can help establish reusable integration patterns and API capabilities that support both internal and external consumers. A well-structured API ecosystem can reduce point-to-point dependencies and make digital capabilities easier to reuse. This creates a scalable foundation for connecting applications and enabling new digital experiences.'
            },
            {
                title: 'Cloud reliability improvements',
                description:
                    'Improve the reliability and operational maturity of applications and platforms running in cloud environments. AmLok can help strengthen cloud architecture, automation, deployment practices, monitoring, and operational processes. The focus is on building resilient platforms that can respond effectively to changing workloads and operational requirements. These improvements can also create a stronger foundation for continued cloud modernization.'
            }
        ]
    },
    'logistics-transportation': {
        landscape: 'Logistics and transportation networks rely on coordinated fleet, warehouse, shipment, and route information. Connected systems improve responsiveness to changing conditions and make operational status easier to follow.',
        challenges: [
            { title: 'Shipment and Fleet Visibility', description: 'Follow shipments and assets across carriers, facilities, and operating systems.' },
            { title: 'Route and Dispatch Coordination', description: 'Connect planning, dispatch, and live operational updates.' },
            { title: 'Warehouse and Transport Handoffs', description: 'Align warehouse events with transportation and fulfillment processes.' },
            { title: 'Timely Planning Data', description: 'Make status and exception data available to operational decision-makers.' },
        ],
        serviceSlugs: ['software-engineering', 'data-analytics', 'enterprise-solutions', 'ai-automation'],
        solutionSlugs: ['intelligent-automation', 'data-modernization', 'digital-transformation'],
        technologies: ['Node.js', 'PostgreSQL', 'Apache Kafka', 'AWS', 'Python'],
        heroVideo: logistics,
        useCases: [
            {
                title: 'Shipment tracking and exception workflows',
                description:
                    'Connect shipment information, tracking events, and exception workflows to improve visibility across logistics operations. AmLok can help integrate information from different logistics systems and make important shipment events available to the right operational processes. This can improve the coordination of tracking, exception handling, and downstream activities. A connected architecture also provides a stronger foundation for evolving logistics visibility capabilities.'
            },
            {
                title: 'Fleet and route operations platforms',
                description:
                    'Modernize fleet and route operations by connecting planning, dispatch, vehicle, and operational information. AmLok can help integrate applications that support different stages of transportation operations. This creates a more connected technology environment for managing fleet and route-related information. The approach can support organizations as they progressively improve operational visibility and platform capabilities.'
            },
            {
                title: 'Warehouse management integration',
                description:
                    'Connect warehouse management systems with transportation, inventory, fulfillment, and related enterprise applications. AmLok can help reduce disconnected workflows by creating consistent information flows between warehouse and downstream logistics processes. Modern integration can improve visibility into warehouse activity and connected fulfillment operations. This provides a scalable foundation for coordinating logistics activities across multiple systems.'
            },
            {
                title: 'Network performance analytics',
                description:
                    'Bring logistics network data together to provide better visibility into operational performance and network activity. AmLok can help integrate information from transportation, warehouse, shipment, and operational systems into analytics platforms. These capabilities can support reporting, performance monitoring, and operational analysis. A connected data foundation allows teams to work with broader information when evaluating logistics performance.'
            }
        ]
    },
    'energy-utilities': {
        landscape: 'Energy and utility providers coordinate grid assets, field operations, customer services, and changing generation sources. Modernization connects operational telemetry and enterprise platforms to improve visibility and support resilient service operations.',
        challenges: [
            { title: 'Distributed Asset Information', description: 'Connect grid, generation, metering, and service records across platforms.' },
            { title: 'Operational Data Monitoring', description: 'Improve access to telemetry and events for operational review.' },
            { title: 'Field Service Coordination', description: 'Link asset status with work planning, dispatch, and maintenance workflows.' },
            { title: 'Supply and Demand Insight', description: 'Combine relevant operating data to support planning and analysis.' },
        ],
        serviceSlugs: ['data-analytics', 'cloud-modernization', 'enterprise-solutions', 'quality-engineering'],
        solutionSlugs: ['data-modernization', 'intelligent-automation', 'cloud-modernization'],
        technologies: ['Microsoft Azure', 'Python', 'Apache Kafka', 'PostgreSQL', 'Kubernetes'],
        heroVideo: energy,
        useCases: [
            {
                title: 'Smart meter and grid data platforms',
                description:
                    'Connect smart meter, grid, operational, and enterprise data to create a more accessible information environment. AmLok can help modernize data platforms and integration workflows that support energy operations. This can improve the availability and consistency of information across applications and analytical processes. The resulting platform can provide a scalable foundation for evolving digital energy capabilities.'
            },
            {
                title: 'Asset performance monitoring',
                description:
                    'Connect asset information and operational signals to improve visibility into equipment and infrastructure performance. AmLok can help integrate data from operational systems, asset platforms, and supporting applications. This creates a more connected view of asset-related information across the organization. The technology foundation can support monitoring, reporting, analytics, and progressive modernization of asset management capabilities.'
            },
            {
                title: 'Field operations workflow integration',
                description:
                    'Connect asset information with field planning, dispatch, maintenance, and service workflows to improve operational coordination. AmLok can help integrate field applications with enterprise and asset management systems. This can reduce information gaps between field teams and back-office systems. A connected workflow foundation also makes it easier to evolve field operations as business and technology requirements change.'
            },
            {
                title: 'Energy demand and operations analytics',
                description:
                    'Bring together relevant energy, operational, customer, and infrastructure data to support demand analysis and operational insight. AmLok can help modernize the data and analytics capabilities used to understand energy activity across different systems. The resulting environment can support reporting, operational analysis, planning, and broader data-driven initiatives. This provides organizations with a scalable foundation for working with increasingly distributed energy information.'
            }
        ]
    },
};