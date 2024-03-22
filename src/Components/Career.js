import React, { useEffect, useState } from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { TextField, Button, Snackbar, SnackbarContent } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import Header from "./Header";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    success: {
      main: "#4caf50",
    },
    // Add other palette colors as needed
  },
  // Add other theme configurations as needed
});

const ContactFormContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: "center",
}));

const FormContainer = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const InputField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  "& .MuiInputBase-root": {
    width: "100%",
  },
  "& .MuiFormLabel-root": {
    marginBottom: theme.spacing(1),
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ErrorDiv = styled("div")(({ theme }) => ({
  color: "#ff0000",
  fontSize: "14px",
  marginTop: theme.spacing(2),
}));

const SuccessSnackbar = styled(SnackbarContent)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: "#fff",
  alignItems: "center",
  "& .MuiSnackbarContent-message": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
  },
}));

const Career = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    Position: "",
    Qualification: "",
    Reference: "",
  });

  const [errors, setErrors] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);

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

  const handleCloseSuccessAlert = () => {
    setSuccessAlert(false);
  };

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!userData.Name.trim()) {
      newErrors["Name"] = "Please enter your name";
    }

    if (!userData.Email.trim()) {
      newErrors["Email"] = "Please enter your email";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.Email)) {
        newErrors["Email"] = "Invalid email address";
      }
    }

    if (!userData.Phone.trim()) {
      newErrors["Phone"] = "Please enter your phone number";
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(userData.Phone)) {
        newErrors["Phone"] = "Invalid phone number (10 digits)";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessAlert(true);
      submitData();
      setUserData({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
        Position: "",
        Qualification: "",
        Reference: "",
      });
    }
  };

  //connect with firebase
  const submitData = async () => {
    const { Name, Email, Phone, Message, Position, Qualification, Reference } =
      userData;
    try {
      const res = await fetch(
        "https://ca-career-details-default-rtdb.firebaseio.com/careerDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Phone,
            Message,
            Position,
            Qualification,
            Reference,
          }),
        }
      );

      if (res.ok) {
        console.log("Data stored");
      } else {
        console.log("Failed to store data");
      }
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          width: isDesktop ? "50%" : "100%",
          height: "100%",
          margin: isDesktop ? "20px 25%" : "20px 0%",
        }}
      >
        <ThemeProvider theme={theme}>
          <div style={{ marginLeft: "5%" }}>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: "#0C73C9",
              }}
            >
              Apply Here
            </span>
            <div
              style={{
                width: isDesktop ? "20%" : "30%",
                height: "6px",
                backgroundColor: "#2EA3F2",
                marginTop: "8px",
              }}
            />
          </div>
          <ContactFormContainer>
            <FormContainer>
              <InputField
                name="Name"
                label="Name"
                variant="outlined"
                fullWidth
                error={!!errors["Name"]}
                helperText={errors["Name"]}
                value={userData.Name}
                onChange={postUserData}
              />
              <InputField
                name="Email"
                label="Email"
                variant="outlined"
                fullWidth
                error={!!errors["Email"]}
                helperText={errors["Email"]}
                value={userData.Email}
                onChange={postUserData}
              />
              <InputField
                name="Phone"
                label="Phone"
                variant="outlined"
                fullWidth
                error={!!errors["Phone"]}
                helperText={errors["Phone"]}
                value={userData.Phone}
                onChange={postUserData}
              />

              <InputField
                name="Position"
                label="Position Applying For"
                variant="outlined"
                fullWidth
                multiline
                value={userData.Position}
                onChange={postUserData}
              />
              <InputField
                name="Qualification"
                label="Highest Qualification"
                variant="outlined"
                fullWidth
                multiline
                value={userData.Qualification}
                onChange={postUserData}
              />
              <InputField
                name="Reference"
                label="Reference/ Comments/ Questions"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={userData.Reference}
                onChange={postUserData}
              />
              <SubmitButton
                variant="contained"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </SubmitButton>
            </FormContainer>
            {errors["Form"] && <ErrorDiv>{errors["Form"]}</ErrorDiv>}
          </ContactFormContainer>
          <Snackbar
            open={successAlert}
            autoHideDuration={2000}
            onClose={handleCloseSuccessAlert}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <SuccessSnackbar
              message={
                <>
                  <CheckCircleOutline fontSize="small" />
                  Form submitted successfully
                </>
              }
            />
          </Snackbar>
        </ThemeProvider>
      </div>

      <Footer />
    </>
  );
};

export default Career;
