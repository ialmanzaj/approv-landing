"use client"

import {
  Clock, 
  Search, 
  MessageCircle, 
  AlertCircle, 
  Zap, 
  Eye,
  TrendingDown,
  ArrowRight
} from "lucide-react"

const problemItems = [
  {
    icon: Clock,
    title: "Aprobaciones que Toman Semanas",
    description: "Procesos que deberían tomar horas se extienden por días.",
    stat: "4.3 hrs/día",
    featured: true
  },
  {
    icon: Search,
    title: "Solicitudes Perdidas en Múltiples Canales",
    description: "WhatsApp, email, papel... información fragmentada y riesgosa.",
    stat: "67% errores",
  },
  {
    icon: MessageCircle,
    title: "Comunicación Ineficiente",
    description: "Ida y vuelta infinita hasta obtener una simple respuesta.",
    stat: "8+ emails",
  },
  {
    icon: AlertCircle,
    title: "Proyectos Bloqueados por Aprobaciones",
    description: "Equipos de alto rendimiento esperando decisiones para avanzar.",
    stat: "5+ días",
  },
  {
    icon: Zap,
    title: "Respuestas Tardías Críticas",
    description: "Oportunidades de negocio perdidas por lentitud en decisiones.",
    stat: "48+ horas",
  },
  {
    icon: Eye,
    title: "Falta de Transparencia en el Proceso",
    description: "Nadie sabe el estado real de las solicitudes importantes.",
    stat: "Sin visibilidad",
  }
]

export function ProblemsSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Finalized background pattern */}
      <div className="absolute inset-0 opacity-[0.02] ">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-300 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-300 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-200 to-slate-200 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Finalized header section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-8">
            {/* Finalized social proof badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl text-sm font-medium text-slate-600 mb-8 shadow-xl shadow-slate-100/70">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </div>
              <span className="text-slate-500">Más de</span>
              <span className="font-semibold text-slate-800">10,000 empresas</span>
              <span className="text-slate-500">reportan estos problemas</span>
        </div>

            {/* Finalized headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight">
              <span className="text-slate-900">El caos de</span><br />
              <span className="bg-gradient-to-r from-slate-900 via-indigo-500 to-slate-900 bg-clip-text text-transparent drop-shadow-lg">aprobaciones</span><br />
              <span className="text-slate-900">roba tu tiempo.</span>
            </h2>
          </div>
          
          {/* Finalized side stats */}
          <div className="lg:col-span-4 space-y-6 group">
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-6 shadow-xl shadow-slate-100/70 transition-all duration-300 hover:!scale-105 hover:!shadow-2xl hover:!shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-3">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Productividad</span>
        </div>
              <div className="text-4xl font-bold text-slate-900 mb-1">-47%</div>
              <div className="text-sm text-slate-600 mb-2">tiempo perdido en promedio</div>
              <a href="#" className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-indigo-500 group transition-colors">
               
               
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50/95 to-slate-50/95 backdrop-blur-xl border border-indigo-200/80 rounded-2xl p-6 shadow-2xl shadow-indigo-100/80 transition-all duration-300 hover:!scale-105 hover:!shadow-2xl hover:!shadow-indigo-200/80">
              <div className="text-3xl font-bold text-indigo-600 mb-1">$2.3M</div>
              <div className="text-sm text-indigo-700 mb-2 font-medium">costo anual estimado por empresa</div>
              <a href="#" className="text-xs text-indigo-500 flex items-center gap-1.5 hover:text-indigo-600 group transition-colors">
               
              </a>
            </div>
          </div>
        </div>

        {/* Finalized scenario description */}
        <div className="text-center mb-24">
          <p className="text-2xl md:text-3xl text-slate-700 mb-6 leading-tight max-w-5xl mx-auto font-medium">
            <span className="text-indigo-600 font-semibold">Son las 4pm.</span> Tus últimas 3 'revisiones rápidas' de solicitudes pendientes te costaron <span className="text-slate-900 font-semibold underline decoration-indigo-300/80 decoration-4 underline-offset-4">45 minutos...</span>
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent rounded-3xl"></div>
            <p className="text-lg text-slate-600 py-8 px-8 relative leading-relaxed">
              Mientras tanto, <span className="font-semibold text-slate-800 bg-slate-200/70 px-2 py-1.5 rounded-lg">12 nuevas solicitudes</span> esperan tu atención y el equipo pregunta por actualizaciones <span className="font-semibold">cada 30 minutos.</span>
            </p>
          </div>
        </div>

        {/* Finalized problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {problemItems.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div
                key={index}
                className={`
                  group relative bg-white/95 backdrop-blur-xl rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                  ${item.featured 
                    ? 'border-indigo-200/80 shadow-2xl shadow-indigo-100/80 md:scale-105 bg-gradient-to-br from-white to-indigo-50/50' 
                    : 'border-slate-200/80 shadow-xl shadow-slate-100/70 hover:border-slate-300/80'
                  }
                `}
                style={{ 
                  animationDelay: `${index * 120}ms`,
                  willChange: 'transform, shadow'
                }}
              >
                
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
                      ${item.featured 
                        ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 group-hover:from-indigo-200 group-hover:to-indigo-300 shadow-xl shadow-indigo-100/80' 
                        : 'bg-slate-100 group-hover:bg-slate-200 shadow-lg shadow-slate-100/80'
                      }
                    `}>
                      <IconComponent className={`w-8 h-8 ${item.featured ? 'text-indigo-600' : 'text-slate-600'}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 min-h-[40px]">
                    {item.description}
                  </p>
                  
                  <div className={`
                    text-base font-semibold px-4 py-2.5 rounded-xl inline-block border backdrop-blur-xl
                    ${item.featured 
                      ? 'bg-indigo-100/90 text-indigo-700 border-indigo-200/80 shadow-md shadow-indigo-100/80' 
                      : 'bg-slate-100/90 text-slate-700 border-slate-200/80 shadow-md shadow-slate-100/80'
                    }
                  `}>
                    {item.stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Finalized transition section */}
        <div className="text-center group">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-100/90 to-white/95 backdrop-blur-xl rounded-3xl p-10 border border-slate-200/80 shadow-2xl shadow-slate-200/80">
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              ¿Te suena familiar? <span className="font-semibold text-slate-800">No estás solo.</span><br />
              <span className="text-lg text-slate-500">Miles de empresas enfrentan estos mismos desafíos cada día.</span>
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-400 rounded-full mx-auto mb-6 shadow-2xl shadow-indigo-200/80"></div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed mb-4">
              Existe una forma más <span className="text-indigo-600 underline decoration-indigo-300/80 decoration-4 underline-offset-4">inteligente</span> de gestionar aprobaciones.
            </p>
            <a href="#workflow" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200/80 group-hover:scale-105 transform">
              Descubre cómo funciona
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 