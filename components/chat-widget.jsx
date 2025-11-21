'use client'

import { useState, useRef, useEffect } from 'react'
import { Terminal, X, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'system', text: '> Iniciando protocolo de duda...' },
    { role: 'system', text: '> Analizando patrones de comportamiento...' },
    { role: 'system', text: '> DETECTADO: Usuario buscando respuestas fáciles.' },
    { role: 'system', text: '> Esperando input...', pulse: true }
  ])

  const messagesEndRef = useRef(null)

  // Auto scroll siempre al final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userText = input.trim()
    setInput('')

    // Agregar mensaje del usuario
    setMessages(prev => [
      ...prev,
      { role: 'user', text: `YO:     > ${userText}` }
    ])

    try {
      // const res = await fetch('http://localhost:3000/chat', {
      const res = await fetch('https://bakend-chat-ia-influence.vercel.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userText })
      })
console.log(res);

      const data = await res.json()

      // Agregar respuesta del modelo
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: `PEPE:   > ${data.response || 'Sin respuesta del servidor.'}` }
      ])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'error', text: '> Error: No se pudo contactar el servidor.' }
      ])
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 h-[400px] bg-black border border-primary rounded-none shadow-[0_0_30px_rgba(57,255,20,0.1)] z-50 flex flex-col font-mono">
          
          {/* HEADER */}
          <div className="flex items-center justify-between p-3 border-b border-primary bg-primary/10">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase">System_Override</span>
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-primary/20 rounded-none"
                onClick={async () => {
                  try {
                    await fetch("https://bakend-chat-ia-influence.vercel.app/clear", {
                      method: "POST"
                    });
                  } catch (err) {
                    console.error("Error clearing history", err);
                  }

                  setMessages([
                    { role: "system", text: "> Iniciando protocolo de duda..." },
                    { role: "system", text: "> Analizando patrones de comportamiento..." },
                    { role: "system", text: "> DETECTADO: Usuario buscando respuestas fáciles." },
                    { role: "system", text: "> Esperando input...", pulse: true }
                  ]);
                }}
              >
                <Trash2 className="w-3 h-3 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-primary/20 rounded-none" onClick={() => setIsOpen(false)}>
                <Minus className="w-3 h-3 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-primary/20 rounded-none" onClick={() => setIsOpen(false)}>
                <X className="w-3 h-3 text-primary" />
              </Button>
            </div>
          </div>

          {/* CHAT LOG */}
          <div className="flex-1 p-4 text-xs text-primary/80 space-y-2 overflow-y-auto">
            {messages.map((msg, i) => (
              <p
                key={i}
                className={msg.pulse ? 'animate-pulse text-primary/70' : ''}
              >
                {msg.text}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-primary/30 bg-zinc-900">
            <div className="flex gap-2">
              <span className="text-primary">{'>'}</span>
              <input
                type="text"
                placeholder="Cuestiona algo..."
                className="flex-1 bg-transparent text-primary text-xs focus:outline-none placeholder:text-primary/30"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                  onClick={handleSend}
                  className="h-7 px-3 rounded-none bg-black text-primary hover:bg-primary/80 hover:text-black text-xs"
                >
                  Enviar
                </Button>
            </div>
          </div>

        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-none bg-primary text-black hover:bg-primary/80 shadow-lg z-50 border-2 border-transparent hover:border-white transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Terminal className="w-6 h-6" />}
      </Button>
    </>
  )
}
