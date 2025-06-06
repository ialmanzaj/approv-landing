"use client"

import { 
  Clock, 
  Search, 
  MessageCircle, 
  AlertCircle, 
  Zap, 
  Eye,
  TrendingDown
} from "lucide-react"

const problemItems = [
  {
    icon: Clock,
    title: "Horas Perdidas Persiguiendo Aprobaciones",
    stat: "4.3 hrs/día",
    trend: "-32%",
    featured: true
  },
  {
    icon: Search,
    title: "Solicitudes Perdidas en el Caos",
    stat: "67% errores",
    trend: "+45%"
  },
  {
    icon: MessageCircle,
    title: "Ida y Vuelta Infinita de Mensajes",
    stat: "8+ emails",
    trend: "+120%"
  },
  {
    icon: AlertCircle,
    title: "Respuestas Lentas que Bloquean Proyectos",
    stat: "5+ días",
    trend: "+67%"
  },
  {
    icon: Zap,
    title: "Tiempo de Respuesta Lento",
    stat: "48+ horas",
    trend: "+89%"
  },
  {
    icon: Eye,
    title: "Falta de Visibilidad del Estado",
    stat: "Sin trazabilidad",
    trend: "N/A"
  }
]

export function ProblemsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-200 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-200 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header section with asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8">
            {/* Premium social proof badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl text-sm font-medium text-slate-600 mb-8 shadow-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="text-slate-500">Más de</span>
              <span className="font-semibold text-slate-800">10,000 empresas</span>
              <span className="text-slate-500">pierden tiempo diariamente</span>
            </div>

            {/* Sophisticated headline with subtle gradient */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight">
              <span className="text-slate-900">El caos de</span><br />
              <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 bg-clip-text text-transparent">aprobaciones</span><br />
              <span className="text-slate-900">roba tu tiempo.</span>
            </h2>
          </div>
          
          {/* Premium side stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <span className="text-sm text-slate-500 uppercase tracking-wide font-medium">Productividad</span>
              </div>
              <div className="text-3xl font-bold text-slate-900">-47%</div>
              <div className="text-sm text-slate-600">tiempo perdido en promedio</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-2xl p-6">
              <div className="text-2xl font-bold text-indigo-700 mb-1">$2.3M</div>
              <div className="text-sm text-indigo-600">costo anual estimado por empresa</div>
            </div>
          </div>
        </div>

        {/* Premium scenario description */}
        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl text-slate-700 mb-6 leading-relaxed max-w-5xl mx-auto font-medium">
            <span className="text-indigo-600 font-semibold">Son las 4pm.</span> Tus últimas 3 'revisiones rápidas' de solicitudes pendientes te costaron <span className="text-slate-900 font-semibold">45 minutos...</span>
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/30 to-transparent rounded-2xl"></div>
            <p className="text-lg text-slate-600 py-6 px-8 relative">
              Mientras tanto, <span className="font-semibold text-slate-800">12 nuevas solicitudes</span> esperan tu atención y el equipo pregunta por actualizaciones.
            </p>
          </div>
        </div>

        {/* Premium problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problemItems.map((item, index) => {
            const IconComponent = item.icon;
            const isNegativeTrend = item.trend.startsWith('+');
            
            return (
              <div
                key={index}
                className={`
                  group relative bg-white/80 backdrop-blur-sm rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${item.featured 
                    ? 'border-indigo-200 shadow-lg md:scale-105 lg:row-span-1 bg-gradient-to-br from-white to-indigo-50/30' 
                    : 'border-slate-100 shadow-sm hover:border-slate-200'
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    Principal
                  </div>
                )}
                
                <div className="p-8">
                  {/* Premium icon treatment */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300
                      ${item.featured 
                        ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 group-hover:from-indigo-200 group-hover:to-indigo-300' 
                        : 'bg-slate-100 group-hover:bg-slate-200'
                      }
                    `}>
                      <IconComponent className={`w-7 h-7 ${item.featured ? 'text-indigo-600' : 'text-slate-600'}`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Sophisticated trend indicators */}
                    {item.trend !== 'N/A' && (
                      <div className={`
                        text-xs font-medium px-3 py-1 rounded-full
                        ${isNegativeTrend 
                          ? 'bg-red-50 text-red-600 border border-red-100' 
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        }
                      `}>
                        {item.trend}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-slate-800 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className={`
                    text-sm font-semibold px-4 py-2 rounded-xl inline-block
                    ${item.featured 
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }
                  `}>
                    {item.stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium transition section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <p className="text-xl text-slate-600 mb-4">
              ¿Te suena familiar? <span className="font-semibold text-slate-800">No estás solo.</span>
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mx-auto mb-4"></div>
            <p className="text-2xl font-bold text-slate-900 leading-relaxed">
              Existe una forma más <span className="text-indigo-600">inteligente</span> de gestionar aprobaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 