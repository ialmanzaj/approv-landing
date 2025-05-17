import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Eye, LucideStar } from "lucide-react";
import React from "react";

export default function Box(): JSX.Element {
  // Service feature data
  const serviceFeatures = [
    {
      title: "Solicitudes más rápidas. Cero persecución.",
      description:
        "Envía una solicitud de aprobación en segundos, sin salir de tus herramientas actuales. Sin formularios complejos. Sin capacitaciones eternas. Solo fluye.",
      icon: <CheckCircle2 className="w-[30px] h-[30px]" />,
    },
    {
      title: "Visibilidad Total. Control Real.",
      description:
        "Sigue el estado de cada aprobación en tiempo real. Accede a un panel intuitivo con historial completo, alertas y reportes automáticos. Toma decisiones con datos. No con suposiciones.",
      icon: <Eye className="w-[30px] h-[30px]" />,
    },
  ];

  // Rating data
  const ratings = [
    {
      score: "4.5",
      outOf: "5 estrellas",
      company: "Capterra",
      filled: 5, // Assuming 5 filled stars
    },
    {
      score: "4.6",
      outOf: "5 estrellas",
      company: "G2",
      filled: 5, // Assuming 5 filled stars
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-[#f9f8fe]">
        <div className="container mx-auto px-4 py-[60px] flex flex-wrap">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
            <h1 className="font-semibold text-[#191a15] text-3xl sm:text-4xl lg:text-[50px] leading-tight mb-6">
              🚀 Impulsa la Eficiencia de tu Equipo, No el Caos Operativo
            </h1>
            <p className="font-medium text-[#191a15] text-lg leading-[30px] mb-4">
              Miles de equipos ya usan Aprov para olvidarse del seguimiento manual.
            </p>
            <p className="font-medium text-[#a6a6a6] text-base leading-[30px] mb-8">
              Automatiza aprobaciones directamente desde WhatsApp y correo, sin instalar nada, sin fricción, sin confusión.
            </p>
             <p className="font-medium text-[#191a15] text-base leading-[30px] mb-12">
              Todo en un solo flujo. Todo documentado. Todo a tiempo.
            </p>

            {/* Ratings Section */}
            <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
              {ratings.map((rating, index) => (
                <div key={index} className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                  <div className="flex mb-2">
                    <span className="text-2xl mr-2">🌟</span>
                    {[...Array(rating.filled)].map((_, i) => (
                      <LucideStar
                        key={i}
                        className="w-[25px] h-6 mr-[2px]"
                        fill="#FFD700"
                        strokeWidth={0} // Ensure no border for filled stars
                      />
                    ))}
                    {[...Array(5 - rating.filled)].map((_, i) => (
                        <LucideStar
                        key={i + rating.filled}
                        className="w-[25px] h-6 mr-[2px]"
                        fill="none" // Or a light gray for empty stars
                        stroke="#FFD700" // Border for empty stars
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  <div className="text-base text-[#191a15] text-center sm:text-left">
                    <span className="font-bold">{rating.score}</span>
                    <span className="font-normal"> / </span>
                    <span className="font-medium">{rating.outOf}</span>
                  </div>

                  <div className="font-bold text-[#a6a6a6] text-base mt-1 text-center sm:text-left">
                    {rating.company}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Features */}
          <div className="w-full lg:w-1/2 pl-4">
            <h2 className="font-semibold text-[#191a15] text-2xl sm:text-3xl leading-tight mb-8">
              Empresas reales. Resultados medibles.
            </h2>
            <div className="space-y-[30px]">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Card className="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center shadow-[0px_4px_9px_#0000000d] mr-5">
                    <CardContent className="p-0 flex items-center justify-center h-full">
                      {feature.icon}
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="font-bold text-[#191a15] text-xl sm:text-2xl lg:text-[28px] mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-medium text-[#a6a6a6] text-lg leading-[30px] w-full max-w-[428px]">
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
