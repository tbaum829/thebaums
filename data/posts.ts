export type Post = {
  id: string // slug-like ID (e.g., "2023-07-14-engagement")
  date: string // ISO date (YYYY-MM-DD)
  title: string
  description: string // supports simple line breaks (\n)
  photos: string[] // relative to /public/photos
}

export const posts: Post[] = [
  {
    id: "2025-09-20-yosemite",
    date: "2025-09-20",
    title: "Yosemite",
    description: "Weekend car camping at Yosemite National Park",
    photos: [
      "/photos/IMG_3297.jpeg",
      "/photos/IMG_3311.jpeg",
    ],
  },
  {
    id: "2025-06-01-honeymoon",
    date: "2025-06-01",
    title: "Honeymoon",
    description: "A week in San José del Cabo, Mexico",
    photos: [
      "/photos/IMG_5209.jpeg",
      "/photos/IMG_3070.jpeg",
      "/photos/IMG_3050.jpeg",
      "/photos/IMG_3044.jpeg",
      "/photos/IMG_5211.jpeg",
    ],
  },
  {
    id: "2025-05-31-wedding-day",
    date: "2025-05-31",
    title: "Our Wedding Day",
    description: "Trinity Tree Farm - Issaquah, WA",
    photos: [
      "/photos/IMG_3091.jpeg",
      "/photos/IMG_3092.jpeg",
      "/photos/IMG_0158.jpeg",
    ],
  },
  {
    id: "2025-05-31-wedding-day",
    date: "2025-05-31",
    title: "Engagement Photos",
    description: "Pacifica, CA",
    photos: [
      "/photos/untitled-4989.jpeg",
      "/photos/untitled-4902.jpeg",
      "/photos/untitled-1229.jpeg"
    ],
  },
  {
    id: "2024-07-14-engagement",
    date: "2024-07-14",
    title: "She Said Yes",
    description: "The easiest question I've ever asked",
    photos: [
      "/photos/IMG_1820.jpeg",
      "/photos/IMG_1815.jpeg",
    ],
  },
]
