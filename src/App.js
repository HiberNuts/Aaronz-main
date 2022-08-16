import { Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";

import Landing from "./components/Landing/Landing";

import { LandingDash } from "./components/Dashboad/LandinginDash/LandingDash";
import { SubmitReq } from "./components/Dashboad/submitreq/SubmitReq";
import Forrent from "./components/Dashboad/forrent/Forrent";
import Viewrequest from "./components/Dashboad/Viewrequest/Viewrequest";
import { Sidenav } from "./components/Dashboad/SideNav/Sidenav";
import MyProfile from "./components/Dashboad/myProfile/MyProfile";
import AgentTools from "./components/Dashboad/AgentTools/AgentTools";
import PropReqScreen from "./components/Dashboad/propReqScreen/PropReqScreen";
import SignInSide from "./components/LoginPage/Login";
import ButtonAppBar from "./components/Navbar/Navbar";
import SignUp from "./components/Register/Register";
import { Feedback } from "./components/Dashboad/Feedback/Feedback";
import HomeScreen from "./components/Dashboad/homeScreen/HomeScreen";
import { FaqPage } from "./components/Dashboad/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <Route path="/dashboard" component={ButtonAppBar}></Route>
      <Route path="/dashboard" component={Sidenav}></Route>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/login" component={SignInSide}></Route>
      <Route exact path="/dashboard" component={HomeScreen}></Route>
      <Route exact path="/dashboard/Submitreq" component={SubmitReq}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route exact path="/dashboard/forsale" component={PropReqScreen}></Route>
      <Route exact path="/dashboard/forrent" component={Forrent}></Route>
      <Route exact path="/dashboard/viewreq" component={Viewrequest}></Route>
      <Route exact path="/dashboard/myprofile" component={MyProfile}></Route>
      <Route exact path="/dashboard/commissioncal" component={AgentTools}></Route>
      <Route exact path="/dashboard/feedback" component={Feedback}></Route>
      <Route exact path="/dashboard/faq" component={FaqPage}></Route>
    </div>
  );
}

export default App;
