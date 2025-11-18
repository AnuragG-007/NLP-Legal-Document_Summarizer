export default function ModelsPage() {
  const models = [
    {
      name: 'Legal Pegasus',
      description:
        'A general-purpose legal summarizer optimized for clarity, strong reasoning, and citation preservation.',
      useCase:
        'Suited for tasks such as contracts and judgments. Ideal for legal professionals who need high-quality summaries with maintained citations.',
      keyFeatures: [
        'Citation preservation',
        'Strong reasoning',
        'Optimized for clarity',
        'Contract & judgment analysis',
      ],
    },
    {
      name: 'Legal LED (Bills)',
      description:
        'A model optimized for very long legislative or bill-type documents.',
      useCase:
        'Designed specifically for handling lengthy legislative texts and bills with complex structures.',
      keyFeatures: [
        'Long document support',
        'Legislative text expertise',
        'Bill analysis',
        'Structure preservation',
      ],
    },
    {
      name: 'LED (Judgements)',
      description:
        'A Longformer Encoder-Decoder variant fine-tuned for handling extremely long court judgments, able to preserve long-range legal reasoning and contextual dependencies across large documents.',
      useCase:
        'Works well for judgment summarization, precedent extraction, case-law analysis, and citation linking. Handles very long input lengths, around 8000 tokens or more.',
      keyFeatures: [
        'Extreme length support (8000+ tokens)',
        'Judgment summarization',
        'Precedent extraction',
        'Case-law analysis',
        'Citation linking',
        'Long-range reasoning',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-5xl font-bold text-foreground">Our Models</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore our collection of specialized legal AI models designed for different document types and analysis needs.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model.name}
              className="premium-card flex flex-col p-8 group hover:border-accent/60 transition-all"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{model.name}</h2>
              <p className="text-foreground/90 mb-6 leading-relaxed">{model.description}</p>

              <div className="mb-8">
                <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                  Use Cases
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.useCase}</p>
              </div>

              <div className="flex-grow">
                <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {model.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <span className="text-accent mt-1 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
