import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { Button } from "@mui/material";
import CurrencyFormat from "react-currency-format";

const AgentTools = () => {
  const [dealValue, setdealValue] = useState("");
  const [ComBuyer, setComBuyer] = useState("");
  const [ComLand, setComLand] = useState("");

  const [agentPer, setagentPer] = useState("");
  const [agentAmount, setagentAmount] = useState("");
  const [CurrencyType, setCurrencyType] = useState("AED");

  const handleCurrencyChange = (event) => {
    setCurrencyType(event.target.value);
  };

  // const handlechange = (e) => {
  //    const { value } = e.target;
  //    if (value) {
  //       const formattedValue = (Number(value.replace(/\B(?=(\d{3})+(?!\d))/g, ',').toLocaleString();
  //       setdealValue(formattedValue);
  //    }
  //    return null;
  // };

  const handleSubmit = () => {
    const x = Number(ComLand);
    const y = Number(ComBuyer);
    const sum = x + y;
    const dealVal = Number(
      dealValue
        .replace(/,/g, "")
        .replace(/^(AED )/, "")
        .replace(/^(\$ )/, "")
    );
    
    const per = sum / 100;
    const totalCommission = Number(dealVal * per);
    const agentsCommission = totalCommission / 2;
    const agentComPer = Number(agentPer);
    const percentage = agentComPer / 100;
    setagentAmount(Number(agentsCommission * percentage));
  };

  //   const textFieldStyle = {
  //     border: "2.5px solid #700DFF",
  //     borderRadius: "7px",
  //     marginTop: "8px",
  //     width: "80%",
  //   };

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    textFieldStyle: {
      fontFamily: "Poppins, sans-serif",
    },
  });

  const textFieldStyle = {
    width: "100%",
    height: "60px",
    marginTop: "2px",
    borderRadius: "5px",
    border: "2.5px solid #700DFF",
    fontSize: "20px",
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          marginTop: "130px",
          marginLeft: "400px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins ",
            fontWeight: "200px",
            fontSize: "40px",
            color: "#700DFF",
          }}
        >
          Calculate how much you earn from a deal!
        </h2>
        <Grid container component="main">
          <Grid item md={5} lg={5} sm={12}>
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "end",
                width: "180px",
                marginBottom: "10px",
              }}
            >
              <InputLabel id="demo-simple-select-label">Currency type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={CurrencyType}
                label="Select currency type"
                onChange={handleCurrencyChange}
              >
                <MenuItem value={"AED"}>AED</MenuItem>
                <MenuItem value={"$"}>USD</MenuItem>
              </Select>
            </FormControl>
            <div style={{ boxShadow: "rgba(100,100,99,0.8) 0px 2px 8px 0px" }}>
              <Card>
                <TableContainer component={Paper}>
                  <Table sx={{}} aria-label="simple table">
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          borderRadius: "100",
                        }}
                      >
                        <TableCell fullWidth sx={{ width: "50%" }} component="th" scope="row">
                          <Typography> Enter in the Deal value:</Typography>{" "}
                          {/* <TextField
                            id="standard-basic"
                            type="amount"
                            label="Value"
                            value={dealValue}
                            onChange={(e) => setdealValue(e.target.value)}
                            variant="filled"
                            InputProps={{
                              disableUnderline: true, // <== added this
                            }}
                            sx={textFieldStyle}
                            fullWidth
                          /> */}
                          <CurrencyFormat
                            style={textFieldStyle}
                            value={dealValue}
                            onChange={(e) => setdealValue(e.target.value)}
                            thousandSeparator={true}
                            prefix={`${CurrencyType} `}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" sx={{ width: "50%" }} scope="row">
                          <Typography> Enter the Buyer/Tenant commission percentage %</Typography>{" "}
                          <TextField
                            id="standard-basic"
                            value={ComBuyer}
                            onChange={(e) => {
                              setComBuyer(e.target.value);
                            }}
                            label="Value"
                            variant="filled"
                            InputProps={{
                              disableUnderline: true, // <== added this
                            }}
                            sx={textFieldStyle}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell sx={{ width: "100%" }} component="th" scope="row">
                          <Typography>Enter the Commission from landlord %</Typography>{" "}
                          <TextField
                            id="standard-basic"
                            value={ComLand}
                            onChange={(e) => {
                              setComLand(e.target.value);
                            }}
                            label="Value"
                            variant="filled"
                            InputProps={{
                              disableUnderline: true, // <== added this
                            }}
                            sx={textFieldStyle}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          <Typography>Enter in your commission percentage %</Typography>{" "}
                          <TextField
                            id="standard-basic"
                            value={agentPer}
                            label="Value"
                            onChange={(e) => setagentPer(e.target.value)}
                            variant="filled"
                            InputProps={{
                              disableUnderline: true, // <== added this
                            }}
                            sx={textFieldStyle}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </div>
            <div
              style={{
                padding: "10px",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                variant="contained"
                color="info"
                onClick={handleSubmit}
                sx={{
                  padding: "5",
                  backgroundColor: "#700DFF",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                Show results
              </Button>
            </div>
          </Grid>
          <Grid
            md={6}
            item
            lg={6}
            bgColor="red"
            sm={12}
            p={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "-70px",
            }}
          >
            <Card
              sx={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#700DFF",
                borderRadius: "5px",

                height: "200px",
              }}
              elevation={8}
            >
              <Typography variant="h4" sx={{ fontFamily: "Poppins ", fontWeight: "600px", color: "white" }}>
                Your earning on this deal!
              </Typography>{" "}
              {/* <TextField
                id="standard-basic"
                value={`${agentAmount}  ${CurrencyType}`}
                variant="filled"
                InputProps={{
                  disableUnderline: true, // <== added this
                }}
                sx={{ backgroundColor: "white", borderRadius: "5px", marginTop: "20px" }}
              /> */}
              <CurrencyFormat
                style={textFieldStyle}
                value={agentAmount}
                thousandSeparator={true}
                prefix={`${CurrencyType} `}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default AgentTools;

// <TableRow>
//    <TableCell sx={{ width: "50%" }} component="th" scope="row">
//       <Typography> Total commission %</Typography>{" "}
//       <TextField
//          sx={{ marginTop: "20px", width: "80%" }}
//          id="standard-basic"
//          value={totalCom}
//          variant="outlined"
//       />
//    </TableCell>
// </TableRow>;

// <TableRow>
//    <TableCell sx={{ width: "50%" }} component="th" scope="row">
//       <Typography> Total commission Amount</Typography>{" "}
//       <TextField
//          sx={{ marginTop: "20px", width: "80%" }}
//          id="standard-basic"
//          value={totalComAm}
//          variant="outlined"
//       />
//    </TableCell>
// </TableRow>;

// <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
//                            <TableCell component="th" scope="row">
//                               <Typography>Commission to aaronz </Typography>

//                               <TextField
//                                  sx={{ marginTop: "20px", width: "80%" }}
//                                  id="standard-basic"
//                                  value={ComToAaronz}
//                                  variant="outlined"
//                               />
//                            </TableCell>
//                         </TableRow>
//                         <TableRow>
//                            <TableCell component="th" scope="row">
//                               <Typography>Remaning commission </Typography>

//                               <TextField
//                                  sx={{ marginTop: "20px", width: "80%" }}
//                                  id="standard-basic"
//                                  value={RemCom}
//                                  variant="outlined"
//                               />
//                            </TableCell>
//                         </TableRow>

// <div
//    style={{
//       marginTop: "80px",
//       marginLeft: "400px",
//       marginBottom: "40px",
//    }}
// >
//    <h2
//       style={{
//          fontFamily: "Poppins ",
//          fontWeight: "200px",
//          fontSize: "40px",
//          color: "#f80066",
//       }}
//    >
//       Calculate how much you earn from a deal!
//    </h2>
//    <Grid container component="main">
//       <Grid item md={5} lg={5} sm={12}>
//          <FormControl
//             sx={{
//                display: "flex",
//                justifyContent: "end",
//                width: "150px",
//                marginBottom: "10px",
//             }}
//          >
//             <InputLabel id="demo-simple-select-label">Currency type</InputLabel>
//             <Select
//                labelId="demo-simple-select-label"
//                id="demo-simple-select"
//                value={CurrencyType}

//                label="Select currency type"
//                onChange={handleCurrencyChange}
//             >
//                <MenuItem value={"AED"}>AED</MenuItem>
//                <MenuItem value={"$"}>USD</MenuItem>
//             </Select>
//          </FormControl>
//          <TableContainer component={Paper}>
//             <Table
//                sx={{
//                   border: 2.5,
//                   borderRadius: "10px",
//                   borderColor: "#f80066",
//                }}
//                aria-label="simple table"
//             >
//                <TableBody>
//                   <TableRow
//                      sx={{
//                         "&:last-child td, &:last-child th": { border: 0 },
//                         borderRadius: "100",
//                      }}
//                   >
//                      <TableCell fullWidth sx={{ width: "50%" }} component="th" scope="row">
//                         <Typography> Enter in the Deal value:</Typography>{" "}
//                         <TextField
//                            sx={{ marginTop: "20px", width: "80%" }}
//                            id="standard-basic"
//                            type="amount"
//                            label="Value"
//                            value={dealValue}
//                            onChange={(e) => setdealValue(e.target.value)}
//                            variant="outlined"
//                            fullWidth
//                         />
//                      </TableCell>
//                   </TableRow>
//                   <TableRow>
//                      <TableCell component="th" sx={{ width: "50%" }} scope="row">
//                         <Typography>
//                            {" "}
//                            Enter the Buyer/Tenant commission percentage %
//                         </Typography>{" "}
//                         <TextField
//                            sx={{ marginTop: "20px", width: "80%" }}
//                            id="standard-basic"
//                            value={ComBuyer}
//                            onChange={(e) => {
//                               setComBuyer(e.target.value);
//                            }}
//                            label="Value"
//                            variant="outlined"
//                         />
//                      </TableCell>
//                   </TableRow>

//                   <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
//                      <TableCell sx={{ width: "100%" }} component="th" scope="row">
//                         <Typography>Enter the Commission from landlord %</Typography>{" "}
//                         <TextField
//                            sx={{ marginTop: "20px", width: "80%" }}
//                            id="standard-basic"
//                            value={ComLand}
//                            onChange={(e) => {
//                               setComLand(e.target.value);
//                            }}
//                            label="Value"
//                            variant="outlined"
//                         />
//                      </TableCell>
//                   </TableRow>

//                   <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
//                      <TableCell component="th" scope="row">
//                         <Typography>Enter in your commission percentage %</Typography>{" "}
//                         <TextField
//                            sx={{ marginTop: "20px", width: "80%" }}
//                            id="standard-basic"
//                            value={agentPer}
//                            label="Value"
//                            onChange={(e) => setagentPer(e.target.value)}
//                            variant="outlined"
//                         />
//                      </TableCell>
//                   </TableRow>
//                </TableBody>
//             </Table>
//          </TableContainer>
//          <div
//             style={{
//                padding: "10px",
//                alignItems: "center",
//                display: "flex",
//                justifyContent: "space-evenly",
//             }}
//          >
//             <Button
//                variant="contained"
//                color="info"
//                onClick={handleSubmit}
//                sx={{
//                   padding: "5",
//                   backgroundColor: "#f80066",
//                   fontSize: "18px",
//                }}
//             >
//                Show results
//             </Button>
//          </div>
//       </Grid>
//       <Grid
//          md={6}
//          item
//          lg={6}
//          bgColor="red"
//          sm={12}
//          p={4}
//          sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             marginTop: "-70px",
//          }}
//       >
//          <Card
//             sx={{
//                padding: "10px",
//                display: "flex",
//                flexDirection: "column",
//                justifyContent: "center",
//                border: 2,
//                borderRadius: "5px",
//                borderColor: "#f80066",
//                height: "200px",
//                backgroundColor: "#f80066",
//             }}
//          >
//             <Typography
//                variant="h4"
//                sx={{ color: "#fff", fontFamily: "Poppins ", fontWeight: "600px" }}
//             >
//                Your earning on this deal!
//             </Typography>{" "}
//             <TextField
//                sx={{
//                   marginTop: "20px",

//                   backgroundColor: "white",
//                   borderRadius: "4px",
//                }}
//                id="standard-basic"
//                value={`${agentAmount}  ${CurrencyType}`}
//                variant="outlined"
//             />
//          </Card>
//       </Grid>
//    </Grid>
// </div>
