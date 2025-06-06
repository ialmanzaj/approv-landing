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
      
      {/* Centered single-column layout */}
      <div className="mx-auto max-w-7xl w-full min-h-screen flex items-center justify-center">
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
              <div>De <span className="text-slate-600">3 días</span> a <span className="text-indigo-600">3 minutos</span></div>
              <div>Acelera tus aprobaciones</div>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
              Aprueba documentos en 2 pasos desde <span className="text-green-500 font-semibold">WhatsApp</span>. Tu equipo avanza, tú mantienes el control.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://app.aprov.tech" target="_blank">
                <Button
                  variant="default"
                  size="xl"
                  className="w-full sm:w-auto text-lg bg-indigo-500 text-white rounded-xl group relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-indigo-200"
                >
                  <span className="relative z-10">Comenzar gratis</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="https://cal.com/isaac-almanza" target="_blank">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto text-lg border-slate-300 text-slate-700 hover:scale-105 hover:bg-slate-50/50 transition-all duration-300 rounded-xl"
                >
                  Ver demostración
                </Button>
              </Link>
            </div>

            <div className="mt-16 group flex flex-col sm:flex-row items-center justify-center text-base text-slate-600">
              <div className="flex -space-x-2 transition-transform duration-300 group-hover:scale-105">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white shadow-md overflow-hidden"
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt="User avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 transition-colors duration-300 group-hover:text-slate-800">
                <span className="font-bold text-slate-900">
                  {approvalCount.toLocaleString()}
                </span><span className="text-slate-500"> aprobaciones completadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 