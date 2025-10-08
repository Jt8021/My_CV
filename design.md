# Portfolio Website Design Style Guide

## Design Philosophy

### Visual Language
- **Modern Professional**: Clean, sophisticated aesthetic that reflects technical expertise
- **Minimalist Approach**: Focus on content hierarchy and readability
- **Subtle Sophistication**: Professional color palette with strategic accent colors
- **Technical Precision**: Sharp, clean lines reflecting software engineering mindset

### Color Palette
- **Primary**: Deep Navy Blue (#1e293b) - Professional, trustworthy
- **Secondary**: Soft Gray (#64748b) - Neutral, readable
- **Accent**: Bright Blue (#3b82f6) - Interactive elements, highlights
- **Background**: Pure White (#ffffff) - Clean, professional
- **Text**: Charcoal (#374151) - High contrast, readable

### Typography
- **Display Font**: "Inter" - Modern, technical, highly readable
- **Body Font**: "Inter" - Consistent, professional
- **Code Font**: "JetBrains Mono" - For technical content
- **Font Weights**: 300 (light), 400 (regular), 600 (semibold), 700 (bold)

## Visual Effects & Animations

### Core Libraries Used
1. **Anime.js** - Smooth element animations and transitions
2. **Typed.js** - Typewriter effect for hero section
3. **Splitting.js** - Text animation effects
4. **ECharts.js** - Skills visualization charts
5. **Splide.js** - Project showcase carousel
6. **p5.js** - Interactive background particles
7. **Pixi.js** - Advanced visual effects

### Animation Strategy
- **Hero Section**: Typewriter animation for name with gradient color cycling
- **Skills Section**: Animated progress bars with staggered reveals
- **Projects**: Hover animations with 3D tilt effects and shadow expansion
- **Navigation**: Smooth scroll with active state transitions
- **Contact Form**: Real-time validation with smooth error/success states

### Header Effects
- **Background**: Subtle particle system using p5.js
- **Text Effects**: Gradient text animation with color transitions
- **Scroll Behavior**: Parallax effect on hero elements

### Interactive Elements
- **Buttons**: Hover states with color morphing and shadow expansion
- **Cards**: 3D tilt effect on hover with depth shadows
- **Form Fields**: Focus states with animated borders and labels
- **Navigation**: Active link highlighting with smooth transitions

## Layout & Structure

### Grid System
- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 20px gutters  
- **Mobile**: 4-column grid with 16px gutters

### Spacing Scale
- **Base Unit**: 8px
- **Small**: 16px (2 units)
- **Medium**: 32px (4 units)
- **Large**: 64px (8 units)
- **XLarge**: 128px (16 units)

### Component Hierarchy
1. **Navigation**: Fixed header with logo and menu
2. **Hero**: Full-height section with animated introduction
3. **About**: Two-column layout with image and text
4. **Skills**: Grid layout with progress visualizations
5. **Projects**: Card-based grid with filtering
6. **Contact**: Form-focused layout with contact information

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile Optimizations
- **Navigation**: Hamburger menu with slide-out drawer
- **Hero**: Reduced animation complexity for performance
- **Projects**: Single column layout with touch-friendly cards
- **Forms**: Larger touch targets and optimized inputs

## Accessibility Standards

### WCAG Compliance
- **Color Contrast**: Minimum 4.5:1 ratio for all text
- **Focus Indicators**: Clear visual focus states for keyboard navigation
- **Alt Text**: Descriptive alternative text for all images
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader compatible labels for interactive elements

### Performance Standards
- **Loading Time**: Under 3 seconds on 3G connection
- **Animation Performance**: 60fps animations using CSS transforms
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Lazy loading for non-critical resources