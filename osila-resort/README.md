# Osila Resort - Luxury Hotel Booking Website

A modern, responsive, and interactive resort booking website built with React, React Router, and Tailwind CSS. This project showcases a complete hotel booking platform with room listings, booking forms, and responsive design.

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Interactive UI**: Smooth animations and transitions for better user experience
- **Room Booking**: Complete booking form with date selection and room options
- **Room Listings**: Filterable and sortable room listings with detailed information
- **Modern Styling**: Beautiful UI built with Tailwind CSS and custom components
- **Form Validation**: Client-side form validation for better user experience
- **Accessibility**: Built with accessibility in mind (ARIA labels, semantic HTML)

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Form Handling**: React Hook Form
- **State Management**: React Context API
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/osila-resort.git
   cd osila-resort
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── assets/           # Static assets (images, etc.)
├── components/       # Reusable UI components
│   ├── BookingForm.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── RoomCard.jsx
│   └── TestimonialCard.jsx
├── pages/            # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Rooms.jsx
├── App.jsx           # Main App component with routing
└── main.jsx          # Application entry point
```

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import the repository on Vercel
3. Vercel will automatically detect it's a Vite app and configure the build settings
4. Deploy!

### Netlify

1. Build the app: `npm run build`
2. Deploy the `dist` folder to Netlify

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [React Router](https://reactrouter.com/)

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
