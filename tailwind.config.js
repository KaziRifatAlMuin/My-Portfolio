module.exports = {
    content: ['./index.html', './script.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
            },
            colors: {
                ink: '#08111f',
                panel: '#0e1b2f',
                line: 'rgba(148, 163, 184, 0.18)'
            },
            boxShadow: {
                glow: '0 24px 80px rgba(34, 211, 238, 0.18)'
            }
        }
    },
    safelist: [
        'pointer-events-none',
        'translate-y-2',
        'translate-y-0',
        'opacity-0',
        'opacity-100',
        'bg-ink/90',
        'shadow-glow',
        'border-cyan-200/20',
        'border-cyan-300/30',
        'border-white/10',
        'bg-cyan-200',
        'bg-white/20',
        'scale-95',
        'bg-emerald-300',
        'bg-rose-400',
        'text-[#08111f]',
        'z-[100]'
    ]
};
