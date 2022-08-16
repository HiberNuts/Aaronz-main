import React, { useEffect } from 'react'
import './landing.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import svg1 from './undraw_my_personal_files_re_3q0p.svg'
import svg2 from './undraw_in_thought_re_qyxl.svg'
import login from './undraw_mobile_login_re_9ntv.svg'
import lock from './undraw_secure_login_pdn4.svg'
import progress from './undraw_progress_indicator_re_4o4n.svg'
import hand from './undraw_agreement_re_d4dv.svg'
import house from './undraw_buy_house_-560-d.svg'
import match from './undraw_pie_graph_re_fvol.svg'
import connect from './undraw_connection_re_lcud.svg'
import buyer from './undraw_business_deal_re_up4u.svg'
import connection from './undraw_online_connection_6778.svg'
import { useHistory } from 'react-router-dom'
const Landing = () => {

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true
      });
   })

   const history = useHistory();


   return (
      <div className='landingpage' >
         <div className='spacer1 layer1'>
            <div className="navdiv">
               <div className="logodiv">
                   <img src="https://aaronz.co/static/media/logoWhite.3e2b20a0acc86074901868a49b85ca61.svg" alt="" />
               </div>
               <div className="joinlinks">
                     <button className='but1' onClick={() => {history.push('/signup')}}>SignUp</button>
                     <button className = 'but2' onClick={() => {history.push('/login')}}>Login</button>
               </div>
            </div>
            <div className='contentdiv'>
               <span data-aos="fade-up" className='landtit tit1'>Welcome To <span className = 'landcol'>Aaronz Connect</span></span>
               <span data-aos="fade-up" className='landtit'>The ultimate solution to </span>
               <span data-aos="fade-up" className='landtit'>finding a property for your client </span>
               <span data-aos="fade-up" className='slogan'>(Aaronz & Co Real Estate's Product)</span>
               <i data-aos="fade-right" class="fas fa-angle-double-down vert-move"></i>
            </div>
            <div className="contentdiv2">
              <span className='sec2tit' data-aos="zoom-in">HOW DOES THIS WORK?</span>
              <div className="sec2conwrap">
                     <div className="how1">
                        <span  data-aos="fade-right" className='summa'>Login to Aaronz connect using your aaronz email ID and submit your request whether you are looking for a buyer or a property.</span>
                        <div></div>
                        <img data-aos="fade-left" className='howimg' src={login} alt="" />
                     </div>
                     <div className="how2">
                     <img  data-aos="fade-right"  className='howimg' src={lock} alt="" />
                        <span data-aos="fade-left">Private conversations remain private  </span>
                     </div>
                     <div className="how3">
                        <span data-aos="fade-right" >Schedule viewings and track the deal progress </span>
                        <img data-aos="fade-left" className='howimg' src={progress} alt="" />
                     </div>
                     <div className="how4">
                     <img  data-aos="fade-right"  className='howimg' src={hand} alt="" />
                        <span data-aos="fade-left">Close deals and calculate commission share for easy tracking for future</span>
                     </div>
              </div>
            </div>
            <img data-aos="fade-up-right" className='svg1' src={svg1} alt="" />
            <img data-aos="fade-up-left" className='svg2' src={svg2} alt="" />
         </div>
         <div className="spacer layer2">
         <span className='sec2tit titsec3' data-aos="zoom-in">Have a <span className='sec3col'>Buyer</span> but no <span className='sec3col'>Property?</span></span>
              <div className="sec2conwrap">
                     <div className="how1 ">
                        <span data-aos="fade-right" className='summa' style={{"color":"white"}}>Simply put in the request and this is shared with Aaronz network of agents and expect a response within minutes. </span>
                        <div></div>
                        <img data-aos="fade-left" className='howimg' src={house} alt="" />
                     </div>
                     <div className="how2">
                     <img data-aos="fade-right" className='howimg' src={match} alt="" />
                        <span  data-aos="fade-left" className='summa'style={{"color":"white"}}>The system is designed to scan through the inventory and provide you with an exact match or matches that are similar to your request </span>
                     </div>
              </div>
         </div>
         <div className="spacer layer3">
         <div className="sec4conwrap">
                     <div className="how5 ">
                     <img data-aos="fade-up" className='howimg' src={connection} alt="" />
                        <span data-aos="fade-up" style={{"marginTop": "40px", "textAlign":"center"}}>Click on the property you want to show your buyer. Connect with the agent who has the property on the go and track the conversation </span>
                        <div></div>
                     </div>
              </div>
         </div>
         <div className="spacer layer4">
         <span data-aos="fade-up" style={{"color":"black", "marginBottom":"50px"}} className='sec2tit '>Have a Hot <span className='sec5col'>Property</span> but no <span className='sec5col'>Buyer?</span></span>
         <div className="sec4conwrap">
                     <div className="how5 ">
                     <img data-aos="fade-up" style={{"marginBottom":"50px"}} className='howimg' src={buyer} alt="" />
                        <span data-aos="fade-up"  style={{"marginTop": "40px", "textAlign":"center"}}>We have a solution for you as well. Put in details of your property and one of our agents with get back to you with a buyer. </span>
                        <div></div>
                     </div>
              </div>
         </div>
         <div className="navland">
            <span>CopyRight Aaronz 2022</span>
         </div>
      </div>
      
   )
}

export default Landing
