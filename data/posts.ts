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
    description: "Weekend car camping at Yosemite National Park.",
    photos: [
      "/photos/yosemite_1.jpeg",
      "/photos/yosemite_2.jpeg",
    ],
  },
  {
    id: "2025-06-01-honeymoon",
    date: "2025-06-01",
    title: "Honeymoon",
    description: "A week in Cabo.",
    photos: [
      "/photos/honeymoon_1.jpeg",
      "/photos/honeymoon_2.jpeg",
      "/photos/honeymoon_3.jpeg",
    ],
  },
  {
    id: "2025-05-31-wedding-day",
    date: "2025-05-31",
    title: "Our Wedding Day",
    description: "Trinity Tree Farm - Issaquah, WA",
    photos: [
      "/photos/wedding_1.jpeg",
      "/photos/wedding_2.jpeg",
    ],
  },
  {
    id: "2024-07-14-engagement",
    date: "2024-07-14",
    title: "She Said Yes",
    description: "The easiest question I've ever asked.",
    photos: [
      "/photos/007.jpg",
      "/photos/008.jpg",
    ],
  },
  {
    id: "2023-10-01-move-in",
    date: "2023-10-01",
    title: "Our First Place",
    description: "Boxes everywhere. Pizza on the floor. Perfect.",
    photos: ["/photos/009.jpg"],
  },
  {
    id: "2022-05-20-first-trip",
    date: "2022-05-20",
    title: "First Trip Together",
    description: "Missed a train, found the best coffee.",
    photos: ["/photos/010.jpg"],
  },
  {
    id: "2021-11-15-first-date",
    date: "2021-11-15",
    title: "Where It All Began",
    description: "Nervous laughter and the longest dinner of our lives.\nWe closed down the restaurant.",
    photos: [
      "/photos/011.jpg",
      "/photos/012.jpg",
    ],
  },
  {
    id: "2021-09-03-first-meeting",
    date: "2021-09-03",
    title: "The Day We Met",
    description: "A chance encounter that changed everything.",
    photos: ["/photos/013.jpg"],
  },
]
