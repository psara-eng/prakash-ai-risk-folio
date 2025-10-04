import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Shield, Code, TrendingUp, BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import aiTrendsImg from "@/assets/blog-ai-trends.jpg";
import riskMgmtImg from "@/assets/blog-risk-management.jpg";
import mlImg from "@/assets/blog-machine-learning.jpg";

const Home = () => {
  const skills = [
    { icon: Brain, title: "Artificial Intelligence", description: "Machine Learning, Deep Learning, Neural Networks" },
    { icon: Shield, title: "Risk Management", description: "Risk Analysis, Mitigation Strategies, Compliance" },
    { icon: Code, title: "Software Engineering", description: "Full-Stack Development, System Architecture" },
    { icon: TrendingUp, title: "Data Analytics", description: "Predictive Modeling, Business Intelligence" },
  ];

  const featuredProjects = [
    {
      title: "AI-Powered Risk Assessment Platform",
      description: "Machine learning system for real-time risk evaluation and predictive analytics.",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      title: "Neural Network Framework",
      description: "Custom deep learning framework optimized for financial modeling.",
      tags: ["PyTorch", "CUDA", "AWS"],
    },
    {
      title: "Automated Compliance System",
      description: "NLP-based system for regulatory compliance monitoring and reporting.",
      tags: ["NLP", "Python", "PostgreSQL"],
    },
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Risk Management",
      excerpt: "Exploring how artificial intelligence is transforming enterprise risk assessment.",
      image: aiTrendsImg,
      slug: "ai-risk-management",
    },
    {
      title: "Building Robust Machine Learning Pipelines",
      excerpt: "Best practices for designing scalable and maintainable ML systems.",
      image: mlImg,
      slug: "ml-pipelines",
    },
    {
      title: "Deep Dive into Neural Architecture",
      excerpt: "Understanding the fundamentals of modern neural network designs.",
      image: riskMgmtImg,
      slug: "neural-architecture",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
              Prakash Sarangi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
              Software Engineer, AI & Risk Management Consultant
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Specializing in cutting-edge artificial intelligence solutions, machine learning systems, 
              and strategic risk management frameworks for enterprise applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering innovative solutions at the intersection of AI, risk management, and software engineering
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <skill.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of recent work in AI, machine learning, and enterprise systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts and perspectives on AI, machine learning, and technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3">{post.title}</h3>
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
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for expertise in AI, machine learning, or risk management? 
            I'm available for consulting and collaborative projects.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
