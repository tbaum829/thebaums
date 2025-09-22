"use client"

import { useEffect, useRef, useState } from "react"
import Carousel from "./Carousel"
import { formatDate } from "../lib/date"
import type { Post } from "../data/posts"

interface TimelineItemProps {
  post: Post
  index: number
  isActive: boolean
}

export default function TimelineItem({ post, index, isActive }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLLIElement>(null)
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <li
      ref={itemRef}
      id={post.id}
      data-post-id={post.id}
      data-testid={`timeline-item-${index}`}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Timeline node */}
      <div className="timeline-node" />

      {/* Content container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Mobile: Always show content first, then carousel */}
        <div className="lg:hidden space-y-6">
          <div className="text-center">
            <time className="text-gray-400 text-sm font-medium">{formatDate(post.date)}</time>
            <h2 className="text-2xl font-bold mt-2 mb-4">{post.title}</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.description}</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Carousel photos={post.photos} postId={post.id} />
            </div>
          </div>
        </div>

        {/* Desktop: Alternate layout */}
        <div className="hidden lg:block">
          {isEven ? (
            <div className="text-right pr-8">
              <time className="text-gray-400 text-sm font-medium">{formatDate(post.date)}</time>
              <h2 className="text-3xl font-bold mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.description}</p>
            </div>
          ) : (
            <div className="pl-8">
              <Carousel photos={post.photos} postId={post.id} />
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          {isEven ? (
            <div className="pl-8">
              <Carousel photos={post.photos} postId={post.id} />
            </div>
          ) : (
            <div className="text-left pr-8">
              <time className="text-gray-400 text-sm font-medium">{formatDate(post.date)}</time>
              <h2 className="text-3xl font-bold mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.description}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
