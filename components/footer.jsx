export function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left">
          <h3 className="text-2xl font-bold tracking-tighter text-primary">HUMAN_ERROR</h3>
          <p className="text-xs text-zinc-500 font-mono mt-2">
            © 2025. Juan Diego Quintero.
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-muted-foreground font-mono">
            ¿Estás seguro de que leíste esto?
          </p>
          <p className="text-xs text-zinc-600 mt-1">
            O solo escaneaste buscando el final.
          </p>
        </div>
      </div>
    </footer>
  )
}
