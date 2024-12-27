| Nama  | Division        | Sub-Division  |
| ----- | ---------- | ---------- |
| Kaka Agastya HW   | PGR | WebDev |

## Brief Documentation: Design Choices and Implementation Details for "Barunastra ITS Website Proposal"
### 1. Overview
##### The "Barunastra ITS" website proposal serves as an information platform for the Barunastra team from ITS, showcasing their innovative maritime technology, projects, team structure, sponsorship packages & contact information. The primary goal is to attract public attention, sponsors, and collaborators.

### 2. Design Choices
#### a. Visual Design
##### -> Theme: A professional and maritime-inspired theme with dominant blue orange and white tones for clarity and consistency with the team's identity.
##### -> Typography: Clean, modern 'Inter' fonts paired with Tailwind CSS presets for responsive text sizing.
##### -> Icons & Image: High-quality & optimized photos of the team and their projects, complemented by icons sourced from Freepik and ITS website

#### b. User Experience (UX)
##### -> Navigation: Simple & smooth layout with navbar on top and dynamic transitions.
##### -> Responsiveness : Fully responsive design tailored for mobile device experiences.
##### -> Animations : Framer Motion is used to add subtle animations to elements like the hero section, project cards, navigation links, & etc ensuring an engaging and modern user experience.
##### -> Accessibility: Proper color contrast ensures readability.

### 3. Implementation Details
#### a. Technology stack
##### -> Frontend :
#####     - Tailwind CSS for utility-first styling, ensuring a consistent and maintainable codebase.
#####     - ShadCN for UI components, providing a highly customizable design system.
#####     - Framer Motion for animations, adding interactivity and smooth transitions.
##### -> Hosting :
#####     - Vercel for fast and secure hosting, leveraging its built-in caching and performance optimization

#### b. Code Structure
##### Folder Structure :
![alt text](<public/codestructure.png>)

#### c. Features
##### -> Dynamic Project Showcase: A responsive gallery of team projectss
##### -> Interactive Animations: Animated navigation bar, hover on icons
##### -> Contact Information: A dedicated section with interactive buttons linking to email and social media profiles.

#### d. Performance Optimization
##### -> Lazy Loading: Implemented for images and other media to improve page load times.
##### -> Image Compression: Optimized images to reduce file size and improve page load times.
##### -> CSS Grid: Used for layout, improving performance and responsiveness.
##### -> Framer Motion animations are optimized to minimize layout shift and enhance performance.

