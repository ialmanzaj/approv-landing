"use client"

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import React from "react";

// Temporary fallback to randomuser.me until custom images are added
const PLACEHOLDER_IMAGES = {
  fallback1: "https://randomuser.me/api/portraits/women/65.jpg",
  fallback2: "https://randomuser.me/api/portraits/men/75.jpg",
  fallback3: "https://randomuser.me/api/portraits/men/21.jpg",
};

const testimonials = [
  {
    name: "Dayanara",
    role: "Cofundadora",
    company: "Ademsa",
    avatar: PLACEHOLDER_IMAGES.fallback1, // Use fallback directly
    fallbackAvatar: PLACEHOLDER_IMAGES.fallback1, // Fallback if custom image not found
    industry: "Mantenimiento industrial",
    text: "Con Aprov, redujimos nuestro tiempo de aprobación de mantenimiento de 3 días a menos de una hora—y finalmente tenemos una auditoría adecuada para cada decisión.",
    rating: 5,
    accent: "#E8F5FF", // Subtle accent color for each card
  },
  {
    name: "Brandon M.",
    role: "Director",
    company: "Grupo Inmobiliario BM",
    avatar: PLACEHOLDER_IMAGES.fallback2,
    fallbackAvatar: PLACEHOLDER_IMAGES.fallback2,
    industry: "Inversión inmobiliaria",
    text: "Aprov realmente se siente como un truco. Puedo hacer más aprobaciones en menos tiempo. Si quieres empezar, tienes que probarlo.",
    rating: 5,
    accent: "#F0FFF4",
  },
  {
    name: "James S.",
    role: "Administrador",
    company: "Edificio Mirador",
    avatar: PLACEHOLDER_IMAGES.fallback3,
    fallbackAvatar: PLACEHOLDER_IMAGES.fallback3,
    industry: "Administración de propiedades",
    text: "De verdad, Aprov ha hecho que el cumplimiento sea mucho más fácil. ¡Nunca pierdo una fecha clave y tengo registros de auditoría al instante!",
    rating: 4,
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
          <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Creado para equipos que no se detienen
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Descubre por qué líderes en diversas industrias confían en Aprov para agilizar sus operaciones críticas y eliminar cuellos de botella.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl shadow-slate-200/60 p-8 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-slate-300/80 group"
            >
              <div className="absolute top-8 right-8 text-slate-200/70 transition-colors duration-300 group-hover:text-indigo-200/60">
                <Quote size={40} strokeWidth={1.5} />
              </div>

              <p className="text-slate-700 leading-relaxed z-10 text-lg mb-8 font-medium">
                “{t.text}”
              </p>
              
              <div className="mt-auto flex items-center gap-4">
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
                  <div className="text-sm font-medium text-slate-600">{t.role} en <span className="font-semibold text-indigo-700">{t.company}</span></div>
                </div>
                <div className="flex self-start mt-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx}
                      size={16}
                      className={`transition-colors duration-300 ${idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 group-hover:text-yellow-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 