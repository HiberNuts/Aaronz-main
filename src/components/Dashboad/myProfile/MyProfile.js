import { Avatar, Card, Typography, IconButton, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";

const MyProfile = () => {
   const [select, setselect] = useState("");
   const [selectInterest, setselectInterest] = useState("");

   const divStyle = {
      display: "flex",
      marginLeft: "450px",
      top: "50%",
      width:"100vh",
      left: "50%",
      marginTop: "80px",
      marginBottom: "30px",
      flexDirection: "column",
      
   };

   const Style = {
      boxShadow: "rgba(100,100,99,0.9) 0px 2px 8px 0px",
      marginTop: "20px",

      display: "flex",
      marginRight: "30px",
      flexDirection: "column",
      justifyContent: "center",
      p: "20px",
      top: "50%",
      left: "50%",
      maxWidth: "900px",
      fontFamily: "Poppins, sans-serif",

      // marginBottom: "40px"
   };
   const textFieldStyle = {
      marginTop: "10px",
      border: "3px solid  #700DFF",
      borderRadius: "7px",
   };

   const theme = createTheme({
      typography: {
         fontFamily: "Poppins, sans-serif",
         display:"flex"
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <div style={divStyle}>
            <Avatar
               rounded
               alt="Remy Sharp"
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
               sx={{
                  width: "300px",
                  height: "300px",
                  border: "2px solid ",
                  alignItems: "center",
                  top: "50%",
                  left: "20%",
               }}
            />
            <Card sx={Style}>
               <div style={{ display: "flex" }}>
                  <Typography variant="h4" color="initial" fontFamily={"Poppins, sans-serif"}>
                     Edit Profile{" "}
                  </Typography>
                  <IconButton>
                     <EditIcon sx={{ color: "#700DFF", fontSize: "25px" }} />
                  </IconButton>
               </div>

               <TextField
                  fontFamily={"Poppins, sans-serif"}
                  sx={textFieldStyle}
                  id="outlined-basic"
                  label="First Name"
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               />
               <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
                  sx={textFieldStyle}
               />

               <TextField
                  id="date"
                  label="Date of birth"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{
                     width: 220,
                     padding: "3px",
                     marginTop: "10px",
                     border: "3px solid #700DFF",
                     borderRadius: "7px",
                  }}
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               />
               <TextField
                  id="date"
                  label="Date of joining"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{
                     width: 220,
                     padding: "3px",
                     marginTop: "20px",
                     border: "3px solid #700DFF",
                     borderRadius: "7px",
                  }}
                  InputLabelProps={{
                     shrink: true,
                  }}
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               />
               <TextField
                  sx={textFieldStyle}
                  id="outlined-basic"
                  label="Phone number"
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               />
               <TextField
                  sx={textFieldStyle}
                  id="outlined-basic"
                  label="Email"
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               />

               <InputLabel sx={{ marginLeft: "10px" }} id="demo-multiple-name-label">
                  Area of expertise
               </InputLabel>
               <Select
                  sx={textFieldStyle}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={select}
                  onChange={(e) => {
                     setselect(e.target.value);
                  }}
                  autoWidth
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               >
                  <MenuItem sx={{ width: "100px" }} value={1}>
                     Rental
                  </MenuItem>
                  <MenuItem sx={{ width: "100px" }} value={2}>
                     Sale
                  </MenuItem>
                  <MenuItem sx={{ width: "100px" }} value={3}>
                     Both
                  </MenuItem>
               </Select>

               <InputLabel
                  sx={{ marginLeft: "10px", marginTop: "10px" }}
                  id="demo-multiple-name-label"
               >
                  Interests
               </InputLabel>
               <Select
                  sx={textFieldStyle}
                  onFocus="none"
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={selectInterest}
                  onChange={(e) => {
                     setselectInterest(e.target.value);
                  }}
                  autoWidth
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               >
                  <MenuItem value={1}>Residential</MenuItem>
                  <MenuItem value={2}>Commercial</MenuItem>
                  <MenuItem value={3}>Both</MenuItem>
               </Select>
               <TextField
                  sx={textFieldStyle}
                  id="outlined-basic"
                  label="Intrested Locations"
                  variant="filled"
                  InputProps={{
                     disableUnderline: true, // <== added this
                  }}
               />
            </Card>
         </div>
      </ThemeProvider>
   );
};

export default MyProfile;

// #700DFF
