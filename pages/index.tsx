import React from "react";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { TestimonialGrid } from "@/components/sections/testimonial-grid";
import LogoSection from "@/components/logos";
import { Plus, Minus, MessageSquare } from "lucide-react";

export default function HomePage() {
    const [openFaq, setOpenFaq] = React.useState<string | null>("faq0");

    const faqs = [
        {
            q: "¿Qué es Aprov?",
            a: "Aprov es una herramienta que te permite gestionar aprobaciones internas de forma rápida y sencilla usando WhatsApp y correo electrónico. Sin necesidad de apps adicionales ni cuentas nuevas.",
        },
        {
            q: "¿Qué tipo de empresas usan Aprov?",
            a: "Aprov está diseñado para la agilidad de las SMBs. Actualmente, empresas en sectores como construcción, logística, servicios profesionales y administración de propiedades confían en nosotros para optimizar sus flujos de aprobación.",
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
            q: "¿Aprov cumple con las leyes de protección de datos?",
            a: "Sí. Cumplimos con regulaciones como el GDPR y otras leyes locales. Protegemos tu información con altos estándares de seguridad y transparencia.",
        },
        {
            q: "¿Quién está detrás de Aprov?",
            a: "Aprov es un producto de Fibbonacci Labs LLC, una empresa de tecnología con sede en Panamá y Estados Unidos, enfocada en crear herramientas simples para procesos complejos.",
        }
    ];

    return (
        <Layout>
            {/* HERO SECTION */}
            <HeroSection />

           <ProblemsSection />

            {/* WORKFLOW SECTION */}
            <WorkflowSection />

            {/* TESTIMONIAL GRID */}
            <TestimonialGrid />

            {/* FAQ SECTION */}
            <section className="py-24 sm:py-32 bg-slate-50/80">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-slate-900 tracking-tight">
                            Preguntas frecuentes
                        </h2>
                        <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                            Todo lo que necesitas saber para empezar a usar Aprov.
                        </p>
                    </div>
                    <div className="mt-16">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-5"
                            value={openFaq || undefined}
                            onValueChange={setOpenFaq}
                        >
                            {faqs.map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`faq${i}`}
                                    className="bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl shadow-slate-200/50 transition-all duration-300 data-[state=open]:scale-[1.02] data-[state=open]:shadow-slate-300/60"
                                >
                                    <AccordionTrigger
                                        className="text-lg w-full px-8 py-5 text-left font-bold text-slate-800 hover:no-underline focus:outline-none group"
                                    >
                                        <span className="flex-grow pr-6">{item.q}</span>
                                        <div className="relative w-7 h-7 flex items-center justify-center bg-slate-100/80 rounded-full border border-slate-200/60 transition-all duration-300 group-hover:bg-slate-200/70 data-[state=open]:bg-indigo-100">
                                            <Plus className={`w-4 h-4 text-slate-600 transition-transform duration-300 transform scale-100 rotate-0 ${openFaq === `faq${i}` ? 'scale-0 -rotate-90' : ''}`} />
                                            <Minus className={`w-4 h-4 text-indigo-700 absolute transition-transform duration-300 transform scale-0 rotate-90 ${openFaq === `faq${i}` ? 'scale-100 rotate-0' : ''}`} />
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className="text-base px-8 pb-6 pt-0 text-slate-600 leading-relaxed data-[state=open]:animate-fade-in-down"
                                    >
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    
                    <div className="mt-16 text-center bg-white/60 backdrop-blur-xl border border-slate-200/50 p-10 rounded-3xl shadow-xl shadow-slate-200/60">
                         <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-indigo-100/70 rounded-2xl border border-indigo-200/60 shadow-lg shadow-indigo-200/70">
                            <MessageSquare className="w-8 h-8 text-indigo-700" strokeWidth={2}/>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">¿Aún tienes dudas?</h3>
                        <p className="text-slate-600 mb-6 max-w-md mx-auto">No te preocupes. Nuestro equipo está listo para ayudarte a resolver cualquier pregunta que tengas sobre Aprov.</p>
                        <a href="mailto:hola@aprov.tech" className="inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg shadow-indigo-600/40 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                            Contáctanos
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
} 