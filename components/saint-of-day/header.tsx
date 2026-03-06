"use client"

import { Share2, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onShare: () => void
}

export function Header({ onShare }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Cross className="h-6 w-6 text-accent" />
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            SPW Worship
          </span>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={onShare}
          className="gap-2 border-primary/30 text-foreground hover:bg-primary/10 hover:text-foreground"
        >
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>
      </div>
    </header>
  )
}
