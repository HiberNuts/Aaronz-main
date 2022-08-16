import React from "react";
import HomeScreen from "../homeScreen/HomeScreen";
import "./propReqscreen.css";

const PropReqScreen = () => {
   return (
      <div>
         <div className="Postrequestsell">
            <div className="containerforsell">
               <div className="mypostbgcontainer" style={{ marginTop: "120px" }}>
                  <div className="mypostcontainer">
                     <h1>Property Request</h1>
                     <div className="jobrequirements">
                        <div className="wrapper">
                           <div className="div1">
                              <h3>Budget(AED)</h3>
                              <input type="text" required placeholder="Budget" name="budget" />
                           </div>
                           <div className="div2">
                              <h3>Negotiable</h3>
                              <select required placeholder="negotiable" name="negotiable">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">Yes</option>
                                 <option value="Internship">No</option>
                              </select>
                           </div>
                        </div>
                        <div className="wrapper">
                           <div className="div3">
                              <h3>Specific Property Name</h3>
                              <input
                                 type="text"
                                 required
                                 placeholder="Specific Property Name"
                                 name="specificname"
                              />
                           </div>
                           <div className="div3">
                              <h3>Floor</h3>
                              <select required placeholder="Floor" name="Floor">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">High</option>
                                 <option value="Full-Time">Low</option>
                                 <option value="Part-Time">Any</option>
                              </select>
                           </div>
                        </div>
                        <div className="wrapper no2">
                           <div className="div4">
                              <h3>Bedroom</h3>
                              <select required placeholder="Bedroom" name="Bedroom">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">1</option>
                                 <option value="Full-Time">2</option>
                                 <option value="Part-Time">3</option>
                                 <option value="Part-Time">4</option>
                                 <option value="Part-Time">5</option>
                                 <option value="Part-Time">more</option>
                              </select>
                           </div>
                           <div className="div5">
                              <h3>Maid</h3>
                              <select required placeholder="maid" name="maid">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">Yes</option>
                                 <option value="Full-Time">No</option>
                              </select>
                           </div>
                        </div>
                        <div className="wrapper">
                           <div className="div6">
                              <h3>Move In</h3>
                              <select required placeholder="Move In" name="Movein">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Full-Time">Immediate</option>
                                 <option value="Part-Time">Within 1 month</option>
                                 <option value="Part-Time">Within 2 months</option>
                              </select>
                           </div>
                           <div className="div7">
                              <h3>Type of Payment</h3>
                              <select required placeholder="Type of Payment" name="TypeofPayment">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">Cash</option>
                                 <option value="Full-Time">Mortgage with Approval</option>
                                 <option value="Part-Time">Mortgage without Approval</option>
                              </select>
                           </div>
                        </div>
                        <div className="wrapper">
                           <div className="div8">
                              <h3>Type of Buyer</h3>
                              <select required placeholder="Type of Buyer" name="TypeofBuyer">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">View</option>
                                 <option value="Full-Time">End user</option>
                                 <option value="Part-Time">Investor</option>
                                 <option value="Part-Time">Others</option>
                              </select>
                           </div>
                           <div className="div9">
                              <h3>View</h3>
                              <select required placeholder="View" name="View">
                                 <option value="" disabled selected hidden>
                                    Please Choose...
                                 </option>
                                 <option value="Internship">View</option>
                                 <option value="Full-Time">Burj Khalifa</option>
                                 <option value="Part-Time">Dubai Marina</option>
                                 <option value="Part-Time">Golf Course</option>
                                 <option value="Part-Time">Canal View</option>
                                 <option value="Part-Time">Does not matter</option>
                              </select>
                           </div>
                        </div>
                        <div className="wrapper">
                           <div className="div9">
                              <h3>Other Areas Interested</h3>
                              <input
                                 type="text"
                                 required
                                 placeholder="Other Areas Interested"
                                 name="others"
                              />
                           </div>
                        </div>
                     </div>
                     <button className="postbtnforsale">Submit</button>
                  </div>
               </div>
            </div>
         </div>
         <HomeScreen value = "true" />
      </div>
   );
};

export default PropReqScreen;