import { ChatBubble } from "@/components/ui/chat-bubble"

interface WhatsAppChatProps {
  showChat?: boolean
}

export function WhatsAppChat({ showChat = false }: WhatsAppChatProps) {
  return (
    <div className="flex-1 bg-[#E5DDD5] p-2 md:p-2.5 lg:p-3 flex flex-col space-y-1.5 md:space-y-2 overflow-y-auto" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0xOFQxNTo1MjoxMSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDEtMThUMTU6NTM6MDErMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDEtMThUMTU6NTM6MDErMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWZhNDVlZDgtNDViYi0zNjQ0LWI0ZGUtMGJlZjIxNzc4MWJlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmFmYTQ1ZWQ4LTQ1YmItMzY0NC1iNGRlLTBiZWYyMTc3ODFiZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFmYTQ1ZWQ4LTQ1YmItMzY0NC1iNGRlLTBiZWYyMTc3ODFiZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWZhNDVlZDgtNDViYi0zNjQ0LWI0ZGUtMGJlZjIxNzc4MWJlIiBzdEV2dDp3aGVuPSIyMDIzLTAxLTE4VDE1OjUyOjExKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi+UoqIAAAC/SURBVGiB7ZhRDoAgDEOJXszr4JPXwyOMZQwQ3KCr0vVlIdvI3si6lW8r1TFi7P91EeZkzNs07Dk6qgH4jJTqWDw1x8JQTYwHgxZXxm5w/ES9GRJS8iosliwapmG5IA1LC9JYaNBYoNHoQUGjF+ZGkBvGhrFhbBgbxoaxYb5jIeC6fM9GEAz9ffkH9V7gHEYPCufoQaFxgkZjAQ1LD9KwXJCG5UQalkNp9Ph6MRqLKRqWc2lYrqfR8ISx0TxWiBVhXmALmwAAAABJRU5ErkJggg=="), repeating-linear-gradient(transparent, transparent 20px, rgba(0, 0, 0, 0.025) 20px, rgba(0, 0, 0, 0.025) 40px)' }}>
      {showChat && (
        <>
          <div className="animate-slide-up delay-100">
            <ChatBubble variant="received" time="10:28 AM">
              <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                ¡Hola! Soy APROV. Envíame tus solicitudes de aprobación y las gestionaré automáticamente.
              </p>
            </ChatBubble>
          </div>

          <div className="animate-slide-up delay-300">
            <ChatBubble variant="sent" status="read" time="10:30 AM">
              <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                Necesito aprobación para la factura #4582 de Supplier Inc. por $15,350
              </p>
            </ChatBubble>
          </div>

          {/* Indicador "escribiendo..." */}
          <div className="animate-slide-up delay-400">
            <div className="flex items-center">
              <div className="bg-white rounded-full px-3 py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 flex items-center space-x-1 shadow-sm">
                <span className="w-1.5 h-1.5 md:w-1.75 md:h-1.75 lg:w-2 lg:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 md:w-1.75 md:h-1.75 lg:w-2 lg:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                <span className="w-1.5 h-1.5 md:w-1.75 md:h-1.75 lg:w-2 lg:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up delay-500">
            <ChatBubble variant="received" time="10:30 AM">
              <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                He enviado tu solicitud. Te notificaré cuando sea aprobada.
              </p>
            </ChatBubble>
          </div>

          <div className="animate-slide-up delay-700">
            <ChatBubble variant="received" time="10:32 AM">
              <p className="text-[10px] md:text-[11px] lg:text-sm text-gray-800">
                <span className="font-medium">✅ APROBADO</span><br />
                Factura #4582 aprobada por Marina G. hace 23 segundos.
              </p>
            </ChatBubble>
          </div>
        </>
      )}
    </div>
  )
} 