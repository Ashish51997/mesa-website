/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--ink)",
        primary: "var(--accent)",
        muted: "var(--surface-2)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
}
