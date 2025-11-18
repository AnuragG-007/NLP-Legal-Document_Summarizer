'use client'

import { useState } from 'react'
import CategorySelector from '@/components/document-processing/category-selector'
import DocumentInput from '@/components/document-processing/document-input'

type Category = 'bills' | 'judgements' | 'other' | null

export default function SummarizePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(null)

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose a category to begin summarizing your document.
            </h1>
          </div>

          {/* Category Selector */}
          {!selectedCategory ? (
            <CategorySelector onSelectCategory={setSelectedCategory} />
          ) : (
            <>
              {/* Selected Category Header */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  ← Back to categories
                </button>
                <h2 className="text-2xl font-semibold text-foreground capitalize">
                  Summarizing: {selectedCategory === 'judgements' ? 'Judgements' : selectedCategory === 'bills' ? 'Bills' : 'Other Documents'}
                </h2>
              </div>

              {/* Document Input */}
              <DocumentInput category={selectedCategory} />
            </>
          )}
        </div>
      </section>
    </main>
  )
}
