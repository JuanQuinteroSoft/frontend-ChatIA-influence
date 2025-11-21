'use client'

import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Aceptación Sin Duda', value: 99, suffix: '%' },
  { label: 'Comprensión del Sistema', value: 1, suffix: '%' },
  { label: 'Pensamiento Delegado', value: 88, suffix: '%' },
  { label: 'Resistencia Crítica', value: 12, suffix: '%' }
]

export function PowerSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-32 px-4 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl">
            ESTADÍSTICAS DE <span className="text-primary">SUMISIÓN</span>
          </h2>
          <p className="text-right font-mono text-muted-foreground max-w-md">
            Datos procesados. Conclusiones irrefutables. <br />
            Tu resistencia es estadísticamente insignificante.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="border-b border-zinc-800 pb-4 mb-4 group-hover:border-primary transition-colors duration-500">
                <div className="text-7xl font-black text-zinc-800 group-hover:text-primary transition-colors duration-500 tabular-nums tracking-tighter">
                  {mounted ? stat.value : 0}{stat.suffix}
                </div>
              </div>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 p-12 border border-zinc-800 bg-zinc-900/30 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <p className="text-2xl md:text-4xl font-bold text-balance leading-tight">
            "El Poder Persuasivo de la Inteligencia Artificial."
          </p>
          <br />
          <br />
          <p className="text-2xl md:text-4xl font-bold text-balance leading-tight">
            "La inteligencia artificial no nos domina por fuerza, <br />
            sino por nuestra propia <span className="text-primary underline decoration-4 underline-offset-4">pereza intelectual</span>."
          </p>
        </div>
      </div>
    </section>
  )
}
