"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import { ArrowRight, ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PhoneFrame } from "@/components/mockup/phone-frame"
import { WhatsAppInterface } from "@/components/mockup/whatsapp-interface"

export function HeroSection() {
  const [approvalCount, setApprovalCount] = useState(2543)
  const [showChat, setShowChat] = useState(true)

  // Simular incremento de aprobaciones
  useEffect(() => {
    const interval = setInterval(() => {
      setApprovalCount(prev => prev + Math.floor(Math.random() * 5))
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-neutral-50 bg-hero-pattern opacity-5 z-0" />
      
      {/* Container with max-width for extra large screens */}
      <div className="mx-auto max-w-screen-2xl w-full min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Columna izquierda: Texto y CTA */}
        <div className="relative z-10 flex flex-col justify-center px-4 xs:px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="animate-fade-in">
            <h1 className="text-display text-gray-900">
              <div>Aprobaciones en <span className="text-blue-600">minutos</span>,</div>
              <div>no en <span className="text-gray-600">días</span></div>
            </h1>

            <p className="text-body text-gray-600 mt-4 md:mt-6 max-w-xl">
              Gestiona todas tus aprobaciones por WhatsApp.
              Sin apps nuevas, sin complicaciones.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="https://app.aprov.tech" target="_blank" className="w-full sm:max-w-[200px]">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="text-ui bg-blue-600 text-white rounded-lg group relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full"
                >
                  <span className="relative z-10">Comenzar gratis</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                </Button>
              </Link>

              <Link href="https://cal.com/isaac-almanza" target="_blank" className="w-full sm:max-w-[200px]">
                <Button
                  variant="outline"
                  size="xl"
                  className="text-ui border-neutral-300 w-full text-neutral-700 hover:scale-105 transition-all duration-300"
                >
                  Ver demostración
                </Button>
              </Link>
            </div>

            <div className="text-ui mt-4 md:mt-6 text-neutral-500">
              Sin tarjeta de crédito. Cancela cuando quieras.
            </div>

            <div className="mt-8 md:mt-12 flex items-center space-x-2 text-ui text-neutral-600">
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
        <div className="relative z-10 flex justify-center items-center px-4 xs:px-6 py-8 sm:py-12 md:py-0 md:px-8 lg:px-12 h-[500px] sm:h-auto">
          {/* Dispositivo móvil estilo iPhone con componentes */}
          <div className="transform scale-90 sm:scale-100 md:scale-[0.85] lg:scale-90 xl:scale-100 2xl:scale-110">
            <PhoneFrame>
              <WhatsAppInterface showChat={showChat} />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  )
} 