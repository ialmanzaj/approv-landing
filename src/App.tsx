import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Minimal placeholder SVG for icons
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="#ebf4ff" />
    <path d="M8 12l2 2 4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function App() {
  // For FAQ open state if needed
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Dummy testimonials
  const testimonials = [
    {
      name: "Dayanara",
      sub: "Cofundadora de Ademsa",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      subscribers: "13K suscriptores",
      text: "Con Magnific, redujimos nuestro tiempo de aprobación de mantenimiento de 3 días a menos de una hora—y finalmente tenemos una auditoría adecuada para cada decisión.",
    },
    {
      name: "Brandon M.",
      sub: "Inversionista inmobiliario",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      subscribers: "700K suscriptores",
      text: "Magnific realmente se siente como un truco. Puedo hacer más aprobaciones en menos tiempo. Si quieres empezar, tienes que probarlo.",
    },
    {
      name: "James S.",
      sub: "Administrador de edificio",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      subscribers: "850K suscriptores",
      text: "De verdad, Magnific ha hecho que el cumplimiento sea mucho más fácil. ¡Nunca pierdo una fecha clave y tengo registros de auditoría al instante!",
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans">
      {/* HEADER */}
      <header className="bg-[#000d49] w-full">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-6">
          <div className="text-white text-2xl font-bold tracking-tight" style={{ fontFamily: 'PP Mori, Inter, sans-serif' }}>MAGNIFIC</div>
          <a href="#demo" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition text-base shadow">
            Solicita una demo
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full bg-[#000d49] py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white text-center max-w-3xl tracking-tight" style={{ fontFamily: 'PP Mori, Inter, sans-serif' }}>
            Automatiza cada aprobación, <br className="hidden sm:block" /> Reduce semanas de idas y vueltas a minutos
          </h1>
          <p className="text-lg text-[#afdafa] mt-6 max-w-xl text-center">
            Gestiona solicitudes de mantenimiento, aprobaciones de presupuesto y proveedores—todo en un solo flujo de trabajo impulsado por WhatsApp.
          </p>
          <a
            href="#demo"
            className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 shadow-lg transition"
          >
            Reserva una demo
          </a>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[
            { label: "Pasarela WhatsApp" },
            { label: "Registros de auditoría" },
            { label: "Alertas de escalamiento" },
            { label: "Flujos de trabajo personalizados" },
            { label: "Notificaciones en tiempo real" },
            { label: "Cumplimiento" },
            { label: "Panel de control" },
            { label: "Plantillas" }
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <PlaceholderIcon className="w-10 h-10" />
              </div>
              <div className="text-sm font-medium text-gray-700 text-center">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3-STEP WORKFLOW SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">¿Cómo funciona Magnific?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Enviar solicitud', desc: 'Comienza con un WhatsApp o correo electrónico, o usa una plantilla.' },
            { step: '02', title: 'Revisar y aprobar', desc: 'Gerentes y consejo revisan con aprobaciones listas para auditoría.' },
            { step: '03', title: 'Completar y registrar', desc: 'Notificaciones automáticas y registro de auditoría para cada decisión.' },
          ].map(({ step, title, desc }, i) => (
            <div key={i} className="rounded-2xl p-6 bg-[#f8fafc] border border-gray-200 shadow-sm text-center flex flex-col items-center">
              <div className="text-xl font-bold text-indigo-600 mb-2">{step}</div>
              <div className="font-semibold mb-2 text-[#1e244d]">{title}</div>
              <div className="text-gray-500 text-base max-w-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-left space-y-3 flex flex-col">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.sub}</div>
                  <div className="text-xs text-gray-400">{t.subscribers}</div>
                </div>
              </div>
              <div className="text-[15px] text-gray-700 font-medium mt-2">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="border-t border-b divide-y divide-gray-200 mt-12">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-[#000d49] py-10 text-center">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
            {[
              {
                q: "¿Puedo cancelar en cualquier momento?",
                a: "¡Por supuesto! Puedes cancelar tu suscripción a Magnific en cualquier momento desde tu cuenta o contactando al soporte.",
              },
              {
                q: "¿Magnific funciona en móvil y escritorio?",
                a: "Sí, los flujos de trabajo y aprobaciones de Magnific pueden gestionarse desde cualquier dispositivo vía WhatsApp, correo electrónico o navegador.",
              },
              {
                q: "¿Mis datos están seguros?",
                a: "Usamos las mejores prácticas de la industria y cifrado para mantener tus datos y registros de auditoría protegidos.",
              },
              {
                q: "¿Qué tan rápido podemos comenzar?",
                a: "Puedes empezar en un día—la mayoría de los usuarios se incorporan en menos de una hora. Nuestro equipo te asistirá con la configuración si lo necesitas.",
              },
              {
                q: "¿Puedo personalizar mi flujo de trabajo?",
                a: "¡Sí! Magnific tiene un editor de flujos de trabajo de arrastrar y soltar para que puedas reflejar tu proceso exacto.",
              },
              {
                q: "¿Cómo funcionan las escalaciones?",
                a: "Si un aprobador se retrasa, Magnific activa automáticamente recordatorios y escalaciones por el canal que elijas (SMS, correo electrónico o llamada).",
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq${i}`}>
                <AccordionTrigger className="py-4 px-1 text-left w-full font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pt-2 px-1 w-full">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000d49] text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center py-6 px-4">
          <div className="font-bold text-lg tracking-tight">MAGNIFIC</div>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:underline transition">Política de privacidad</a>
            <a href="#" className="text-sm hover:underline transition">Términos del servicio</a>
          </div>
          <div className="flex gap-4">
            {/* Social icon placeholders */}
            <a href="#" aria-label="Twitter" className="hover:opacity-70">
              <svg width={20} height={20} fill="currentColor" className="text-white"><path d="M19.6,4.6c-0.5,0.2-0.9,0.3-1.4,0.4c0.5-0.3,0.9-0.8,1.1-1.3c-0.5,0.3-1,0.6-1.6,0.7c-0.5-0.5-1.3-0.8-2-0.8 c-1.5,0-2.5,1.4-2.2,2.8C7.7,6.2,4.1,4.5,1.7,1.9c-0.4,0.7-0.2,1.5,0.4,2c-0.4,0-0.7-0.1-1-0.3C1.1,5.3,2,6.3,3.3,6.6 c-0.3,0.1-0.6,0.1-0.8,0c0.2,0.7,0.9,1.2,1.7,1.2C3.2,8.8,2.3,9.1,1.4,9.1c-0.3,0-0.5,0-0.8-0.1C2.1,10.4,4.6,11.2,7.3,11.2 c8.5,0,13.2-7,12.9-13.4C18.4,5.2,19,5,19.6,4.6z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <svg width={20} height={20} fill="currentColor" className="text-white"><path d="M18.4 18.4h-3.2v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.2 1.4-2.2 2.8v5.8H8V7.9h3v1.4h0c0.4-0.8 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.3V18.4zM4.2 6.6c-1 0-1.7-0.8-1.7-1.7 0-1 0.7-1.7 1.7-1.7s1.7 0.8 1.7 1.7c0 0.9-0.7 1.7-1.7 1.7zM6.3 18.4H2.1V7.9h4.2V18.4zM20 0H0v20h20V0z"/></svg>
            </a>
            <a href="#" aria-label="Email" className="hover:opacity-70">
              <svg width={20} height={20} fill="currentColor" className="text-white"><path d="M1.4,4.1l8.3,6.1c0.6,0.5,1.5,0.5,2.1,0l8.3-6.1C19.6,4.7,20,5.4,20,6.1v7.8c0,1-0.7,1.7-1.7,1.7H1.7C0.7,15.6,0,14.9,0,13.9V6.1C0,5.4,0.4,4.7,1.4,4.1z M10,10.7L1.4,4.1C1.7,3.6,2.5,3.2,3.3,3.2h13.4c0.8,0,1.6,0.4,1.9,0.9L10,10.7z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
