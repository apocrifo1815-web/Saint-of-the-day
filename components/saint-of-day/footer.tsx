import { Cross } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Cross className="h-5 w-5 text-accent" />
            <span className="font-serif text-lg font-semibold text-foreground">
              SPW Worship
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Growing in Faith
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-border" />
            <div className="h-1.5 w-1.5 rotate-45 bg-primary/40" />
            <div className="h-px w-8 bg-border" />
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} SPW Worship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
