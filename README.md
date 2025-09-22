# The Baums - Relationship Timeline

A beautiful, minimal vertical timeline showcasing relationship milestones with alternating photo carousels and text content.

## Features

- 📱 Fully responsive design (mobile-first)
- ♿ Accessible with keyboard navigation and screen reader support
- 🖼️ Touch/swipe-enabled photo carousels
- 🔗 Shareable URLs for individual posts (hash-based routing)
- ⚡ Optimized images with lazy loading
- 🎨 Elegant black background with white timeline
- 📦 Static export ready for deployment

## Getting Started

### Installation

\`\`\`bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Export static files
pnpm export
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the timeline.

## Adding Content

### Adding New Posts

Edit `src/data/posts.ts` to add new timeline entries:

\`\`\`typescript
{
  id: "2025-12-25-new-milestone",
  date: "2025-12-25",
  title: "New Milestone",
  description: "Description of the milestone.\nSupports line breaks with \\n.",
  photos: [
    { src: "/photos/new-photo.jpg", alt: "Description of photo" }
  ]
}
\`\`\`

### Adding Photos

1. Place photos in the `public/photos/` directory
2. Reference them in posts using `/photos/filename.jpg`
3. Supported formats: JPG, PNG, WebP
4. Recommended aspect ratio: 4:3 or 3:2

### Photo Organization Tips

- Use descriptive filenames: `engagement-ring.jpg` instead of `IMG_001.jpg`
- Optimize images before adding (recommended max width: 800px)
- Always include alt text for accessibility

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up custom domain (the-baums.com) in Vercel dashboard
4. Deploy automatically on every push

### Manual Static Export

\`\`\`bash
pnpm export
\`\`\`

Upload the `out/` directory to any static hosting service.

## Customization

### Styling

- Global styles: `src/app/globals.css`
- Timeline colors and spacing can be adjusted in the CSS custom properties
- Responsive breakpoints follow Tailwind's defaults

### Content Structure

- Posts are automatically sorted by date (newest first)
- Timeline alternates sides automatically
- Mobile layout stacks content vertically
- Hash-based URLs update as users scroll

## Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Images**: Next.js Image component with optimization
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Lazy loading, intersection observers
- **Bundle Size**: Minimal dependencies, custom carousel

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Keyboard navigation support
- Screen reader compatible

## License

Private project for the-baums.com
