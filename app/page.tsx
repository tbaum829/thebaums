import { posts } from "../data/posts"
import Timeline from "../components/Timeline"

export default function Home() {
  // Sort posts by date descending (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="min-h-screen">
      <Timeline posts={sortedPosts} />
    </main>
  )
}
