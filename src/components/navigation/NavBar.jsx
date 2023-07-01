import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import "./navigationHeader.style.css";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        className="edit_name"
        id="header"
        variant="h6"
        sx={{
          my: 2,
          xs: "none",
          sm: "block",
          color: "black",
          fontWeight: "bolder",
          textTransform: "uppercase",
        }}
      >
        Aidina Bekturova
      </Typography>
      <Divider />
      <List>
        <Link to="contact_me">
          <a href="/">Contact me</a>
        </Link>
        <br></br>
        <br></br>
        <Link to="download">
          <a href="/" download>
            Download resume
          </a>
        </Link>
        {/* <a href="/" download>
          <Button sx={{ color: "black", fontWeight: "bolder" }}>
            Download resume
          </Button>
        </a> */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        className="nav-bar-mui"
        component="nav"
        sx={{ backgroundColor: "#F4F4F2", fontFamily: "Belanosima" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, backgroundColor: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                color: "black",
                fontWeight: "bolder",
                textTransform: "uppercase",
              },
            }}
          >
            Aidina Bekturova
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "white",
                fontWeight: "bolder",
                textTransform: "uppercase",
              },
            }}
          >
            <Link to="contact_me">
              <a href="/">
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  Contact me
                </Button>
              </a>
            </Link>
            <a href="/" download>
              <Button sx={{ color: "black", fontWeight: "bolder" }}>
                Download resume
              </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
