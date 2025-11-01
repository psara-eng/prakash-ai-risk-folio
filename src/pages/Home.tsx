// --- unchanged imports ---
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import aiTrendsImg from "@/assets/blog-ai-trends.jpg";
import riskMgmtImg from "@/assets/blog-risk-management.jpg";
import mlImg from "@/assets/blog-machine-learning.jpg";

const Home = () => {
  const skills = [
    { 
      title: "AI Governance & Responsible AI", 
      description: "Establishing AI lifecycle controls, accountability structures, documentation standards, and risk scoring aligned to MAS FEAT, GDPR, TC260, NZ IPP, and Korea AI Act."
    },
    { 
      title: "Technology Risk & Compliance Management", 
      description: "Designing and assessing IT control environments, SOX/GDPR compliance, risk mitigation frameworks, and governance assurance models."
    },
    { 
      title: "Business Continuity & IT Resilience (BCP/DR)", 
      description: "Defining RTO/RPO objectives, uplifting continuity strategies, and strengthening enterprise resilience and recovery capability."
    },
    { 
      title: "Regulatory & Audit Readiness Consulting", 
      description: "Preparing teams and systems for regulatory reviews, evidence preparation, external audits, and compliance maturity uplift."
    },
  ];

  const featuredProjects = [
    {
      title: "Responsible AI & Governance Framework",
      description: "Designed and implemented an AI governance and risk monitoring framework across regional business units, improving regulatory audit readiness by 20%.",
      tags: ["AI Governance", "Model Risk", "Regulatory Compliance"],
    },
    {
      title: "IT Resilience & Continuity Uplift",
      description: "Enhanced enterprise resilience posture and optimized continuity planning, achieving a 15% reduction in recovery time across critical systems.",
      tags: ["BCP/DR", "IT Resilience", "Risk Oversight"],
    },
    {
      title: "IT Risk Management, SOX & GDPR Compliance Governance Program",
      description: "Directed compliance governance across 15+ banking platforms, lowering enterprise risk score from 3.1 to 1.9 and reducing audit findings by 80%.",
      tags: ["SOX", "GDPR", "Control Testing"],
    },
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Risk Management",
      excerpt: "How emerging regulatory expectations are reshaping AI accountability and model governance requirements.",
      image: aiTrendsImg,
      slug: "ai-risk-management",
    },
    {
      title: "Building Robust Machine Learning Pipelines",
      excerpt: "Beyond model accuracy — enabling traceability, governance, and operational oversight in ML workflows.",
      image: mlImg,
      slug: "ml-pipelines",
    },
    {
      title: "Deep Dive into Neural Architecture",
      excerpt: "Examining model design choices through the lens of fairness, transparency, monitoring, and governance controls.",
      image: riskMgmtImg,
      slug: "neural-architecture",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow: visible">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 leading-tight bg-gradient-hero bg-clip-text text-transparent animate-fade-in text-5xl md:text-6xl font-semibold line-height: 1.25 padding-bottom: 4px">
            Prakash Sarangi
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            AI Governance, Responsible AI & IT Risk Consultant
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I help organizations build trustworthy, compliant, and audit-ready AI systems. 
            With 18+ years across BFSI and FinTech, I advise enterprises on operationalizing Responsible AI, 
            maturing risk and governance frameworks, and strengthening regulatory and audit readiness across global markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects"><Button size="lg">View My Work <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/contact"><Button size="lg" variant="outline">Get In Touch</Button></Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="mb-4 text-3xl font-semibold">Core Consulting Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advisory, governance, and oversight at the intersection of AI systems, regulatory obligations, and enterprise technology risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-semibold">Featured Consulting Engagements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world advisory leadership across enterprise AI, compliance, and operational resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 font-medium">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects"><Button variant="outline" size="lg">View Consulting Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-semibold">Latest Insights & Thought Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perspectives on AI accountability, regulatory alignment, and enterprise technology governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`}>
              <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden h-full">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 font-medium">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-primary">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span className="text-sm">Read More</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog"><Button variant="outline" size="lg">View All Posts <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="mb-4 text-3xl font-semibold">Consulting & Advisory Engagements</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If your organization is scaling AI or preparing for regulatory review, I provide advisory support across: 
            AI governance frameworks, technology risk and compliance assessments, resilience modernization, and audit evidence readiness.
          </p>
          <Link to="/contact"><Button size="lg">Request Consultation <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
