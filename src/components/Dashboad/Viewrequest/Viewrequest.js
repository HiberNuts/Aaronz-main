import React from "react";
import "./Viewrequest.css";

// import stairs from "./man-climbing-stairs.png";
// import profilelogo from "./User-Profile-PNG-High-Quality-Image.png";

import { useState } from "react";
import HomeScreen from "../homeScreen/HomeScreen";

const Viewrequest = () => {
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

   const [sentorrecieve, setSentorrecieve] = useState(true);

   const managesentor = () => {
      if (sentorrecieve === true) {
         setSentorrecieve(false);
      }
      if (sentorrecieve === false) {
         setSentorrecieve(true);
      }
      console.log(sentorrecieve);
   };

   return (
      <div>
         <div className="viewreqcard">
            {/* <h4 className='viewreqtitle'>View Requests</h4> */}
         </div>
         <HomeScreen />
      </div>
   );
};

export default Viewrequest;