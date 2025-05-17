
export function WhatsAppInput() {
  return (
    <div className="bg-[#f0f0f0] p-1.5 md:p-1.75 lg:p-2 flex items-center space-x-1 md:space-x-1.5 lg:space-x-2">
      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[#777] transition-all hover:text-[#1DAA5D] cursor-pointer">
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="currentColor">
          <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z" />
        </svg>
      </div>
      <div className="flex-1 rounded-full bg-white py-1.5 md:py-1.75 lg:py-2 px-3 md:px-3.5 lg:px-4 text-[10px] md:text-[11px] lg:text-sm text-neutral-500 flex items-center shadow-inner border border-gray-200">
        <span>Escribe un mensaje...</span>
      </div>
      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[#777] transition-all hover:text-[#1DAA5D] cursor-pointer">
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="currentColor">
          <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531z" />
          <path d="M7.5 14.371l-.001.123v.123l.001-.123zm.012-12.074c-.068-.199-.13-.398-.217-.59-.258-.581-.837-.797-1.233-.479-.396.318-.49.934-.232 1.515.086.192.182.378.3.561l.055.103c-.009-.106-.013-.214-.017-.322-.012-.493-.028-.97-.429-1.331-.401-.362-1.047-.233-1.301.284-.254.517-.11 1.087.292 1.448.401.362.998.296 1.301-.284.07-.142.116-.285.148-.428l.039-.189c-.022.147-.053.293-.077.44zm2.632-.895c-.065-.385-.183-.75-.34-1.091-.431-.919-1.33-1.329-2.007-.916-.677.413-.876 1.499-.446 2.418.158.341.35.655.581.927l.098.114c-.055-.209-.093-.423-.123-.639-.092-.697-.159-1.367-.622-1.991-.463-.625-1.352-.908-1.948-.43-.597.48-.696 1.369-.233 1.994.464.625 1.21.823 1.947.43.168-.09.32-.19.453-.3l.15-.123a4.14 4.14 0 01-.15.71 5.322 5.322 0 01-.222.718z" />
        </svg>
      </div>
      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-[#00A884] text-white shadow-md cursor-pointer hover:bg-[#00967A] transition-colors">
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    </div>
  )
} 