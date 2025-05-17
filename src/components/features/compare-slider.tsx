"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CompareSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function CompareSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Con APROV",
  className,
}: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const handleMouseDown = () => {
    setIsDragging(true)
  }
  
  const handleMouseUp = () => {
    setIsDragging(false)
  }
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    
    setSliderPosition(percentage)
  }
  
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    
    setSliderPosition(percentage)
  }
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleMouseUp)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])
  
  return (
    <div 
      ref={containerRef}
      className={cn("relative h-[400px] rounded-xl overflow-hidden shadow-medium cursor-move select-none", className)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image (Base Layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeImage})` }}
      >
        <div className="absolute left-4 top-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {beforeLabel}
        </div>
      </div>
      
      {/* After Image (Overlay) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${afterImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
        }}
      >
        <div className="absolute right-4 top-4 bg-whatsapp text-white px-3 py-1 rounded-full text-sm">
          {afterLabel}
        </div>
      </div>
      
      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      />
      
      {/* Divider Handle */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10 cursor-grab"
        style={{ left: `calc(${sliderPosition}% - 16px)` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L14 8M14 8L10 12M14 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
} 