# Planning Guide

A modern, vibrant redesign of the Xarela social association website featuring a navy and orange color scheme to represent professionalism and warmth while maintaining the organization's community-focused mission.

**Experience Qualities**:
1. **Welcoming**: The design should feel approachable and inclusive, reflecting Xarela's commitment to social development and community support
2. **Professional**: Clean typography and structured layouts convey the credibility of a serious non-profit organization
3. **Energetic**: Bold use of orange accents and engaging imagery creates enthusiasm for the association's mission

**Complexity Level**: Light Application (multiple features with basic state)
This is a multi-page informational website with routing showcasing the association's mission, services, news, ways to help, acknowledgments, and contact information across dedicated pages.

## Essential Features

### Home Page (INICIO)
- **Functionality**: Hero section with "Somos XARELA" heading, mission description, "Que facemos?" section with feature cards, newsletter widget, and latest news sidebar
- **Purpose**: Immediately communicate the organization's identity and purpose to visitors
- **Trigger**: Navigation to home route (/)
- **Progression**: Route loads → Hero displays → Content sections appear → Sidebar widgets visible
- **Success criteria**: Visitors understand what Xarela does within 3 seconds

### Labor Social Page
- **Functionality**: Detailed breakdown of social programs, services offered, and impact statistics
- **Purpose**: Provide comprehensive information about all social work initiatives
- **Trigger**: Navigation to /labor-social route
- **Progression**: Route loads → Header appears → Service cards display in grid → Impact statistics visible
- **Success criteria**: Clear presentation of 6+ social programs with descriptions and details

### News Page (NOVAS)
- **Functionality**: Grid of news articles with images, excerpts, categories, and dates; click to view full article; back button to return to list
- **Purpose**: Keep visitors informed about activities, events, and updates
- **Trigger**: Navigation to /novas route
- **Progression**: Route loads → News grid displays → User clicks article → Full article view → Back button returns to grid
- **Success criteria**: News articles properly formatted with filtering and detail view

### How to Help Page (¿QUÉ PODES FACER?)
- **Functionality**: Six actionable ways to support the organization with descriptions and call-to-action buttons
- **Purpose**: Convert visitors into volunteers, donors, or supporters
- **Trigger**: Navigation to /que-podes-facer route
- **Progression**: Route loads → Support option cards display → CTAs clearly visible → User clicks for more info
- **Success criteria**: Clear pathways for volunteering, donating, and collaborating

### Acknowledgments Page (AGRADECEMENTOS)
- **Functionality**: Categorized listing of supporters including institutions, businesses, volunteers, and collaborators
- **Purpose**: Recognize and thank supporters while building credibility
- **Trigger**: Navigation to /agradecementos route
- **Progression**: Route loads → Category sections display → Support cards visible in organized groups
- **Success criteria**: All supporters properly categorized and displayed with appropriate details

### Contact Page (CONTACTO)
- **Functionality**: Contact form with validation, contact information cards, office hours, map placeholder, and social media links
- **Purpose**: Provide multiple ways for visitors to reach the organization
- **Trigger**: Navigation to /contacto route
- **Progression**: User loads page → Info cards display → User fills form → Validation → Success toast → Form resets
- **Success criteria**: Form submits successfully with proper validation and user feedback

### Navigation Menu with Routing
- **Functionality**: Horizontal navigation bar with links: INICIO, LABOR SOCIAL, NOVAS, ¿QUÉ PODES FACER?, AGRADECEMENTOS, CONTACTO - each navigating to dedicated pages
- **Purpose**: Provide clear access to all major sections of the website with full page routing
- **Trigger**: Always visible at top of page
- **Progression**: User hovers menu item → Item highlights → User clicks → Route to dedicated page → Active route highlighted
- **Success criteria**: All menu items accessible and clearly labeled in Galician with active route indication

### Newsletter Subscription
- **Functionality**: Email input form for newsletter signup
- **Purpose**: Build engagement list for job offers, training, and event updates
- **Trigger**: Visible in sidebar
- **Progression**: User enters email → Clicks "ENVIAR" button → Confirmation message appears → Email stored
- **Success criteria**: Successful email submission with validation

### "Que facemos?" Section
- **Functionality**: Mission statement explaining social inclusion work
- **Purpose**: Detail the organization's activities and approach
- **Trigger**: Visible on homepage scroll
- **Progression**: User scrolls → Section appears → Text readable with circular icons below
- **Success criteria**: Clear communication of services and values

### Latest News Widget
- **Functionality**: List of recent news items with thumbnails and dates
- **Purpose**: Keep visitors informed about current activities and updates
- **Trigger**: Visible in sidebar
- **Progression**: Page loads → Latest 3 news items display → User clicks item → Navigate to full article
- **Success criteria**: News items properly formatted with images and dates

## Edge Case Handling
- **Missing Images**: Use placeholder gradients with organization colors
- **Long Text Content**: Truncate with ellipsis and "read more" functionality
- **Mobile View**: Stack navigation into hamburger menu, single column layout
- **Empty Newsletter Field**: Show validation message before submission
- **No News Available**: Display "No hay novas disponibles" message

## Design Direction
The design should evoke trust, community spirit, and positive social impact. Navy blue establishes professionalism and stability, while vibrant orange brings warmth and energy—perfect for a social services organization. The overall feel should be modern yet accessible, avoiding corporate coldness while maintaining credibility.

## Color Selection
A navy and orange palette creates strong contrast and visual energy while maintaining professional credibility.

- **Primary Color (Navy)**: oklch(0.30 0.08 250) - Deep navy blue that conveys trust, stability, and professionalism. Used for headers, navigation, and primary text.
- **Secondary Color (Warm Orange)**: oklch(0.70 0.18 50) - Vibrant yet warm orange that brings energy and optimism. Used for accents, buttons, and highlights.
- **Accent Color (Bright Orange)**: oklch(0.75 0.20 45) - A slightly brighter orange for interactive elements and calls-to-action.
- **Background**: oklch(0.98 0.005 250) - Soft off-white with subtle navy tint for visual cohesion
- **Card Background**: oklch(1 0 0) - Pure white for content cards to create hierarchy

**Foreground/Background Pairings**:
- Primary Navy (#1a3a5c): White text (#FFFFFF) - Ratio 8.2:1 ✓
- Warm Orange (#e87d2e): White text (#FFFFFF) - Ratio 3.8:1 ✓ (for large text/buttons)
- Background (#f9fafb): Navy text (#1a3a5c) - Ratio 8.5:1 ✓

## Font Selection
Typography should balance professionalism with approachability, using clean sans-serifs that work well in Galician language context.

**Primary Font**: Outfit (Google Fonts) - Modern geometric sans-serif with friendly rounded edges, excellent for headings
**Secondary Font**: Inter (Google Fonts) - Highly readable sans-serif for body text and UI elements

- **Typographic Hierarchy**:
  - H1 (Hero Title "Somos XARELA"): Outfit Bold/56px/tight tracking (-0.02em)
  - H2 (Section Titles): Outfit SemiBold/36px/normal tracking
  - H3 (Subsections): Outfit Medium/24px/normal tracking
  - Body Text: Inter Regular/16px/relaxed line-height (1.7)
  - Navigation: Inter Medium/15px/wide tracking (0.02em)
  - Buttons: Inter SemiBold/15px/uppercase/wide tracking (0.05em)

## Animations
Animations should feel purposeful and enhance the sense of community engagement without overwhelming the content.

- **Page Load**: Gentle fade-in on hero section (600ms ease-out)
- **Scroll Reveals**: Subtle slide-up fade for content sections as they enter viewport
- **Navigation Hover**: Quick underline expansion from center (200ms ease-out)
- **Button Interactions**: Slight scale (1.02) and shadow enhancement on hover (150ms)
- **Newsletter Submit**: Success checkmark animation with gentle bounce
- **News Cards**: Subtle lift and shadow increase on hover (250ms ease-out)

## Component Selection
- **Components**:
  - **Button**: Primary CTA styled with orange background, used for newsletter submit and main actions
  - **Card**: For news items and "Que facemos?" circular feature cards, subtle shadow with hover lift
  - **Input**: For email newsletter field with clear label and validation states
  - **Separator**: Thin dividers between sections in subtle gray
  - **Avatar**: For news thumbnails and team photos if needed
  - **Badge**: For news dates and categories
  
- **Customizations**:
  - **Custom Hero Component**: Full-width hero with overlay gradient and positioned text
  - **Custom Navigation Bar**: Fixed position header with logo and menu items
  - **Custom Feature Circles**: Circular icon containers for "Que facemos?" section
  - **Custom News Card**: Thumbnail, title, date layout in sidebar widget

- **States**:
  - **Buttons**: Default (orange), Hover (darker orange + lift), Active (pressed), Disabled (muted gray)
  - **Inputs**: Default (border), Focus (navy ring), Error (red border + message), Success (green border)
  - **Navigation Links**: Default (navy), Hover (orange underline), Active (orange text)

- **Icon Selection**:
  - **Menu Toggle**: List icon for mobile hamburger menu
  - **Newsletter**: EnvelopeSimple icon
  - **Submit**: PaperPlaneRight icon
  - **News Date**: Calendar icon
  - **External Links**: ArrowUpRight icon
  - **Social Features**: HandHeart, Users, GraduationCap for "Que facemos?" icons

- **Spacing**:
  - Container max-width: 1280px
  - Section vertical padding: py-16 (desktop), py-12 (mobile)
  - Card padding: p-6
  - Grid gaps: gap-8 (desktop), gap-6 (mobile)
  - Button padding: px-6 py-3

- **Mobile**:
  - Navigation collapses to hamburger menu at <768px
  - Hero text reduces to H1 40px
  - Two-column layout becomes single column stacked
  - Sidebar moves below main content
  - Touch-friendly button sizes (min 44px height)
