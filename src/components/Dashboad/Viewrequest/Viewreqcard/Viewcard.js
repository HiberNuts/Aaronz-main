import React, { useState } from 'react'
import  stairs  from './man-climbing-stairs.png'
import './viewcard.css'
const Viewcard = (props) => {

    const [declinestate, setDeclinestate] = useState(true);

    const managedstate = () => {
        props.getBack(declinestate,props);
    }


    return (
        <div className='cardcontainer'>
            <div className="circle">
                <span>{props.Date}</span>
            </div>
            <div className="rectangle">
                <div className="cardtextcontainer">
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
                <div className="grey4">
                    <span>Push</span>
                    <span>Again</span>
                </div>
                <div className="grey3" onClick={() => { managedstate(); }}>
                    <span>Request</span>
                    <span>Closed</span>
                </div>
            </div>
        </div>
    )
}

export default Viewcard
