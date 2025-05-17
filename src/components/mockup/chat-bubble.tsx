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
      "max-w-[85%] p-2.5 md:p-3 lg:p-3.5 rounded-lg relative",
      variant === "sent" 
        ? "ml-auto bg-whatsapp-chat-sent shadow-message" 
        : "bg-white shadow-message"
    )}>
      {children}
      
      <div className="flex items-center justify-end mt-1">
        {time && (
          <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500 mr-1.5 font-medium">{time}</span>
        )}
        
        {variant === "sent" && status === "read" && (
          <svg viewBox="0 0 18 18" className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#53BDEB]">
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M3.5 7.5L7 11 14.5 3.5" />
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M7.5 7.5L11 11 18.5 3.5" transform="translate(-5, 0)" />
          </svg>
        )}
      </div>
      
      <div className={cn(
        "absolute bottom-2 transform w-5 h-5 overflow-hidden",
        variant === "sent" ? 
          "right-0 translate-x-[99%]" : 
          "left-0 translate-x-[-99%]"
      )}>
        <div className={cn(
          "absolute transform rotate-45 w-3 h-3",
          variant === "sent" ? 
            "bg-whatsapp-chat-sent bottom-1.5 left-0 shadow-[-1px_1px_1px_rgba(0,0,0,0.03)]" : 
            "bg-white bottom-1.5 right-0 shadow-[-1px_1px_1px_rgba(0,0,0,0.05)]"
        )}></div>
      </div>
    </div>
  )
} 