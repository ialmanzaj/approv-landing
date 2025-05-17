import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string 
  to?: string
  direction?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl'
}

export function GradientText({ 
  children, 
  className, 
  from = "from-primary", 
  to = "to-secondary", 
  direction = "to-r" 
}: GradientTextProps) {
  return (
    <span className={cn(
      `inline-block bg-gradient-${direction} ${from} ${to} bg-clip-text text-transparent`,
      className
    )}>
      {children}
    </span>
  )
} 