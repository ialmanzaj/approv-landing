import React from "react"

interface PhoneFrameProps {
  children: React.ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="animate-slide-up relative w-[260px] h-[520px] md:w-[280px] md:h-[570px] lg:w-[310px] lg:h-[630px] bg-black rounded-[44px] md:rounded-[44px] lg:rounded-[44px] shadow-phone p-[3px] md:p-[4px] overflow-hidden">
      {/* Detalles físicos del iPhone */}
      {/* Botón de encendido */}
      <div className="absolute top-[110px] -right-[3px] w-[3px] h-[55px] bg-neutral-800 rounded-l-lg"></div>
      {/* Botones de volumen */}
      <div className="absolute top-[90px] -left-[3px] w-[3px] h-[30px] bg-neutral-800 rounded-r-lg"></div>
      <div className="absolute top-[130px] -left-[3px] w-[3px] h-[30px] bg-neutral-800 rounded-r-lg"></div>
      {/* Botón de silencio */}
      <div className="absolute top-[50px] -left-[3px] w-[3px] h-[20px] bg-neutral-800 rounded-r-lg"></div>

      

      {/* Barra de home iPhone */}
      <div className="absolute bottom-[6px] md:bottom-[7px] lg:bottom-[8px] left-[50%] transform translate-x-[-50%] w-[110px] md:w-[120px] lg:w-[134px] h-[4px] md:h-[5px] bg-neutral-600 rounded-full z-30"></div>

      {/* Reflejo sutil en pantalla mejorado */}
      <div className="absolute inset-0 rounded-[40px] md:rounded-[40px] lg:rounded-[40px] bg-gradient-to-b from-neutral-800 to-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-white/15 to-transparent pointer-events-none z-10 opacity-40"></div>
        <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10 opacity-30"></div>
        <div className="absolute inset-[1px] rounded-[39px] md:rounded-[39px] lg:rounded-[39px] shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] pointer-events-none z-[5]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),transparent_70%)] pointer-events-none z-[6]"></div>

        {/* Pantalla del iPhone */}
        <div className="absolute inset-0 rounded-[39px] md:rounded-[39px] lg:rounded-[39px] overflow-hidden flex flex-col">
          {/* Barra de estado iOS mejorada */}
          <div className="bg-black h-8 md:h-9 lg:h-10 flex justify-between items-center px-5 md:px-6 lg:px-8 text-white text-[10px] md:text-[11px] lg:text-xs pt-1 md:pt-2">
            <div className="ml-1 font-medium">10:42</div>
            <div className="absolute left-[50%] transform translate-x-[-50%] top-[26px] md:top-[28px] lg:top-[31px] w-[7px] h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] rounded-full bg-green-500 z-20"></div>
            <div className="flex items-center space-x-1">
              <div className="h-[12px] w-[14px] md:h-[13px] md:w-[15px] lg:h-[14px] lg:w-[16px]">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
                  <path d="M18.75,10c0-2.5-2.5-2.5-2.5-2.5h-8.5c0,0-2.5,0-2.5,2.5s2.5,5,2.5,5v1.5c0,1,2,1,2,0V15c0.5,0,1-3,1-3h2c0,0,0.5,3,1,3v1.5c0,1,2,1,2,0V15C15.5,15,18.75,12.5,18.75,10z M10.25,10h3.5c-0.5,2-1.75,3-1.75,3S10.75,12,10.25,10z" />
                </svg>
              </div>
              <div className="h-[12px] w-[16px] md:h-[13px] md:w-[17px] lg:h-[14px] lg:w-[18px]">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
                  <path d="M1 9l2 2c4.9-4.9 13-4.9 17.9 0l2-2C16.9 2.9 7.1 2.9 1 9z" />
                  <path d="M5 13l2 2c2.9-2.9 7.1-2.9 9.9 0l2-2c-3.9-3.9-10-3.9-13.9 0z" />
                  <path d="M9 17l3 3 3-3c-1.7-1.7-4.4-1.7-6 0z" />
                </svg>
              </div>
              <div className="flex space-x-[1px]">
                <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white"></div>
                <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white"></div>
                <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white"></div>
                <div className="h-[12px] w-[4px] md:h-[13px] md:w-[4px] lg:h-[14px] lg:w-[5px] rounded-sm bg-white/40"></div>
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
} 