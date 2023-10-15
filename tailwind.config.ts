import type { Config } from 'tailwindcss'

const pxToRem = (px, base = 16) => `${px / base}rem`

const colors = {
  transparent: 'transparent',
  white: {
    DEFAULT: '#FFFFFF'
  },
  black: {
    DEFAULT: '#121212'
  },
  gray: {
    DEFAULT: '#BBBBBB',
    light: '#CCCCCC',
    dark: '#AAAAAA'
  },
  chrome: {
    DEFAULT: '#EEEEEE'
  },
  blue: {
    DEFAULT: '#0080FF',
    light: '#41A0FF',
    dark: '#005FBC'
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors
    },
    borderColor: {
      DEFAULT: colors.chrome.DEFAULT,
      ...colors
    },
    placeholderColor: {
      DEFAULT: colors.gray.light,
    },
    textColor: {
      'default': colors.black.DEFAULT,
      ...colors
    },
    fontSize: {
      'sm': [pxToRem(10), pxToRem(11.72)],
      'md': [pxToRem(13), pxToRem(15.23)],
      'lg': [pxToRem(15), pxToRem(17.58)],
      'xl': [pxToRem(28), pxToRem(32.81)],
    },
    maxWidth: {
      'container': pxToRem(812)
    }
  },
  plugins: [],
} satisfies Config

