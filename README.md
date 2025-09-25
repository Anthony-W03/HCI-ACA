# HCI-ACA
# Push Ahead Demo Website

## Project Overview
A frontend demo website for Push Ahead, a non-profit organization promoting mindfulness through skating and entrepreneurship. The website serves as an informational platform targeting multiple stakeholders:
- Parents of potential participants
- Educational institutions for partnerships
- Potential donors
- Prospective volunteers

## Tech Stack
- **React** (via Vite for faster development)
- **Tailwind CSS** for styling
- **React Router** for page navigation
- **Heroicons** for UI icons (optional)

## Project Structure
```
push-ahead-demo/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── shared/         # Shared components (Buttons, Cards, etc.)
│   ├── pages/              # Page components
│   ├── assets/             # Images, fonts, etc.
│   └── styles/             # Global styles and Tailwind config
├── public/                 # Static files
└── index.html             # Entry point
```

## Key Features
- Responsive design for all devices
- Clear navigation structure
- Accessible UI components
- Fast loading times
- Multiple stakeholder-focused sections

## Page Structure
1. **Home Page**
   - Mission statement
   - Program highlights
   - Impact statistics
   - Call-to-action sections

2. **Programs Page**
   - Skating programs
   - Mindfulness integration
   - Entrepreneurship aspects
   - Schedule information

3. **Partner Schools**
   - Partnership benefits
   - Current success stories
   - Partnership process
   - Contact information

4. **Get Involved**
   - Donation options
   - Volunteer opportunities
   - Contact forms

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd push-ahead-demo
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Development Guidelines

### Design Principles
- Use consistent spacing and typography
- Ensure high contrast for readability
- Implement mobile-first design
- Follow WCAG accessibility guidelines

### Component Development
- Create reusable components
- Use Tailwind classes for styling
- Implement responsive designs
- Document component props

## Next Steps

1. **Initial Setup**
   - [x] Create project using Vite
   - [x] Install and configure Tailwind CSS
   - [x] Set up React Router
   - [x] Create basic project structure

2. **Design Phase**
   - [x] Create wireframes for each page
   - [x] Define color scheme and typography
   - [x] Design core components
   - [x] Create responsive layouts

3. **Development Phase**
   - [x] Build core components
   - [x] Implement page routing
   - [x] Add content and images
   - [x] Implement responsive design

4. **Review & Testing**
   - [x] Test on multiple devices
   - [x] Check accessibility
   - [x] Optimize performance
   - [x] Gather feedback

## Future Considerations
- Analytics integration
- Content Management System
- Backend integration
- Newsletter signup functionality
- Event registration system

## Local Development
The demo is configured to run on localhost, making it easy to develop and showcase without deployment concerns. To view different pages and features, use the development server's local environment.
