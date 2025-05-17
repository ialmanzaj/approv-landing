import { ChatBubble } from "@/components/mockup/chat-bubble"

interface WhatsAppChatProps {
  showChat?: boolean
}

export function WhatsAppChat({ showChat = false }: WhatsAppChatProps) {
  return (
    <div
      className="flex-1 bg-whatsapp-chat-bg p-2.5 md:p-3 lg:p-3.5 flex flex-col space-y-2 md:space-y-2.5 lg:space-y-3 overflow-y-auto px-3 md:px-4 lg:px-5"

    >
      {showChat && (
        <div className="flex flex-col w-full h-full justify-start space-y-2 md:space-y-2.5 lg:space-y-3">
          <div className="animate-fade-in w-full" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <ChatBubble variant="received" time="10:28 AM">
              <p className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-800 leading-tight md:leading-snug">
                ¡Hola! Soy APROV. Envíame tus solicitudes de aprobación y las gestionaré automáticamente.
              </p>
            </ChatBubble>
          </div>

          <div className="animate-fade-in w-full" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            <ChatBubble variant="sent" status="read" time="10:30 AM">
              <p className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-800 leading-tight md:leading-snug">
                Necesito aprobación para la factura #4582 de Supplier Inc. por $15,350
              </p>
            </ChatBubble>
          </div>

          {/* Indicador "escribiendo..." con animación mejorada */}
          <div className="animate-fade-in w-full" style={{ animationDelay: '900ms', animationFillMode: 'both' }}>
            <div className="flex items-center">
              <div className="bg-white rounded-full px-3.5 py-2 md:px-4 md:py-2.5 lg:px-4.5 lg:py-3 flex items-center space-x-1.5 shadow-sm">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '300ms' }}></span>
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '600ms' }}></span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in w-full" style={{ animationDelay: '1500ms', animationFillMode: 'both' }}>
            <ChatBubble variant="received" time="10:30 AM">
              <p className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-800 leading-tight md:leading-snug">
                He enviado tu solicitud. Te notificaré cuando sea aprobada.
              </p>
            </ChatBubble>
          </div>

          <div className="animate-fade-in w-full" style={{ animationDelay: '2000ms', animationFillMode: 'both' }}>
            <ChatBubble variant="received" time="10:32 AM">
              <p className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-800 leading-tight md:leading-snug">
                <span className="inline-flex items-center font-medium bg-green-100 text-green-800 px-1.5 py-0.5 rounded">✅ APROBADO</span><br />
                Factura #4582 aprobada por Marina G. hace 23 segundos.
              </p>
            </ChatBubble>
          </div>
        </div>
      )}
    </div>
  )
} 