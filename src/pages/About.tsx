import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";

const About = () => {
const highlights = [
  {
    icon: Briefcase,
    title: "AI Governance & Model Risk",
    description: "Designed and operationalized AI governance and risk controls across APAC and EU programs, establishing accountability, documentation and monitoring standards."
  },
  {
    icon: GraduationCap,
    title: "Technology Risk & Compliance",
    description: "Led SOX/GDPR control assurance and 2LoD oversight; improved audit readiness and reduced findings through structured testing and remediation."
  },
  {
    icon: Target,
    title: "Resilience & BCP/DR",
    description: "Defined RTO/RPO targets and uplifted continuity strategies; strengthened operational resilience for business-critical platforms."
  },
  {
    icon: Award,
    title: "Consulting Outcomes",
    description: "Governance maturity uplift, fewer audit issues, clearer control ownership, and regulator-ready evidence trails that scale with enterprise AI."
  },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground">
            AI Governance, Responsible AI & IT Risk Consultant — advising enterprises on operationalizing Responsible AI, 
            strengthening technology risk controls, and improving audit & regulatory readiness.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="mb-6 text-primary">Professional Summary</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I help organizations build trustworthy, compliant, and audit-ready AI systems. 
                  With 18+ years across BFSI and FinTech, my work centers on AI governance frameworks, 
                  model risk controls, regulatory alignment, and technology risk oversight across global programs.
                </p>
                <p>
                  I design and operationalize Responsible AI practices—
                  lifecycle governance, accountability, documentation, explainability, 
                  and monitoring—aligned to MAS FEAT, GDPR, China TC260, New Zealand IPP, and the Korea AI Act, 
                  while partnering with security, data, and audit functions for measurable risk reduction.
                </p>
                <p>
                  My consulting approach is outcome-driven: uplift governance maturity, reduce audit findings, 
                  tighten resilience (BCP/DR), and establish clear lines of control ownership and evidence. 
                  The result is AI that scales responsibly—with documentation, traceability, and controls 
                  that stand up to regulatory and independent audit scrutiny.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Highlights */}
        <section className="mb-16">
          <h2 className="mb-8 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <highlight.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <Card className="border-border bg-gradient-accent">
            <CardContent className="p-8">
              <h2 className="mb-6 text-primary">Technical Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg mb-3 font-semibold">AI Governance & Responsible AI</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI lifecycle controls & accountability</li>
                    <li>• Policy, usage standards & documentation</li>
                    <li>• Explainability, traceability & monitoring</li>
                    <li>• Model risk scoring & review workflows</li>
                    <li>• MAS FEAT, GDPR, TC260, NZ IPP, Korea AI Act</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-3 font-semibold">Technology Risk & Compliance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• SOX/GDPR control design & testing</li>
                    <li>• 2LoD oversight & risk monitoring</li>
                    <li>• Audit readiness & evidence management</li>
                    <li>• Data protection, privacy & security controls</li>
                    <li>• Issue remediation & governance reporting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-3 font-semibold">Resilience & Continuity (BCP/DR)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• RTO/RPO definition & strategy</li>
                    <li>• Continuity playbooks & recovery testing</li>
                    <li>• Operational resilience uplift</li>
                    <li>• Crisis & incident response alignment</li>
                    <li>• Regulatory evidence & metrics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-3 font-semibold">Platforms, Tools & Engineering</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ServiceNow GRC, Archer, Jira</li>
                    <li>• Python, FastAPI; data & model pipelines</li>
                    <li>• Cloud & infra: AWS (governance focus)</li>
                    <li>• Analytics & reporting automation</li>
                    <li>• Documentation & control repositories</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Focus */}
        <section>
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="mb-6 text-primary">Professional Focus</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I focus on translating Responsible AI principles into operational practice—policies, 
                  roles, controls, and repeatable workflows. 
                  This includes establishing governance councils and playbooks, embedding documentation 
                  and model cards, enabling monitoring and issue management, and aligning AI programs 
                  with enterprise risk, security, and audit lines of defense.
                </p>
                <p>
                  Typical engagements include AI governance operating model design, control mapping to regulations, 
                  model risk reviews, SOX/GDPR alignment, resilience uplift (BCP/DR), audit preparation, and evidence readiness. 
                  The objective is consistent: measurable governance maturity, fewer audit exceptions, 
                  and AI systems that scale responsibly with clear accountability.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
