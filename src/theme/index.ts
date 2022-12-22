import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
