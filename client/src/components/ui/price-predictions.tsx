import { Link } from "wouter";

export default function PricePredictions() {
  const predictions = [
    {
      price: "$150K",
      company: "Galaxy Digital",
      analyst: "Alex Thorn - Q1 2025 target"
    },
    {
      price: "$250K",
      company: "Nexo",
      analyst: "Elitsa Taskova - Within a year",
      highlight: true
    },
    {
      price: "$170K",
      company: "SkyBridge Capital",
      analyst: "Anthony Scaramucci - Peak target"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-predictions-title">
            2025 Price Outlook
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-predictions-subtitle">
            Expert predictions from leading analysts and institutional investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {predictions.map((prediction, index) => (
            <div 
              key={index} 
              className={`stats-card rounded-xl p-8 text-center ${prediction.highlight ? 'glow-effect' : ''}`}
              data-testid={`card-prediction-${index}`}
            >
              <div className={`text-4xl font-bold mb-2 ${prediction.highlight ? 'text-accent' : 'text-primary'}`} data-testid={`text-prediction-price-${index}`}>
                {prediction.price}
              </div>
              <div className="text-lg text-foreground mb-2" data-testid={`text-prediction-company-${index}`}>
                {prediction.company}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`text-prediction-analyst-${index}`}>
                {prediction.analyst}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="trend-card rounded-2xl p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-cta-title">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-cta-subtitle">
              Don't miss out on the biggest financial transformation of our time. Connect with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact" 
                className="cta-button text-accent-foreground px-10 py-4 rounded-full text-lg font-semibold glow-effect"
                data-testid="button-contact-experts"
              >
                Contact Our Experts
              </Link>
              <div className="text-sm text-muted-foreground" data-testid="text-trusted-by">
                <i className="fas fa-shield-alt text-primary mr-2"></i>
                Trusted by 10,000+ investors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
