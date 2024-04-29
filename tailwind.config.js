const lightColorScheme = {
  primary: '#765B00',
  onPrimary: '#FFFFFF',
  primaryContainer: '#FFDF93',
  onPrimaryContainer: '#241A00',
  secondary: '#725C00',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#FFE080',
  onSecondaryContainer: '#231B00',
  tertiary: '#765A00',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFDF96',
  onTertiaryContainer: '#251A00',
  error: '#BA1A1A',
  errorContainer: '#FFDAD6',
  onError: '#FFFFFF',
  onErrorContainer: '#410002',
  background: '#FFFBFF',
  onBackground: '#1F1C00',
  surface: '#FFFBFF',
  onSurface: '#1F1C00',
  surfaceVariant: '#ECE1CF',
  onSurfaceVariant: '#4C4639',
  card: '#F8F2F2',
  outline: '#7E7667',
  onInverseSurface: '#FFF48E',
  inverseSurface: '#363100',
  inversePrimary: '#EDC148',
  shadow: '#000000',
  surfaceTint: '#765B00',
  outlineVariant: '#CFC5B4',
  scrim: '#000000'
}

const darkColorScheme = {
  primary: '#EDC148',
  onPrimary: '#3E2E00',
  primaryContainer: '#594400',
  onPrimaryContainer: '#FFDF93',
  secondary: '#E7C349',
  onSecondary: '#3C2F00',
  secondaryContainer: '#564500',
  onSecondaryContainer: '#FFE080',
  tertiary: '#EEC148',
  onTertiary: '#3E2E00',
  tertiaryContainer: '#5A4400',
  onTertiaryContainer: '#FFDF96',
  error: '#FFB4AB',
  errorContainer: '#93000A',
  onError: '#690005',
  onErrorContainer: '#FFDAD6',
  background: '#1F1C00',
  onBackground: '#F2E66A',
  surface: '#1F1C00',
  onSurface: '#F2E66A',
  surfaceVariant: '#4C4639',
  onSurfaceVariant: '#CFC5B4',
  outline: '#989080',
  onInverseSurface: '#1F1C00',
  inverseSurface: '#F2E66A',
  inversePrimary: '#765B00',
  shadow: '#000000',
  surfaceTint: '#EDC148',
  outlineVariant: '#4C4639',
  scrim: '#000000'
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: lightColorScheme,
      fontFamily: {
        areal: ['Areal']
      }
    }
  },
  plugins: []
}
