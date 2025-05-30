/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}', // For components in src/components
      './src/app/**/*.{js,ts,jsx,tsx,mdx}', // If using Next.js App Router in src/app
      './src/**/*.{ts,tsx,js,jsx}' // Broader catch-all for other src files if needed
    ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		blur: {
  		  '3xl': '64px',
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#1A365D',
  				light: '#2D4A8A',
  				dark: '#0F2442',
  			},
  			secondary: {
  				DEFAULT: '#4A8FE7',
  				light: '#6BA5F8',
  				dark: '#3A7DD0',
  			},
  			whatsapp: {
  				DEFAULT: '#00A884',
  				light: '#25D366',
  				dark: '#008069',
  				chat: {
  				  bg: '#F5F2EA',
  				  sent: '#E7FFDB',
  				  statusbar: '#54656F',
  				  inputBg: '#F0F2F5'
  				}
  			},
  			neutral: {
  				50: '#F9FAFB',
  				100: '#F3F4F6',
  				200: '#E5E7EB',
  				300: '#D1D5DB',
  				400: '#9CA3AF',
  				500: '#6B7280',
  				600: '#4B5563',
  				700: '#374151',
  				800: '#1F2937',
  				900: '#111827',
  				950: '#0F172A',
  			},
  			status: {
  				approved: '#10B981',
  				pending: '#F59E0B',
  				rejected: '#EF4444',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
  			body: ['Roboto', 'system-ui', 'sans-serif'],
  		},
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      typography: {
        display: {
          css: {
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: 'clamp(48px, 5vw, 72px)',
            lineHeight: '1.1',
          }
        },
        heading: {
          css: {
            fontFamily: 'var(--font-outfit)',
            fontWeight: '500',
            fontSize: 'clamp(24px, 3vw, 36px)',
            lineHeight: '1.2',
          }
        },
        body: {
          css: {
            fontFamily: 'var(--font-inter)',
            fontWeight: '400',
            fontSize: 'clamp(16px, 1.1vw, 18px)',
            lineHeight: '1.5',
          }
        },
        ui: {
          css: {
            fontFamily: 'var(--font-inter)',
            fontWeight: '400',
            fontSize: 'clamp(14px, 0.9vw, 16px)',
            lineHeight: '1.5',
          }
        }
      },
  		fontSize: {
  			'2xs': ['0.64rem', { lineHeight: '1rem' }],
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1' }],
  			'6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Define text styles for specific uses
      textStyles: {
        display: {
          fontFamily: 'var(--font-outfit)',
          fontWeight: '600',
          fontSize: ['48px', '72px'],
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
        heading: {
          fontFamily: 'var(--font-outfit)',
          fontWeight: '500',
          fontSize: ['24px', '36px'],
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        },
        body: {
          fontFamily: 'var(--font-inter)',
          fontWeight: '400',
          fontSize: ['16px', '18px'],
          lineHeight: '1.5',
        },
        ui: {
          fontFamily: 'var(--font-inter)',
          fontWeight: '400',
          fontSize: ['14px', '16px'],
          lineHeight: '1.5',
        },
      },
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'slide-down': 'slideDown 0.5s ease-out',
  			'slide-left': 'slideLeft 0.5s ease-out',
  			'slide-right': 'slideRight 0.5s ease-out',
  			'bounce-subtle': 'bounceSubtle 2s infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'typing': 'typing 1.5s infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			slideUp: {
  				'0%': { transform: 'translateY(20px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			slideDown: {
  				'0%': { transform: 'translateY(-20px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			slideLeft: {
  				'0%': { transform: 'translateX(20px)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' },
  			},
  			slideRight: {
  				'0%': { transform: 'translateX(-20px)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' },
  			},
  			bounceSubtle: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-5px)' },
  			},
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' },
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' },
  			},
  			pulseSubtle: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.7' },
  			},
  			typing: {
  				'0%': { opacity: '0.3' },
  				'50%': { opacity: '1' },
  				'100%': { opacity: '0.3' },
  			}
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
  			'hero-pattern': "url('/images/hero-pattern.svg')",
  			'whatsapp-header': 'linear-gradient(to bottom, #00A884, #008069)',
  		},
  		boxShadow: {
  			'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
  			'medium': '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
  			'hard': '0 10px 25px 0 rgba(0, 0, 0, 0.15)',
  			'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  			'phone': '0 0 0 4px rgba(20, 20, 20, 0.9), 0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2)',
  			'message': '0 1px 1px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)',
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				'2xl': '6rem'
  			},
  			screens: {
  				sm: '640px',
  				md: '768px',
  				lg: '1024px',
  				xl: '1280px',
  				'2xl': '1536px'
  			}
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Add a custom plugin to generate text style classes
    function({ addComponents, theme }) {
      const textStyles = {
        '.text-display': {
          fontFamily: `${theme('fontFamily.heading')}`,
          fontWeight: theme('fontWeight.semibold'),
          fontSize: 'clamp(48px, 5vw, 72px)',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        },
        '.text-heading': {
          fontFamily: `${theme('fontFamily.heading')}`,
          fontWeight: theme('fontWeight.medium'),
          fontSize: 'clamp(24px, 3vw, 36px)',
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        },
        '.text-body': {
          fontFamily: `${theme('fontFamily.sans')}`,
          fontWeight: theme('fontWeight.regular'),
          fontSize: 'clamp(16px, 1.1vw, 18px)',
          lineHeight: '1.5',
        },
        '.text-ui': {
          fontFamily: `${theme('fontFamily.sans')}`,
          fontWeight: theme('fontWeight.regular'),
          fontSize: 'clamp(14px, 0.9vw, 16px)',
          lineHeight: '1.5',
        },
      };

      addComponents(textStyles);
    },
  ],
};
