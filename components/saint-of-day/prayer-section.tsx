import { Heart } from "lucide-react"

interface PrayerSectionProps {
  prayer: string
  prayerTitle?: string
}

export function PrayerSection({ 
  prayer, 
  prayerTitle = "Intercession Prayer" 
}: PrayerSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              {prayerTitle}
            </h2>
          </div>

          {/* Prayer card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
            {/* Decorative cross */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-8 w-8">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/40" />
                <div className="absolute left-0 top-1/3 h-0.5 w-full bg-primary/40" />
              </div>
            </div>

            {/* Prayer text */}
            <div className="text-center">
              <p className="whitespace-pre-line font-serif text-lg leading-loose text-foreground/90 md:text-xl">
                {prayer}
              </p>
            </div>

            {/* Amen */}
            <div className="mt-8 text-center">
              <span className="font-serif text-lg font-semibold italic text-primary">
                Amen.
              </span>
            </div>

            {/* Decorative divider */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              <div className="h-1 w-1 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
