import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        column: {
            display: 'flex',
            flexDirection: 'column'
        },
        extend: {
            colors: {
                main: 'var(--foreground)',
                foreground: "var(--foreground)",
            },
            backgroundColor: {
                primary: 'var(--background-primary)',
                secundary: 'var(--background-secundary)',
                thirth: 'var(--background-thirth)',
            },
            borderColor: {
                primary: 'var(--border-color-primary)',
            },
        },
    },
    plugins: [],
} satisfies Config;
