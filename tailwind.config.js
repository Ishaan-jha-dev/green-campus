/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          600: '#059669',
          800: '#065F46',
          100: '#D1FAE5',
        },
        mint: {
          300: '#6EE7B7',
        },
        ink: '#0F1923',
        slate: {
          700: '#374151',
        },
        mist: {
          500: '#6B7280',
        },
        cloud: {
          100: '#F3F4F6',
        },
        carbon: '#059669',
        waste: '#7C3AED',
        energy: '#D97706',
        success: '#059669',
        warning: '#D97706',
        critical: '#E11D48',
        info: '#0284C7',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0,0,0,0.05)',
        sm: '0 2px 8px rgba(0,0,0,0.08)',
        md: '0 4px 16px rgba(0,0,0,0.10)',
        lg: '0 8px 32px rgba(0,0,0,0.12)',
        emerald: '0 4px 20px rgba(5,150,105,0.25)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
};
