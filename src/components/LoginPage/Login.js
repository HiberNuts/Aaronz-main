import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import "./login.css";
import loginImg from "./LoginImg.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://aaronz.co/" style={{ "&:hover": { color: "white" } }}>
        Aaronz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: ["Circular Std", "sans-serif"].join(","),
  },
});

export default function SignInSide() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className=".loginpage">
      <ThemeProvider theme={theme}>
        <Grid container component="main" className="signupsize">
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={6}
            md={6}
            sx={{
              backgroundImage: `url(${loginImg})`,
              backgroundRepeat: "no-repeat",
              //   backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),

              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={6} md={6} component={Paper} elevation={12} square sx={{ backgroundColor: "#700dff" }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#f80066" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography sx={{ color: "white" }} component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  sx={{ bgcolor: "white", borderRadius: "10px" }}
                  margin="normal"
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  sx={{ bgcolor: "white", borderRadius: "10px" }}
                  margin="normal"
                  variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox value="remember" style={{ color: "white" }} />}
                  label="Remember me"
                />
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
                  onClick={() => {
                    history.push("/dashboard");
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        color: "white",
                        fontWeight: "200px",
                        "&:hover": { color: "white" },
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href=""
                      onClick={() => {
                        history.push("/signup");
                      }}
                      variant="body2"
                      sx={{ color: "white", fontWeight: "200px", "&:hover": { color: "white" } }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5, color: "white", fontWeight: "200px", "&:hover": { color: "white" } }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
