import { Card, CardContent } from "@/components/ui/card";
import { Activity, Command, PieChart, Star, StarIcon, LucideStar } from "lucide-react";
import React from "react";

export default function Box(): JSX.Element {
  // Service feature data
  const serviceFeatures = [
    {
      title: "Simplifica la Solicitud",
      description:
        "Inicia y envía solicitudes de aprobación en segundos, directamente desde tus herramientas de comunicación habituales.",
      icon: <Activity className="w-[30px] h-[30px]" />,
    },
    {
      title: "Visibilidad y Control Total",
      description: "Monitorea el estado de todas tus aprobaciones en tiempo real con un panel de control intuitivo y reportes detallados.",
      icon: <PieChart className="w-[30px] h-[30px]" />,
    },
    {
      title: "Flujos de Trabajo Flexibles",
      description: "Define y personaliza secuencias de aprobación que se adaptan a las necesidades específicas de cada proceso en tu empresa.",
      icon: <Command className="w-[30px] h-[30px]" />,
    },
  ];

  // Rating data
  const ratings = [
    {
      score: "4.5",
      outOf: "5 stars",
      company: "Capterra",
      filled: 5,
    },
    {
      score: "4.6",
      outOf: "5 stars",
      company: "G2",
      filled: 5,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-[#f9f8fe]">
        <div className="container mx-auto px-4 py-[60px] flex flex-wrap">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
            <h1 className="font-semibold text-[#191a15] text-[50px] leading-tight mb-8">
              Impulsando la Eficiencia de Nuestros Clientes Globales
            </h1>
            <p className="font-medium text-[#a6a6a6] text-base leading-[30px] mb-12">
              Descubre cómo Aprov transforma la gestión de aprobaciones. Agilizamos tus procesos internos mediante la automatización vía WhatsApp y correo electrónico, eliminando la necesidad de software adicional y simplificando la colaboración para equipos de cualquier tamaño.
            </p>

            {/* Ratings Section */}
            <div className="flex flex-wrap gap-16">
              {ratings.map((rating, index) => (
                <div key={index} className="w-[142px]">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <LucideStar
                        key={i}
                        className="w-[25px] h-6 mr-[5px]"
                        fill="#FFD700"
                      />
                    ))}
                  </div>

                  <div className="text-lg text-[#191a15]">
                    <span className="font-bold">{rating.score}</span>
                    <span className="font-normal"> / </span>
                    <span className="font-medium">{rating.outOf}</span>
                  </div>

                  <div className="font-bold text-[#a6a6a6] text-lg mt-2">
                    {rating.company}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Features */}
          <div className="w-full lg:w-1/2 pl-4">
            <div className="space-y-[30px]">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Card className="w-[60px] h-[60px] flex items-center justify-center shadow-[0px_4px_9px_#0000000d] mr-5">
                    <CardContent className="p-0 flex items-center justify-center h-full">
                      {feature.icon}
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="font-bold text-[#191a15] text-[28px] mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-medium text-[#a6a6a6] text-lg leading-[30px] w-[428px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
