module.exports = {
	content: ["**/*.tsx", "src/**/*.tsx"],
	darkMode: "class", // or 'media' or 'class'
	prefix: "sd-",
	theme: {
		extend: {
			fontFamily: {
				display: ["bely"],
				body: ["hero-new"],
			},
			minWidth: {
				0: "0",
				sm: "12rem",
				md: "24rem",
				lg: "36rem",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
				400: "400px",
			},
			width: {
				form: "240px",
				"1/2": ".125rem",
			},
			backgroundColor: {
				"obs-primary": "var(--background-primary)",
				"obs-primary-alt": "var(--background-primary-alt)",
				"obs-secondary": "var(--background-secondary)",
				"obs-secondary-alt": "var(--background-secondary-alt)",
				"obs-tertiary": "var(--background-tertiary)",
				"obs-modifier-border": "var(--background-modifier-border)",
				"obs-modifier-border-hover":
					"var(--background-modifier-border-hover)",
				"obs-modifier-border-focus":
					"var(--background-modifier-border-focus)",
				"obs-modifier-form-field":
					"var(--background-modifier-form-field)",
				"obs-modifier-form-field-highlighted":
					"var(--background-modifier-form-field-highlighted)",
				"obs-button": "var(--background-button)",
				"obs-cover": "var(--background-modifier-cover)",
				"obs-transparent": "var(--background-transparent)",
				"obs-translucent": "var(--background-translucent)",
				"accent-0": "var(--accent-0)",
				"accent-1": "var(--accent-1)",
				"accent-2": "var(--accent-2)",
				"accent-3": "var(--accent-3)",
				"accent-4": "var(--accent-4)",
				primary: "var(--color-bg-primary)",
				body: "var(--color-bg-body)",
				accent: "var(--color-bg-accent)",
				"accent-inverted": "var(--color-text-accent)",
				secondary: "var(--color-bg-secondary)",
				warning: "#FA9B49",
			},
			ringColor: {
				primary: "var(--color-bg-primary)",
				secondary: "var(--color-bg-secondary)",
				accent: "var(--color-text-accent)",
				"accent-inverted": "var(--color-bg-accent)",
			},
			colors: {
				"obs-primary": "var(--background-primary)",
				"obs-primary-alt": "var(--background-primary-alt)",
				"obs-secondary": "var(--background-secondary)",
				"obs-secondary-alt": "var(--background-secondary-alt)",
				"obs-tertiary": "var(--background-tertiary)",
				"obs-modifier-border": "var(--background-modifier-border)",
				"obs-modifier-border-hover":
					"var(--background-modifier-border-hover)",
				"obs-modifier-border-focus":
					"var(--background-modifier-border-focus)",
			},
			borderColor: {
				"obs-modal": "var(--modal-border)",
				accent: "var(--color-text-accent)",
				"accent-inverted": "var(--color-bg-accent)",
				themed: "var(--border)",
				"accent-0": "var(--accent-0)",
				"accent-1": "var(--accent-1)",
				"accent-2": "var(--accent-2)",
				"accent-3": "var(--accent-3)",
				"accent-4": "var(--accent-4)",
			},
			textColor: {
				"obs-normal": "var(--text-normal)",
				"obs-muted": "var(--text-muted)",
				"obs-faint": "var(--text-faint)",
				"obs-accent": "var(--text-accent)",
				"obs-accent-hover": "var(--text-accent-hover)",
				"obs-on-accent": "var(--text-on-accent)",
				"obs-selection": "var(--text-selection)",
				"obs-highlight-bg": "var(--text-highlight-bg)",
				"obs-highlight-bg-active": "var(--text-highlight-bg-active)",
				accent: "var(--color-text-accent)",
				"accent-0": "var(--accent-0)",
				"accent-1": "var(--accent-1)",
				"accent-2": "var(--accent-2)",
				"accent-3": "var(--accent-3)",
				"accent-4": "var(--accent-4)",
				"accent-inverted": "var(--color-bg-accent)",
				primary: "var(--color-text-primary)",
				disabled: "var(--color-text-disabled)",
				placeholder: "var(--color-text-placeholder)",
				secondary: "var(--color-text-secondary)",
			},
			spacing: {
				"1px": "1px",
				"2px": "2px",
				"3px": "3px",
				"4px": "4px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
