import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import caLogo from "../Icons/caimage-fotor-bg-remover-2024031217913.png";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            width: "90%",
            margin: "0 auto",
            padding: "0 5%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
            backgroundColor: "#31568B",
            color: "#ffffff",
          }}
        >
          <Link to="/">
            <img src={caLogo} alt="CA Logo" width={100} />
          </Link>
          {isDesktop ? (
            <Box
              sx={{
                display: "flex",
                gap: "60px",
              }}
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Typography style={{ fontSize: "16px", fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Box>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
        <List
          sx={{
            backgroundColor: "#0C151D",
            color: "#ffffff",
            width: "250px",
            padding: "26px 0",
            height: "100vh",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="close"
            onClick={closeDrawer}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div
            style={{
              marginTop: "12px",
            }}
          >
            {menuItems.map((item, index) => (
              <ListItem key={index} button onClick={closeDrawer}>
                <Link
                  to={item.path}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <ListItemText primary={item.label} />
                </Link>
              </ListItem>
            ))}
          </div>
        </List>
      </Drawer>
    </>
  );
};

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  { label: "Services", path: "/services" },
  { label: "Knowledge Center", path: "/knowledge" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contactus" },
];

export default Header;
