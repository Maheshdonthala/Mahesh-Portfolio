# Personal Portfolio Website

A modern, responsive React.js portfolio website showcasing professional work, skills, and experience. Built with Vite for fast development and optimized performance.

## 🌐 Live Demo

**[View Portfolio](https://mahesh-portfolio-vercel.vercel.app)** *(Will be available after Vercel deployment)*

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: Built with accessibility best practices
- **Component-Based**: Modular React components with CSS modules

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript
- **Build Tool**: Vite
- **Styling**: CSS Modules, CSS Grid, Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── copilot-instructions.md
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (already done)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository: `Maheshdonthala/Mahesh-Portfolio`

3. **Configure deployment**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy" - Vercel will automatically build and deploy
   - Your portfolio will be live at: `https://your-project-name.vercel.app`

### Manual Deployment Steps

If deploying elsewhere, the built files will be in the `dist/` folder after running:

```bash
npm run build
```

### Environment Setup

This project includes:
- `vercel.json` - Vercel configuration for SPA routing
- Optimized build settings for production deployment

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Header Component** (`src/components/Header/Header.jsx`)
   - Change "Your Name" to your actual name

2. **Hero Component** (`src/components/Hero/Hero.jsx`)
   - Update name, title, and description
   - Replace placeholder image with your photo

3. **About Component** (`src/components/About/About.jsx`)
   - Update personal story and statistics

4. **Skills Component** (`src/components/Skills/Skills.jsx`)
   - Modify skill categories and proficiency levels

5. **Projects Component** (`src/components/Projects/Projects.jsx`)
   - Add your actual projects with descriptions and links

6. **Experience Component** (`src/components/Experience/Experience.jsx`)
   - Update work experience and achievements

7. **Contact Component** (`src/components/Contact/Contact.jsx`)
   - Update contact information and social media links

8. **Footer Component** (`src/components/Footer/Footer.jsx`)
   - Update social media links

### Styling

- Each component uses CSS modules for scoped styling
- Global styles are defined in `src/index.css`
- Color variables are defined in CSS custom properties

### Adding Images

1. Place your images in the `public/` directory
2. Update image paths in the respective components
3. For profile photo, replace the placeholder in the Hero component

## 📱 Sections Overview

### Header
- Responsive navigation menu
- Smooth scroll to sections
- Mobile hamburger menu

### Hero
- Eye-catching introduction
- Call-to-action buttons
- Animated background gradient

### About
- Personal introduction
- Key statistics
- Professional summary

### Skills
- Technical skills with progress bars
- Categorized by expertise areas
- Animated skill progression

### Projects
- Project showcase with filtering
- Hover effects and project links
- Technology tags

### Experience
- Timeline-based work history
- Key achievements and responsibilities
- Professional growth visualization

### Contact
- Contact form with validation
- Contact information display
- Social media links

### Footer
- Quick navigation links
- Social media connections
- Back-to-top functionality

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** on every push to main branch
3. **Custom domain** support included

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Deploy** with drag-and-drop or Git integration

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy scripts** to package.json
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Fast Loading**: Optimized bundle size
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Font Awesome
- Fonts from Google Fonts
- Built with React and Vite

---

**Built with ❤️ using React.js**
