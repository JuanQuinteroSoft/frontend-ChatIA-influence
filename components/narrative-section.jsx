import Image from "next/image";
export function NarrativeSection() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square bg-zinc-950 border border-zinc-800 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[background-position_spin_4s_linear_infinite]" />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-black border border-primary/20 shadow-[0_0_50px_rgba(57,255,20,0.1)] animate-pulse" />
              </div> */}
              <Image
                src="./iaWorld.png"
                alt="Ia world"
                fill
                className="object-cover"
              />
              {/* <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/50">
                SYSTEM_STATUS: OPAQUE
              </div> */}
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              NO MIRAMOS <br />
              <span className="text-primary">ADENTRO</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-mono">
              <p>
                <span className="text-primary">ERROR 404: CURIOSIDAD NOT FOUND.</span> Aceptamos la recomendación de la película. Aceptamos la ruta del GPS. Aceptamos la respuesta del chat.
              </p>
              <p>
                Nunca preguntamos cómo se llegó a esa conclusión. La caja negra es cómoda. La verdad es compleja.
                Elegimos la simplicidad de la ignorancia sobre el caos del entendimiento.
              </p>
              <p className="text-foreground border-l-4 border-primary pl-4 py-2 bg-zinc-900/50">
                Nos hemos convertido en usuarios pasivos de nuestra propia realidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
