"use client"

import { useState, useEffect } from "react"
import { WhatsAppHeader } from "./whatsapp-header"
import { WhatsAppChat } from "./whatsapp-chat"
import { WhatsAppInput } from "./whatsapp-input"

interface WhatsAppInterfaceProps {
  showChat?: boolean
}

export function WhatsAppInterface({ showChat = false }: WhatsAppInterfaceProps) {
  const [isVisible, setIsVisible] = useState(showChat)
  
  useEffect(() => {
    // Mostrar chat después de 1 segundo si showChat es true
    if (showChat) {
      const timeout = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      
      return () => clearTimeout(timeout)
    }
  }, [showChat])
  
  return (
    <div className="flex flex-col h-full w-full">
      <WhatsAppHeader />
      <WhatsAppChat showChat={isVisible} />
      <WhatsAppInput />
    </div>
  )
} 