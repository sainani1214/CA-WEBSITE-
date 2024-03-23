import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Icons/Logo-removebg-preview.png";

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
      <div
        style={{
          width: "100%",
          height: isDesktop ? "36px" : "76px",
          backgroundColor: "#00496B",
        }}
      >
        <div
          style={{
            width: isDesktop ? "86%" : "100%",
            height: "100%",
            margin: isDesktop ? "0px 7%" : "0%",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            flexDirection: isDesktop ? "row" : "column",
            paddingTop: isDesktop ? 0 : "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              style={{ width: "22px", height: "22px" }}
            >
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
            </svg>
            <a href="tel:+919014694297" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  marginRight: isDesktop ? "0px" : "5px",
                }}
              >
                9014694297
              </span>
            </a>
            <a href="tel:+919652462200" style={{ textDecoration: "none" }}>
              <span style={{ color: "#ffffff", fontSize: "14px" }}>
                9652462200
              </span>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginTop: isDesktop ? "0px" : "-22px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "22px", height: "22px", color: "white" }}
            >
              <g id="info" />
              <g id="icons">
                <path
                  d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z"
                  id="email"
                />
              </g>
            </svg>
            <a
              href="mailto:experttaxsolutions9@gmail.com"
              color="inherit"
              underline="none"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#ffffff" }}>
                experttaxsolutions9@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>

      <AppBar position="static">
        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "#ffffff" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={Logo} alt="CA Logo" width={80} />
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: isDesktop ? 0.5 : 0,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "#31568B", fontWeight: 600 }}
              >
                K&M EXPERT TAX SOLUTIONS
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 3,
                  backgroundColor: "#31568B",
                  borderRadius: 2,
                  mt: "-3px",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ color: "#31568B", textAlign: "center", fontWeight: 600 }}
              >
                TAX CONSULTANT
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List sx={{ display: "flex" }}>
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: "#31568B",
                    marginLeft: 2,
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: "nowrap",
                          fontSize: isDesktop ? "18px" : "14px",
                          fontWeight: isDesktop ? 500 : 400,
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              {isDrawerOpen ? (
                <CloseIcon sx={{ color: "#31568B" }} />
              ) : (
                <MenuIcon sx={{ color: "#31568B" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>

        <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
          <List
            sx={{
              width: 250,
              backgroundColor: "#31568B",
              height: "100vh",
              color: "#ffffff",
            }}
          >
            <ListItem>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                color="inherit"
                aria-label="close"
                onClick={closeDrawer}
                sx={{ marginRight: 0, marginTop: "-5px" }}
              >
                <CloseIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </ListItem>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                button
                component={Link}
                to={item.path}
                onClick={closeDrawer}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
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
