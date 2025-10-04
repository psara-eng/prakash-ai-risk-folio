import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import aiTrendsImg from "@/assets/blog-ai-trends.jpg";
import riskMgmtImg from "@/assets/blog-risk-management.jpg";
import mlImg from "@/assets/blog-machine-learning.jpg";
import deepLearningImg from "@/assets/blog-deep-learning.jpg";
import nlpImg from "@/assets/blog-nlp.jpg";
import dataScienceImg from "@/assets/blog-data-science.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Risk Management",
      excerpt: "Exploring how artificial intelligence is transforming enterprise risk assessment and decision-making processes. A comprehensive look at current trends and future possibilities.",
      image: aiTrendsImg,
      slug: "ai-risk-management",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "AI & Risk",
    },
    {
      title: "Building Robust Machine Learning Pipelines",
      excerpt: "Best practices for designing scalable and maintainable ML systems. From data ingestion to model deployment and monitoring.",
      image: mlImg,
      slug: "ml-pipelines",
      date: "2024-03-10",
      readTime: "12 min read",
      category: "Machine Learning",
    },
    {
      title: "Deep Dive into Neural Network Architecture",
      excerpt: "Understanding the fundamentals of modern neural network designs. Exploring different architectures and their applications.",
      image: deepLearningImg,
      slug: "neural-architecture",
      date: "2024-03-05",
      readTime: "15 min read",
      category: "Deep Learning",
    },
    {
      title: "Natural Language Processing in Enterprise Applications",
      excerpt: "How NLP is revolutionizing business processes. From document analysis to intelligent chatbots and sentiment analysis.",
      image: nlpImg,
      slug: "nlp-enterprise",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "NLP",
    },
    {
      title: "Data Science for Strategic Decision Making",
      excerpt: "Leveraging data analytics and statistical modeling to drive business strategy. Real-world case studies and practical approaches.",
      image: dataScienceImg,
      slug: "data-science-strategy",
      date: "2024-02-20",
      readTime: "11 min read",
      category: "Data Science",
    },
    {
      title: "Advanced Risk Analytics with Machine Learning",
      excerpt: "Implementing sophisticated risk models using ML techniques. From credit risk to operational risk assessment.",
      image: riskMgmtImg,
      slug: "advanced-risk-analytics",
      date: "2024-02-15",
      readTime: "13 min read",
      category: "Risk Analytics",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and perspectives on artificial intelligence, machine learning, risk management, 
            and technology. Exploring the latest trends and sharing practical knowledge.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`} className="group">
              <Card className="border-border hover:shadow-lg transition-all overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <Card className="border-border bg-gradient-accent inline-block">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                More articles coming soon. Subscribe to stay updated with the latest posts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
