import { Calendar, Cross } from "lucide-react"

interface HeroSectionProps {
  saintName: string
  feastDay: string
  imageUrl?: string
  title?: string
}

export function HeroSection({ 
  saintName, 
  feastDay, 
  title = "Saint of the Day"
}: HeroSectionProps) {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 0v60M0 30h60' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Date badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
            <Calendar className="h-4 w-4" />
            <span className="capitalize">{formattedDate}</span>
          </div>

          {/* Title */}
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {title}
          </p>

          {/* Elegant Gold Cross Icon */}
          <div className="relative mb-8 mt-4">
            <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 shadow-lg md:h-64 md:w-64">
              {/* Stained glass effect background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-primary/10" />
              </div>
              {/* Gold Cross */}
              <Cross className="relative h-20 w-20 text-primary drop-shadow-sm md:h-28 md:w-28" strokeWidth={1.5} />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-full border border-primary/10" />
            <div className="absolute -inset-4 rounded-full border border-primary/5" />
          </div>

          {/* Saint Name */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            {saintName}
          </h1>

          {/* Feast Day */}
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Feast Day: <span className="font-medium text-primary">{feastDay}</span>
          </p>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-primary/30" />
            <div className="h-2 w-2 rotate-45 border border-primary/40" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
