import { Link } from "wouter";

export default function TrendsSection() {
  const trends = [
    {
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Bitcoin blockchain technology visualization",
      icon: "fas fa-university",
      title: "Institutional Adoption Surge",
      description: "83% of institutional investors plan to increase crypto allocations in 2025, with corporations now holding 6% of Bitcoin's total supply. Institutional adoption accelerated 35% QoQ in Q2 2025.",
      action: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Financial technology interface dashboard",
      icon: "fas fa-bolt",
      title: "Lightning Network Evolution",
      description: "Public channel capacity surpassed 5,000 BTC with nearly 16,000 nodes. Square earning 9.7% yield through Lightning routing, piloting payments at Bitcoin 2025 conference.",
      action: "Explore"
    },
    {
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Digital currency concept with trading charts",
      icon: "fas fa-chart-area",
      title: "ETF Revolution",
      description: "Bitcoin ETFs ended 2024 with $33.6 billion in inflows, surpassing initial $15 billion predictions. BlackRock's IBIT captured $3.2 billion in January alone.",
      action: "Invest Now"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-trends-title">
            Cutting-Edge Bitcoin Trends
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-trends-subtitle">
            Stay ahead with the latest developments shaping Bitcoin's future in 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <div 
              key={index} 
              className="trend-card rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              data-testid={`card-trend-${index}`}
            >
              <img 
                src={trend.image} 
                alt={trend.alt} 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bitcoin-gradient w-12 h-12 rounded-full flex items-center justify-center">
                    <i className={`${trend.icon} text-accent-foreground`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`text-trend-title-${index}`}>
                    {trend.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-trend-description-${index}`}>
                  {trend.description}
                </p>
                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="text-primary hover:text-accent transition-colors font-semibold"
                    data-testid={`link-trend-action-${index}`}
                  >
                    {trend.action} <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
