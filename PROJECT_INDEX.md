# Southern Bethany Project Index

## Project Overview

This is a React-based website for Southern Bethany Christian School built with TypeScript and Vite. The site features a modern, responsive design with multiple sections including hero, features, values, student life, testimonials, and more.

## Project Structure

```
.
├── components/
│   ├── Apply.tsx
│   ├── CTA.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Modal.tsx
│   ├── Partners.tsx
│   ├── StatsBanner.tsx
│   ├── StudentLife.tsx
│   ├── Testimonials.tsx
│   ├── Values.tsx
│   └── icons.tsx
├── hooks/
│   ├── useCountUp.ts
│   ├── useScrollAnimation.ts
│   └── useTypedText.ts
├── Context/
│   └── context.png
├── public/
│   └── stockphotos/ (32 items)
├── App.tsx
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── tsconfig.json
├── types.ts
├── vite.config.ts
├── README.md
└── .gitignore
```

## Key Features

1. **Responsive Design**: Mobile-first approach with a hamburger menu for mobile devices
2. **Component-Based Architecture**: Reusable React components for each section
3. **Custom Hooks**: Specialized hooks for animations and interactions
4. **Accessibility**: Proper ARIA attributes and keyboard navigation support
5. **Performance Optimized**: Uses Vite for fast development and building
6. **Modern Styling**: Uses Tailwind CSS via CDN for styling

## Main Application Files

### App.tsx
The main application component that manages routing between pages (home and apply) and handles the loading state.

### index.html
The HTML template that includes:
- Tailwind CSS CDN
- Custom styling for animations and transitions
- Import maps for React dependencies
- Preloader and skip-link accessibility features

### vite.config.ts
Vite configuration with:
- Port 3000 for development server
- Environment variable support for API keys
- Path aliasing (@ for root)
- React plugin integration

## Component Descriptions

### UI Components
- **Header.tsx**: Navigation header with responsive mobile menu and accessibility features
- **Hero.tsx**: Main hero section with call-to-action
- **Features.tsx**: School features showcase
- **Values.tsx**: Core values presentation
- **StudentLife.tsx**: Student life activities display
- **StatsBanner.tsx**: Animated statistics counter
- **Testimonials.tsx**: Student/parent testimonials
- **FAQ.tsx**: Frequently asked questions accordion
- **CTA.tsx**: Final call-to-action section
- **Footer.tsx**: Website footer with navigation
- **Apply.tsx**: Application form page
- **Modal.tsx**: Reusable modal component
- **Partners.tsx**: Partner logos/institutions
- **icons.tsx**: SVG icon components

### Custom Hooks
- **useCountUp.ts**: Animates numbers counting up (used in StatsBanner)
- **useScrollAnimation.ts**: Triggers animations on scroll using Intersection Observer API (used in Hero)
- **useTypedText.ts**: Creates typing text effect

## Configuration Files

### package.json
- React 19.1.1
- Vite 6.2.0
- TypeScript ~5.8.2
- Scripts for dev, build, and preview

### tsconfig.json
- ES2022 target
- React JSX transformation
- Path aliasing (@ for root directory)
- Node types

### metadata.json
- Project name: "Southern Bethany"
- Description: "A modern, responsive landing page for the Southern Bethany school"
- No frame permissions required

### types.ts
- FAQItem interface with question and answer properties

### .env.local
- GEMINI_API_KEY placeholder for AI features

### Configuration Files
- **package.json**: Node.js package configuration
- **tsconfig.json**: TypeScript configuration
- **vite.config.ts**: Vite build configuration
- **types.ts**: TypeScript type definitions

### Documentation
- **README.md**: Project documentation
- **.gitignore**: Git ignore file

### Assets
- **public/stockphotos/**: Directory containing 32 stock photos used throughout the website (referenced in Hero, Features, StudentLife, etc.)
- **Context/context.png**: Context diagram or image

## Technology Stack
- React 19.1.1
- TypeScript
- Vite 6.2.0
- Tailwind CSS (via CDN)

## Environment Variables
The project uses environment variables for API keys:
- GEMINI_API_KEY: Used for AI-powered features (placeholder in .env.local)

## Getting Started
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`