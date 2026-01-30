import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	// Note: Apps should override the 'content' array with their specific paths
	content: [],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			// Colors using CSS variables from @layer base
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					foreground: 'var(--color-primary-foreground)',
					hover: 'var(--color-primary-hover)',
					light: 'var(--color-primary-light)',
					dark: 'var(--color-primary-dark)',
				},
				secondary: {
					DEFAULT: 'var(--color-secondary)',
					hover: 'var(--color-secondary-hover)',
					light: 'var(--color-secondary-light)',
					dark: 'var(--color-secondary-dark)',
				},
				white: 'var(--color-white)',
				dark: 'var(--color-dark)',
				gray: {
					50: 'var(--color-gray-50)',
					100: 'var(--color-gray-100)',
					200: 'var(--color-gray-200)',
					300: 'var(--color-gray-300)',
					400: 'var(--color-gray-400)',
					500: 'var(--color-gray-500)',
					600: 'var(--color-gray-600)',
					700: 'var(--color-gray-700)',
					800: 'var(--color-gray-800)',
					900: 'var(--color-gray-900)',
					950: 'var(--color-gray-950)',
				},
				success: {
					DEFAULT: 'var(--color-success)',
					light: 'var(--color-success-light)',
					dark: 'var(--color-success-dark)',
				},
				warning: {
					DEFAULT: 'var(--color-warning)',
					light: 'var(--color-warning-light)',
					dark: 'var(--color-warning-dark)',
				},
				danger: {
					DEFAULT: 'var(--color-danger)',
					light: 'var(--color-danger-light)',
					dark: 'var(--color-danger-dark)',
				},
				info: {
					DEFAULT: 'var(--color-info)',
					light: 'var(--color-info-light)',
					dark: 'var(--color-info-dark)',
				},
				background: 'var(--background)',
				surface: 'var(--surface)',
				border: {
					DEFAULT: 'var(--border)',
					light: 'var(--border-light)',
				},
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)',
					light: 'var(--text-light)',
				},
				sidebar: {
					bg: 'var(--sidebar-bg)',
					hover: 'var(--sidebar-hover)',
					border: 'var(--sidebar-border)',
					text: 'var(--sidebar-text)',
					'text-muted': 'var(--sidebar-text-muted)',
				},
			},

			// Typography using CSS variables from @layer base
			fontFamily: {
				inter: ['var(--font-family-inter)'],
				sans: ['var(--font-family-inter)'],
			},

			fontSize: {
				'navbar-logo': ['var(--text-navbar-logo)', { lineHeight: 'var(--line-height-tight)' }],
				'navbar-subtitle': ['var(--text-navbar-subtitle)', {
					lineHeight: 'var(--line-height-tight)',
					letterSpacing: 'var(--letter-spacing-wide)',
				}],
				'nav-link': ['var(--text-nav-link)', { lineHeight: 'var(--line-height-normal)' }],
				'btn': ['var(--text-button)', { lineHeight: 'var(--line-height-normal)' }],
				'hero-title': ['var(--text-hero-title)', { lineHeight: 'var(--line-height-tight)' }],
				'hero-subtitle': ['var(--text-hero-subtitle)', { lineHeight: 'var(--line-height-normal)' }],
			},

			fontWeight: {
				normal: 'var(--font-weight-normal)',
				medium: 'var(--font-weight-medium)',
				semibold: 'var(--font-weight-semibold)',
				bold: 'var(--font-weight-bold)',
			},

			letterSpacing: {
				tight: 'var(--letter-spacing-tight)',
				wide: 'var(--letter-spacing-wide)',
			},

			lineHeight: {
				tight: 'var(--line-height-tight)',
				normal: 'var(--line-height-normal)',
			},

			// Spacing using CSS variables from @layer base
			spacing: {
				'xs': 'var(--spacing-xs)',
				'sm': 'var(--spacing-sm)',
				'md': 'var(--spacing-md)',
				'lg': 'var(--spacing-lg)',
				'xl': 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
			},

			// Border Radius using CSS variables from @layer base
			borderRadius: {
				DEFAULT: 'var(--radius)',
				'button': 'var(--radius-button)',
				'sm': 'var(--radius-sm)',
				'md': 'var(--radius-md)',
				'lg': 'var(--radius-lg)',
				'xl': 'var(--radius-xl)',
			},

			// Box Shadows using CSS variables from @layer base
			boxShadow: {
				'navbar': 'var(--shadow-navbar)',
				'button-hover': 'var(--shadow-button-hover)',
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
			},

			// Animation and Transitions
			transitionTimingFunction: {
				'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},

			transitionDuration: {
				'200': '200ms',
				'300': '300ms',
			},

			// Grid and Layout
			gridTemplateColumns: {
				'sidebar': '280px 1fr',
				'mobile-nav': '1fr auto',
			},

			// Screens for responsive design
			screens: {
				'xs': '475px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},

			// Custom animations
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				slideDown: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},

			// Animation names
			animation: {
				'fade-in': 'fadeIn 0.2s ease-in-out',
				'slide-up': 'slideUp 0.2s ease-in-out',
				'slide-down': 'slideDown 0.2s ease-in-out',
			},
		},
	},
	plugins: [
		// Main utilities plugin
		function ({ addUtilities, addVariant, theme }: { addUtilities: any; addVariant: any; theme: any }) {
			// Add custom variants
			addVariant('sidebar-collapsed', '&[data-sidebar="collapsed"]');
			addVariant('sidebar-expanded', '&[data-sidebar="expanded"]');
			addVariant('theme-dark', '&[data-theme="dark"]');
			addVariant('theme-light', '&[data-theme="light"]');
			addVariant('mobile-menu-open', '&[data-mobile-menu="open"]');

			// Add custom utilities
			addUtilities({
				// Responsive grid utilities using our design tokens
				'.grid-sidebar': {
					display: 'grid',
					gridTemplateColumns: theme('gridTemplateColumns.sidebar'),
					minHeight: '100vh',
				},

				// Focus utilities with theme integration
				'.focus-primary': {
					'&:focus': {
						outline: `2px solid ${theme('colors.primary.DEFAULT')}`,
						outlineOffset: '2px',
					},
					'&:focus-visible': {
						outline: `2px solid ${theme('colors.primary.DEFAULT')}`,
						outlineOffset: '2px',
					},
				},

				// Background patterns or gradients
				'.bg-pattern-dots': {
					backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
					backgroundSize: '16px 16px',
				},

				// Text selection colors
				'::selection': {
					backgroundColor: theme('colors.primary.light'),
					color: theme('colors.white'),
				},

				// Scrollbar styling
				'.scrollbar-thin': {
					'&::-webkit-scrollbar': {
						display: 'block',
						width: '1px',
					},
					'&::-webkit-scrollbar-track': {
						backgroundColor: theme('colors.gray.100'),
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: theme('colors.primary.DEFAULT'),
						borderRadius: '3px',
					},
					'&::-webkit-scrollbar-thumb:hover': {
						backgroundColor: theme('colors.gray.400'),
					},
				},

				'.scrollbar-none': {
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				}
			});

			// Add responsive utilities
			addUtilities({
				'@media (max-width: 768px)': {
					'.grid-sidebar': {
						gridTemplateColumns: '1fr',
					},
				},
			});
		},
	],

	// Safelist for dynamic classes that might be purged
	safelist: [
		// Typography classes from @layer components
		'navbar-logo',
		'navbar-subtitle',
		'nav-link',
		'hero-title',
		'hero-subtitle',

		// Button classes from @layer components
		'btn',
		'btn-primary',
		'btn-secondary',
		'btn-outline',

		// Card classes from @layer components
		'card',
		'card-header',
		'card-body',
		'card-footer',

		// Form classes from @layer components
		'form-input',
		'form-label',

		// Navigation classes from @layer components
		'nav-item',

		// Layout classes from @layer components
		'sidebar-layout',

		// Utility classes from @layer utilities
		'focus-ring',
		'shadow-navbar',
		'shadow-button-hover',
		'text-balance',

		// Animation classes
		'animate-fade-in',
		'animate-slide-up',
		'animate-slide-down',

		// Custom spacing classes from @layer utilities
		{
			pattern: /(p|m|px|py|mt|mb|gap|space-[xy])-(xs|sm|md|lg|xl|2xl)/,
		},

		// Color variations that might be used dynamically
		{
			pattern: /(bg|text|border)-(primary|secondary|gray)-(hover|light|dark|\d{2,3})/,
		},
	],
};

export default config;
