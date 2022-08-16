import React, { useState } from "react";
import "./viewcardhome.css";
import stairs from "./man-climbing-stairs.png";
import profilelogo from "./User-Profile-PNG-High-Quality-Image.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import { Card } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
   display: "flex",
   flexDirection: "column",
   position: "absolute",
   justifyContent: "center",
   alignItems: "center",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 500,

   bgcolor: "background.paper",

   boxShadow: 24,
   p: 4,
};

const Landingcard = (props) => {
   const [select, setselect] = useState("");

   const handleChange = (event) => {
      setselect(event.target.value);
   };
   const [open, setOpen] = useState(false);
   const handleAgentOpen = () => setOpen(true);
   const handleAgentClose = () => setOpen(false);

   const [decline, setDecline] = useState(false);
   const handleDeclineOpen = () => setDecline(true);
   const handleDeclineClose = () => {
      setDecline(false);
      setselect("");
   };

   return (
      <div className="cardcontainer">
         <div className="circle">
            <img src={profilelogo} alt="" />
         </div>
         <div className="rectangle">
            <div className="cardtextcontainer">
               <span className="propertyname">{props.Name}</span>
               <div className="props">
                  <div className="bedroom">
                     <i class="bx bxs-bed"></i>
                     <span>{props.Bedrooms}</span>
                  </div>
                  <div className="floors bedroom">
                     <img className="stairs" src={stairs} alt="" />
                     <span>{props.Bedrooms}</span>
                  </div>
                  <div className="floors bedroom">
                     <i class="fas fa-female"></i>
                     <span>{props.Maid}</span>
                  </div>
               </div>
            </div>

            <Modal
               className="modal-for-agent"
               open={open}
               onClose={handleAgentClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Agent Info
                  </Typography>
                  <Avatar
                     alt="Remy Sharp"
                     src="/static/images/avatar/1.jpg"
                     sx={{ width: 50, height: 50 }}
                  />
                  Agent Name
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     Contact on whatsapp <WhatsappRoundedIcon />
                  </Typography>
               </Box>
            </Modal>

            <Modal
               className="modal-for-decline"
               open={decline}
               onClose={handleDeclineClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Please select a Reason for decline
                  </Typography>
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                     <InputLabel id="demo-simple-select-autowidth-label" style = {{ "marginTop" : "10px"}}>Choose</InputLabel>
                     <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={select}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                     >
                        <MenuItem value={10}>Suggestions do not match the requirement</MenuItem>
                        <MenuItem value={21}>Already explored, buyer not interested</MenuItem>
                        <MenuItem value={22}>Deal already closed</MenuItem>
                        <MenuItem value={22}>Buyer changed their mind</MenuItem>
                        <MenuItem value={22}>Others</MenuItem>
                     </Select>

                     <Button variant="contained" style={{marginTop:"10px"}}>Done</Button>
                  </FormControl>
               </Box>
            </Modal>

            <Card sx={{bgcolor:"#2196f3"}}  className="grey" onClick={handleAgentOpen}>
               <span>Agent Info</span>
               <span>Mr.Jikku Luke</span>
            </Card>
            <Card  sx={{bgcolor:"#EC5800"}} className="grey" onClick={handleDeclineOpen}>
               <span>Decline</span>
               <span>Suggestion</span>
            </Card>
         </div>
      </div>
   );
};

export default Landingcard;
