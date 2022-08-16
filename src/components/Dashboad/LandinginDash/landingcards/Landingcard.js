import React from 'react'
import './viewcardhome.css'
import stairs from './man-climbing-stairs.png'
import profilelogo from './User-Profile-PNG-High-Quality-Image.png'
const Landingcard = (props) => {

    const onrectclick = () => {
        props.getBack(true,props);
    }

    return (
       <div className='cardcontainer'>
       <div className="circle">
             <img src={profilelogo} alt="" />
       </div>
       <div className="rectangle">
           <div className="cardtextcontainer" onClick={() => { onrectclick(); }}>
               <span className='propertyname'>{ props.Name }</span>
               <div className="props">
                   <div className="bedroom">
                   <i class='bx bxs-bed' ></i>
                   <span>{ props.Bedrooms }</span>
                   </div>
                   <div className="floors bedroom">
                       <img className = "stairs"src={stairs} alt="" />
                   <span>{ props.Bedrooms }</span>
                   </div>
                   <div className="floors bedroom">
                   <i class="fas fa-female"></i>
                   <span>{ props.Maid }</span>
                   </div>
               </div>
           </div>
           <div className="grey1">
               <span>Express</span>
               <span>Interest</span>
           </div>
           <div className="grey2">
               <span>Decline</span>
               <span>Suggestion</span>
           </div>

       </div>
   </div>
    )
}

export default Landingcard
