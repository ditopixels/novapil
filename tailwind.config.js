/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0088ab",
                "on-error-container": "#93000a",
                "outline": "#6e797e",
                "on-secondary-fixed": "#001943",
                "on-tertiary-fixed": "#251a00",
                "on-surface-variant": "#3e484d",
                "error-container": "#ffdad6",
                "surface-container-highest": "#d8e2fd",
                "on-error": "#ffffff",
                "tertiary": "#735815",
                "on-surface": "#111b2f",
                "surface-container-lowest": "#ffffff",
                "secondary-fixed-dim": "#afc6ff",
                "tertiary-fixed": "#ffdf9d",
                "tertiary-container": "#8e712c",
                "surface-variant": "#d8e2fd",
                "surface-container-high": "#e0e8ff",
                "on-background": "#111b2f",
                "surface-tint": "#006782",
                "surface-bright": "#f9f9ff",
                "surface": "#f9f9ff",
                "primary-fixed": "#bbe9ff",
                "primary-fixed-dim": "#71d3f8",
                "error": "#ba1a1a",
                "on-primary-fixed-variant": "#004d63",
                "secondary-container": "#80a7fd",
                "inverse-primary": "#71d3f8",
                "inverse-on-surface": "#edf0ff",
                "on-secondary-container": "#003a86",
                "secondary": "#315cac",
                "surface-dim": "#d0daf5",
                "outline-variant": "#bec8ce",
                "on-tertiary": "#ffffff",
                "tertiary-fixed-dim": "#e6c275",
                "primary-container": "#007f9f",
                "background": "#f9f9ff",
                "on-secondary-fixed-variant": "#0e4393",
                "inverse-surface": "#263045",
                "secondary-fixed": "#d9e2ff",
                "on-tertiary-fixed-variant": "#5b4300",
                "on-primary": "#ffffff",
                "on-primary-fixed": "#001f29",
                "on-secondary": "#ffffff",
                "on-primary-container": "#fafdff",
                "surface-container-low": "#f1f3ff",
                "surface-container": "#e8edff",
                "on-tertiary-container": "#fffbff"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "md": "0.375rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "full": "9999px"
            },
            spacing: {
                "stack-lg": "32px",
                "stack-sm": "8px",
                "margin-mobile": "20px",
                "stack-md": "16px",
                "margin-desktop": "64px",
                "container-max": "1280px",
                "gutter": "24px"
            },
            fontFamily: {
                "manrope": ["Manrope", "sans-serif"],
                "work-sans": ["Work Sans", "sans-serif"],
                "jetbrains": ["JetBrains Mono", "monospace"]
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/container-queries")
    ]
};
