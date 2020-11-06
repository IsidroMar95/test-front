module.exports = {
  theme: {
    customForms: theme => ({
      sm: {
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`
        }
      }
    }),
    fontFamily: {
      inter: [
        'Inter',
        'Arial',
        'sans-serif',
        'system-ui',
        '-apple-system',
        'Noto Sans',
        'Helvetica Neue'
      ]
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
