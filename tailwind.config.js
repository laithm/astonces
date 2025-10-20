module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        forest: {
          "primary": "oklch(68.628% 0.185 148.958)",
          "primary-content": "oklch(0% 0 0)",
          "secondary": "oklch(69.776% 0.135 168.327)",
          "secondary-content": "oklch(13.955% 0.027 168.327)",
          "accent": "oklch(70.628% 0.119 185.713)",
          "accent-content": "oklch(14.125% 0.023 185.713)",
          "neutral": "oklch(30.698% 0.039 171.364)",
          "neutral-content": "oklch(86.139% 0.007 171.364)",
          "base-100": "oklch(20.84% 0.008 17.911)",
          "base-200": "oklch(18.522% 0.007 17.911)",
          "base-300": "oklch(16.203% 0.007 17.911)",
          "base-content": "oklch(83.768% 0.001 17.911)",
          "info": "oklch(72.06% 0.191 231.6)",
          "info-content": "oklch(0% 0 0)",
          "success": "oklch(64.8% 0.15 160)",
          "success-content": "oklch(0% 0 0)",
          "warning": "oklch(84.71% 0.199 83.87)",
          "warning-content": "oklch(0% 0 0)",
          "error": "oklch(71.76% 0.221 22.18)",
          "error-content": "oklch(0% 0 0)",
          "--rounded-box": "1rem",
          "--rounded-btn": "2rem",
          "--rounded-badge": "1rem",
          "--btn-text-case": "normal",
        }
      },
      "light",
      "dark",
    ]
  }
}

