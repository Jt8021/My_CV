# Portfolio Website Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main landing page with hero section
├── about.html              # About me page with detailed bio
├── projects.html           # Project showcase page
├── contact.html            # Contact page with form
├── main.js                 # Main JavaScript functionality
├── resources/              # Assets folder
│   ├── hero-bg.jpg         # Hero background image
│   ├── profile-photo.jpg   # Professional headshot
│   ├── project-*.jpg       # Project screenshots (6 projects)
│   ├── tech-icons/         # Technology icons
│   └── logo.svg           # JT logo design
├── interaction.md          # Interaction design document
├── design.md              # Design style guide
└── outline.md             # This project outline
```

## Page Structure & Content

### index.html - Landing Page
**Sections:**
1. **Navigation Bar**
   - Logo with "JT" initials
   - Menu items: Home, About, Projects, Contact
   - Mobile hamburger menu

2. **Hero Section**
   - Animated background with particles
   - Typewriter animation: "Johannes Theunissen"
   - Subtitle: "Software Engineering Student | AI & Web Dev Enthusiast"
   - Call-to-action buttons: "View Projects", "Contact Me"
   - Professional headshot placeholder

3. **Skills Preview**
   - Quick overview of technical skills
   - Animated progress bars
   - Link to full skills section

4. **Featured Projects**
   - 3 highlighted projects from portfolio
   - Hover animations and quick previews
   - "View All Projects" button

### about.html - About Page
**Sections:**
1. **Personal Bio**
   - Detailed introduction and background
   - Current status: 3rd year Software Engineering student
   - Interests: AI, cloud computing, cybersecurity

2. **Education Timeline**
   - Belgium Campus ITversity (2022-2025)
   - DR EG Jansen High School (Grade 12)
   - Academic achievements and honors

3. **Experience**
   - Press Dynamik work experience (2022-2024)
   - Responsibilities and achievements
   - Skills gained during employment

4. **Personal Interests**
   - Technology passions and hobbies
   - Professional development activities
   - Future career goals

### projects.html - Projects Showcase
**Sections:**
1. **Project Grid**
   - 6+ project cards with images
   - Technology stack tags
   - Project descriptions and outcomes
   - GitHub/demo links

2. **Filter System**
   - Filter by technology (Web, Mobile, AI, etc.)
   - Filter by project type
   - Search functionality

3. **Project Details Modal**
   - Detailed project information
   - Screenshots and demos
   - Technical challenges and solutions

### contact.html - Contact Page
**Sections:**
1. **Contact Form**
   - Name, Email, Subject, Message fields
   - Real-time validation
   - Success/error messaging

2. **Contact Information**
   - Email: jttheun8021@gmail.com
   - Phone: 0616099687
   - LinkedIn profile
   - GitHub profile

3. **Location**
   - Based in South Africa
   - Available for remote work
   - Time zone information

## Interactive Components

### 1. Skills Visualization
- **Technology**: ECharts.js
- **Type**: Animated progress bars and radar charts
- **Data**: Programming languages, frameworks, tools proficiency
- **Interaction**: Hover for details, filter by category

### 2. Project Showcase
- **Technology**: Splide.js carousel
- **Type**: Image slider with project previews
- **Features**: Auto-play, manual navigation, full-screen view
- **Interaction**: Click for details, filter by technology

### 3. Contact Form
- **Technology**: Vanilla JavaScript validation
- **Type**: Real-time form validation
- **Features**: Field validation, success messages, error handling
- **Interaction**: Live feedback, smooth animations

### 4. Navigation System
- **Technology**: Anime.js + Intersection Observer
- **Type**: Smooth scrolling with active state
- **Features**: Fixed header, mobile menu, scroll spy
- **Interaction**: Smooth transitions, active link highlighting

## Content Requirements

### Text Content (from CV)
- Professional summary and bio
- Skills and technical proficiencies
- Work experience descriptions
- Education details
- Contact information

### Visual Content Needed
- Professional headshot (placeholder)
- Hero background image
- Project screenshots (6 unique projects)
- Technology icons (HTML, CSS, JS, Python, etc.)
- Company logos (Press Dynamik, Belgium Campus)
- Personal logo design (JT initials)

## Technical Implementation

### Core Libraries
1. **Anime.js** - Animation engine
2. **Typed.js** - Typewriter effects
3. **Splitting.js** - Text animations
4. **ECharts.js** - Data visualization
5. **Splide.js** - Carousels and sliders
6. **p5.js** - Creative coding effects
7. **Pixi.js** - Advanced graphics

### Performance Optimization
- Lazy loading for images
- Minified CSS/JS
- Optimized animations
- Mobile-first responsive design
- WebP image format with fallbacks

### SEO & Accessibility
- Semantic HTML structure
- Alt text for all images
- ARIA labels for interactive elements
- Meta tags for social sharing
- Structured data markup