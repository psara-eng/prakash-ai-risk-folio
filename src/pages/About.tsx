import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";

const About = () => {
const highlights = [
  {
    icon: Briefcase,
    title: "AI Governance & Responsible AI",
    description: `
• Design and implement AI governance frameworks covering the full AI lifecycle
• Establish accountability models, governance councils, and decision workflows
• Operationalize documentation, model cards, explainability, and monitoring
• Align controls with MAS FEAT, GDPR, China TC260, New Zealand IPP, and the Korea AI Act
`.trim(),
  },
  {
    icon: GraduationCap,
    title: "Technology Risk & Compliance",
    description: `
• Lead SOX and GDPR control design, testing, and remediation programs
• Provide 2LoD oversight, risk monitoring, and audit readiness support
• Strengthen evidence management, issue tracking, and governance reporting
• Partner with security and privacy teams to embed controls into delivery
`.trim(),
  },
  {
    icon: Target,
    title: "Resilience & BCP/DR",
    description: `
• Define RTO/RPO objectives and continuity strategies
• Uplift operational resilience for business-critical platforms
• Support recovery testing, crisis response alignment, and regulatory evidence
`.trim(),
  },
  {
    icon: Award,
    title: "Consulting Outcomes",
    description: `
• Improved AI and technology governance maturity
• Reduced audit findings and clearer control ownership
• Regulator-ready documentation and defensible evidence trails
• AI systems that scale responsibly with transparency and accountability
`.trim(),
  },
];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground">
            I am an AI Governance and Technology Risk professional with 19+ years of experience advising enterprises across 
            BFSI and FinTech on Responsible AI, technology risk management, and regulatory readiness.
          </p>
          <p className="text-xl text-muted-foreground">
            My work focuses on helping organizations design, operationalize, and sustain governance frameworks that allow 
            AI and emerging technologies to scale responsibly while meeting regulatory, audit, and accountability expectations.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="mb-6 text-primary">Professional Summary</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I support global enterprises in building trustworthy, compliant, and audit-ready AI systems by integrating 
                  AI governance, model risk controls, and technology risk oversight into existing enterprise risk and GRC environments.
                </p>
                <p>
                  My experience spans AI governance operating models, model risk management, SOX/GDPR assurance, and resilience (BCP/DR), 
                  working closely with business, data, security, and audit stakeholders across first and second lines of defense.
                </p>
                <p>
                  I specialize in translating Responsible AI principles into operational controls such as clear policies, defined roles, 
                  lifecycle governance, documentation standards, monitoring mechanisms, and regulator-ready evidence.
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
                 <p className="text-muted-foreground whitespace-pre-line">
                   {highlight.description}
                 </p>
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
                  My focus is on making governance work in practice, not as theory.
                  That means embedding Responsible AI and technology risk controls into day-to-day delivery 
                  so they stand up to regulatory scrutiny, internal audit, and real-world operational pressure.
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
