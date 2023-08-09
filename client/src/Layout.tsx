import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ReactComponent as ImvLogo } from "@/assets/imv-logo.svg";
import { ReactComponent as ImvLogoWhite } from "@/assets/imv-logo-white.svg";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import theme from "./theme";

const drawerWidth = 240;

export default function Root() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openIslamSubmenu, setOpenIslamSubmenu] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickIslamSubmenu = () => {
    setOpenIslamSubmenu(!openIslamSubmenu);
  };

  const list = (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Startseite" />
        </ListItemButton>

        <ListItemButton component={Link} to="/news">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Neuigkeiten" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/islam/"
          onClick={handleClickIslamSubmenu}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Islam" />
          {openIslamSubmenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openIslamSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="/islam/prophets"
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Die Propheten" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/islam/sense-of-life"
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Der Sinn des Lebens" />
            </ListItemButton>

            <ListItemButton component={Link} to="/islam/women" sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Frauen im Islam" />
            </ListItemButton>

            <ListItemButton component={Link} to="/islam/koran" sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Der edle Koran" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component={Link} to="/prayer">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Gebet" />
        </ListItemButton>

        <ListItemButton component={Link} to="/donate">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Spenden" />
        </ListItemButton>

        <ListItemButton component={Link} to="/schedule">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Aktivitäten" />
        </ListItemButton>

        <ListItemButton component={Link} to="/location">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Kontakt" />
        </ListItemButton>

        <ListItemButton component={Link} to="/statute">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Satzung" />
        </ListItemButton>

        <ListItemButton component={Link} to="/imprint">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Impressum" />
        </ListItemButton>
      </List>
    </>
  );

  const drawer = (
    <>
      <Toolbar
        sx={{
          [theme.breakpoints.up("xs")]: {
            p: 0,
          },
        }}
      >
        <ImvLogo />
        <Box sx={{ ml: 1, flexDirection: "column" }}>
          <Typography variant="subtitle2">IMV-Landau e. V.</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            مسجد ابو بكر الصديق
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      {list}
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
            }}
          >
            <ImvLogoWhite height="45px" />
            <Box sx={{ ml: 1, flexDirection: "column" }}>
              <Typography variant="subtitle2" display="block">
                IMV-Landau e. V.
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" display="block">
                مسجد ابو بكر الصديق
              </Typography>
            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
