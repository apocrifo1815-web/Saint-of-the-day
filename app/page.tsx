"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/saint-of-day/header"
import { HeroSection } from "@/components/saint-of-day/hero-section"
import { BiographySection } from "@/components/saint-of-day/biography-section"
import { QuoteSection } from "@/components/saint-of-day/quote-section"
import { PrayerSection } from "@/components/saint-of-day/prayer-section"
import { Footer } from "@/components/saint-of-day/footer"
// Importamos o seu arquivo JSON que você acabou de criar!
import saintsData from "./saints.json" 

interface SaintData {
  name: string
  feastDay: string
  birthYear: string
  deathYear: string
  patronOf: string[]
  biography: string
  quote: string
  quoteSource: string
  prayer: string
}

export default function SaintOfTheDay() {
  const [saintData, setSaintData] = useState<SaintData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pegamos a data de hoje baseada no seu computador
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;
    
    // O sistema procura no seu arquivo JSON a chave "03-06"
    // Se não encontrar, ele usa o dia 03-06 como padrão de segurança
    const selectedSaint = (saintsData as Record<string, SaintData>)[dateKey] || (saintsData as Record<string, SaintData>)["03-06"];
    
    setSaintData(selectedSaint);
    setLoading(false);
  }, []);

  if (loading || !saintData) {
    return <div className="min-h-screen flex items-center justify-center font-serif">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onShare={() => {}} />
      <main>
        <HeroSection
          saintName={saintData.name}
          feastDay={saintData.feastDay}
          imageUrl="https://images.unsplash.com/photo-1548625361-070868779417?q=80&w=500" 
        />
        <BiographySection
          biography={saintData.biography}
          birthYear={saintData.birthYear}
          deathYear={saintData.deathYear}
          patronOf={saintData.patronOf}
        />
        <QuoteSection quote={saintData.quote} source={saintData.quoteSource} />
        <PrayerSection prayer={saintData.prayer} />
      </main>
      <Footer />
    </div>
  );
}
