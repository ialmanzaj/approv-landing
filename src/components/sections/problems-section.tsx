"use client"

import { Clock, MessagesSquare, FileQuestion, Repeat2, AlertTriangle, Frown } from "lucide-react"

const problems = [
  {
    title: "Aprobaciones lentas y desorganizadas",
    description: "\"Mando un correo o un mensaje por WhatsApp… y pasan días sin respuesta. Mientras tanto, todo se detiene.\"",
    icon: Clock,
    color: "border-red-200 bg-red-50 text-red-600",
  },
  {
    title: "Canales de comunicación dispersos",
    description: "\"Una aprobación está en WhatsApp, otra en el correo, otra perdida en un Excel. Y cuando la necesitas… nadie sabe dónde buscar.\"",
    icon: MessagesSquare,
    color: "border-orange-200 bg-orange-50 text-orange-600",
  },
  {
    title: "Falta de trazabilidad y respaldo",
    description: "\"Cuando alguien pregunta '¿quién aprobó esto?', solo hay silencio. No hay registro. No hay respaldo.\"",
    icon: FileQuestion,
    color: "border-amber-200 bg-amber-50 text-amber-600",
  },
  {
    title: "Tiempo perdido en tareas repetitivas",
    description: "\"Horas y horas escribiendo, llamando, persiguiendo respuestas… en lugar de avanzar con lo importante.\"",
    icon: Repeat2,
    color: "border-emerald-200 bg-emerald-50 text-emerald-600",
  },
  {
    title: "Riesgo operativo y legal",
    description: "\"Se nos vencen contratos. Se nos pasan fechas clave. Todo por una firma que nunca llegó a tiempo.\"",
    icon: AlertTriangle,
    color: "border-blue-200 bg-blue-50 text-blue-600",
  },
  {
    title: "Frustración del equipo y desgaste emocional",
    description: "\"Llego a la junta agotada. No por el trabajo… sino por tener que perseguir todo como si fuera mi única tarea.\"",
    icon: Frown,
    color: "border-purple-200 bg-purple-50 text-purple-600",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
            ¿Estás Lidiando con Estos Problemas en tu Día a Día?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-lg ${problem.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-neutral-600 italic">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
} 