import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "Extensive experience in software engineering with focus on AI and ML systems",
    },
    {
      icon: GraduationCap,
      title: "Technical Expertise",
      description: "Deep knowledge in machine learning, neural networks, and risk analytics",
    },
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Combining technical excellence with business strategy and risk management",
    },
    {
      icon: Award,
      title: "Innovation Focus",
      description: "Committed to developing cutting-edge solutions in AI and enterprise systems",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer specializing in Artificial Intelligence and Risk Management
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="mb-6 text-primary">Professional Summary</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a software engineer with a strong focus on artificial intelligence, machine learning, 
                  and risk management systems. My work centers on developing innovative solutions that bridge 
                  the gap between cutting-edge AI technology and practical business applications.
                </p>
                <p>
                  With expertise spanning machine learning, deep learning, and enterprise risk management, 
                  I specialize in creating robust, scalable systems that help organizations leverage AI for 
                  strategic decision-making and operational excellence.
                </p>
                <p>
                  My approach combines technical depth with strategic thinking, ensuring that solutions not 
                  only meet immediate requirements but also align with long-term business objectives and 
                  regulatory compliance needs.
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
                  <h3 className="text-lg mb-3 font-semibold">Artificial Intelligence</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Machine Learning & Deep Learning</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Reinforcement Learning</li>
                    <li>• Neural Network Architectures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-3 font-semibold">Risk Management</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Risk Assessment & Analysis</li>
                    <li>• Predictive Risk Modeling</li>
                    <li>• Compliance Frameworks</li>
                    <li>• Data Security & Privacy</li>
                    <li>• Strategic Risk Planning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-3 font-semibold">Software Engineering</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full-Stack Development</li>
                    <li>• System Architecture Design</li>
                    <li>• Cloud Infrastructure (AWS, Azure)</li>
                    <li>• Database Management</li>
                    <li>• API Design & Integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-3 font-semibold">Tools & Technologies</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Python, JavaScript, Java</li>
                    <li>• TensorFlow, PyTorch, Scikit-learn</li>
                    <li>• React, Node.js, FastAPI</li>
                    <li>• Docker, Kubernetes</li>
                    <li>• PostgreSQL, MongoDB</li>
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
                  My current work focuses on developing intelligent systems that enhance decision-making 
                  capabilities while managing associated risks. This includes building machine learning 
                  models for predictive analytics, creating automated risk assessment platforms, and 
                  implementing AI-driven compliance monitoring systems.
                </p>
                <p>
                  I am particularly interested in the intersection of artificial intelligence and enterprise 
                  risk management, where advanced ML techniques can provide unprecedented insights into 
                  complex risk scenarios and enable proactive mitigation strategies.
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
