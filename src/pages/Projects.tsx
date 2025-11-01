import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
const projects = [
  {
    title: "Adaptive AI Model Risk Governance (LLM-RAG) — MVP v3",
    description:
      "An anonymized, policy-driven governance MVP that evaluates LLM outputs for groundedness, hallucination, prompt-injection, PII, and latency risks. Uses configurable weights and auto-actions to support privacy-safe governance without exposing client data.",
    tags: ["Python", "FastAPI", "RAG", "SQLite", "React", "Risk Scoring"],
    category: "AI Governance & Responsible AI",
    features: [
      "Configurable policy weights and automated actions (freeze, ticket, notify)",
      "Composite risk bands with contributor breakdowns",
      "Evaluator for recall/coverage/citation correctness (RAG)",
      "Retriever drift monitor (Recall@k over time)",
      "Hash-chained evidence logs for auditability",
      "Lightweight HTML dashboard for visibility"
    ],
  },
  {
    title: "Sales Forecasting & Uplift Modeling — AI/ML Capstone",
    description:
      "Capstone project (PGP in AI/ML) delivering an end-to-end pipeline for sales forecasting and campaign impact analysis. The solution emphasizes explainability and governance—clean feature engineering, train/validation split discipline, and traceable metrics.",
    tags: ["Python", "Pandas", "scikit-learn", "XGBoost", "Explainability"],
    category: "Applied Machine Learning",
    features: [
      "Data cleaning, leakage checks, and robust feature engineering",
      "Modeling for demand forecasting and campaign uplift",
      "Cross-validation with reproducible pipelines",
      "Explainability (feature importance / SHAP-style insights)",
      "Governance artifacts: model card, metrics log, and run notes"
    ],
  },
  {
    title: "RIA — Risk Impact Assessment (Agile Lifecycle)",
    description:
      "An agile, privacy-safe assessment approach to calculate project risk during development, produce progress reports, and track open risks to closure. Focuses on control ownership, mitigation or risk acceptance, and auditable decisions prior to release.",
    tags: ["GRC", "Risk Scoring", "Agile", "Dashboards", "Workflows"],
    category: "Risk & Governance",
    features: [
      "Lightweight questionnaires mapped to control categories",
      "Quantified risk scoring with thresholds and watchlists",
      "Progress reports and risk aging views",
      "Mitigation vs. risk acceptance workflow with approvals",
      "Exportable evidence trail for audits and sign-offs"
    ],
  },
  {
    title: "QRCA/QRSA — Quick Regulatory & Risk Self-Assessment",
    description:
      "A self-assessment toolkit to benchmark posture against key regulations and internal baselines without disclosing sensitive information. Produces prioritized gaps and control recommendations to accelerate remediation sprints.",
    tags: ["Compliance", "Assessment", "Python", "FastAPI", "SQLite"],
    category: "Compliance & Assurance",
    features: [
      "Adaptive questionnaires aligned to MAS TRM/FEAT, GDPR, NZ IPP (non-exhaustive)",
      "Category weights and criticality thresholds",
      "Gap analysis with recommended controls and quick-wins",
      "Evidence capture and export (CSV/PDF) for audits",
      "Action roadmap with owners and target dates"
    ],
  },
];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portfolio focused on AI Governance, Applied ML, and Risk & Compliance tooling. 
            Descriptions are privacy-safe and high-level to honor confidentiality while highlighting measurable outcomes and governance rigor.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h2 className="text-2xl mb-3">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2 text-primary">Key Features:</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <Card className="border-border bg-gradient-accent inline-block">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Links to GitHub repositories and live demos can be added upon project deployment.
                <br />
                Contact me for detailed project documentation and case studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
