import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#0C151D",
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          style={{
            marginTop: "50px",
            paddingBottom: "40px",
            paddingTop: "6px",
          }}
        >
          {/* Column 1 */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "#ffffff", fontWeight: 700, fontSize: "20px" }}
            >
              IMPORTANT LINKS
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <a
                href="https://www.incometax.gov.in/iec/foportal/"
                color="inherit"
                underline="none"
                target="blank"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Income Tax
              </a>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link href="/" color="inherit" underline="none">
                E-Tax Information Network
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <a
                href="https://www.gst.gov.in/"
                color="inherit"
                underline="none"
                target="blank"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                GST Network
              </a>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <a
                href="https://www.mca.gov.in/content/mca/global/en/home.html"
                color="inherit"
                underline="none"
                target="blank"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Ministry of Corporate Affairs
              </a>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <a
                href="https://www.epfindia.gov.in/site_en/index.php"
                color="inherit"
                underline="none"
                target="blank"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Employees Provident Fund
              </a>
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              USEFUL LINKS
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link to="/contactus" color="inherit" underline="none">
                Startup Services
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link to="/contactus" color="inherit" underline="none">
                Accounting & Payroll
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link to="/contactus" color="inherit" underline="none">
                Income Tax Services
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link to="/contactus" color="inherit" underline="none">
                GST Services
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link to="/contactus" color="inherit" underline="none">
                Audit & Secretarial
              </Link>
            </Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              USAGE
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link href="/" color="inherit" underline="none">
                Terms & Conditions
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link href="/" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link href="/" color="inherit" underline="none">
                Disclaimer Policy
              </Link>
            </Typography>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link
                // href="mailto:experttaxsolutions9@gmail.com"
                color="inherit"
                underline="none"
              >
                5-2-56/1, Bhagmeer Colony, Shanthi Nagar, Near BJP Office,
                Kukatpally, Hyderabad, Telanagna - 500072
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link
                href="mailto:experttaxsolutions9@gmail.com"
                color="inherit"
                underline="none"
              >
                experttaxsolutions9@gmail.com
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#ffffff",
                marginBottom: "8px",
                display: "block",
              }}
            >
              <Link href="tel:+919014694297" color="inherit" underline="none">
                +91 9014694297
              </Link>
              <br />
              <Link href="tel:+919652462200" color="inherit" underline="none">
                +91 9652462200
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
