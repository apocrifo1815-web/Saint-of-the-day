import { Quote } from "lucide-react"

interface QuoteSectionProps {
  quote: string
  source?: string
}

export function QuoteSection({ quote, source }: QuoteSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Quote Card */}
          <div className="relative overflow-hidden rounded-2xl bg-accent/5 p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute right-4 top-4 text-accent/10 md:right-8 md:top-8">
              <Quote className="h-16 w-16 md:h-24 md:w-24" />
            </div>
            
            {/* Corner accent */}
            <div className="absolute left-0 top-0 h-1 w-20 bg-primary" />
            <div className="absolute left-0 top-0 h-20 w-1 bg-primary" />
            
            <div className="relative">
              {/* Section label */}
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Quote of the Day
              </p>
              
              {/* Quote text */}
              <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl lg:text-3xl text-pretty">
                "{quote}"
              </blockquote>
              
              {/* Source */}
              {source && (
                <p className="mt-6 text-sm text-muted-foreground">
                  — {source}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
