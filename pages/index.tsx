import React from "react";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TestimonialGrid } from "@/components/sections/testimonial-grid";
import LogoSection from "@/components/logos";

export default function HomePage() {
    const [openFaq, setOpenFaq] = React.useState<string | null>(null);

    return (
        <Layout>
            {/* HERO SECTION */}
            <HeroSection />

            {/* LOGO SECTION */}
            <LogoSection />

            {/* PROBLEMS SECTION */}
            <ProblemsSection />

            {/* WORKFLOW SECTION */}
            <WorkflowSection />

            {/* FEATURE GRID */}
          {/*   <FeatureGrid /> */}

            {/* TESTIMONIAL GRID */}
            <TestimonialGrid />

            {/* FAQ SECTION */}
            <section className="max-w-screen-xl mx-auto px-4 py-16 bg-neutral-50">
                <div className="mt-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center pb-4">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-lg text-neutral-600 text-center mb-8 md:mb-10">
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
                                className="bg-white rounded-xl shadow-soft"
                            >
                                <AccordionTrigger
                                    className="w-full px-6 py-4 text-left text-base font-medium text-primary hover:no-underline focus:outline-none"
                                >
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent
                                    className="px-6 pb-6 pt-0 text-neutral-600 leading-relaxed"
                                >
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </Layout>
    );
} 