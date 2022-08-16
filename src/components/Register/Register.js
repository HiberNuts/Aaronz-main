import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import registerImg from "./registerImg.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://aaronz.co/" sx={{ textDecoration: "none", hover: { color: "white" } }}>
        Aaronz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} sm={7} md={6} elevation={6} square sx={{ backgroundColor: "#700dff", height: "100%" }}>
          <Container component="main" maxWidth="xs" sx={{ height: "90vh" }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#f80066" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{ bgcolor: "white", borderRadius: "10px" }}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{ bgcolor: "white", borderRadius: "10px" }}
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ bgcolor: "white", borderRadius: "10px" }}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ bgcolor: "white", borderRadius: "10px" }}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      sx={{ color: "white" }}
                      control={<Checkbox value="allowExtraEmails" color="primary" style={{ color: "white" }} />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#f80066",
                    p: 1.5,
                    borderRadius: 2,
                    fontSize: "20px",
                    "&:hover": {
                      backgroundColor: "#f80066",
                    },
                  }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href=""
                      onClick={() => {
                        history.push("/login");
                      }}
                      variant="body2"
                      sx={{ color: "white", "&:hover": { color: "white" } }}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5, color: "white" }} />
          </Container>
        </Grid>
        <Grid
          item
          xs={false}
          sm={5}
          md={6}
          sx={{
            backgroundImage: `url(${registerImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),

            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
