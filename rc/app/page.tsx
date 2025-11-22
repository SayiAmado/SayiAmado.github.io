import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { MarketplacePreview } from "@/components/marketplace-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <MarketplacePreview />
      </main>
      <Footer />
    </div>
  )
}
