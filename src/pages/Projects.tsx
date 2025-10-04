import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Risk Assessment Platform",
      description: "Enterprise-grade machine learning system for real-time risk evaluation and predictive analytics. Processes large-scale financial data to identify potential risks and provide actionable insights.",
      tags: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      category: "AI & Risk Management",
      features: [
        "Real-time risk scoring algorithms",
        "Predictive analytics dashboard",
        "Automated alert system",
        "Compliance reporting module",
      ],
    },
    {
      title: "Neural Network Framework for Financial Modeling",
      description: "Custom deep learning framework optimized for financial market analysis and prediction. Implements advanced neural architectures for time-series forecasting and pattern recognition.",
      tags: ["PyTorch", "CUDA", "Python", "NumPy", "Pandas"],
      category: "Machine Learning",
      features: [
        "Custom LSTM implementation",
        "GPU-accelerated training",
        "Model versioning system",
        "Performance benchmarking tools",
      ],
    },
    {
      title: "Automated Compliance Monitoring System",
      description: "NLP-based system for regulatory compliance monitoring and reporting. Analyzes documents, transactions, and communications to identify compliance issues automatically.",
      tags: ["NLP", "Python", "Elasticsearch", "React", "Docker"],
      category: "AI & Compliance",
      features: [
        "Document classification engine",
        "Regulatory change detection",
        "Automated report generation",
        "Multi-language support",
      ],
    },
    {
      title: "Computer Vision Quality Control System",
      description: "Deep learning solution for automated quality inspection in manufacturing. Uses computer vision to detect defects and anomalies with high accuracy.",
      tags: ["Computer Vision", "TensorFlow", "Python", "OpenCV", "Kubernetes"],
      category: "AI & Manufacturing",
      features: [
        "Real-time defect detection",
        "Multi-camera integration",
        "Statistical analysis dashboard",
        "Training data annotation tool",
      ],
    },
    {
      title: "Predictive Maintenance ML Pipeline",
      description: "End-to-end machine learning pipeline for predictive maintenance in industrial settings. Analyzes sensor data to predict equipment failures before they occur.",
      tags: ["Machine Learning", "Python", "Apache Kafka", "Spark", "Azure"],
      category: "Predictive Analytics",
      features: [
        "Time-series anomaly detection",
        "Multi-sensor data fusion",
        "Failure prediction models",
        "Maintenance scheduling optimizer",
      ],
    },
    {
      title: "Intelligent Document Processing System",
      description: "AI-powered document understanding and extraction system. Uses NLP and computer vision to extract structured data from unstructured documents.",
      tags: ["NLP", "Computer Vision", "FastAPI", "React", "MongoDB"],
      category: "AI & Automation",
      features: [
        "OCR with context understanding",
        "Entity recognition and linking",
        "Template learning system",
        "Validation workflow engine",
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
            Showcase of AI, machine learning, and risk management solutions. Each project demonstrates 
            expertise in building scalable, production-ready systems.
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
