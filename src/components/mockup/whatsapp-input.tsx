export function WhatsAppInput() {
  return (
    <div className="bg-[#F0F2F5] pt-2 pb-2 px-2 md:px-3 lg:px-4 flex items-center space-x-1.5 md:space-x-2 border-t border-gray-200">
      <button className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-[#54656F] transition-colors hover:bg-[#E4E5E9] flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 md:w-6 md:h-6 lg:w-6.5 lg:h-6.5" fill="currentColor">
          <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z" />
        </svg>
      </button>
      
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="w-full bg-white rounded-2xl py-2 md:py-2.5 px-4 md:px-5 text-[13px] md:text-sm focus:outline-none shadow-sm placeholder-[#8696A0] focus:shadow-md transition-shadow duration-200"
        />
       
      </div>
      
      <button className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-[#00A884] text-white shadow-md hover:bg-[#008F73] transition-colors flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" fill="currentColor">
          <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
        </svg>
      </button>
    </div>
  )
} 