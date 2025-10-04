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
      title: "The Future of AI in Risk Management",
      image: aiTrendsImg,
      date: "2024-03-15",
      readTime: "8 min read",
      category: "AI & Risk",
      content: [
        "Artificial Intelligence is fundamentally transforming how organizations approach risk management. Traditional methods, while effective, often struggle with the volume, velocity, and complexity of modern risk scenarios.",
        "Machine learning models can analyze vast amounts of historical data to identify patterns and correlations that human analysts might miss. This capability is particularly valuable in financial risk assessment, where subtle market signals can have significant implications.",
        "The integration of AI in risk management isn't about replacing human judgment—it's about augmenting it. AI systems excel at processing large datasets and identifying anomalies, while human experts provide context, ethical considerations, and strategic decision-making.",
        "Looking ahead, we can expect to see more sophisticated AI models that can handle multi-dimensional risk scenarios, provide real-time risk assessments, and adapt to changing regulatory requirements automatically. The future of enterprise risk management is intelligent, adaptive, and data-driven.",
      ],
    },
    "ml-pipelines": {
      title: "Building Robust Machine Learning Pipelines",
      image: mlImg,
      date: "2024-03-10",
      readTime: "12 min read",
      category: "Machine Learning",
      content: [
        "Building production-ready machine learning pipelines requires careful consideration of data flow, model training, validation, and deployment processes. A well-designed pipeline ensures reproducibility, scalability, and maintainability.",
        "The foundation of any ML pipeline is robust data ingestion and preprocessing. This includes data validation, cleaning, feature engineering, and transformation. Automated data quality checks are essential to catch issues before they affect model performance.",
        "Model training should be automated and version-controlled. This includes tracking hyperparameters, training data versions, and model artifacts. Tools like MLflow or Weights & Biases can help manage the complexity of ML experiments.",
        "Deployment and monitoring are critical final stages. Models need continuous monitoring for performance degradation, data drift, and concept drift. Automated retraining pipelines ensure models stay relevant as data patterns evolve.",
      ],
    },
    "neural-architecture": {
      title: "Deep Dive into Neural Network Architecture",
      image: deepLearningImg,
      date: "2024-03-05",
      readTime: "15 min read",
      category: "Deep Learning",
      content: [
        "Neural network architectures have evolved dramatically over the past decade. From simple feedforward networks to complex transformer models, each architecture brings unique capabilities and trade-offs.",
        "Convolutional Neural Networks (CNNs) revolutionized computer vision by introducing spatial hierarchies in learning. The convolutional layers capture local patterns, while pooling layers provide translation invariance—crucial for image recognition tasks.",
        "Recurrent Neural Networks (RNNs) and their variants (LSTM, GRU) excel at sequence modeling. They maintain hidden states that capture temporal dependencies, making them ideal for time-series analysis and natural language processing.",
        "Modern transformer architectures have pushed the boundaries further. Their attention mechanisms allow models to focus on relevant parts of input sequences, leading to breakthrough performance in language understanding and generation tasks.",
      ],
    },
    "nlp-enterprise": {
      title: "Natural Language Processing in Enterprise Applications",
      image: nlpImg,
      date: "2024-02-28",
      readTime: "10 min read",
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
      date: "2024-02-20",
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
