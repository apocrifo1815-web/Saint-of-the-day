"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/saint-of-day/header"
import { HeroSection } from "@/components/saint-of-day/hero-section"
import { BiographySection } from "@/components/saint-of-day/biography-section"
import { QuoteSection } from "@/components/saint-of-day/quote-section"
import { PrayerSection } from "@/components/saint-of-day/prayer-section"
import { Footer } from "@/components/saint-of-day/footer"

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

async function fetchSaintOfTheDay(): Promise<SaintData> {
  try {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    
    const res = await fetch(`https://www.thesaintsoftheday.com/api/saints?month=${month}&day=${day}`);
    if (!res.ok) throw new Error("API Offline");
    const data = await res.json();
    const saint = data[0];

    return {
      name: saint.name,
      feastDay: `${today.toLocaleString('en-US', { month: 'long' })} ${day}`,
      birthYear: saint.birth_year || "Unknown",
      deathYear: saint.death_year || "Unknown",
      patronOf: saint.patron_of ? saint.patron_of.split(',') : ["Universal Church"],
      biography: saint.biography || "Loading biography in English...",
      quote: saint.famous_quote || "Pray for us.",
      quoteSource: saint.name,
      prayer: saint.prayer || "Lord, through the intercession of this Saint, guide our steps today. Amen."
    };
  } catch {
    // BACKUP: Saints Perpetua and Felicity (March 7th)
    return {
      name: "Saints Perpetua and Felicity",
      feastDay: "March 7th",
      birthYear: "c. 181 AD",
      deathYear: "203 AD",
      patronOf: ["Mothers", "Expectant Mothers", "Ranchers", "Butchers", "Carthage"],
      biography: `Vibia Perpetua was born around 181 AD into a noble family in Carthage, North Africa. She was well-educated, articulate, and of high social standing. At the age of twenty-two, she was a young married woman nursing her infant son when she was arrested for her Christian faith during the persecution under Emperor Septimius Severus. Alongside her was Felicity, a slave who served in her household and was eight months pregnant at the time of their arrest. The two women, despite their vast differences in social status, were united by their unwavering devotion to Christ.

During their imprisonment, Perpetua kept a diary that has survived to this day, making it one of the earliest and most remarkable Christian documents written by a woman. In her writings, she describes the agony of being separated from her infant son, the attempts by her pagan father to persuade her to renounce her faith, and the visions she received that assured her of her impending martyrdom and heavenly reward. Her account reveals a woman of extraordinary courage, intellectual depth, and profound spiritual conviction. Felicity, though a slave, showed equal bravery; she prayed fervently that she might give birth before the day of execution, as Roman law forbade the killing of pregnant women. Her prayers were answered when she delivered a daughter just two days before their martyrdom.

On March 7, 203 AD, Perpetua, Felicity, and their companions were brought to the amphitheater in Carthage to be executed before a cheering crowd as part of a celebration for Emperor Geta's birthday. They were attacked by wild animals—Perpetua and Felicity were exposed to a mad heifer—but when the beasts failed to kill them, they were put to the sword. According to tradition, Perpetua guided the trembling hand of the young gladiator to her own throat, demonstrating her readiness to die for her faith. Their martyrdom became a powerful testimony that inspired countless Christians throughout the centuries. Saints Perpetua and Felicity are honored together as a symbol of the unity of all believers in Christ, transcending all earthly distinctions of class and status.`,
      quote: "Stand fast in the faith, and love one another, all of you, and be not offended at our sufferings.",
      quoteSource: "Saint Perpetua",
      prayer: "O God, at whose call the innocent Saints Perpetua and Felicity knew not the fear of death and passed through the gates of martyrdom, grant that by their prayers we may grow in love for Your name. Through their holy intercession, give us the courage to stand firm in our faith and the grace to love one another as they did. Amen."
    };
  }
}

export default function SaintOfTheDay() {
  const [saintData, setSaintData] = useState<SaintData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSaintOfTheDay().then(data => {
      setSaintData(data);
      setLoading(false);
    });
  }, []);

  const handleShare = async () => {
    if (!saintData) return;
    const shareData = {
      title: `Saint of the Day: ${saintData.name}`,
      text: `Discover today's Saint: ${saintData.name}. "${saintData.quote}"`,
      url: window.location.href,
    };

    if (navigator.share) {
      try { 
        await navigator.share(shareData); 
      } catch (err) { 
        console.log("Share failed", err); 
      }
    } else {
      navigator.clipboard.writeText(`${shareData.title}\n${shareData.url}`);
      alert("Link copied to clipboard!");
    }
  };

  if (loading || !saintData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-serif">Loading Saint...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onShare={handleShare} />
      <main>
        <HeroSection
          saintName={saintData.name}
          feastDay={saintData.feastDay}
          imageUrl="/images/saint-francis.jpg" 
        />
        <BiographySection
          biography={saintData.biography}
          birthYear={saintData.birthYear}
          deathYear={saintData.deathYear}
          patronOf={saintData.patronOf}
        />
        <QuoteSection
          quote={saintData.quote}
          source={saintData.quoteSource}
        />
        <PrayerSection
          prayer={saintData.prayer}
        />
      </main>
      <Footer />
    </div>
  );
}
