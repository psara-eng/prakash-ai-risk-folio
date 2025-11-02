import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import aiTrendsImg from "@/assets/blog-ai-trends.jpg";
import riskMgmtImg from "@/assets/blog-risk-management.jpg";
import mlImg from "@/assets/blog-machine-learning.jpg";
import deepLearningImg from "@/assets/blog-deep-learning.jpg";
import nlpImg from "@/assets/blog-nlp.jpg";
import dataScienceImg from "@/assets/blog-data-science.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  const blogContent: Record<string, any> = {
    "ai-risk-management": {
      title: "AI Governance Is Moving Too Slowly — and Too Ambiguously",
      image: aiTrendsImg,
      date: "2025-10-04",
      readTime: "12 min read",
      category: "AI Governance",
      content: [
        // 1) Opening – the problem
        "Enterprises are being told to ‘be responsible’ with AI while the rules arrive in slow motion. The result is uncertainty: product teams hesitate, risk teams improvise, and leaders struggle to set clear guardrails that work across markets.",
    
        // 2) Why it feels slow (with EU AI Act timeline facts)
        "Timelines show why it feels slow. The EU AI Act entered into force on 1 Aug 2024, but different pieces apply in waves: prohibitions and AI literacy from 2 Feb 2025, many governance and GPAI obligations from 2 Aug 2025, and most remaining obligations from 2 Aug 2026—with high-risk Article 6 triggers phased through 2027. Calls for a delay were rejected by the Commission, but guidance and codes still roll out over time, keeping teams in a holding pattern. :contentReference[oaicite:0]{index=0}",
    
        // 3) Where ambiguity comes from (UK approach)
        "Ambiguity is not just timing—it’s design. The UK chose a regulator-led model (no single AI Act). Government’s 2024 response backs empowering existing regulators, while stakeholders asked for more practical detail and coherence. For multinationals, that can mean divergent expectations and documentation styles per regulator. :contentReference[oaicite:1]{index=1}",
    
        // 4) What different regimes actually require (concrete measures)
        "Despite the noise, several regimes converge on concrete governance measures:",
        "• EU AI Act (risk-based): risk management system; data governance and quality; logging and traceability; technical documentation; deployer information; human oversight; accuracy/robustness/cybersecurity; transparency for certain AI uses; GPAI-specific duties. :contentReference[oaicite:2]{index=2}",
        "• Singapore (PDPC Model AI Governance Framework, 2nd ed.): internal governance roles; calibrated human involvement; operations management to minimise bias; risk-based explainability/robustness/reproducibility; stakeholder communication. Companion guides (ISAGO) and use-case compendia help operationalise. :contentReference[oaicite:3]{index=3}",
        "• Singapore financial sector (MAS FEAT): fairness, ethics, accountability, and transparency principles for AI/data analytics in finance, with industry guidance (e.g., Veritas) building on them. :contentReference[oaicite:4]{index=4}",
        "• United States (NIST AI RMF 1.0): a voluntary, lifecycle framework with functions Govern–Map–Measure–Manage, playbook suggestions, and crosswalks—widely used as an enterprise control baseline. :contentReference[oaicite:5]{index=5}",
        "• OECD AI Principles (2019): the intergovernmental anchor—human-centric values, transparency, robustness/safety, accountability—plus policy recommendations for R&D, ecosystems, skills, and cooperation. :contentReference[oaicite:6]{index=6}",
    
        // 5) Newer Asia signal (Korea)
        "Asia is also moving toward comprehensive frameworks. South Korea passed an AI Basic Act in Dec 2024, setting governance bodies and obligations for high-impact and generative AI, with detailed rules to come via subordinate legislation—another example of staged clarity. :contentReference[oaicite:7]{index=7}",
    
        // 6) Why this creates friction
        "For builders and risk teams, the friction comes from mismatched maturity: obligations are real, but practical ‘how-to’ guidance often lags or varies. This leads to duplicated assessments, uneven documentation, and inconsistent model oversight across jurisdictions.",
    
        // 7) The case for core principles (argued, not invented)
        "To reduce that friction, organisations need a single, principles-first spine that is portable across laws. The good news: cross-jurisdictional sources already agree on the pillars—risk management; data governance and quality; transparency and record-keeping; human oversight; robustness, safety, and cybersecurity; accountability. These appear in the EU AI Act’s high-risk requirements, Singapore’s Model Framework, NIST AI RMF, and the OECD principles. :contentReference[oaicite:8]{index=8}",
    
        // 8) A practical blueprint leaders can use now
        "A practical blueprint that travels well across regimes:",
        "1) Governance: assign accountable owners; maintain policy, standards, and an AI system inventory; embed an AI change-management and exception process. (NIST ‘Govern’; PDPC internal governance.) :contentReference[oaicite:9]{index=9}",
        "2) Risk & Impact: run pre-deployment risk/impact assessments with use-case classification, foreseeable harms, rights considerations, and context-appropriate human involvement. (EU risk management; PDPC human-in-the-loop.) :contentReference[oaicite:10]{index=10}",
        "3) Data & Model Quality: document datasets (provenance, suitability, bias testing), training/evaluation protocols, and target performance; keep traceable logs for audits and incident review. (EU data quality, logging.) :contentReference[oaicite:11]{index=11}",
        "4) Transparency & Records: publish meaningful user disclosures where required; maintain technical documentation, evaluation reports, and monitoring records. (EU technical docs; OECD transparency.) :contentReference[oaicite:12]{index=12}",
        "5) Oversight & Safety: define human oversight points, fail-safes, rollback; monitor accuracy/robustness/drift; test security controls; run post-market/production monitoring. (EU oversight/robustness; NIST ‘Measure/Manage’.) :contentReference[oaicite:13]{index=13}",
    
        // 9) What to expect next (EU guidance cadence)
        "Expect more EU guidance (e.g., Article 6 high-risk determination examples, prohibited-practice guidance, sandboxes, codes of practice) to land progressively—helpful, but extending the period where enterprises must harmonise evolving signals with internal policies. :contentReference[oaicite:14]{index=14}",
    
        // 10) Conclusion – your stance
        "Bottom line: governance may be slow and sometimes ambiguous, but alignment around core principles is already strong. If you anchor on those pillars and map each jurisdiction’s extras on top, you can move faster than the rulemaking—and ship responsibly while the details crystallise."
      ]
    },
    "ml-pipelines": {
      title: "Responsible MLOps: Building Machine Learning Pipelines That Can Be Governed",
      image: mlImg,
      date: "2025-09-30",
      readTime: "4 min read",
      category: "Responsible MLOps",
      content: [
        "Most organizations don’t struggle with training a model. They struggle with everything that happens before and after. The real bottleneck isn’t accuracy — it’s ownership, monitoring, documentation, risk controls, and answering the simple question: 'Who is responsible when the model behaves differently in production?'",
    
        "In many teams, the ML pipeline is a collection of scripts, notebooks, trial runs, and tribal knowledge. That works for experimentation, but it collapses the moment the model touches a real customer, a financial decision, or a policy-relevant outcome. At that point, the model stops being a technical artefact — it becomes an operational responsibility.",
    
        "Responsible MLOps is about building pipelines that are traceable, explainable, and auditable. This isn’t bureaucracy. It’s about making sure that when something changes — data, features, hyperparameters, code version, or even business context — the organization knows what changed and why. Without that, nobody can trust the model, even if it performs well.",
    
        "Data lineage is the first real foundation. If we don’t know where the data came from, how it was cleaned, which features were created, and what was filtered out, then we cannot meaningfully explain the model’s behavior. Documenting datasets and transformations is not a 'nice to have' — it’s the ground truth for accountability.",
    
        "Training needs to be reproducible. If you cannot rebuild the same model tomorrow with the same inputs and code, then your pipeline is already leaking risk. Reproducibility protects against silent regressions, accidental parameter changes, and incidents that are impossible to investigate because nobody remembers what was run.",
    
        "Once the model is deployed, monitoring becomes the lifeline. Data drift, concept drift, and operational anomalies are not theoretical — they happen quietly. A pipeline that cannot detect drift is a pipeline that cannot tell you when the world has changed. And when the world changes, the model becomes outdated — sometimes subtly, sometimes catastrophically.",
    
        "Another area that is often ignored is change control. Many organizations redeploy models casually, sometimes even automatically. But when models influence decisions that affect customers, pricing, access, or security, redeployment should be reviewed like any other production system change — with rationale, evidence, impact assessment, and a rollback plan.",
    
        "And none of this works without shared ownership. Data scientists alone cannot carry it. ML engineers cannot operate in isolation. Risk and compliance cannot simply 'approve' from the outside. And business owners cannot assume models are static. Responsible MLOps works when roles are explicit: who monitors, who interprets, who approves, who intervenes.",
    
        "To be clear: Responsible MLOps is not about slowing down innovation. It is about building confidence. When pipelines are governed, teams ship faster because they don’t fear unknown consequences. They can explain decisions. They can defend outcomes. They can adjust when reality shifts.",
        
        "In the end, a good model is not just a model that performs well. It is a model that can stand on its own when questioned — internally by leadership, externally by auditors, or publicly by regulators. A pipeline that can produce that level of clarity is one that will survive, adapt, and continue to create value."
      ]
    },
    "neural-architecture": {
      title: "Architecture Decisions for Control, Audit, and Explainability",
      image: deepLearningImg,
      date: "2025-09-16",
      readTime: "15 min read",
      category: "AI Governance",
      content: [
        // Opening — why architecture choices *are* governance choices
        "We often talk about model architecture as a purely technical choice—accuracy vs. latency vs. cost. In reality, architecture is a governance decision. It determines how easily you can explain outcomes, how quickly you can respond to incidents, how robustly you can evidence compliance, and how painful an audit will be. This matters doubly for regulated or high-impact use cases.",
        
        // The regulatory backdrop — what “good” looks like (with sources)
        "Across jurisdictions, the direction of travel is clear: a risk-based lifecycle with documentation, oversight, and monitoring baked in. The EU AI Act requires high-risk systems to implement risk management, data governance and quality, technical documentation, record-keeping (logging), transparency for deployers, human oversight, and accuracy/robustness/cybersecurity—plus post-market monitoring. Annex and article structures make these obligations concrete rather than aspirational. :contentReference[oaicite:0]{index=0}",
        
        "Singapore’s approach complements that with a practical, sector-agnostic Model AI Governance Framework (2nd ed.) that stresses internal governance roles, calibrated human involvement, operations-level measures (bias minimisation, robustness, reproducibility, auditability), and stakeholder communication. In finance, MAS FEAT anchors fairness, ethics, accountability, and transparency as working principles rather than slogans—later backed by industry initiatives (e.g., Veritas) and supervisory papers. :contentReference[oaicite:1]{index=1}",
        
        "In the U.S., the NIST AI Risk Management Framework (AI RMF 1.0) provides the glue many enterprises actually use: GOVERN → MAP → MEASURE → MANAGE, with a companion playbook that translates the lifecycle into concrete actions and outcomes. OECD AI Principles sit above as intergovernmental guardrails (transparency, robustness/safety, accountability). Together, these sources shape what a defensible architecture looks like in practice. :contentReference[oaicite:2]{index=2}",
        
        // The human message — where teams really struggle
        "Where teams struggle isn’t a lack of smart people—it’s ambiguity. Governance is slow to land, guidance trickles out, and every jurisdiction has a different vocabulary. So the question that architects and risk leaders need to ask is simple: ‘If I ship this model today, can I explain it tomorrow, measure it next quarter, and defend it next year?’ If the answer is ‘maybe,’ the architecture probably needs work.",
        
        // Section: A control lens on common architectures
        "Let’s walk through common families of models—not to debate accuracy on Kaggle, but to stress-test them for control, audit, and explainability in enterprise reality.",
        
        // 1) Linear / Generalized Linear Models
        "1) **Linear/GLM (logistic/linear regression)** — These are the friendliest models during an audit. Coefficients map cleanly to features, partial dependence is intuitive, and global explanations aren’t a science project. Controls to prioritise: (a) data lineage and feature documentation (so coefficients aren’t misread), (b) versioned training configurations to keep reproducibility trivial, and (c) clear human-override rules for borderline scores. Where they struggle is capture of complex, nonlinear interactions. If your risk surface is nonlinear or highly interactive (e.g., fraud with temporal behaviour), you may lose accuracy.",
        
        // 2) Tree Ensembles
        "2) **Tree ensembles (GBTs, Random Forests)** — Strong tabular performance with some explainability overhead. Global logic is non-trivial, but instance-level explanations are workable with feature importance and SHAP-style attributions. From a governance angle: (a) keep feature definitions stable over time (drift on engineered features will break trust), (b) monitor thresholds/score distributions for concept drift, and (c) maintain a change log when you re-tune trees/learning rates. With high-risk uses, pair with a clear model card and post-deployment monitoring to avoid silent regressions.",
        
        // 3) Classical time-series & hybrids
        "3) **Classical time-series (ARIMA/ETS) & ML hybrids** — In forecasting use cases, these bring interpretability and operational predictability. Controls: (a) windowing/versioning of training data, (b) holidays and exogenous variables documented and justified (MAP in NIST terms), and (c) rollback procedures when structural breaks appear (MEASURE/MANAGE). Explainability is easier than with deep sequence models, which helps when decisions have financial or compliance implications.",
        
        // 4) Deep learning for tabular/time-series
        "4) **Deep neural networks for tabular/time-series** — Great capacity, but expensive in governance. You’ll need strong documentation (EU AI Act technical documentation and logging expectations are explicit for high-risk), robust drift detection across layers/embeddings, and careful access control around training artefacts. Human oversight design must be explicit—when do we trigger review, and what evidence is presented to the reviewer? Expect to invest in model cards and reproducible pipelines to keep this defensible. :contentReference[oaicite:3]{index=3}",
        
        // 5) CV and Speech models
        "5) **Computer vision & speech** — Data governance becomes the risk driver: provenance, consent, lawful basis, dataset bias, and robustness to adversarial examples. Architecture choice (e.g., CNN variants vs. transformers) won’t save you from poor dataset hygiene. Controls: (a) documented dataset curation, (b) robustness testing, (c) security hardening for adversarial inputs, and (d) fallback procedures when sensors degrade. These map directly to accuracy/robustness/cybersecurity expectations in the EU text. :contentReference[oaicite:4]{index=4}",
        
        // 6) NLP and LLMs
        "6) **NLP and LLMs** — Performance is seductive; governance is unforgiving. You must plan for hallucinations, prompt injection, sensitive data leakage, and rapid model drift as contexts change. Controls: (a) input/output logging with privacy safeguards, (b) retrieval-augmented generation (RAG) with citation checks if you need grounded answers, (c) allowlists/denylists and content safety filters, (d) explicit human-in-the-loop at decision points, (e) change control for model updates (including vendor model upgrades). For high-risk contexts, treating LLMs as assistive components—rather than autonomous decision-makers—keeps oversight aligned to expectations around human involvement and transparency. :contentReference[oaicite:5]{index=5}",
        
        // Design principle: start from obligations, not hype
        "A helpful mental model: start from obligations, then pick the architecture. The obligations are stable—risk management, data quality, documentation, logging, oversight, robustness, cybersecurity, transparency. Architectures that make these hard will cost you later. Architectures that make them easy will pay you back every audit cycle. :contentReference[oaicite:6]{index=6}",
        
        // Auditors don't read code; they read evidence
        "Auditors don’t read your code; they read your evidence. That means clear technical documentation (model purpose, scope, data suitability, evaluation results, limitations, known risks), versioned artefacts (datasets, features, model binaries), and traceable decisions (who approved, when, on what basis). This isn’t busywork—the EU AI Act and NIST both push towards traceability and record-keeping as the backbone of accountability. :contentReference[oaicite:7]{index=7}",
        
        // Human oversight as an architecture feature
        "Treat human oversight as an **architecture feature**, not an afterthought. In practice: design review screens that surface the right explanations at the right time; throttle model autonomy for high-impact decisions; route edge cases for manual review; and capture reviewer feedback as training signals. This is the spirit of PDPC’s calibrated human involvement and the EU AI Act’s human oversight requirements. :contentReference[oaicite:8]{index=8}",
        
        // Controls Checklist — mapped to frameworks
        "Here’s a short control checklist you can implement irrespective of architecture:",
        "• **Inventory & Classification** — Maintain an AI system registry with intended purpose, risk classification, owners, and data dependencies. (NIST GOVERN; EU database obligations for high-risk.) :contentReference[oaicite:9]{index=9}",
        "• **Data Governance** — Document provenance, consent/lawful basis, suitability, and known biases. Keep dataset versions immutable. (EU data governance; PDPC operations management.) :contentReference[oaicite:10]{index=10}",
        "• **Technical Documentation** — Prepare model cards and technical docs before go-live; keep them in sync with releases. (EU Article 11; NIST docs & playbook.) :contentReference[oaicite:11]{index=11}",
        "• **Logging & Traceability** — Capture inputs/outputs, decisions, and system events with retention aligned to policy. (EU record-keeping; OECD traceability principle.) :contentReference[oaicite:12]{index=12}",
        "• **Human Oversight** — Define thresholds for escalation, reviewer roles, and override rationale capture. (EU oversight; PDPC human-in-the-loop.) :contentReference[oaicite:13]{index=13}",
        "• **Robustness & Security** — Test for drift, adversarial inputs, and feedback loops; plan fail-safes and rollback. (EU Article 15.) :contentReference[oaicite:14]{index=14}",
        "• **Post-Market Monitoring** — Instrument production to detect performance and behaviour changes; run periodic reviews. (EU post-market monitoring; NIST MANAGE.) :contentReference[oaicite:15]{index=15}",
        
        // Case-style contrasts: when to choose simpler models
        "**When to prefer simpler models:** If your decision is high-impact (credit, underwriting, fraud flags) and the business must explain outcomes to customers or regulators, a more interpretable model (GLM, calibrated trees) can lower governance debt. You ‘pay’ a modest accuracy tax to ‘buy’ much cheaper explainability and faster approvals. In my experience, this often accelerates time-to-value because you’re not stuck in endless sign-off loops.",
        
        // Case-style contrasts: when to choose complex models
        "**When to accept more complex models:** If the cost of error is low, the decision is assistive rather than determinative, or the performance gain is substantial (e.g., triaging unstructured text or vision inputs), deep models may be justified—provided you pair them with controls: strong documentation, shadow-mode trials, gating via human review, and rigorous monitoring. The point is not to avoid complexity; it’s to containerise its risk.",
        
        // Explainability tactics — practical and risk-based
        "Explainability should be **risk-based**. For low-impact tasks, global summaries and stability checks may be enough. For high-impact tasks, consider: (a) constrained models or monotonicity constraints, (b) explanation techniques validated on representative data (not cherry-picked), and (c) reviewer UX that avoids cognitive overload—too much ‘explainability’ can be as unhelpful as too little. This echoes the PDPC model’s emphasis on context-appropriate measures and the OECD’s proportionality around transparency. :contentReference[oaicite:16]{index=16}",
        
        // Documentation patterns that scale
        "Documentation that scales looks boring and repeatable: a single ‘model pack’ template (purpose, scope, data, features, training recipe, metrics, validations, limitations, controls, monitoring plan, HITL design, rollback). The EU AI Act’s technical documentation expectations and NIST’s GOVERN/MAP language make this a predictable habit rather than a heroic effort every release. :contentReference[oaicite:17]{index=17}",
        
        // Architecture patterns that help audits
        "Architecture patterns that consistently help in audits: (1) **Feature stores** with versioned transformations; (2) **Experiment tracking** for runs/artefacts; (3) **Model registry** with approvals and change logs; (4) **Canary/shadow deployments** with guardrails; (5) **Centralised monitoring** for drift and incidents; (6) **Immutable evidence logs** (hash-chained or WORM storage) to reduce disputes about ‘what actually happened.’ These aren’t fads; they’re the minimum viable governance backbone.",
        
        // Security is part of explainability — EU text supports this
        "Security is part of explainability because a system constantly fighting adversarial inputs is a system that behaves unpredictably. The EU AI Act explicitly calls out measures for robustness and cybersecurity, including protection against data/model poisoning, adversarial examples, and confidentiality attacks. If you’re relying on LLMs or external components, treat supply chain risk as a first-class threat. :contentReference[oaicite:18]{index=18}",
        
        // Human oversight design — UX and escalation
        "If you’ve ever sat with reviewers, you know the UX is often the real control. A good oversight screen: (a) explains the key drivers in plain language, (b) shows policy thresholds and confidence bands, (c) makes the override path clear, and (d) captures reviewer notes as evidence. This is how you turn ‘we have oversight’ into ‘we do oversight.’ It’s the difference regulators and auditors look for.",
        
        // Handling ambiguity across jurisdictions
        "Different regulators, same instincts. The EU structures requirements in law; Singapore operationalises with practical playbooks and self-assessment guides; NIST gives enterprises a lifecycle language; the OECD frames the principles. The naming differs, the substance converges: know your system, own the risks, show your work, and build for resilience. :contentReference[oaicite:19]{index=19}",
        
        // What ‘good’ looks like when governance is slow
        "When governance is slow or ambiguous, teams freeze. The antidote is a **portable core**: policy, inventory, documentation, oversight, monitoring, incident response. Choose architectures that make this core cheaper to operate. Simpler models when stakes are high and explanations matter; complex models when the use case is assistive or when you can strongly isolate risk.",
        
        // Closing — a human tone conclusion
        "At the end of the day, the architecture you choose should survive three conversations: with your customer (‘Why did this happen?’), with your auditor (‘Show me the evidence.’), and with your future self (‘What changed and why?’). If your design makes those conversations easier, you’re on the right track. If it makes them harder, it doesn’t matter how clever the model is—the governance debt will catch up."
      ]
    },
    "nlp-enterprise": {
      title: "Responsible NLP in the Enterprise: Data Sensitivity, Governance, and Real Deployment Challenges",
      image: nlpImg,
      date: "2025-08-15",
      readTime: "15 min read",
      category: "Responsible NLP",
      content: [
        "Natural Language Processing entered the enterprise quietly. It didn’t arrive with fanfare in research papers or flashy keynote demos. It slipped in through document classification tools, search enhancements, reconciliation scripts, summarizers, contract review accelerators, and customer support assistants. Today, NLP has spread into every corner of enterprise workflows because so much of business is text — emails, reports, memos, tickets, policies, logs, disclosures, forms, submissions, feedback, instructions, and correspondence. If language is how a business operates, NLP is inevitably how that business will scale.",
        
        "But unlike traditional software, NLP systems don’t behave in crisp, deterministic ways. They infer. They generalize. They compress patterns from data — including patterns we didn’t intend to encode. And this is where organizations start to feel uncomfortable. Because as soon as NLP touches internal communications, customer records, policies, legal language, claims data, medical reports, financial statements, audit logs, or identity documents, the technology is handling information with governance obligations, confidentiality expectations, and regulatory visibility.",
        
        "So the real question isn’t: “Can NLP solve this problem?” It usually can. The real question is: “Can we use NLP here in a way that is accountable, explainable, secure, and aligned with the obligations we already have?” That’s where responsible NLP becomes a discipline rather than a capability.",
        
        "Across regions, the regulatory direction is fairly consistent when it comes to AI systems that touch real people or real consequences. The EU AI Act classifies systems that influence rights, access, credit, benefits, assessments, or compliance as higher-risk, and places expectations around documentation, record-keeping, transparency, human oversight, robustness, and monitoring. Singapore’s Model AI Governance Framework (2nd Ed.) and MAS FEAT emphasize fairness, accountability, clarity on human involvement, robustness testing, and internal governance roles. The NIST AI Risk Management Framework frames this as a lifecycle: govern, map, measure, manage. And the OECD AI Principles have consistently pointed toward transparency, safety, and accountability as the baseline global expectations.",
        
        "What these have in common is not a checklist — it’s a stance. They assume that AI systems should be explainable in context, traceable over time, reviewable under challenge, and align to the organization’s responsibility to the people it affects.",
        
        "Nowhere is this tension more visible than in NLP deployments, because text data is messy, personal, contextual, and culturally loaded. When numbers are wrong, someone notices quickly. When language is interpreted incorrectly, it may take weeks to even realize something has gone off course.",
        
        "Enterprise NLP deployments generally fall into a few categories:",
        "• **Document classification and routing** — bills of lading, claims, policy documents, invoices, forms, legal submissions, medical records.",
        "• **Information extraction and entity recognition** — extracting key fields (names, addresses, dates, references, clauses).",
        "• **Search, retrieval, and knowledge assistance** — internal knowledge bases, employee help desks, legal or technical search.",
        "• **Summarization and drafting support** — meeting minutes, compliance reports, customer support replies.",
        
        "Each of these introduces governance implications.",
        
        "Document classification matters when misclassification delays or incorrectly routes decisions. If the document is tied to benefits, medical care, legal response, underwriting, or compliance filing, errors are not merely efficiency losses — they affect outcomes. So explainability becomes necessary not for curiosity, but for accountability.",
        
        "Information extraction raises data lineage questions: what did the model extract, what did it ignore, and what does the system do when confidence is low? Enterprises often assume that extraction is deterministic because it looks procedural. It is not. It is inferential. Meaning: the organization needs clear thresholds for uncertainty and fallbacks to human validation.",
        
        "Search and retrieval systems seem harmless but can leak confidential data if access controls are not aligned with retrieval scope. A well-designed RAG system does not simply retrieve 'relevant documents.' It retrieves only documents the user is authorized to see. Retrieval without authorization control is a governance violation waiting to happen.",
        
        "Summarization systems raise questions about representation. Summaries are interpretations. They reflect model priors. If summaries are used for decision-making, there must be traceability to source text and a clear indication that the summary is supplemental, not authoritative, unless reviewed and approved.",
        
        "This is where the organization has to make a pivotal shift: moving from 'model accuracy' to 'decision reliability.' Because correctness is not what keeps leaders awake at night; accountability is.",
        
        "Let’s address the cultural challenge directly: many enterprises deploy NLP first and consider governance later because governance feels slower. But governance becomes far slower and costlier when introduced reactively — after a regulatory question, a complaint, an adverse event, or an internal audit point. The fastest way to ship is to build a traceable path from day one.",
        
        "In my experience working in risk and AI governance, NLP deployments break down in four places more often than anywhere else:",
        "1) **Unclear data boundaries** — Teams assume 'internal data is safe' without checking sensitivity, rights, retention, or lawful basis.",
        "2) **Lack of confidence thresholds** — Models operate even when they are unsure, silently introducing errors that accumulate.",
        "3) **No defined human review role** — Humans are 'in the loop' in theory but without clear instructions on when and how to intervene.",
        "4) **No monitoring after deployment** — Once in production, performance is assumed static, but language patterns shift continuously.",
        
        "Addressing these requires practices that are boring — but they scale:",
        
        "• **Data classification and lawful basis check before model training** — Not after deployment. Not as a one-time control. As part of data selection workflows.",
        "• **Confidence-based routing policies** — When confidence < threshold → escalate to human review → capture correction → feed back into retraining.",
        "• **Role clarity in human oversight** — Who reviews edge cases? What evidence do they see? What notes do they record? How is override logged?",
        "• **Post-deployment monitoring** — Track drift not just in vocabulary and sentence structure, but in model confusion cases and frequency of human escalation.",
        
        "This is not about making NLP 'safe.' It’s about making outcomes accountable.",
        
        "Consider a real example pattern seen across many organizations:",
        "An NLP system assists customer service representatives by drafting response suggestions. The model is technically 'assistive' because the human clicks send. But in reality, the human quickly adapts to trust the suggestions. Over time, the model becomes the primary source of tone, policy interpretation, and exception logic. If the model shifts in behavior after an update, the human will not notice immediately — but the organization is already responsible for the outcome. So the governance obligation was always there.",
        
        "This is where MAS FEAT and PDPC’s calibrated human involvement guidance becomes useful: humans should review with awareness, not blind acceptance. The oversight interface must surface reasoning cues and limitations — not just output.",
        
        "On the technical side, responsible NLP deployment increasingly uses retrieval-augmented generation (RAG), not free-form LLM prompting. RAG grounds the output in enterprise-approved documents, policies, or knowledge sources. This is not merely a performance optimization — it is a governance control. It ensures that the model is not 'inventing' answers but pointing to traceable sources. And traceability is the currency of accountability.",
        
        "But RAG has to be designed correctly. The retrieval layer must enforce authorization. It must log retrieval context. It must restrict document scope to approved, version-controlled sources. Without these, retrieval is just structured guessing.",
        
        "Enterprises that deploy NLP responsibly tend to converge on a set of operational practices:",
        "• Maintain a **knowledge base with version history**, so policy updates do not silently shift decisions.",
        "• Keep **evidence logs** of model inputs, retrieval results, and outputs, with timestamps and correlation IDs.",
        "• Use **shadow modes** before rollout — compare human decisions vs. model-assisted decisions without affecting outcomes.",
        "• Treat **model updates as controlled changes**, with approvals, rollback points, and post-deployment checks.",
        
        "These practices are not new. They mirror configuration management, change control, and operational resilience — areas enterprises already understand well. Responsible NLP is not an entirely new discipline. It is the extension of established operational accountability principles into language models.",
        
        "And this is the core idea:",
        "**NLP is not a model problem. NLP is an operational governance problem.**",
        
        "The models are strong. The architectures are evolving. The tooling is improving. The vulnerability, almost always, is organizational clarity.",
        
        "So the question every enterprise NLP leader should ask is:",
        "“If we deploy this system today, how will we defend its decisions in six months — when the model has changed, the data has changed, the context has changed, and the person who deployed it has moved to another role?”",
        
        "If the answer is that the system is explainable, documented, monitored, reviewable, and backed by evidence — that is responsible NLP.",
        
        "If the answer is that we hope nothing goes wrong — then it already has.",
        
        "The future of NLP in the enterprise is not more powerful models. It is more **governed models** — ones that can be questioned, inspected, understood, corrected, and improved without ceremony or crisis.",
        
        "Because real trust is not built by making the system perfect. It is built by making the system accountable."
      ],
    },
    "data-science-strategy": {
      title: "Data Privacy in the Age of AI: The Human Cost of Optimization",
      image: dataScienceImg,
      date: "2025-03-30",
      readTime: "20–25 min read",
      category: "Data Privacy",
      content: [
        "We used to talk about privacy as if it were simply a matter of protecting personal information from outsiders. Lock the data, encrypt the files, set access controls, and we believed the problem was managed. But the arrival of AI—particularly large-scale machine learning models, enterprise analytics platforms, and powerful content generation systems—has changed the nature of privacy itself. The threat is no longer just unauthorized access. The threat is inference, linkage, reconstruction, amplification, and misuse of data in ways the individual never consented to and could not have reasonably anticipated.",
        
        "AI systems learn from patterns in data. But data is not neutral. It is the record of people’s choices, identities, relationships, histories, health, finances, vulnerabilities, habits, and thousands of small details that, when combined, paint a picture far sharper than any single data point. When models learn from this data, they do not just learn generalizable patterns. Sometimes, they learn the person.",
        
        "We have seen this play out repeatedly in the past decade. The Cambridge Analytica scandal, publicly reported in 2018, showed how seemingly simple social data could be used to profile and micro-target individuals at scale for political influence campaigns. The core lesson was not that data had been misused—it was that the predictive and persuasive capabilities of such profiling were stronger than the public had understood.",
        
        "The U.S. Office of Personnel Management breach in 2015 exposed sensitive personal records of millions of federal employees, including biometric identifiers such as fingerprints—information that cannot be changed like a password. That incident underscored that biometric data, once leaked, remains permanently compromised, creating a lifelong security and identity risk.",
        
        "Facial recognition controversies have further highlighted this tension. Investigative reporting in 2020 described how Clearview AI scraped billions of images from the open web to build a facial recognition system without the knowledge or consent of the individuals whose faces were being indexed. The issue here was not just legality—it was the asymmetry of capability. When recognition becomes effortless, surveillance becomes ambient.",
        
        "In India, multiple media reports have described incidents where access to Aadhaar data or verification services was being offered by unauthorized parties. Even when underlying systems remain secure, the ecosystem around them—vendors, access brokers, data requesters—can become the weak link. It is the ecosystem risk, not just the database risk, that matters.",
        
        "So we have arrived at an era where privacy risk is not about one large leak—it is about continuous exposure. A trail of breadcrumbs across apps, services, institutions, platforms, and interactions, any one of which may seem harmless, but together form a profile that is more detailed than anyone intended to disclose.",
        
        "This risk becomes more consequential when combined with AI models capable of inference. A machine does not need to store your medical records to infer your likelihood of a medical condition. It does not need explicit access to your financial statements to infer vulnerability or distress. Inference is deeply powerful—and deeply difficult to regulate.",
        
        "Regulations have begun to respond. The EU General Data Protection Regulation (GDPR) was one of the first major legal frameworks to clearly define personal data, special category data (including biometric data), and rights around consent, purpose limitation, access, and erasure. The EU AI Act builds on that by categorizing applications that use biometric identification, emotion inference, or systems influencing access to essential services as high-risk, requiring documentation, oversight, monitoring, and human involvement.",
        
        "Singapore’s PDPC Model AI Governance Framework (2nd ed.) emphasizes internal governance roles, calibration of human involvement, disclosure where appropriate, and robust data governance practices. The OECD AI Principles call for transparency, safety, and accountability. The NIST AI Risk Management Framework encourages organizations to understand how data is collected, transformed, used, and linked across contexts.",
        
        "These frameworks share a crucial insight: privacy is not just about confidentiality—it is about power. The power to profile. The power to infer. The power to predict. The power to persuade. And when systems that hold this power are deployed at scale without meaningful transparency or human control, the asymmetry between individual and institution widens dramatically.",
        
        "Deepfakes deepen this challenge. The technology can now replicate voices and faces convincingly using publicly available recordings. The risk here is not only misinformation—it is identity distortion. When your likeness can be reproduced without your consent, your identity becomes negotiable in digital space. The boundary between evidence and fabrication becomes blurred, and trust—a foundational social resource—becomes more fragile.",
        
        "The harder problem is that many of these systems are not malicious by design. They are the result of optimization. Enterprises optimize for efficiency, scale, accuracy, or personalization. But optimization without guardrails tends to seek more data, more inference, more prediction. And people become objects under analysis rather than subjects with rights.",
        
        "The human cost is subtle but real. When individuals know—or even suspect—that their data is being analyzed in ways they cannot see or influence, they change behavior. They self-censor. They withdraw. They comply. They avoid search queries that reveal vulnerability. Privacy is not about hiding—it is about freedom to act without fear of automated interpretation.",
        
        "To address this, organizations need to adopt a clear posture: data is not just input. Data is identity, memory, and autonomy. Handling it poorly is not a technical failure—it is an ethical one.",
        
        "Practically, responsible data privacy in the age of AI requires:",
        "• Clear data minimization — collect only what is necessary, not everything that is available.",
        "• Purpose limitation — explicitly state what the data is used for, and enforce technical controls that prevent secondary use.",
        "• Transparency — communicate what models do with data, in plain language.",
        "• Human review — ensure meaningful oversight where outcomes have personal or social consequence.",
        "• Monitoring — track model behavior over time to detect drift, misuse, or unintended inference.",
        "• Redress — provide real mechanisms for challenge, correction, and withdrawal.",
        
        "Organizations often ask: is this too slow? Too heavy? Too bureaucratic? The answer is that the alternative is not simplicity. The alternative is loss of trust. And trust, once lost, is far more expensive to rebuild than it ever was to protect.",
        
        "We live in a moment where AI capability is advancing rapidly, but social and governance norms are still forming. In this gap, individuals are exposed. The responsibility is not to halt innovation, but to pace it with accountability.",
        
        "The future of privacy in the age of AI will belong to the organizations that treat personal data not as a resource to be extracted, but as something entrusted."
      ]
    },
    "advanced-risk-analytics": {
    title: "What Actually Works in AI Risk Evaluation: A Practitioner’s Review of Tools, Gaps, and What We Still Need",
    image: riskMgmtImg,
    date: "2025-11-02",
    readTime: "18 min read",
    category: "Risk Analytics",
    content: [
      "If you’re shipping AI systems in real enterprises—banks, insurers, critical infrastructure—you already know the feel of governance moving slower than engineering. We end up with a patchwork of point tools: one for drift, one for data quality, another for fairness, a dashboard for explanations, and a stack of PDFs for auditors. This piece is a field review of what’s solid, what’s noisy, and the practical architecture that actually helps you pass audits while keeping models useful.",
      "First, the north stars. Three references shape most enterprise expectations today: (1) the EU AI Act, which imposes requirements on high-risk systems—technical documentation (Annex IV), event logging, human oversight, transparency, robustness and cybersecurity; (2) NIST’s AI Risk Management Framework (AI RMF 1.0) with its GOVERN–MAP–MEASURE–MANAGE functions; and (3) Singapore’s PDPC Model AI Governance Framework (2nd ed.), a pragmatic playbook on internal governance, human-in-the-loop design, and ops. These documents aren’t ‘nice to have’—they’re what your auditors, counsel, and risk committees will quote back to you.", 
      "Concretely, the EU AI Act requires technical documentation before launch and kept current, with minimum elements defined in Annex IV, plus capabilities for automatic logging to ensure traceability, and effective human oversight, accuracy, robustness and cybersecurity. That’s the bar for high-risk systems. :contentReference[oaicite:0]{index=0}",
      "NIST’s AI RMF 1.0 is voluntary but widely adopted. It’s useful because it maps the lifecycle into functions (Govern–Map–Measure–Manage) and pairs these with outcomes and a Playbook of suggested actions—not a checklist, but concrete prompts you can operationalize across policy, risk, and engineering. :contentReference[oaicite:1]{index=1}",
      "Singapore’s PDPC Model AI Governance Framework complements both by giving practitioner-level guidance: clear roles and responsibilities, risk-based explainability, determining the degree of human involvement, and engagement with stakeholders. It’s tech- and sector-agnostic but operationally specific—handy when you need to design controls with product teams. :contentReference[oaicite:2]{index=2}",
  
      "Given those anchors, here’s how I judge tools: (1) can they produce evidence aligned to EU AI Act Annex IV, logging, and human oversight? (2) do they help me hit NIST’s ‘MEASURE’ and ‘MANAGE’ outcomes without building a parallel process? (3) will they survive audit questions—that is, can I show controls, thresholds, approvals, and monitoring trails without a week of manual reconstruction?",
      "I’ll group the ecosystem into six buckets: (A) governance & assurance (policy-to-evidence), (B) model monitoring & drift, (C) fairness & harm analysis, (D) explainability, (E) data quality, and (F) documentation & transparency artifacts. No single product covers everything well, so the trick is choosing a backbone and stitching in the rest without creating a compliance Rube Goldberg machine.",
  
      "A. Governance & assurance (policy-to-evidence). On the commercial side, platforms like IBM’s AI governance (watsonx.governance) position themselves as control planes for policy, lineage, approval workflows, risk scoring, and audit artifacts. The value here is mapping organizational policy to live assets and surfacing evidence when auditors ask ‘show me’. The gap: depth of technical signals often still depends on integrations with your monitoring stack. :contentReference[oaicite:3]{index=3}",
      "NIST AI RMF profiles—including the Generative AI Profile—are increasingly used as ‘control catalogs’ you can map to. If your governance tool lets you crosswalk RMF outcomes to your artifacts (tickets, model cards, test results), you reduce manual collation. That alignment is explicitly supported by NIST’s Playbook resources. :contentReference[oaicite:4]{index=4}",
      "For financial services, Singapore’s MAS-led Veritas Toolkit is notable because it connects FEAT principles (Fairness, Ethics, Accountability, Transparency) to practical assessment methodologies piloted by major banks. If you operate regionally, this becomes a reference model to prove responsible AI across geographies. :contentReference[oaicite:5]{index=5}",
  
      "B. Model monitoring & drift detection. This is where most teams start. Mature options include commercial platforms like Fiddler and Arize, and open-source stacks like Evidently. The common baseline: data integrity checks, performance tracking, population/feature drift, and alerting. Strengths: out-of-the-box drift metrics and visualization; weak spots: ownership of remediation workflows and integration into risk governance (approvals, thresholds in policy terms). :contentReference[oaicite:6]{index=6}",
      "A healthy monitoring setup captures: (1) data drift (input distributions), (2) concept drift (target relationships), (3) performance over segments, and (4) post-deployment integrity (missingness, schema, spikes). Evidently’s docs make it clear how to implement these as repeatable reports, which is valuable when auditors ask for a time-boxed sample. :contentReference[oaicite:7]{index=7}",
  
      "C. Fairness & harm analysis. Microsoft’s Fairlearn is a reputable, open toolkit: it frames parity definitions (demographic parity, equalized odds, true-positive-rate parity) and gives group metrics that match how auditors think about differential impact. Importantly, Fairlearn’s own documentation highlights trade-offs—you cannot optimize for all fairness notions simultaneously; you have to choose in context. That realism helps in governance committees. :contentReference[oaicite:8]{index=8}",
      "Regulated teams in APAC often use Fairlearn-style metrics alongside FEAT and Veritas guidance, because FEAT expects fairness to be justifiable and validated, with stronger controls for higher-impact models. That expectation is documented in FEAT publications and derivative guidance. :contentReference[oaicite:9]{index=9}",
  
      "D. Explainability. SHAP remains the de-facto standard for feature attribution across tabular and many ML contexts. It’s well-documented and defensible academically, which matters in regulated settings. The limitation: attribution isn’t ‘reasoning’—you still need domain explanations and controls for when global and local attributions conflict. :contentReference[oaicite:10]{index=10}",
      "At the product level, the Microsoft Responsible AI Toolbox (and its Responsible AI Dashboard) consolidates error analysis, fairness, and explainability in one place. It’s strongest when you treat it as a workbench for analysts to stress-test models prior to deployment, then export findings into your governance system. :contentReference[oaicite:11]{index=11}",
  
      "E. Data quality and testing. Great Expectations is the open-source mainstay for declarative data tests: schemas, ranges, uniqueness, referential integrity. It gives you machine-verifiable expectations and data docs—which auditors love because they can sample evidence directly. The key is to wire these tests to deployment gates, not just nightly reports. :contentReference[oaicite:12]{index=12}",
      "Pair data tests with drift monitors and retain the run history. When the EU AI Act talks about record-keeping and traceability, this is exactly the kind of ‘why we trusted the input data on that day’ evidence you’ll need. :contentReference[oaicite:13]{index=13}",
  
      "F. Documentation & transparency artifacts. Model Cards have emerged as the lingua franca for system-level transparency—intended use, data, performance by segment, limitations, ethical considerations. Their original guidance and subsequent platform implementations make them a safe default for publishing risk-aware documentation. The trick is to keep cards live and versioned; stale cards are worse than none. :contentReference[oaicite:14]{index=14}",
      "Under the EU AI Act, technical documentation has a very specific meaning: pre-market, up-to-date, and containing the Annex IV minimums. Don’t conflate Model Cards with Annex IV—they’re related, but Annex IV adds conformity, risk management, testing, and lifecycle traceability requirements. Your governance system should generate both. :contentReference[oaicite:15]{index=15}",
  
      "How to assemble this into a practical architecture:",
      "1) Controls backbone (governance layer). Use your GRC/AI-governance platform (or a well-structured internal registry) to house policies, RMF/FEAT mappings, approvals, and evidence pointers. Align your control statements to NIST AI RMF outcomes so every model’s ‘why we trust it’ rolls up to a standard set of outcomes. :contentReference[oaicite:16]{index=16}",
      "2) Monitoring mesh (signals layer). For tabular/ML: pick one monitoring platform (Fiddler/Arize or equivalent) and standardize drift/performance metrics; for data quality: codify Great Expectations suites; for fairness: include Fairlearn notebooks in pre-prod gates; for explainability: SHAP reports in CI. Keep all reports artifacted and linked back to the registry. :contentReference[oaicite:17]{index=17}",
      "3) Documentation flow. Generate Model Cards automatically from the registry and monitoring outputs. Separately, maintain EU-style technical documentation including risk management, testing summaries, logging design, and oversight procedures—the Annex IV backbone—so you’re audit-ready for high-risk classes. :contentReference[oaicite:18]{index=18}",
      "4) Logging & oversight. Design for automatic event logging (who used the system, when, data reference versions, key decisions thresholds crossed) and define ‘human-in/over-the-loop’ points with clear escalation. These are explicit requirements under the EU AI Act for high-risk systems and are supported by PDPC’s guidance on determining the level of human involvement. :contentReference[oaicite:19]{index=19}",
  
      "What’s mature today:",
      "• Data quality and drift detection are largely solved problems—if you implement and enforce them. Evidently and Great Expectations cover a lot of ground; commercial tools add scalability and managed alerting. :contentReference[oaicite:20]{index=20}",
      "• Fairness metrics are usable and audit-defensible as diagnostics (e.g., parity metrics), especially when paired with FEAT/Veritas processes in finance. :contentReference[oaicite:21]{index=21}",
      "• Explainability has reliable primitives (SHAP), but you still need domain narratives and review processes; tools won’t decide policy trade-offs for you. :contentReference[oaicite:22]{index=22}",
  
      "What’s still bumpy:",
      "• Policy-to-runtime traceability. Governance systems often live in docs and tickets; monitoring lives in notebooks and dashboards. The join is brittle. NIST’s Playbook encourages this linkage, but most orgs haven’t automated it. :contentReference[oaicite:23]{index=23}",
      "• Human oversight as code. Many teams define oversight in policy, but don’t encode it: who can override, what thresholds trigger pause, what to log. The EU AI Act expects concrete oversight design, not just a statement of intent. :contentReference[oaicite:24]{index=24}",
      "• Annex IV readiness. Technical documentation is frequently ad-hoc. Treat Annex IV like a ‘security controls’ package for AI: versioned, reproducible, and tied to releases. :contentReference[oaicite:25]{index=25}",
  
      "Short reviews of widely used tools (light but frank):",
      "• IBM AI Governance (watsonx.governance). Strength: enterprise-grade policy registry, lineage, and audit trails; designed for regulated shops. Watch-outs: depth of technical telemetry may rely on your monitoring integrations. Good governance backbone. :contentReference[oaicite:26]{index=26}",
      "• Fiddler & Arize. Strength: production monitoring for drift and performance with strong visual diagnostics. Watch-outs: ensure alerts map to governance actions (tickets, approver playbooks); otherwise they remain ‘interesting charts’. :contentReference[oaicite:27]{index=27}",
      "• Evidently AI (OSS). Strength: transparent metrics and reproducible reports; excellent for audit samples. Watch-outs: you must own scaling, storage, and alerting. :contentReference[oaicite:28]{index=28}",
      "• Fairlearn (OSS). Strength: principled fairness metrics and reductions; clear documentation on trade-offs. Watch-outs: needs organizational guardrails to pick the ‘right’ metric. :contentReference[oaicite:29]{index=29}",
      "• SHAP (OSS). Strength: industry-standard attributions across model classes. Watch-outs: don’t oversell attributions as explanations—pair with domain review. :contentReference[oaicite:30]{index=30}",
      "• Great Expectations (OSS). Strength: declarative, test-like data quality with audit-friendly artifacts. Watch-outs: remains separate from ML monitoring unless you integrate. :contentReference[oaicite:31]{index=31}",
      "• Microsoft Responsible AI Toolbox / Dashboard. Strength: one workbench for error analysis, fairness, and explanations pre-deployment. Watch-outs: operationalization (pushing findings into tickets and controls) is on you. :contentReference[oaicite:32]{index=32}",
      "• Model Cards. Strength: the shared transparency artifact, recognized by practitioners and researchers. Watch-outs: needs automation to stay current; supplement for Annex IV in the EU. :contentReference[oaicite:33]{index=33}",
  
      "Recommendations I’ve seen work across regulated programs:",
      "1) Treat your governance framework as code. Start with NIST AI RMF outcomes; translate each into a control with (a) measurable signal(s), (b) frequency, (c) thresholds, (d) approver. Put this in a repo and expose it via your governance tool so audits are reproducible. :contentReference[oaicite:34]{index=34}",
      "2) Make oversight enforceable. Build human-in/over-the-loop into runtime: policy gates in CI/CD, canary deployments with pause conditions, escalation runbooks, and required approvals for risk-elevating changes. This aligns directly with EU AI Act oversight and logging expectations. :contentReference[oaicite:35]{index=35}",
      "3) Separate annex-grade documentation from narratives. Keep Annex IV packs machine-assembled: risk assessment, test results, logs design, monitoring plans, contact points. Publish a human-readable Model Card for users. :contentReference[oaicite:36]{index=36}",
      "4) Use Veritas/FEAT where relevant. If you operate in Singapore or serve APAC finance, piggyback on Veritas’ assessment methodologies—there’s credibility in the pilot-tested approach. :contentReference[oaicite:37]{index=37}",
  
      "Where the market needs to go next:",
      "• Control-aware monitoring. Tools should not only detect drift but evaluate it against declared policy thresholds (e.g., ‘population stability index > X for protected group triggers automatic hold and approver notification’). This would collapse the gap between dashboards and governance outcomes. (RMF ‘MEASURE → MANAGE’ alignment.) :contentReference[oaicite:38]{index=38}",
      "• Annex IV compilers. Think ‘IaC for governance’: given your registry, monitoring artifacts, and approvals, generate the Annex IV tech-doc automatically for each release of a high-risk model. That removes the month-end scramble. :contentReference[oaicite:39]{index=39}",
      "• Human-oversight orchestration. A pluggable layer that enforces oversight patterns (human-in-the-loop, over-the-loop) with auditable UI events, role constraints, and evidence capture to satisfy Article 14 oversight and Article 12 logging. :contentReference[oaicite:40]{index=40}",
  
      "Bottom line: there’s no single ‘AI risk tool’—and there shouldn’t be. A pragmatic stack couples (a) a governance backbone mapped to NIST AI RMF, (b) robust monitoring for data/model behavior, (c) fairness and explainability workbenches, (d) rigorous data testing, and (e) living documentation that meets transparency needs and Annex IV demands. Build for evidence first; the rest becomes easier.",
      "If you structure it this way, governance stops being a speed bump and starts acting like engineering hygiene—exactly where it belongs."
    ]
  },
  };

  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = Object.entries(blogContent)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-block mb-8">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Cover Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg mb-8 shadow-lg"
        />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph: string, index: number) => (
            <p key={index} className="mb-6 text-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Note */}
        <Card className="border-border bg-gradient-accent mt-12">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              Prakash Sarangi is a Software Engineer specializing in Artificial Intelligence, 
              Machine Learning, and Risk Management. With extensive experience in building 
              enterprise AI systems, Prakash shares insights on emerging technologies and 
              practical implementation strategies.
            </p>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                <Card className="border-border hover:shadow-lg transition-shadow h-full">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {relatedPost.category}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogPost;
