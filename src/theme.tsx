import React from 'react';
import grey from '@mui/material/colors/grey';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: "#4dd5f5",
      main: "#21CBF3",
      dark: "#178eaa",
    },
    secondary: {
      light: "#4dabf5",
      main: "#2196F3",
      dark: "#1769aa",
    },
    background: {
      default: grey[100]
    }
  },
  shape: {
    borderRadius: 0,
  },
  direction: 'ltr',
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;