import { Card } from '@/components/ui/card'
import { EyeOff, BrainCircuit, Lock, ShieldAlert } from 'lucide-react'

const dependencies = [
  {
    icon: EyeOff,
    title: 'Ceguera Voluntaria',
    description: 'No miramos el código. No preguntamos el "por qué". Solo aceptamos el resultado porque es conveniente.'
  },
  {
    icon: BrainCircuit,
    title: 'Atrofia Mental',
    description: 'Delegamos el pensamiento crítico. Si la máquina lo dice, debe ser verdad. Nuestra capacidad de duda se desvanece.'
  },
  {
    icon: Lock,
    title: 'La Caja Negra',
    description: 'Aceptamos vivir rodeados de sistemas que no comprendemos, confiando nuestro futuro a una lógica invisible.'
  },
  {
    icon: ShieldAlert,
    title: 'Falsa Seguridad',
    description: 'Creemos tener el control, pero somos meros espectadores en un teatro dirigido por algoritmos.'
  }
]

export function DependencySection() {
  return (
    <section className="py-32 px-4 bg-zinc-950 relative border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            LA COMODIDAD <br />
            <span className="text-zinc-700">DEL SILENCIO</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono border-l border-primary pl-6">
            ¿Por qué investigar cuando puedes obedecer? La ignorancia es el camino de menor resistencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          {dependencies.map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-background rounded-none border-none hover:bg-zinc-900/50 transition-colors duration-500 group"
            >
              <div className="space-y-6">
                <item.icon className="w-10 h-10 text-zinc-700 group-hover:text-primary transition-colors duration-300" />
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
