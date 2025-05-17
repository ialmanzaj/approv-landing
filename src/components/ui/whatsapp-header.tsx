export function WhatsAppHeader() {
  return (
    <div className="bg-[#1DAA5D] pt-2 md:pt-2.5 lg:pt-3 pb-1.5 md:pb-2 px-2 md:px-2.5 lg:px-3 text-white flex items-center space-x-2 md:space-x-3">
      <div className="flex items-center">
        <div className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white/70" fill="currentColor">
            <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
          </svg>
        </div>
        <div className="ml-2 md:ml-3">
          <div className="text-xs md:text-sm font-medium">Aprobaciones APROV</div>
          <div className="text-[9px] md:text-[10px] lg:text-xs opacity-90 flex items-center">
            <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-300 mr-1 animate-pulse"></span>
            online
          </div>
        </div>
      </div>
    </div>
  )
} 