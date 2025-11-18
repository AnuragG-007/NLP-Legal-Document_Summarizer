'use client'

interface CategorySelectorProps {
  onSelectCategory: (category: 'bills' | 'judgements' | 'other') => void
}

export default function CategorySelector({ onSelectCategory }: CategorySelectorProps) {
  const categories = [
    {
      id: 'bills',
      title: 'Bills',
      description: 'Legislative bills, acts, and statutes',
      icon: '📋',
    },
    {
      id: 'judgements',
      title: 'Judgements',
      description: 'Court rulings and judicial decisions',
      icon: '⚖️',
    },
    {
      id: 'other',
      title: 'Other Documents',
      description: 'Contracts, agreements, and other legal documents',
      icon: '📄',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id as 'bills' | 'judgements' | 'other')}
          className="premium-card p-8 text-left group hover:border-accent/60 hover:bg-card/80 transition-all transform hover:scale-105 active:scale-100"
        >
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{category.icon}</div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{category.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
        </button>
      ))}
    </div>
  )
}
