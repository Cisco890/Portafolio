/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <— importante: así Tailwind “escuchará” cuando agregues <html class="dark">
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Mapeo de tus variables CSS para que Tailwind genere clases como bg-background o text-foreground
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        /* ... agrega aquí todas las variables que quieras usar con bg-<nombre> o text-<nombre> */
      },
    },
  },
  plugins: [
    // aquí podrían ir plugins adicionales si los necesitas
  ],
};
