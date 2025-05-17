import { cn } from "@/lib/utils"
import { CheckIcon, CheckCheck as CheckCheckIcon, Clock as ClockIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

const chatBubbleVariants = cva(
  "relative px-4 py-2 max-w-[80%] rounded-lg shadow-sm",
  {
    variants: {
      variant: {
        sent: "bg-whatsapp text-white ml-auto rounded-tr-none",
        received: "bg-white text-neutral-900 mr-auto rounded-tl-none",
      },
      status: {
        sending: "opacity-70",
        sent: "opacity-100",
        delivered: "opacity-100",
        read: "opacity-100",
      },
    },
    defaultVariants: {
      variant: "sent",
      status: "sent",
    },
  }
)

interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  time?: string
}

export function ChatBubble({ 
  children, 
  className, 
  variant, 
  status, 
  time = "12:34 PM", 
  ...props 
}: ChatBubbleProps) {
  return (
    <div
      className={cn(chatBubbleVariants({ variant, status, className }))}
      {...props}
    >
      {children}
      <div className="flex items-center justify-end space-x-1 mt-1 opacity-70 text-[10px]">
        <span>{time}</span>
        {variant === "sent" && (
          <>
            {status === "sending" && <ClockIcon className="h-3 w-3" />}
            {status === "sent" && <CheckIcon className="h-3 w-3" />}
            {status === "delivered" && <CheckCheckIcon className="h-3 w-3" />}
            {status === "read" && <CheckCheckIcon className="h-3 w-3 text-blue-400" />}
          </>
        )}
      </div>
    </div>
  )
} 