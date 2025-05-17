"use client"

import {
  MessageSquareText,
  ClipboardList,
  BellDot,
  Workflow as WorkflowIcon,
  Zap,
  ShieldCheck,
  LayoutDashboard,
  CopyPlus,
} from 'lucide-react';

const features = [
  { label: "Link por WhatsApp", Icon: MessageSquareText, desc: "Inicia y gestiona aprobaciones directo desde WhatsApp." },
  { label: "Registros de Auditoría", Icon: ClipboardList, desc: "Trazabilidad completa de cada decisión y aprobación." },
  { label: "Alertas de Escalamiento", Icon: BellDot, desc: "Notificaciones automáticas para asegurar respuestas a tiempo." },
  { label: "Flujos Personalizados", Icon: WorkflowIcon, desc: "Adapta el proceso de aprobación a tus necesidades exactas." },
  { label: "Notificaciones en Tiempo Real", Icon: Zap, desc: "Mantente informado al instante sobre cada avance." },
  { label: "Gestión de Cumplimiento", Icon: ShieldCheck, desc: "Asegura el cumplimiento normativo sin esfuerzo." },
  { label: "Panel de Control", Icon: LayoutDashboard, desc: "Visualiza y gestiona todas tus aprobaciones en un solo lugar." },
  { label: "Plantillas Inteligentes", Icon: CopyPlus, desc: "Acelera la creación de solicitudes con plantillas predefinidas." }
];

export function FeatureGrid() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 bg-neutral-50">
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary text-center mb-12">
        Características
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-2">
        {features.map((feature, i) => {
          const Icon = feature.Icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-soft flex flex-col items-center text-center group transform transition-all duration-300 hover:shadow-medium hover:-translate-y-1 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-secondary group-hover:text-primary transition-colors duration-300">
                <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <div className="text-base font-semibold text-primary mb-2">{feature.label}</div>
              <p className="text-sm text-neutral-600 mt-1 px-2">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
} 