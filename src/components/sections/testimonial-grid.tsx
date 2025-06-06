"use client"

import Image from "next/image";
import { Quote } from "lucide-react";
import React from "react";

// Using more professional-looking placeholder images
const PLACEHOLDER_IMAGES = {
  fallback1: "https://randomuser.me/api/portraits/women/44.jpg",
  fallback2: "https://randomuser.me/api/portraits/men/32.jpg",
  fallback3: "https://randomuser.me/api/portraits/women/47.jpg",
};

const testimonials = [
  {
    name: "María Elena",
    role: "Directora Administrativa",
    company: "Constructora Los Pinos",
    avatar: PLACEHOLDER_IMAGES.fallback1,
    fallbackAvatar: PLACEHOLDER_IMAGES.fallback1,
    industry: "Construcción • Panamá",
    text: "Apenas llevamos 2 semanas probando Aprov, pero ya nos está ayudando mucho. Antes tenía que llamar a cada supervisor para aprobar materiales. Ahora es por WhatsApp y mucho más rápido.",
    accent: "#E8F5FF",
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente",
    company: "Distribuidora San José",
    avatar: PLACEHOLDER_IMAGES.fallback2,
    fallbackAvatar: PLACEHOLDER_IMAGES.fallback2,
    industry: "Logística • Costa Rica",
    text: "Isaac me contó sobre Aprov y decidí probarlo. Está en beta pero funciona bien. Mis choferes ahora me mandan las solicitudes por WhatsApp y yo apruebo desde el celular.",
    accent: "#F0FFF4",
  },
  {
    name: "Ana Lucía",
    role: "Contadora",
    company: "Servicios Profesionales ALG",
    avatar: PLACEHOLDER_IMAGES.fallback3,
    fallbackAvatar: PLACEHOLDER_IMAGES.fallback3,
    industry: "Consultoría • Guatemala",
    text: "Somos una empresa pequeña y necesitábamos algo simple. Aprov nos está funcionando para aprobar gastos menores. Espero que sigan mejorándolo.",
    accent: "#FFF5F5",
  }
];

export function TestimonialGrid() {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50/80 border border-indigo-200/60 rounded-full">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-indigo-700">Beta</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Nuestros primeros usuarios
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Empresas que nos están ayudando a construir Aprov. Sus comentarios nos guían para crear la mejor herramienta de aprobaciones para LATAM.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl shadow-slate-200/60 p-8 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-slate-300/80 group"
            >
              <div className="absolute -top-4 -left-4 text-slate-100/80 transition-transform duration-500 group-hover:scale-110 group-hover:text-indigo-100/80" style={{ zIndex: 0 }}>
                <Quote size={80} strokeWidth={1} fill="currentColor" />
              </div>

              <blockquote className="relative text-slate-700 leading-relaxed z-10 text-lg mb-8 font-medium">
                {t.text}
              </blockquote>
              
              <div className="relative mt-auto flex items-center gap-4 z-10">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image 
                    src={imageErrors[i] ? t.fallbackAvatar : t.avatar} 
                    alt={t.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(i)}
                    priority={i < 3}
                  />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                  <div className="text-sm font-medium text-slate-600">{t.role} • <span className="font-semibold text-indigo-700">{t.company}</span></div>
                  <div className="text-xs text-slate-500 mt-1">{t.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 