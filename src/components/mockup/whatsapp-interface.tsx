"use client"

import { useState, useEffect } from "react"
import { WhatsAppHeader } from "./whatsapp-header"
import { WhatsAppChat } from "./whatsapp-chat"
import { WhatsAppInput } from "./whatsapp-input"

interface WhatsAppInterfaceProps {
  showChat?: boolean
}

export function WhatsAppInterface({ showChat = false }: WhatsAppInterfaceProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Mostrar chat inmediatamente o con un pequeño retraso según el caso
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, showChat ? 300 : 600)
    
    return () => clearTimeout(timeout)
  }, [showChat])
  
  return (
    <div className="flex flex-col h-full w-full overflow-hidden" style={{ backgroundColor: '#F5F2EA' }}>
      <WhatsAppHeader />
      <WhatsAppChat showChat={isVisible} />
      <WhatsAppInput />
    </div>
  )
} 