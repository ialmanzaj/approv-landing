"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, ArrowDown } from "lucide-react"
import Image from "next/image"
import { ChatBubble } from "@/components/ui/chat-bubble"
import Link from "next/link"

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
                className="group relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
              >
                <span className="relative z-10">Comenzar gratis</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Button>
            </Link>

            <Link href="https://cal.com/isaac-almanza" target="_blank">
              <Button
                variant="outline"
                size="xl"
                className="border-neutral-300 w-full"
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
        {/* Dispositivo móvil estilo iPhone - responsive */}
        <div className="animate-slide-up relative w-[260px] h-[520px] md:w-[280px] md:h-[570px] lg:w-[310px] lg:h-[630px] bg-black rounded-[38px] md:rounded-[42px] lg:rounded-[46px] shadow-[0_0_0_6px_rgba(20,20,20,0.9),0_8px_30px_rgba(0,0,0,0.4),0_2px_10px_5px_rgba(120,120,120,0.1)] md:shadow-[0_0_0_7px_rgba(20,20,20,0.9),0_8px_30px_rgba(0,0,0,0.4),0_2px_10px_5px_rgba(120,120,120,0.1)] lg:shadow-[0_0_0_8px_rgba(20,20,20,0.9),0_8px_30px_rgba(0,0,0,0.4),0_2px_10px_5px_rgba(120,120,120,0.1)] p-[3px] md:p-[4px] overflow-hidden">
          {/* Detalles físicos del iPhone */}
          <div className="absolute top-[35%] -right-[3px] w-[3px] h-[35px] bg-neutral-800 rounded-l-lg"></div>
          <div className="absolute top-[110px] -right-[3px] w-[3px] h-[55px] bg-neutral-800 rounded-l-lg"></div>
          <div className="absolute top-[100px] -left-[3px] w-[3px] h-[55px] bg-neutral-800 rounded-r-lg"></div>

          {/* Notch del iPhone */}
          <div className="absolute top-0 left-[50%] transform translate-x-[-50%] w-[140px] md:w-[160px] lg:w-[180px] h-[28px] md:h-[32px] lg:h-[35px] bg-black rounded-b-[18px] md:rounded-b-[20px] lg:rounded-b-[22px] z-30"></div>
          <div className="absolute top-[10px] md:top-[12px] left-[50%] transform translate-x-[-50%] flex space-x-2 z-30">
            <div className="w-[6px] h-[6px] md:w-[7px] md:h-[7px] lg:w-[8px] lg:h-[8px] rounded-full bg-gray-700"></div>
            <div className="w-[8px] h-[8px] md:w-[9px] md:h-[9px] lg:w-[10px] lg:h-[10px] rounded-full bg-gray-800"></div>
            <div className="w-[8px] h-[5px] md:w-[9px] md:h-[5px] lg:w-[10px] lg:h-[6px] rounded-full bg-gray-700"></div>
          </div>

          {/* Barra de home iPhone */}
          <div className="absolute bottom-[6px] md:bottom-[7px] lg:bottom-[8px] left-[50%] transform translate-x-[-50%] w-[100px] md:w-[120px] lg:w-[134px] h-[4px] md:h-[5px] bg-gray-700 rounded-full z-30"></div>

          {/* Reflejo sutil en pantalla */}
          <div className="absolute inset-0 rounded-[35px] md:rounded-[38px] lg:rounded-[42px] bg-gradient-to-b from-neutral-800 to-black overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10 opacity-20"></div>
            <div className="absolute inset-[1px] rounded-[34px] md:rounded-[37px] lg:rounded-[41px] shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] pointer-events-none z-[5]"></div>

            {/* Pantalla del iPhone */}
            <div className="absolute inset-0 rounded-[34px] md:rounded-[37px] lg:rounded-[41px] overflow-hidden flex flex-col">
              {/* Barra de estado iOS */}
              <div className="bg-black h-8 md:h-9 lg:h-10 flex justify-between items-center px-5 md:px-6 lg:px-8 text-white text-[10px] md:text-[11px] lg:text-xs pt-1 md:pt-2">
                <div className="ml-1 font-medium">10:42</div>
                <div className="absolute left-[50%] transform translate-x-[-50%] top-[26px] md:top-[28px] lg:top-[31px] w-[7px] h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] rounded-full bg-green-500 z-20"></div>
                <div className="flex items-center space-x-1">
                  <div className="h-[12px] w-[14px] md:h-[13px] md:w-[15px] lg:h-[14px] lg:w-[16px]">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
                      <path d="M18.75,10c0-2.5-2.5-2.5-2.5-2.5h-8.5c0,0-2.5,0-2.5,2.5s2.5,5,2.5,5v1.5c0,1,2,1,2,0V15c0.5,0,1-3,1-3h2c0,0,0.5,3,1,3v1.5c0,1,2,1,2,0V15C15.5,15,18.75,12.5,18.75,10z M10.25,10h3.5c-0.5,2-1.75,3-1.75,3S10.75,12,10.25,10z" />
                    </svg>
                  </div>
                  <div className="h-[12px] w-[16px] md:h-[13px] md:w-[17px] lg:h-[14px] lg:w-[18px]">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
                      <path d="M1 9l2 2c4.9-4.9 13-4.9 17.9 0l2-2C16.9 2.9 7.1 2.9 1 9z" />
                      <path d="M5 13l2 2c2.9-2.9 7.1-2.9 9.9 0l2-2c-3.9-3.9-10-3.9-13.9 0z" />
                      <path d="M9 17l3 3 3-3c-1.7-1.7-4.4-1.7-6 0z" />
                    </svg>
                  </div>
                  <div className="flex space-x-[1px]">
                    <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white"></div>
                    <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white"></div>
                    <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white"></div>
                    <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white/40"></div>
                  </div>
                </div>
              </div>

              {/* Header de WhatsApp */}
              <div className="bg-[#1DAA5D] pt-2 md:pt-2.5 lg:pt-3 pb-1.5 md:pb-2 px-2 md:px-2.5 lg:px-3 text-white flex items-center space-x-2 md:space-x-3">
                <div className="flex items-center">
                  <div className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white/70" fill="currentColor">
                      <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
                    </svg>
                  </div>
                  <div className="ml-2 md:ml-3">
                    <div className="text-xs md:text-sm font-medium">Aprobaciones APROV</div>
                    <div className="text-[9px] md:text-[10px] lg:text-xs opacity-90 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-300 mr-1 animate-pulse"></span>
                      online
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat de WhatsApp */}
              <div className="flex-1 bg-[#E5DDD5] p-2 md:p-2.5 lg:p-3 flex flex-col space-y-1.5 md:space-y-2 overflow-y-auto" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0xOFQxNTo1MjoxMSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDEtMThUMTU6NTM6MDErMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDEtMThUMTU6NTM6MDErMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWZhNDVlZDgtNDViYi0zNjQ0LWI0ZGUtMGJlZjIxNzc4MWJlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmFmYTQ1ZWQ4LTQ1YmItMzY0NC1iNGRlLTBiZWYyMTc3ODFiZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFmYTQ1ZWQ4LTQ1YmItMzY0NC1iNGRlLTBiZWYyMTc3ODFiZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWZhNDVlZDgtNDViYi0zNjQ0LWI0ZGUtMGJlZjIxNzc4MWJlIiBzdEV2dDp3aGVuPSIyMDIzLTAxLTE4VDE1OjUyOjExKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi+UoqIAAAC/SURBVGiB7ZhRDoAgDEOJXszr4JPXwyOMZQwQ3KCr0vVlIdvI3si6lW8r1TFi7P91EeZkzNs07Dk6qgH4jJTqWDw1x8JQTYwHgxZXxm5w/ES9GRJS8iosliwapmG5IA1LC9JYaNBYoNHoQUGjF+ZGkBvGhrFhbBgbxoaxYb5jIeC6fM9GEAz9ffkH9V7gHEYPCufoQaFxgkZjAQ1LD9KwXJCG5UQalkNp9Ph6MRqLKRqWc2lYrqfR8ISx0TxWiBVhXmALmwAAAABJRU5ErkJggg=="), repeating-linear-gradient(transparent, transparent 20px, rgba(0, 0, 0, 0.025) 20px, rgba(0, 0, 0, 0.025) 40px)' }}>
                {showChat && (
                  <>
                    <div className="animate-slide-up delay-100">
                      <div className="max-w-[85%] bg-white p-2 md:p-2.5 lg:p-3 rounded-lg shadow-sm relative">
                        <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                          ¡Hola! Soy APROV. Envíame tus solicitudes de aprobación y las gestionaré automáticamente.
                        </p>
                        <div className="flex items-center justify-end mt-1">
                          <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500">10:28 AM</span>
                        </div>
                        <div className="absolute left-0 bottom-0 transform translate-x-[-4px] translate-y-[4px] md:translate-x-[-5px] md:translate-y-[5px] w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-white rotate-45"></div>
                      </div>
                    </div>

                    <div className="animate-slide-up delay-300">
                      <div className="ml-auto max-w-[85%] bg-[#D9FDD3] p-2 md:p-2.5 lg:p-3 rounded-lg shadow-sm relative">
                        <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                          Necesito aprobación para la factura #4582 de Supplier Inc. por $15,350
                        </p>
                        <div className="flex items-center justify-end mt-1">
                          <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500 mr-1">10:30 AM</span>
                          <svg viewBox="0 0 18 18" className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#53BDEB]">
                            <path stroke="currentColor" strokeWidth="1.5" d="M3.5 7.5L7 11 14.5 3.5" />
                            <path stroke="currentColor" strokeWidth="1.5" d="M7.5 7.5L11 11 18.5 3.5" transform="translate(-5, 0)" />
                          </svg>
                        </div>
                        <div className="absolute right-0 bottom-0 transform translate-x-[4px] translate-y-[4px] md:translate-x-[5px] md:translate-y-[5px] w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-[#D9FDD3] rotate-45"></div>
                      </div>
                    </div>

                    {/* Indicador "escribiendo..." */}
                    <div className="animate-slide-up delay-400">
                      <div className="flex items-center">
                        <div className="bg-white rounded-full px-3 py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 flex items-center space-x-1 shadow-sm">
                          <span className="w-1.5 h-1.5 md:w-1.75 md:h-1.75 lg:w-2 lg:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-1.5 h-1.5 md:w-1.75 md:h-1.75 lg:w-2 lg:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                          <span className="w-1.5 h-1.5 md:w-1.75 md:h-1.75 lg:w-2 lg:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                        </div>
                      </div>
                    </div>

                    <div className="animate-slide-up delay-500">
                      <div className="max-w-[85%] bg-white p-2 md:p-2.5 lg:p-3 rounded-lg shadow-sm relative">
                        <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                          He enviado tu solicitud. Te notificaré cuando sea aprobada.
                        </p>
                        <div className="flex items-center justify-end mt-1">
                          <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500">10:30 AM</span>
                        </div>
                        <div className="absolute left-0 bottom-0 transform translate-x-[-4px] translate-y-[4px] md:translate-x-[-5px] md:translate-y-[5px] w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-white rotate-45"></div>
                      </div>
                    </div>

                    <div className="animate-slide-up delay-700">
                      <div className="max-w-[85%] bg-white p-2 md:p-2.5 lg:p-3 rounded-lg shadow-sm relative">
                        <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                          <span className="font-medium">✅ APROBADO</span><br />
                          Factura #4582 aprobada por Marina G. hace 23 segundos.
                        </p>
                        <div className="flex items-center justify-end mt-1">
                          <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500">10:32 AM</span>
                        </div>
                        <div className="absolute left-0 bottom-0 transform translate-x-[-4px] translate-y-[4px] md:translate-x-[-5px] md:translate-y-[5px] w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-white rotate-45"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Input de WhatsApp */}
              <div className="bg-[#f0f0f0] p-1.5 md:p-1.75 lg:p-2 flex items-center space-x-1 md:space-x-1.5 lg:space-x-2">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[#777] transition-all hover:text-[#1DAA5D] cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="currentColor">
                    <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z" />
                  </svg>
                </div>
                <div className="flex-1 rounded-full bg-white py-1.5 md:py-1.75 lg:py-2 px-3 md:px-3.5 lg:px-4 text-[10px] md:text-[11px] lg:text-sm text-neutral-500 flex items-center shadow-inner border border-gray-200">
                  <span>Escribe un mensaje...</span>
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[#777] transition-all hover:text-[#1DAA5D] cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="currentColor">
                    <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531z" />
                    <path d="M7.5 14.371l-.001.123v.123l.001-.123zm.012-12.074c-.068-.199-.13-.398-.217-.59-.258-.581-.837-.797-1.233-.479-.396.318-.49.934-.232 1.515.086.192.182.378.3.561l.055.103c-.009-.106-.013-.214-.017-.322-.012-.493-.028-.97-.429-1.331-.401-.362-1.047-.233-1.301.284-.254.517-.11 1.087.292 1.448.401.362.998.296 1.301-.284.07-.142.116-.285.148-.428l.039-.189c-.022.147-.053.293-.077.44zm2.632-.895c-.065-.385-.183-.75-.34-1.091-.431-.919-1.33-1.329-2.007-.916-.677.413-.876 1.499-.446 2.418.158.341.35.655.581.927l.098.114c-.055-.209-.093-.423-.123-.639-.092-.697-.159-1.367-.622-1.991-.463-.625-1.352-.908-1.948-.43-.597.48-.696 1.369-.233 1.994.464.625 1.21.823 1.947.43.168-.09.32-.19.453-.3l.15-.123a4.14 4.14 0 01-.15.71 5.322 5.322 0 01-.222.718z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-[#00A884] text-white shadow-md cursor-pointer hover:bg-[#00967A] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 