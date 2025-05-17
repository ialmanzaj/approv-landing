"use client"

import { useState, useEffect, useRef } from "react"
import {
  Clock, MessagesSquare, FileQuestion,
  Repeat2, AlertTriangle, Frown,
  ArrowRight, Check, Users, BarChart3,
  TrendingUp, Shield, Smile, Info, ChevronRight,
  ChevronLeft
} from "lucide-react"
import { cn } from "@/lib/utils"

// Refined color palette for elite design
const eliteColors = {
  before: {
    text: "#93304F", // Refined carmesí
    bg: "from-[#FDF5F7] to-[#F9EDF0]",
    border: "#E8D5DB",
    icon: "#93304F",
  },
  after: {
    text: "#2D7564", // Refined emerald
    bg: "from-[#F2F7F6] to-[#E9F1EF]",
    border: "#D5E3DF",
    icon: "#2D7564",
  },
  accent: {
    primary: "from-[#4A63DD] to-[#5B6FE3]",
    secondary: "#789F8A", // Sage accent
    tertiary: "#B45B3E", // Terracota accent
    neutral: "#6E7693", // Blue-gray neutral
  }
};

// Enhanced custom icons with sophisticated styling
const EnhancedIcons = {
  Time: () => (
    <div className="relative">
      <Clock strokeWidth={1.75} className="h-5 w-5 sm:h-6 sm:w-6" />
      <svg className="absolute -top-1.5 -right-1.5 w-3 h-3 text-[#93304F]" viewBox="0 0 24 24" fill="none">
        <circle opacity="0.15" cx="12" cy="12" r="11" fill="currentColor" />
        <circle opacity="0.6" cx="12" cy="12" r="6" fill="currentColor" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    </div>
  ),
  Organization: () => (
    <div className="relative">
      <MessagesSquare strokeWidth={1.75} className="h-5 w-5 sm:h-6 sm:w-6" />
      <div className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center rounded-[4px] bg-[#B45B3E]/90">
        <span className="text-[6px] sm:text-[8px] font-medium text-white">!</span>
      </div>
    </div>
  ),
  Risk: () => (
    <div className="relative">
      <AlertTriangle strokeWidth={1.75} className="h-5 w-5 sm:h-6 sm:w-6" />
      <div className="absolute top-0 left-0 h-full w-full bg-[#789F8A]/10 rounded-lg -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#789F8A]/15 to-transparent"></div>
      </div>
    </div>
  ),
};

// Enhanced Solution Icons
const SolutionIcons = {
  Time: () => (
    <div className="relative">
      <TrendingUp strokeWidth={1.75} className="h-5 w-5" />
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-[#2D7564]/20 to-transparent group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
    </div>
  ),
  Organization: () => (
    <div className="relative">
      <Shield strokeWidth={1.75} className="h-5 w-5" />
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-[#2D7564]/20 to-transparent group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
    </div>
  ),
  Risk: () => (
    <div className="relative">
      <Check strokeWidth={1.75} className="h-5 w-5" />
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-[#2D7564]/20 to-transparent group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
    </div>
  ),
};

// Consolidated problems
const problems = [
  {
    id: "time",
    title: "Tiempo y Eficiencia",
    before: "Aprobaciones que toman semanas, persiguiendo respuestas y horas perdidas en tareas repetitivas",
    after: "Aprobaciones en minutos, con seguimiento automático y sin intervención manual",
    quote: "\"Horas y horas escribiendo, llamando, persiguiendo respuestas… en lugar de avanzar con lo importante.\"",
    icon: "Time",
    color: "border-red-200 bg-gradient-to-br from-red-50 to-red-100/80 text-red-700",
    afterColor: "border-green-200 bg-gradient-to-br from-green-50 to-green-100/80 text-green-700",
    stats: "Las empresas pierden un promedio de 4.3 horas por día en seguimiento de aprobaciones",
    testimonial: "Reducimos el tiempo de aprobación de 5 días a sólo 2 horas",
    company: "Director de Operaciones, Empresa de Logística",
    impact: "92%",
    metric: { before: 120, after: 12, unit: "horas" },
    primary: true, // This is the primary/highlighted problem
  },
  {
    id: "organization",
    title: "Organización y Visibilidad",
    before: "Información dispersa en múltiples canales sin registro claro de quién aprobó qué y cuándo",
    after: "Todo centralizado con registro completo y auditable de cada aprobación",
    quote: "\"Una aprobación está en WhatsApp, otra en el correo, otra perdida en un Excel. Cuando la necesitas, nadie sabe dónde buscar.\"",
    icon: "Organization",
    color: "border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/80 text-orange-700",
    afterColor: "border-green-200 bg-gradient-to-br from-green-50 to-green-100/80 text-green-700",
    stats: "El 67% de los errores en procesos de aprobación ocurren por información fragmentada en múltiples canales",
    testimonial: "Finalmente tenemos todo en un solo lugar, accesible para todos sin crear nuevas cuentas",
    company: "Gerente de Finanzas, Empresa de Retail",
    impact: "85%",
    metric: { before: 5, after: 1, unit: "canales" },
  },
  
]

export function ProblemsSection() {
  const [activeCard, setActiveCard] = useState<string | null>("time") // Default to first card on mobile
  const [animatedArrow, setAnimatedArrow] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState<string | null>(null)
  
  // Mobile touch handling
  const touchStartX = useRef<number | null>(null);
  const currentCardIndex = useRef<number>(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Get the current index based on the active card
    const activeIndex = problems.findIndex(p => p.id === activeCard);
    if (activeIndex !== -1) {
      currentCardIndex.current = activeIndex;
    }
    
    // Swipe right to left (next)
    if (diff > 50) {
      const nextIndex = (currentCardIndex.current + 1) % problems.length;
      setActiveCard(problems[nextIndex].id);
    }
    // Swipe left to right (previous)
    else if (diff < -50) {
      const prevIndex = (currentCardIndex.current - 1 + problems.length) % problems.length;
      setActiveCard(problems[prevIndex].id);
    }
    
    touchStartX.current = null;
  };
  
  // Handle arrow animation on hover
  const handleArrowHover = (id: string | null) => {
    setAnimatedArrow(id);
  }
  
  // Handle mobile carousel navigation
  const navigateCarousel = (direction: 'prev' | 'next') => {
    const activeIndex = problems.findIndex(p => p.id === activeCard);
    if (activeIndex === -1) return;
    
    if (direction === 'next') {
      const nextIndex = (activeIndex + 1) % problems.length;
      setActiveCard(problems[nextIndex].id);
    } else {
      const prevIndex = (activeIndex - 1 + problems.length) % problems.length;
      setActiveCard(problems[prevIndex].id);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8F9FC] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236E7693' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Subtle accent lines */}
        <div className="absolute top-40 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#789F8A]/10 to-transparent"></div>
        <div className="absolute top-60 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#93304F]/10 to-transparent"></div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-80 left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-[#789F8A]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-40 right-[20%] w-80 h-80 rounded-full bg-gradient-to-tl from-[#93304F]/5 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container px-5 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium tracking-wide text-[#4A63DD]/90 bg-[#4A63DD]/5 rounded-full">
            TRANSFORMACIÓN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-5 sm:mb-6 tracking-[-0.01em] bg-gradient-to-r from-[#3A3E5B] to-[#4E5169] bg-clip-text text-transparent leading-[1.2]">
            Transforma tus mayores desafíos<br className="hidden sm:block" /> en ventajas competitivas
          </h2>
          <p className="text-base sm:text-lg text-[#6E7693]/85 max-w-2xl mx-auto leading-[1.5]">
            Descubre cómo Aprov convierte los problemas más comunes en oportunidades 
            para crecer y optimizar tu negocio
          </p>
        </div>

        {/* Mobile carousel navigation */}
        <div className="flex items-center justify-between mb-5 md:hidden px-1">
          <button 
            onClick={() => navigateCarousel('prev')}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-[#F8F9FC] transition-colors duration-300 border border-[#E8E9F0] shadow-sm"
            aria-label="Previous problem"
          >
            <ChevronLeft className="h-4 w-4 text-[#6E7693]" />
          </button>
          
          {/* Mobile carousel indicators */}
          <div className="flex items-center justify-center gap-2">
            {problems.map((problem, i) => (
              <button 
                key={i}
                className={cn(
                  "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300",
                  activeCard === problem.id 
                    ? "bg-[#4A63DD]" 
                    : "bg-[#E8E9F0]"
                )}
                onClick={() => setActiveCard(problem.id)}
                aria-label={`View ${problem.title}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => navigateCarousel('next')}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-[#F8F9FC] transition-colors duration-300 border border-[#E8E9F0] shadow-sm"
            aria-label="Next problem"
          >
            <ChevronRight className="h-4 w-4 text-[#6E7693]" />
          </button>
        </div>

        {/* Asymmetric problem layout with refined styling */}
        <div 
          className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 relative z-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {problems.map((problem, index) => {
            const ProblemIcon = EnhancedIcons[problem.icon as keyof typeof EnhancedIcons];
            const SolutionIcon = SolutionIcons[problem.icon as keyof typeof SolutionIcons];
            const isActive = activeCard === problem.id || (activeCard === null && problem.primary);
            
            // Calculate progress bar width
            const progressPercent = problem.metric
              ? problem.icon === "tracking" 
                ? (problem.metric.after / problem.metric.before) * 100
                : 100 - ((problem.metric.after / problem.metric.before) * 100)
              : 0;
              
            // Determine if this arrow should be animated
            const isArrowAnimated = animatedArrow === problem.id;
            
            // Show only the active card on mobile, or all cards on desktop
            const isMobileVisible = isActive;
            
            // Determine if this is the primary card (spans full width on desktop)
            const gridColSpan = problem.primary ? "md:col-span-6 lg:col-span-3" : "md:col-span-3";
            
            // Card is currently hovered
            const cardIsHovered = isHovered === problem.id;
            
            return (
              <div
                key={index}
                className={cn(
                  "rounded-xl sm:rounded-[14px] border bg-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-slide-up group relative overflow-hidden",
                  isActive
                    ? "border-[#4A63DD] shadow-[0_8px_30px_-8px_rgba(74,99,221,0.16)] sm:shadow-[0_10px_40px_-15px_rgba(74,99,221,0.18)] z-20" 
                    : "border-[#E8E9F0] shadow-[0_5px_25px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_35px_-12px_rgba(0,0,0,0.08)] hover:border-[#D8DCF0]",
                  gridColSpan,
                  !isMobileVisible && "hidden md:block",
                  problem.primary && "order-first md:order-none"
                )}
                style={{ 
                  animationDelay: `${index * 120}ms`,
                  transform: cardIsHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onClick={() => setActiveCard(activeCard === problem.id ? null : problem.id)}
                onMouseEnter={() => {
                  handleArrowHover(problem.id);
                  setIsHovered(problem.id);
                }}
                onMouseLeave={() => {
                  handleArrowHover(null);
                  setIsHovered(null);
                }}
              >
                {/* Subtle card highlight effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#4A63DD]/50 to-transparent"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#789F8A]/5 via-[#4A63DD]/3 to-transparent rounded-full blur-3xl transform transition-transform duration-700 ease-out group-hover:translate-x-5 group-hover:translate-y-5"></div>
                </div>
                
                {/* Horizontal layout for more compact design */}
                <div className="p-5 sm:p-6 md:p-7 transition-all duration-300">
                  {/* Header with icon and title */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="flex items-center justify-center p-2.5 sm:p-3 rounded-lg border-[1.5px] border-[#E8E9F0] bg-gradient-to-br from-white to-[#FCFCFD] text-[#93304F] relative group-hover:scale-108 transition-transform duration-500">
                      <ProblemIcon />
                      {/* Premium accent dot */}
                      <div className="absolute -top-[3px] -right-[3px] h-[6px] w-[6px] rounded-full bg-[#4A63DD]"></div>
                    </div>
                    
                    <div>
                      <h3 className={cn(
                        "font-semibold text-[#3A3E5B] leading-tight tracking-[-0.01em]",
                        problem.primary ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg md:text-xl"
                      )}>
                        {problem.title}
                      </h3>
                      
                      {/* Cost impact note - only shown on primary card */}
                      {problem.primary && (
                        <div className="hidden md:flex items-center mt-2 text-xs sm:text-sm text-[#6E7693]/85">
                          <span className="text-[#4A63DD] font-medium">$48,000</span>
                          <span className="mx-1">costo anual estimado para empresas similares</span>
                          <a href="#calculator" className="text-[#4A63DD] flex items-center hover:underline text-xs font-medium transition-all duration-300 group-hover:text-[#5B6FE3]">
                            Calcula tu costo
                            <ChevronRight className="h-3 w-3 ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="hidden md:block w-32 h-[1px] mb-6 bg-gradient-to-r from-[#E8E9F0] to-transparent"></div>
                  
                  {/* Compact before/after comparison */}
                  <div className="flex flex-col md:flex-row gap-4 mb-5 sm:mb-6">
                    <div className="flex-1 flex items-stretch">
                      <div className="w-full rounded-lg border border-[#E8D5DB] bg-gradient-to-br from-[#FDF5F7] to-[#F9EDF0] p-3 sm:p-4 text-[#93304F] text-xs sm:text-sm flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-[#93304F] text-xs uppercase tracking-wide">Antes</span>
                          <span className="font-bold text-[#93304F]">{problem.metric.before} {problem.metric.unit}</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed flex-1 text-[#93304F]/85">
                          {problem.before}
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center">
                      <div className={cn(
                        "relative p-2 rounded-full bg-gradient-to-r from-[#4A63DD]/10 to-[#4A63DD]/5 transition-all duration-500 ease-out",
                        isArrowAnimated && "scale-125"
                      )}>
                        <ArrowRight className="text-[#4A63DD] h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 ease-out" 
                          style={{
                            transform: isArrowAnimated ? 'translateX(2px)' : 'translateX(0)'
                          }}
                        />
                        {/* Subtle animation effect */}
                        <div className={cn(
                          "absolute inset-0 rounded-full bg-[#4A63DD]/10 scale-0 opacity-0 transition-all duration-500 ease-out",
                          isArrowAnimated && "scale-125 opacity-100"
                        )}></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-stretch">
                      <div className="w-full rounded-lg border border-[#D5E3DF] bg-gradient-to-br from-[#F2F7F6] to-[#E9F1EF] p-3 sm:p-4 text-[#2D7564] text-xs sm:text-sm flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-[#2D7564] text-xs uppercase tracking-wide">Después</span>
                          <span className="font-bold text-[#2D7564]">{problem.metric.after} {problem.metric.unit}</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed flex-1 text-[#2D7564]/85">
                          {problem.after}
                        </p>
                        
                        {/* Custom Solution Icon */}
                        <div className="hidden md:flex justify-end mt-2">
                          <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center border border-[#D5E3DF] group">
                            <SolutionIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress visualization - with refined styling */}
                  <div className="mb-5">
                    <div className="h-1 w-full bg-[#F2F3F8] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#4A63DD]/70 to-[#4A63DD] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                    
                    {/* Decorative progress markers */}
                    <div className="flex justify-between items-center mt-1">
                      <div className="h-[3px] w-[3px] rounded-full bg-[#93304F]/50"></div>
                      <div className="hidden sm:block h-[3px] w-[3px] rounded-full bg-[#6E7693]/30"></div>
                      <div className="h-[3px] w-[3px] rounded-full bg-[#2D7564]/50"></div>
                    </div>
                  </div>
                  
                  {/* Impact statement with testimonial preview */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D7564]/10 to-[#2D7564]/20"></div>
                        <div className="absolute inset-[2px] rounded-full bg-white"></div>
                        <span className="relative text-xs font-bold text-[#2D7564]">{problem.impact}</span>
                      </div>
                      <p className="text-xs text-[#6E7693]/85">de mejora</p>
                    </div>
                    
                    <button 
                      className="text-[#4A63DD] text-xs font-medium flex items-center hover:text-[#5B6FE3] transition-colors duration-300 group"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard(problem.id);
                      }}
                    >
                      <span className="relative">
                        <Info className="h-3.5 w-3.5 mr-1.5" />
                        <span className="absolute top-0 left-0 h-full w-full rounded-full bg-[#4A63DD]/10 scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                      </span>
                      <span className="hidden xs:inline">Ver testimonios</span>
                      <span className="xs:hidden">Más info</span>
                      <span className="ml-1 text-[#4A63DD]/0 group-hover:text-[#4A63DD]/100 transition-colors duration-300">→</span>
                    </button>
                  </div>
                  
                  {/* Expandable detail panel - only visible when card is active */}
                  {activeCard === problem.id && (
                    <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-dashed border-[#E8E9F0] animate-slide-up">
                      <div className="bg-[#F8F9FC] p-4 sm:p-5 rounded-lg border border-[#E8E9F0] text-[#6E7693] italic mb-4 sm:mb-5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F2F3F8] to-transparent rounded-bl-[100px]"></div>
                        <div className="flex items-start gap-3">
                          <span className="text-2xl sm:text-3xl leading-none text-[#D8DCF0] font-serif mt-1">"</span>
                          <div>
                            <p className="text-xs sm:text-sm leading-relaxed text-[#3A3E5B]">{problem.testimonial}</p>
                            <p className="text-[#6E7693]/85 mt-2 sm:mt-3 text-xs font-medium">— {problem.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-[#6E7693]/85">
                        <BarChart3 className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0 text-[#4A63DD] mt-0.5" />
                        <p className="text-xs sm:text-sm leading-relaxed">{problem.stats}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  )
} 