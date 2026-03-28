/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /*
       * MADRONA STUDIOS — Design Tokens
       *
       * Color philosophy: "Colored like memory."
       * Muted period tones — deep charcoal, warm sepia, oil-dark metallics, cream.
       * Not desaturated for effect. Each color should feel like it existed
       * in a wartime photograph that someone hand-tinted with care.
       */
      colors: {
        /*
         * Palette derived from The Ferrari Covenant cover art.
         *
         * The cover's color story: amber-gold sky over Modena,
         * storm-cloud purple-gray above, warm sandstone architecture,
         * Ferrari rosso in the center, oil-dark cobblestones below.
         * The site absorbs these tones so the cover feels native.
         */

        /* Charcoal — the darkest ground. Text, dark sections.
         * Slightly warm to hold the cover's amber light. */
        charcoal: {
          DEFAULT: '#1c1916',       /* warm near-black, not pure */
          light: '#2e2924',         /* for dark section backgrounds */
          deep: '#110f0d',          /* deepest dark — hero overlays */
        },

        /* Amber — replaces sepia. The cover's dominant warmth.
         * Pulled from the golden sky and warm stone of the cathedral. */
        amber: {
          DEFAULT: '#a8884a',       /* mid amber — architectural stone */
          light: '#c4a265',         /* lighter gold — sky warmth */
          warm: '#8a7040',          /* deeper amber — shadowed stone */
          pale: '#d4b878',          /* pale gold — highlights, dividers */
        },

        /* Cream — the page ground. Warmed slightly to sit closer
         * to the cover's golden atmosphere. */
        cream: {
          DEFAULT: '#f3ece1',       /* base background — warm parchment */
          light: '#f8f3eb',         /* lighter variant */
          warm: '#eae0d0',          /* warmer for alternating sections */
        },

        /* Metallic — the factory. Oil, iron, steel.
         * Drawn from the cover's cobblestones and shadow areas.
         * Warmer than the original neutral grays. */
        metallic: {
          DEFAULT: '#4d4438',       /* warm mid-gray — secondary text */
          oil: '#2a2520',           /* oil-dark — deepest metallic */
          steel: '#6b6058',         /* warm steel — tertiary text */
          iron: '#3d3530',          /* iron — borders, subtle elements */
        },

        /* Storm — the new tension color. The purple-gray of the
         * cover's threatening sky. Used sparingly for atmosphere
         * in dark sections and overlays. */
        storm: {
          DEFAULT: '#4a3f52',       /* bruised sky purple-gray */
          light: '#5e5468',         /* lighter storm */
          dark: '#332d3a',          /* deep storm — for gradients */
        },

        /* Rosso — the accent. Not Ferrari's bright red, but the
         * red remembered after you close your eyes. The shadow
         * under the hood. Used where terra was: links, the faintest
         * points of heat, the pulse beneath the restraint. */
        rosso: {
          DEFAULT: '#8b2a1a',       /* muted Ferrari red — links, warmth */
          light: '#a63420',         /* hover state — slightly brighter */
          deep: '#5c1a10',          /* deepest rosso — pressed state */
        },
      },

      /*
       * Typography
       *
       * Display: "Cormorant Garamond" — literary, elegant, rooted in Italian
       * typographic tradition. High contrast. Not decorative — architectural.
       *
       * Body: "Inter" — clean, highly legible at small sizes, quiet enough
       * to disappear behind the prose. Swiss precision serving Italian warmth.
       */
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },

      /*
       * Type scale — generous, breathing, cinematic.
       * Display sizes are large because the text *is* the imagery
       * in many sections. Body sizes prioritize readability with space.
       */
      fontSize: {
        /* Display scale */
        'display-hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.005em' }],

        /* Body scale */
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1.0625rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],

        /* Navigation */
        'nav': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.1em', textTransform: 'uppercase' }],
      },

      /*
       * Spacing system — generous whitespace is structural.
       * "The silence between sections is the held breath between scenes."
       */
      spacing: {
        'section': '8rem',        /* Between major page sections */
        'section-sm': '5rem',     /* Between sections on mobile */
        'passage': '3rem',        /* Between text passages */
        'passage-sm': '2rem',     /* Between passages on mobile */
        'breath': '1.5rem',       /* Small breathing room */
      },

      /*
       * Max widths for content containment.
       * Text never stretches to full width — it needs the frame of space.
       */
      maxWidth: {
        'prose': '42rem',         /* Optimal reading width */
        'prose-wide': '56rem',    /* Wider passages, character sections */
        'content': '72rem',       /* Page-level content boundary */
        'full-bleed': '100%',     /* Hero images, full-width sections */
      },

      /*
       * Transitions — subtle, never calling attention to themselves.
       * "Nothing that calls attention to itself as animation."
       */
      transitionDuration: {
        'reveal': '800ms',
        'slow': '600ms',
        'medium': '400ms',
      },
      transitionTimingFunction: {
        'reveal': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

      /*
       * Breakpoints — editorial, not just responsive.
       * The mobile breakpoint is where pacing changes, not just width.
       */
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'cinematic': '1536px',    /* Wide displays — extra breathing room */
      },
    },
  },
  plugins: [],
};
