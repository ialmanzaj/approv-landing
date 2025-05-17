"use client"

import { FileText, Link as LinkIcon, Save } from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    Icon: FileText,
    title: "Envío rápido por WhatsApp o correo",
    desc: "Desde tu teléfono o computadora, mandas el documento que necesita aprobación (mantenimiento, gasto, proveedor, etc.)."
  },
  {
    step: '02',
    Icon: LinkIcon,
    title: "Cada responsable recibe un enlace único",
    desc: "Se abre el documento, se aprueba o se rechaza con un clic. No hace falta crear cuentas ni aprender nada nuevo."
  },
  {
    step: '03',
    Icon: Save,
    title: "Aprov guarda todo automáticamente",
    desc: "Al aprobarse, se notifica al equipo, se genera un acta con nombres y fecha, y queda todo listo para respaldo o auditoría."
  }
];

export function WorkflowSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary text-center mb-12">
        ¿Cómo funciona?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workflowSteps.map((item, i) => {
          const Icon = item.Icon;
          return (
            <div
              key={i}
              className="rounded-2xl p-8 bg-white border border-neutral-200 shadow-soft hover:shadow-medium transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-1 h-full animate-fade-in"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 text-secondary bg-secondary/10 rounded-full">
                <Icon className="w-8 h-8" />
              </div>
              <div className="text-whatsapp mb-3 font-bold text-sm">PASO {item.step}</div>
              <div className="font-semibold text-xl mb-4 text-primary">{item.title}</div>
              <div className="text-neutral-600 text-base leading-relaxed">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 