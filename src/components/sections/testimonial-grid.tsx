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
  // State to track image loading errors
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  // Handle image load error
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-whatsapp/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'radial-gradient(#1A365D 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      <div className="relative text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-5">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Empresas y profesionales que han transformado su proceso de aprobaciones con Aprov
        </p>
        <div className="absolute h-1 w-20 bg-whatsapp/80 rounded-full mx-auto left-0 right-0 bottom-0 mt-6 transform translate-y-6"></div>
      </div>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-medium p-8 text-left flex flex-col transform transition-all duration-500 hover:shadow-hard hover:-translate-y-2 animate-fade-in group"
            style={{ 
              animationDelay: `${i * 200}ms`,
              background: `linear-gradient(180deg, white 0%, ${t.accent}20 100%)`,
              borderBottom: `3px solid ${t.accent}`
            }}
          >
            <div className="absolute -top-4 -right-2 text-neutral-100 opacity-40 transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
              <Quote size={80} />
            </div>
            
            <div className="flex items-center gap-5 mb-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-white shadow-medium group-hover:shadow-hard transition-all duration-300">
                <Image 
                  src={imageErrors[i] ? t.fallbackAvatar : t.avatar} 
                  alt={t.name} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => handleImageError(i)}
                  priority={i < 2} // Prioritize loading first two testimonials
                />
              </div>
              <div>
                <div className="text-xl font-semibold text-primary">{t.name}</div>
                <div className="text-sm font-medium text-neutral-700">{t.role}, <span className="text-whatsapp">{t.company}</span></div>
                <div className="text-xs text-neutral-500 mt-0.5">{t.industry}</div>
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx}
                      size={16}
                      className={`${idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'} mr-0.5`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-base text-neutral-700 font-medium leading-relaxed italic mb-4 relative z-10">
              "{t.text}"
            </div>
            
            <div className="mt-auto pt-3 border-t border-neutral-100 flex justify-between items-center">
              <div className="h-2 w-12 rounded-full" style={{ background: t.accent }}></div>
              <div className="text-xs text-neutral-400 font-medium">Cliente desde 2023</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-neutral-700 mb-2">¿Listo para transformar tus aprobaciones?</p>
        <a 
          href="https://app.aprov.tech" 
          className="inline-block px-8 py-3 bg-whatsapp text-white font-medium rounded-full shadow-medium hover:shadow-hard hover:bg-whatsapp-dark transition-all duration-300 transform hover:-translate-y-1"
        >
          Comenzar ahora
        </a>
      </div>
    </section>
  );
} 