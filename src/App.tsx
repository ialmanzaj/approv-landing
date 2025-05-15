import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  MessageSquareText,
  ClipboardList,
  BellDot,
  Workflow as WorkflowIcon,
  Zap,
  ShieldCheck,
  LayoutDashboard,
  CopyPlus,
  FileUp,
  FileText,
  Link as LinkIcon,
  Save,
  Twitter,
  Linkedin,
  Mail,
  Clock,
  Folders,
  ClipboardX,
  Hourglass,
  AlertTriangle,
  Frown
} from 'lucide-react';

// Minimal placeholder SVG for icons
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor" className={className}>
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="M8 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
      title: "Magnific guarda todo automáticamente",
      desc: "Al aprobarse, se notifica al equipo, se genera un acta con nombres y fecha, y queda todo listo para respaldo o auditoría."
    }
  ];

  const painPoints = [
    {
      Icon: Clock,
      title: "Aprobaciones lentas y desorganizadas",
      description: "“Mando un correo o mensaje en WhatsApp, y nadie responde por días.”"
    },
    {
      Icon: Folders,
      title: "Canales de comunicación dispersos",
      description: "“Unas cosas llegan por WhatsApp, otras por correo, otras están en una hoja de Excel.”"
    },
    {
      Icon: ClipboardX,
      title: "Falta de trazabilidad y respaldo",
      description: "“Si alguien me pregunta ‘¿quién aprobó esto?’, no tengo cómo demostrarlo.”"
    },
    {
      Icon: Hourglass,
      title: "Tiempo perdido en tareas repetitivas",
      description: "“Paso horas persiguiendo firmas o respuestas.”"
    },
    {
      Icon: AlertTriangle,
      title: "Riesgo operativo y legal",
      description: "“Se nos han pasado fechas de contratos porque nadie aprobó a tiempo.”"
    },
    {
      Icon: Frown,
      title: "Frustración del equipo y desgaste emocional",
      description: "“Llego a la junta agotada por estar persiguiendo todo.”"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans">
      {/* HEADER */}
      <header className="bg-[#000d49] w-full">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-6">
          <div className="text-white text-2xl font-bold tracking-tight" style={{ fontFamily: 'PP Mori, Inter, sans-serif' }}>MAGNIFIC</div>
          <a
            href="#demo"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-105 text-base shadow"
          >
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
          <div className="flex flex-col items-center mt-8">
            <a
              href="#demo"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
            >
              Reserva una demo
            </a>
            <p className="text-sm text-[#afdafa] mt-2">Descubre cómo en 15 min.</p>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">¿Te Suenan Familiares Estos Problemas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((pain, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start text-left h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-4 text-red-500 bg-red-100 rounded-lg">
                <pain.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1e244d]">{pain.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </section>

    

      {/* 3-STEP WORKFLOW SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">¿Cómo funciona Magnific?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowSteps.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-[#f8fafc] border border-gray-200 shadow-sm text-center flex flex-col items-center transform transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 h-full"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-indigo-500">
                <item.Icon className="w-8 h-8" />
              </div>
              <div className="text-indigo-600 mb-2 font-bold text-sm">PASO {item.step}</div>
              <div className="font-semibold text-xl mb-3 text-[#1e244d]">{item.title}</div>
              <div className="text-gray-500 text-base max-w-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

        {/* FEATURE GRID */}
        <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center text-center group transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-105"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-indigo-600">
                <feature.Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <div className="text-sm font-medium text-gray-700">{feature.label}</div>
              <p className="text-xs text-gray-500 mt-1 px-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-left space-y-3 flex flex-col transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.sub}</div>
                  <div className="text-xs text-gray-400">{t.subscribers}</div>
                </div>
              </div>
              <div className="text-[15px] text-gray-700 font-medium mt-2 leading-relaxed">{t.text}</div>
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
                <AccordionTrigger className="py-4 px-4 text-left w-full font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors duration-200 ease-in-out">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pt-2 pb-4 px-4 w-full leading-relaxed">
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
            <a href="#" className="text-sm hover:underline transition-colors duration-200 ease-in-out">Política de privacidad</a>
            <a href="#" className="text-sm hover:underline transition-colors duration-200 ease-in-out">Términos del servicio</a>
          </div>
          <div className="flex gap-4">
            {/* Social icon placeholders */}
            <a href="#" aria-label="Twitter" className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110">
              <Twitter className="w-5 h-5 text-white" strokeWidth={2} />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110">
              <Linkedin className="w-5 h-5 text-white" strokeWidth={2} />
            </a>
            <a href="#" aria-label="Email" className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110">
              <Mail className="w-5 h-5 text-white" strokeWidth={2} />
            </a>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto py-4 px-4 text-center text-xs text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} Magnific. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
