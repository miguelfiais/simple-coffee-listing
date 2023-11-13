import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url("/bg-cafe.jpg")',
        collection: 'url("/vector.svg")',
      },
      colors: {
        'bg-price': 'var(--bg-price)',
        'sold-out': 'var(--sold-out)',
        popular: 'var(--popular)',
        titles: 'var(--titles)',
        'bg-body': 'var(--bg-body)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-description': 'var(--text-description)',
      },
    },
  },
  plugins: [],
}
export default config
