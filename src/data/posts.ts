export type Post = {
  id: string // slug-like ID (e.g., "2023-07-14-engagement")
  date: string // ISO date (YYYY-MM-DD)
  title: string
  description: string // supports simple line breaks (\n)
  photos: { src: string; alt?: string }[] // relative to /public/photos
}

export const posts: Post[] = [
  {
    id: "2025-08-15-honeymoon",
    date: "2025-08-15",
    title: "Honeymoon Sunset",
    description: "A perfect evening walk on the beach.\nWe promised to do this every year.",
    photos: [
      { src: "/photos/001.jpg", alt: "Beach at sunset" },
      { src: "/photos/002.jpg", alt: "Holding hands" },
    ],
  },
  {
    id: "2025-06-01-wedding-day",
    date: "2025-06-01",
    title: "Our Wedding Day",
    description: "Family, friends, and the best dance floor moments.",
    photos: [
      { src: "/photos/003.jpg", alt: "Ceremony" },
      { src: "/photos/004.jpg", alt: "First dance" },
    ],
  },
  {
    id: "2024-12-24-first-christmas",
    date: "2024-12-24",
    title: "First Christmas Together",
    description: "Matching pajamas and too many cookies.",
    photos: [
      { src: "/photos/005.jpg", alt: "Christmas morning" },
      { src: "/photos/006.jpg", alt: "Under the tree" },
    ],
  },
  {
    id: "2024-07-14-engagement",
    date: "2024-07-14",
    title: "She Said Yes",
    description: "The easiest question I've ever asked.",
    photos: [
      { src: "/photos/007.jpg", alt: "The proposal moment" },
      { src: "/photos/008.jpg", alt: "Ring close-up" },
    ],
  },
  {
    id: "2023-10-01-move-in",
    date: "2023-10-01",
    title: "Our First Place",
    description: "Boxes everywhere. Pizza on the floor. Perfect.",
    photos: [{ src: "/photos/009.jpg", alt: "Moving day chaos" }],
  },
  {
    id: "2022-05-20-first-trip",
    date: "2022-05-20",
    title: "First Trip Together",
    description: "Missed a train, found the best coffee.",
    photos: [{ src: "/photos/010.jpg", alt: "Coffee shop adventure" }],
  },
  {
    id: "2021-11-15-first-date",
    date: "2021-11-15",
    title: "Where It All Began",
    description: "Nervous laughter and the longest dinner of our lives.\nWe closed down the restaurant.",
    photos: [
      { src: "/photos/011.jpg", alt: "First date restaurant" },
      { src: "/photos/012.jpg", alt: "Awkward but sweet selfie" },
    ],
  },
  {
    id: "2021-09-03-first-meeting",
    date: "2021-09-03",
    title: "The Day We Met",
    description: "A chance encounter that changed everything.",
    photos: [{ src: "/photos/013.jpg", alt: "The coffee shop where we met" }],
  },
]
