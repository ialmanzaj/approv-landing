import React, { useState } from "react";
// Removed Head and Link imports as they are now in Layout
import Layout from "@/components/Layout"; // Import Layout
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
    // FileUp, // Assuming this was only for an icon not used, or can be re-added if needed
    FileText,
    Link as LinkIcon, // This is lucide-react Link, not next/link
    Save,
    // Removed Twitter, Linkedin, Mail as they are in Layout's Footer
    Clock,
    Folders,
    ClipboardX,
    Hourglass,
    AlertTriangle,
    Frown
} from 'lucide-react';
import Box from "@/components/Box";

// Minimal placeholder SVG for icons - consider moving to a components/icons.tsx file
const PlaceholderIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor" className={className}>
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <path d="M8 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const testimonials = [
        {
            name: "Dayanara",
            sub: "Cofundadora de Ademsa",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            subscribers: "13K suscriptores",
            text: "Con Aprov, redujimos nuestro tiempo de aprobación de mantenimiento de 3 días a menos de una hora—y finalmente tenemos una auditoría adecuada para cada decisión.",
        },
        {
            name: "Brandon M.",
            sub: "Inversionista inmobiliario",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            subscribers: "700K suscriptores",
            text: "Aprov realmente se siente como un truco. Puedo hacer más aprobaciones en menos tiempo. Si quieres empezar, tienes que probarlo.",
        },
        {
            name: "James S.",
            sub: "Administrador de edificio",
            avatar: "https://randomuser.me/api/portraits/men/21.jpg",
            subscribers: "850K suscriptores",
            text: "De verdad, Aprov ha hecho que el cumplimiento sea mucho más fácil. ¡Nunca pierdo una fecha clave y tengo registros de auditoría al instante!",
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
            Icon: LinkIcon, // lucide-react Link icon
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

    const painPoints = [
        {
            Icon: Clock,
            title: "Aprobaciones lentas y desorganizadas",
            description: "“Mando un correo o un mensaje por WhatsApp… y pasan días sin respuesta. Mientras tanto, todo se detiene.”"
        },
        {
            Icon: Folders,
            title: "Canales de comunicación dispersos",
            description: "“Una aprobación está en WhatsApp, otra en el correo, otra perdida en un Excel. Y cuando la necesitas… nadie sabe dónde buscar.”"
        },
        {
            Icon: ClipboardX,
            title: "Falta de trazabilidad y respaldo",
            description: "“Cuando alguien pregunta ‘¿quién aprobó esto?’, solo hay silencio. No hay registro. No hay respaldo.”"
        },
        {
            Icon: Hourglass,
            title: "Tiempo perdido en tareas repetitivas",
            description: "“Horas y horas escribiendo, llamando, persiguiendo respuestas… en lugar de avanzar con lo importante.”"
        },
        {
            Icon: AlertTriangle,
            title: "Riesgo operativo y legal",
            description: "“Se nos vencen contratos. Se nos pasan fechas clave. Todo por una firma que nunca llegó a tiempo.”"
        },
        {
            Icon: Frown,
            title: "Frustración del equipo y desgaste emocional",
            description: "“Llego a la junta agotada. No por el trabajo… sino por tener que perseguir todo como si fuera mi única tarea.”"
        }
    ];

    return (
        <Layout> {/* Wrap content with Layout */}
            {/* Head component removed, handled by Layout */}
            {/* Header component removed, handled by Layout */}

            {/* HERO SECTION */}
            <section id="demo" className="w-full bg-[#000d49] py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4">
                    <h1 className="text-5xl lg:text-6xl font-semibold text-white text-center max-w-3xl tracking-tight" style={{ fontFamily: 'PP Mori, Inter, sans-serif' }}>
                        Automatiza cada aprobación, <br className="hidden sm:block" /> Convierte semanas de espera en minutos.
                    </h1>
                    <p className="text-lg text-[#afdafa] mt-6 max-w-xl text-center">
                        Centraliza tus aprobaciones, obtén trazabilidad y elimina el caos.
                    </p>
                    <div className="flex flex-col items-center mt-8">
                        <a
                            href="/#demo" // Points to the demo section on the homepage
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
                <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">¿Estás Lidiando con Estos Problemas en tu Día a Día?</h2>
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
                <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">¿Cómo funciona Aprov?</h2>
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
                <h2 className="text-3xl font-semibold text-[#000d49] text-center mb-12">Características</h2>
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
                <div className="mt-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center pb-4">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-8 md:mb-10">
                        Todo lo que necesitas saber sobre el producto
                    </p>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                        value={openFaq || undefined}
                        onValueChange={setOpenFaq}
                    >
                        {[
                            {
                                q: "¿Qué es Aprov?",
                                a: "Aprov es una herramienta que te permite gestionar aprobaciones internas de forma rápida y sencilla usando WhatsApp y correo electrónico. Sin necesidad de apps adicionales ni cuentas nuevas.",
                            },
                            {
                                q: "¿Cómo funciona?",
                                a: "Creamos un enlace de aprobación único que puedes enviar por WhatsApp o correo a las personas responsables. Cada persona puede aprobar o rechazar desde su celular o computadora, sin complicaciones.",
                            },
                            {
                                q: "¿Necesito descargar algo?",
                                a: "No. Aprov funciona directamente desde tu navegador y tu cuenta de WhatsApp. Solo necesitas tener acceso a internet.",
                            },
                            {
                                q: "¿Quién puede ver mis aprobaciones?",
                                a: "Solo las personas autorizadas por tu empresa. Cada enlace de aprobación es único y seguro. Además, todo queda registrado para que puedas auditar el proceso después.",
                            },
                            {
                                q: "¿Qué tipo de mensajes recibiré por WhatsApp?",
                                a: "Solo mensajes relacionados con solicitudes de aprobación, recordatorios o confirmaciones. Nunca enviamos spam ni promociones.",
                            },
                            {
                                q: "¿Cómo doy mi consentimiento para recibir mensajes?",
                                a: "Antes de que te enviemos cualquier mensaje, debes aceptar una casilla de consentimiento o dar tu autorización por correo o formulario. Siempre puedes cancelar escribiendo \"STOP\" por WhatsApp.",
                            },
                            {
                                q: "¿Puedo dejar de recibir mensajes?",
                                a: "Sí. Puedes responder \"STOP\" en cualquier momento y dejaremos de enviarte mensajes de forma inmediata.",
                            },
                            {
                                q: "¿Qué pasa con mis datos personales?",
                                a: "Tus datos están protegidos bajo nuestra Política de Privacidad. No los compartimos con terceros ni los usamos para fines comerciales. Solo se utilizan para mejorar tu experiencia con Aprov.",
                            },
                            {
                                q: "¿Aprov cumple con las leyes de protección de datos?",
                                a: "Sí. Cumplimos con regulaciones como el GDPR y otras leyes locales. Protegemos tu información con altos estándares de seguridad y transparencia.",
                            },
                            {
                                q: "¿Quién está detrás de Aprov?",
                                a: "Aprov es un producto de Fibbonacci Labs LLC, una empresa de tecnología con sede en Panamá y Estados Unidos, enfocada en crear herramientas simples para procesos complejos.",
                            }
                        ].map((item, i) => (
                            <AccordionItem
                                key={i}
                                value={`faq${i}`}
                                className="bg-white rounded-xl shadow-sm"
                            >
                                <AccordionTrigger
                                    className="w-full p-4 sm:p-6 text-left text-sm sm:text-base font-medium text-gray-900 hover:no-underline focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
                                >
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent
                                    className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6 text-sm text-gray-700 leading-relaxed"
                                >
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Footer component removed, handled by Layout */}
        </Layout>
    );
} 