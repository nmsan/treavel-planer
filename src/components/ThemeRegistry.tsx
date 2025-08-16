'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h2: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h3: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h4: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h5: {
      fontFamily: 'Open Sans, sans-serif',
    },
    h6: {
      fontFamily: 'Open Sans, sans-serif',
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
    },
    button: {
      fontFamily: 'Open Sans, sans-serif',
    },
    caption: {
      fontFamily: 'Open Sans, sans-serif',
    },
    overline: {
      fontFamily: 'Open Sans, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Open Sans, sans-serif',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
