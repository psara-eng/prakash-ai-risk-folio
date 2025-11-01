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
      title: "Natural Language Processing in Enterprise Applications",
      image: nlpImg,
      date: "2025-08-28",
      readTime: "5 min read",
      category: "NLP",
      content: [
        "Natural Language Processing has moved from research labs to become a cornerstone technology in enterprise applications. From automating customer service to analyzing market sentiment, NLP is creating tangible business value.",
        "Document understanding and information extraction are among the most impactful applications. NLP systems can process contracts, reports, and emails at scale, extracting structured information and identifying key entities and relationships.",
        "Sentiment analysis helps businesses understand customer opinions and market trends. By analyzing social media, reviews, and feedback, companies can make data-driven decisions about products, services, and brand strategy.",
        "The future of enterprise NLP lies in multilingual models, domain-specific fine-tuning, and seamless integration with business processes. As models become more capable, we'll see NLP becoming invisible infrastructure that just works.",
      ],
    },
    "data-science-strategy": {
      title: "Data Science for Strategic Decision Making",
      image: dataScienceImg,
      date: "2025-08-20",
      readTime: "11 min read",
      category: "Data Science",
      content: [
        "Data science has evolved from descriptive analytics to prescriptive insights that drive strategic decisions. Organizations that effectively leverage data science gain competitive advantages through faster, more informed decision-making.",
        "Predictive modeling enables businesses to anticipate market trends, customer behavior, and operational challenges. These insights allow proactive rather than reactive strategies, reducing risks and capitalizing on opportunities.",
        "Statistical rigor is essential for trustworthy insights. Proper experimental design, hypothesis testing, and confidence intervals ensure that business decisions are based on sound statistical evidence rather than spurious correlations.",
        "The key to successful data science initiatives is alignment with business objectives. Technical excellence matters, but the real value comes from translating complex analyses into actionable business strategies that stakeholders can understand and implement.",
      ],
    },
    "advanced-risk-analytics": {
      title: "Advanced Risk Analytics with Machine Learning",
      image: riskMgmtImg,
      date: "2024-02-15",
      readTime: "13 min read",
      category: "Risk Analytics",
      content: [
        "Advanced risk analytics combines traditional risk management principles with modern machine learning techniques. This fusion enables more accurate risk assessment and more effective mitigation strategies.",
        "Credit risk modeling has been transformed by ML algorithms that can analyze complex patterns in borrower behavior, market conditions, and economic indicators. These models often outperform traditional scoring methods in prediction accuracy.",
        "Operational risk assessment benefits from anomaly detection algorithms that can identify unusual patterns in transaction data, system logs, or employee behavior. Early detection of operational risks can prevent significant losses.",
        "The challenge lies in model interpretability and regulatory compliance. Risk models must not only be accurate but also explainable to regulators and stakeholders. Techniques like SHAP values and LIME help bridge this gap, providing insights into model decisions while maintaining predictive power.",
      ],
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
