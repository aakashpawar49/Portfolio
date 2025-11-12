// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ... (Your content paths remain the same)
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefined Dark Theme Colors
        'primary': '#6366F1',      // Retaining a strong Indigo for primary actions/highlights
        'secondary': '#10B981',    // Retaining Emerald Green for contrast/success
        'background': '#1F2937',   // Dark Gray (e.g., Tailwind gray-800) for the main body background
        'surface': '#374151',      // Slightly lighter Gray (e.g., Tailwind gray-700) for cards and sections
        'text-light': '#F3F4F6',   // Very Light Gray for main text (replaces 'text-dark' for the default text color)
        'text-muted': '#9CA3AF',   // Muted Gray for secondary text/descriptions
      },
      // ... (fontFamily remains the same)
    },
  },
  plugins: [],
}