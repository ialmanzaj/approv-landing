"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import { ArrowRight, ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PhoneFrame } from "@/components/ui/phone-frame"
import { WhatsAppInterface } from "@/components/ui/whatsapp-interface"

export function HeroSection() {
  const [approvalCount, setApprovalCount] = useState(2543)
  const [showChat, setShowChat] = useState(false)

  // Simular incremento de aprobaciones
  useEffect(() => {
    const interval = setInterval(() => {
      setApprovalCount(prev => prev + Math.floor(Math.random() * 5))
    }, 10000)

    // Mostrar chat después de 1 segundo
    const timeout = setTimeout(() => {
      setShowChat(true)
    }, 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-neutral-50 bg-hero-pattern opacity-5 z-0" />

      {/* Columna izquierda: Texto y CTA */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-neutral-900 leading-tight">
            <div>Aprobaciones en <span className="text-whatsapp font-extrabold">minutos</span>,</div>
            <div>no en <span className=" text-neutral-600 decoration-2">días</span></div>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-xl">
            Gestiona todas tus aprobaciones por WhatsApp. Sin apps nuevas, sin complicaciones.
            Tan simple como debería ser.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="https://app.aprov.tech" target="_blank">
              <Button
                variant="whatsapp"
                size="xl"
                className="group relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full"
              >
                <span className="relative z-10">Comenzar gratis</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Button>
            </Link>

            <Link href="https://cal.com/isaac-almanza" target="_blank">
              <Button
                variant="outline"
                size="xl"
                className="border-neutral-300 w-full text-neutral-700 hover:scale-105 transition-all duration-300"
              >
                Ver demostración
              </Button>
            </Link>
          </div>

          <div className="mt-6 text-sm text-neutral-500">
            Sin tarjeta de crédito. Cancela cuando quieras.
          </div>

          <div className="mt-12 flex items-center space-x-2 text-sm text-neutral-600">
            <div className="flex -space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-[10px] overflow-hidden"
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    alt="User avatar"
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
            <div>
              <span className="font-semibold">
                {approvalCount.toLocaleString()}
              </span> aprobaciones completadas hoy
            </div>
          </div>
        </div>

        {/* Flecha para pantallas pequeñas que indica contenido abajo */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
          <ArrowDown className="h-6 w-6 text-neutral-400 animate-bounce" />
        </div>
      </div>

      {/* Columna derecha: Visualización interactiva */}
      <div className="relative z-10 flex justify-center items-center px-6 py-12 md:py-0 md:px-8 lg:px-12">
        {/* Dispositivo móvil estilo iPhone con componentes */}
        <PhoneFrame>
          <WhatsAppInterface showChat={showChat} />
        </PhoneFrame>
      </div>
    </section>
  )
} 