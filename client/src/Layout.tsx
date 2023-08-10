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
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import EuroIcon from "@mui/icons-material/EuroSymbol";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationIcon from "@mui/icons-material/LocationOn";
import { FaMoon, FaMosque, FaFileContract, FaHands } from "react-icons/fa";
import { ImSection } from "react-icons/im";
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
            <FaMosque />
          </ListItemIcon>
          <ListItemText primary="Startseite" />
        </ListItemButton>

        <ListItemButton component={Link} to="/news">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Neuigkeiten" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/islam/"
          onClick={handleClickIslamSubmenu}
        >
          <ListItemIcon>
            <FaMoon />
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
            <FaHands />
          </ListItemIcon>
          <ListItemText primary="Gebet" />
        </ListItemButton>

        <ListItemButton component={Link} to="/donate">
          <ListItemIcon>
            <EuroIcon />
          </ListItemIcon>
          <ListItemText primary="Spenden" />
        </ListItemButton>

        <ListItemButton component={Link} to="/schedule">
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Aktivitäten" />
        </ListItemButton>

        <ListItemButton component={Link} to="/location">
          <ListItemIcon>
            <LocationIcon />
          </ListItemIcon>
          <ListItemText primary="Kontakt" />
        </ListItemButton>

        <ListItemButton component={Link} to="/statute">
          <ListItemIcon>
            <FaFileContract />
          </ListItemIcon>
          <ListItemText primary="Satzung" />
        </ListItemButton>

        <ListItemButton component={Link} to="/imprint">
          <ListItemIcon>
            <ImSection />
          </ListItemIcon>
          <ListItemText primary="Impressum" />
        </ListItemButton>
      </List>
    </>
  );

  const drawer = (
    <>
      <Toolbar />
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
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml:1, mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <ImvLogoWhite height="45px" />
          <Box sx={{ ml: 1, flexDirection: "column" }}>
              <Typography variant="caption" display="block" noWrap>
                IMV-Landau e. V. - Islamischer multikultureller Verein Landau
                (Pfalz)
              </Typography>
              <Typography variant="body1" fontWeight="bold" display="block">
                الجمعية الاسلامية للثقافات المتعددة مسجد ابي بكر الصديق
              </Typography>
            </Box>
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
