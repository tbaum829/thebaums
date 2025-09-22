"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import TimelineItem from "./TimelineItem"
import type { Post } from "../data/posts"

interface TimelineProps {
  posts: Post[]
}

export default function Timeline({ posts }: TimelineProps) {
  const [visiblePosts, setVisiblePosts] = useState(5)
  const [activePostId, setActivePostId] = useState<string>("")
  const timelineRef = useRef<HTMLOListElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadMorePosts = useCallback(() => {
    if (isLoading || visiblePosts >= posts.length) return

    setIsLoading(true)
    setTimeout(() => {
      setVisiblePosts((prev) => Math.min(prev + 5, posts.length))
      setIsLoading(false)
    }, 500) // Small delay to show loading state
  }, [isLoading, visiblePosts, posts.length])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMorePosts()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [loadMorePosts])

  // Update URL hash based on visible posts
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const postId = entry.target.getAttribute("data-post-id")
          if (postId) {
            setActivePostId(postId)
            window.history.replaceState(null, "", `#${postId}`)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: "-20% 0px -20% 0px",
    })

    // Observe all visible timeline items
    const items = timelineRef.current?.querySelectorAll("[data-post-id]")
    items?.forEach((item) => {
      observer.observe(item)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [visiblePosts])

  // Handle initial hash navigation
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  const hasMorePosts = visiblePosts < posts.length

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      <ol ref={timelineRef} className="timeline-line relative space-y-24 md:space-y-32" data-testid="timeline">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <TimelineItem key={post.id} post={post} index={index} isActive={activePostId === post.id} />
        ))}
      </ol>

      {hasMorePosts && (
        <div className="flex justify-center mt-16">
          {isLoading ? (
            <div className="text-white/60 text-sm">Loading older posts...</div>
          ) : (
            <div className="text-white/40 text-xs">Scroll down for older posts</div>
          )}
        </div>
      )}

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-200 opacity-0 hover:opacity-100 focus:opacity-100"
        style={{
          opacity: typeof window !== "undefined" && window.scrollY > window.innerHeight ? 1 : 0,
        }}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}
