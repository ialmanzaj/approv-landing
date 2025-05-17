export function WhatsAppHeader() {
  return (
    <div className="bg-whatsapp-header pt-2 md:pt-2.5 lg:pt-3 pb-1.5 md:pb-2 px-3 md:px-3.5 lg:px-4 text-white flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <button className="mr-1 text-white/90">
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/20 flex items-center justify-center overflow-hidden shadow-inner">
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-white/90" fill="currentColor">
            <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
          </svg>
        </div>
        <div className="ml-2.5 md:ml-3">
          <div className="text-xs md:text-sm font-bold">APROV</div>
          <div className="text-[9px] md:text-[10px] lg:text-xs opacity-90 flex items-center">
            <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-300 mr-1 animate-pulse-subtle"></span>
            online
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <button className="text-white/90">
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-white/90">
          <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
} 