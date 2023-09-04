import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#A0D7AD',
      main: '#7D957F',
      dark: '#5D5D5D',
    },
    secondary: {
      light: '#ECE8C9',
      main: '#DFD691',
      dark: '#A79C44',
    },
  },
  shape: {
    borderRadius: 0,
  },
  direction: 'ltr',
});

theme = responsiveFontSizes(theme);

export default theme;