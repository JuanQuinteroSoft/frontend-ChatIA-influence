import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-background to-background" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-primary font-mono tracking-widest text-sm md:text-base uppercase animate-pulse">
            Advertencia: Sesgo Cognitivo Detectado
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mix-blend-difference">
            NO QUIERES
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">SABER</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-mono leading-relaxed border-l-2 border-primary/50 pl-6 text-left">
          Preferimos la comodidad de la caja negra. 
          Dejamos que la IA decida porque cuestionar requiere un esfuerzo que ya no estamos dispuestos a hacer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
          <Button size="lg" className="rounded-none text-lg px-10 py-8 bg-primary text-black hover:bg-primary/90 font-bold tracking-wider uppercase border-2 border-transparent hover:border-white transition-all">
            Ignorar Realidad
          </Button>
          <Button size="lg" variant="outline" className="rounded-none text-lg px-10 py-8 border-2 border-zinc-800 hover:bg-zinc-900 hover:text-primary font-mono uppercase tracking-wider">
            Cuestionar Todo
          </Button>
        </div>
      </div>
    </section>
  )
}
