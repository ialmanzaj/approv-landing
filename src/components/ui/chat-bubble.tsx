import React from "react"
import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  children: React.ReactNode
  variant?: "sent" | "received"
  time?: string
  status?: "sent" | "delivered" | "read"
}

export function ChatBubble({
  children,
  variant = "received",
  time,
  status
}: ChatBubbleProps) {
  return (
    <div className={cn(
      "max-w-[85%] p-2 md:p-2.5 lg:p-3 rounded-lg shadow-sm relative",
      variant === "sent" ? "ml-auto bg-[#D9FDD3]" : "bg-white"
    )}>
      {children}
      
      <div className="flex items-center justify-end mt-1">
        {time && (
          <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500 mr-1">{time}</span>
        )}
        
        {variant === "sent" && status === "read" && (
          <svg viewBox="0 0 18 18" className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#53BDEB]">
            <path stroke="currentColor" strokeWidth="1.5" d="M3.5 7.5L7 11 14.5 3.5" />
            <path stroke="currentColor" strokeWidth="1.5" d="M7.5 7.5L11 11 18.5 3.5" transform="translate(-5, 0)" />
          </svg>
        )}
      </div>
      
      <div className={cn(
        "absolute bottom-0 transform translate-y-[4px] md:translate-y-[5px] w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rotate-45",
        variant === "sent" ? 
          "right-0 translate-x-[4px] md:translate-x-[5px] bg-[#D9FDD3]" : 
          "left-0 translate-x-[-4px] md:translate-x-[-5px] bg-white"
      )}></div>
    </div>
  )
} 