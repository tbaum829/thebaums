"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CarouselProps {
  photos: string[]
  postId: string
}

export default function Carousel({ photos, postId }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (carouselRef.current?.contains(document.activeElement)) {
        if (e.key === "ArrowLeft") {
          e.preventDefault()
          goToPrevious()
        } else if (e.key === "ArrowRight") {
          e.preventDefault()
          goToNext()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Mouse/pointer events for desktop swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    touchStartX.current = e.clientX
    carouselRef.current?.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (touchStartX.current) {
      touchEndX.current = e.clientX
    }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    carouselRef.current?.releasePointerCapture(e.pointerId)
    handleTouchEnd()
    touchStartX.current = 0
    touchEndX.current = 0
  }

  if (photos.length === 0) return null

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-sm sm:max-w-md mx-auto"
      data-testid={`carousel-${postId}`}
      tabIndex={0}
      role="region"
      aria-label={`Photo carousel for ${postId}`}
    >
      {/* Main image container */}
      <div
        className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <Image
          src={photos[currentIndex] || "/placeholder.svg"}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          priority={currentIndex === 0}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Navigation arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-8 sm:h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
              aria-label="Previous photo"
              aria-controls={`carousel-${postId}`}
            >
              <span className="text-lg sm:text-base">←</span>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-8 sm:h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
              aria-label="Next photo"
              aria-controls={`carousel-${postId}`}
            >
              <span className="text-lg sm:text-base">→</span>
            </button>
          </>
        )}

        {/* Loading indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Dots indicator */}
      {photos.length > 1 && (
        <div className="carousel-dots flex justify-center mt-4 space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Screen reader info */}
      <div className="sr-only">
        Photo {currentIndex + 1} of {photos.length}
      </div>
    </div>
  )
}
