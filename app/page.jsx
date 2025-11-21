import { HeroSection } from '@/components/hero-section'
import { DependencySection } from '@/components/dependency-section'
import { NarrativeSection } from '@/components/narrative-section'
import { PowerSection } from '@/components/power-section'
import { Footer } from '@/components/footer'
import { ChatWidget } from '@/components/chat-widget'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DependencySection />
      <NarrativeSection />
      <PowerSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
