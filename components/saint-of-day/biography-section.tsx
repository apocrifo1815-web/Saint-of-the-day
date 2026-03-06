"use client"

import { useState } from "react"
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BiographySectionProps {
  biography: string
  birthYear?: string
  deathYear?: string
  patronOf?: string[]
}

const COLLAPSED_HEIGHT = 280

export function BiographySection({ 
  biography, 
  birthYear, 
  deathYear,
  patronOf 
}: BiographySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongBiography = biography.length > 800

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Biography
            </h2>
          </div>

          {/* Life dates */}
          {(birthYear || deathYear) && (
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {birthYear && (
                <span className="rounded-full bg-muted px-3 py-1">
                  Birth: {birthYear}
                </span>
              )}
              {deathYear && (
                <span className="rounded-full bg-muted px-3 py-1">
                  Death: {deathYear}
                </span>
              )}
            </div>
          )}

          {/* Biography text with expand/collapse */}
          <div className="relative">
            <div 
              className={`prose prose-lg max-w-none overflow-hidden transition-all duration-500 ease-in-out ${
                isLongBiography && !isExpanded ? '' : ''
              }`}
              style={{
                maxHeight: isLongBiography && !isExpanded ? `${COLLAPSED_HEIGHT}px` : '9999px'
              }}
            >
              {biography.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="mb-4 leading-relaxed text-foreground/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Gradient fade overlay when collapsed */}
            {isLongBiography && !isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            )}
          </div>

          {/* Expand/Collapse button */}
          {isLongBiography && (
            <div className="mt-4 flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="gap-2 text-primary hover:text-primary hover:bg-primary/10"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Read More
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Patron of */}
          {patronOf && patronOf.length > 0 && (
            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-serif text-lg font-medium text-foreground">
                Patron of:
              </h3>
              <div className="flex flex-wrap gap-2">
                {patronOf.map((item, index) => (
                  <span 
                    key={index}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
