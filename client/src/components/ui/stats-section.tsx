export default function StatsSection() {
  const stats = [
    {
      icon: "fas fa-chart-line",
      value: "1M+ BTC",
      label: "Held in ETFs",
      subtitle: "5% of total supply"
    },
    {
      icon: "fas fa-building",
      value: "$18B",
      label: "BlackRock IBIT AUM",
      subtitle: "Q1 2025"
    },
    {
      icon: "fas fa-briefcase",
      value: "636K BTC",
      label: "MicroStrategy Holdings",
      subtitle: "Leading Corporate Holder"
    },
    {
      icon: "fas fa-bolt",
      value: "16K",
      label: "Lightning Nodes",
      subtitle: "75K Active Channels"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-stats-title">
            Bitcoin by the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-stats-subtitle">
            Real-time data showcasing Bitcoin's unprecedented institutional adoption in 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stats-card rounded-xl p-6 text-center"
              data-testid={`card-stat-${index}`}
            >
              <div className="bitcoin-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-accent-foreground`}></i>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mb-2" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-xs text-primary" data-testid={`text-stat-subtitle-${index}`}>
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
