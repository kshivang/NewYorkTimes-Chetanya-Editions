# The Digital Times

A beautiful New York Times-style newspaper webpage built with modern web technologies. Features authentic newspaper layout, multi-column text, responsive design, and Lorem ipsum placeholder content.

## 🎨 Features

- **Authentic Newspaper Design**: Multi-column layouts, newspaper typography, and classic design principles
- **Responsive Layout**: Adapts from mobile (single column) to desktop (5-column grid)
- **Multi-column Article Text**: CSS columns for authentic newspaper text flow
- **Drop Caps**: First letter styling on main articles
- **Typography**: Google Fonts (Merriweather for body, Oswald for headlines)
- **Fluid Typography**: Uses CSS `clamp()` for smooth responsive text scaling
- **Lorem Ipsum Content**: Automatic placeholder text generation
- **Component-Based**: Modular React components for easy customization

## 🛠 Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **TypeScript** for type safety
- **Tailwind CSS v4** with custom newspaper configuration
- **@tailwindcss/typography** plugin
- **lorem-ipsum** for placeholder content generation
- **clsx** for conditional class management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd newspaper-app
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
newspaper-app/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage with newspaper layout
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── layout/
│   │   ├── Masthead.tsx   # NYT-style header
│   │   └── Navigation.tsx  # Top navigation
│   ├── articles/
│   │   ├── HeroArticle.tsx    # Main featured story
│   │   ├── ArticleCard.tsx    # Article preview card
│   │   └── Sidebar.tsx        # Sidebar content
│   └── typography/
│       ├── Headline.tsx   # Headline component
│       └── Byline.tsx     # Author/date component
├── lib/
│   └── placeholder-data.ts # Lorem ipsum generator
└── tailwind.config.ts     # Custom newspaper config
```

## 🎨 Design Features

### Color Palette
- **Text**: Off-black (#111111) for headlines, gray (#333333) for body
- **Background**: Cream/newsprint (#f8f5f0)
- **Borders**: Light gray (#e5e5e5)
- **Accent**: Blue (#326891) for links

### Layout Strategy
- **CSS Grid**: Page structure (5-column desktop layout)
- **CSS Multi-column**: Article text flow (3 columns on desktop)
- **Flexbox**: Component-level alignment

### Responsive Breakpoints
- **Mobile** (<768px): Single column, stacked layout
- **Tablet** (768-1024px): 2-column grid, 2-column articles
- **Desktop** (1024px+): 5-column grid, 3-column articles

### Typography
- **Headlines**: Oswald (bold, condensed sans-serif)
- **Body**: Merriweather (classic serif)
- **Fluid sizing**: Uses `clamp()` for smooth scaling
- **Special effects**: Drop caps, justified text, hyphenation

## 🛠 Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Customization

### Change Fonts
Edit `app/globals.css` to import different Google Fonts, then update `tailwind.config.ts`:

```typescript
fontFamily: {
  headline: ['YourHeadlineFont', 'sans-serif'],
  body: ['YourBodyFont', 'serif'],
}
```

### Adjust Colors
Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  'nyt-black': '#111111',
  'nyt-gray': '#333333',
  // ... add your colors
}
```

### Modify Layout
Edit `app/page.tsx` to adjust the grid structure or add/remove sections.

## 🎯 Key Components

### `<HeroArticle />`
Large featured article with image, multi-column text, and drop cap.

### `<ArticleCard />`
Versatile article preview with three variants:
- `default`: Full card with image
- `horizontal`: Side-by-side image and text
- `minimal`: Text-only compact version

### `<Sidebar />`
Contains "Most Popular", "Opinion", and newsletter signup.

## 📸 Features Implemented

✅ Responsive 5-column grid layout
✅ Multi-column article text (CSS columns)
✅ Drop caps on first paragraphs
✅ Column rules (vertical borders)
✅ Fluid typography with clamp()
✅ Authentic newspaper colors
✅ Proper typographic hierarchy
✅ Lorem ipsum placeholder content
✅ Hover effects on articles
✅ Mobile-first responsive design

## 🌐 Browser Support

Modern browsers with CSS Grid, Flexbox, and CSS Multi-column support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspired by The New York Times
- Built with Next.js, React, and Tailwind CSS
- Typography powered by Google Fonts
- Placeholder content by lorem-ipsum package

---

**Note**: This is a demonstration project showcasing newspaper-style web design. All content is placeholder text generated by the lorem-ipsum library.
