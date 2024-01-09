import React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";
import grey from "@mui/material/colors/grey";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

let pmbTheme = createTheme({
  palette: {
    mode: "light",
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
      default: grey[100],
    },
  },
  shape: {
    borderRadius: 0,
  },
  direction: "ltr",
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

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#A0D7AD",
      main: "#7D957F",
      dark: "#5D5D5D",
    },
    secondary: {
      light: "#ECE8C9",
      main: "#DFD691",
      dark: "#A79C44",
    },
  },
  shape: {
    borderRadius: 0,
  },
  direction: "ltr",
});

pmbTheme = responsiveFontSizes(pmbTheme);
theme = responsiveFontSizes(theme);

export { theme as default, pmbTheme };
