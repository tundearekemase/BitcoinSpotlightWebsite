import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern cryptocurrency trading interface" 
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
            The Future of <span className="bitcoin-gradient bg-clip-text text-transparent">Bitcoin</span> is Here
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Join the institutional revolution with cutting-edge Bitcoin trends, Lightning Network innovations, and ETF developments driving the $250K price target for 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <Link 
              href="/contact" 
              className="cta-button text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold glow-effect"
              data-testid="button-start-journey"
            >
              Start Your Bitcoin Journey
            </Link>
            <button 
              className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-accent-foreground transition-all duration-300"
              data-testid="button-learn-more"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-24 right-8 bg-card border border-border rounded-xl p-4 glow-effect pulse-glow hidden lg:block" data-testid="card-bitcoin-price">
        <div className="text-center">
          <div className="text-sm text-muted-foreground">Bitcoin Price</div>
          <div className="text-2xl font-bold text-primary">$109,026</div>
          <div className="text-xs text-green-400">+12.5% 24h</div>
        </div>
      </div>
    </section>
  );
}
