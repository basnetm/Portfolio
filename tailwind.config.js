// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Specify the paths to all of your template files
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}, // Use this section to extend the default theme
  },
  variants: {
    extend: {}, // Add or override Tailwind's default variant configurations
  },
  plugins: [], // Add any additional Tailwind plugins here
};
