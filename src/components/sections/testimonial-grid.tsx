"use client"

import Image from "next/image";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Dayanara",
    sub: "Cofundadora de Ademsa",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    subscribers: "13K suscriptores",
    text: "Con Aprov, redujimos nuestro tiempo de aprobación de mantenimiento de 3 días a menos de una hora—y finalmente tenemos una auditoría adecuada para cada decisión.",
    rating: 5,
  },
  {
    name: "Brandon M.",
    sub: "Inversionista inmobiliario",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    subscribers: "700K suscriptores",
    text: "Aprov realmente se siente como un truco. Puedo hacer más aprobaciones en menos tiempo. Si quieres empezar, tienes que probarlo.",
    rating: 5,
  },
  {
    name: "James S.",
    sub: "Administrador de edificio",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    subscribers: "850K suscriptores",
    text: "De verdad, Aprov ha hecho que el cumplimiento sea mucho más fácil. ¡Nunca pierdo una fecha clave y tengo registros de auditoría al instante!",
    rating: 4,
  }
];

export function TestimonialGrid() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Empresas y profesionales que han transformado su proceso de aprobaciones con Aprov
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-soft p-6 text-left space-y-4 flex flex-col transform transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-4 border-white shadow-soft">
                <Image 
                  src={t.avatar} 
                  alt={t.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-neutral-600">{t.sub}</div>
                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i}
                      className={`h-4 w-4 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-base text-neutral-700 font-medium mt-2 leading-relaxed italic">
              "{t.text}"
            </div>
            <div className="text-xs text-neutral-500 mt-auto pt-2">{t.subscribers}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 