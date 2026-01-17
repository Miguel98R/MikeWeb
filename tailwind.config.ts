// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
    content: [],
    theme: {
        extend: {
            colors: {
                // Tu paleta personalizada
                'tech-black': '#050505',    // Fondo principal muy oscuro
                'tech-surface': '#0F0F0F',  // Para tarjetas o secciones secundarias
                'tech-purple': '#8b5cf6',   // Morado neón (Violet 500/600 approx)
                'tech-red': '#ef4444',      // Rojo intenso
                'tech-gray': '#9ca3af',     // Textos secundarios
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'], // Para código o efectos tech
            },
            boxShadow: {
                'glow-purple': '0 0 20px -5px rgba(139, 92, 246, 0.5)',
                'glow-red': '0 0 20px -5px rgba(239, 68, 68, 0.5)',
            }
        }
    },
    plugins: [],
}