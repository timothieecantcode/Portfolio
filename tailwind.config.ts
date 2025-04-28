
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom theme colors
				dark: {
					DEFAULT: '#000000',
					100: '#1A1A1A',
					200: '#333333',
				},
				glow: {
					DEFAULT: 'rgba(255, 255, 255, 0.1)',
					strong: 'rgba(255, 255, 255, 0.25)',
					intense: 'rgba(255, 255, 255, 0.45)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'scroll-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'scroll-right': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)'
					},
					'50%': { 
						boxShadow: '0 0 25px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)'
					}
				},
				'light-flash': {
					'0%': { opacity: '0.4' },
					'25%': { opacity: '0.6' },
					'50%': { opacity: '0.8' },
					'75%': { opacity: '0.6' },
					'100%': { opacity: '0.4' }
				},
				'soft-rotate': {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scroll-left': 'scroll-left 25s linear infinite',
				'scroll-right': 'scroll-right 25s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'light-flash': 'light-flash 8s infinite',
				'soft-rotate': 'soft-rotate 10s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(255, 255, 255, 0.15)',
				'glow-md': '0 0 20px rgba(255, 255, 255, 0.2)',
				'glow-lg': '0 0 30px rgba(255, 255, 255, 0.25)',
				'glow-xl': '0 0 40px rgba(255, 255, 255, 0.3)',
				'inner-glow-sm': 'inset 0 0 10px rgba(255, 255, 255, 0.1)',
				'inner-glow-md': 'inset 0 0 20px rgba(255, 255, 255, 0.15)'
			},
			backgroundImage: {
				'radial-glow': 'radial-gradient(circle at top left, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
				'corner-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) -10%, transparent 50%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
