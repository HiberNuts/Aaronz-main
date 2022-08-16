import React, { useState } from 'react'
import '../Viewreqcard/viewcard.css'
import stairs from './man-climbing-stairs.png' 
export const Viewcard2 = (props) => {

    const [like, setLike] = useState(parseInt(props.Likes));
    const [liketrue, setLiketrue] = useState(true);

    const likeonclick = () => {
        if(liketrue === true)
        {
        setLike(like+1);
        }
        if(liketrue === false)
        setLike(like-1);
    }   


    return (
<div className='cardcontainer1'>
        <div className='infocontainer'> 
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
                <div className="grey">
                    <span>ADE</span>
                    <span>{ props.budget }</span>
                </div>
            </div>
        </div>
        <div className="likecomment">
            <div className="likebtn" onClick={() => { likeonclick();  setLiketrue(!liketrue)}}>
                <i class='bx bxs-like'></i>
                <span>{like}</span>

            </div>
            <div className="commentbtn">
                <i class='bx bxs-chat' ></i>
                <span>Comment</span>
            </div>
        </div>
    </div>
    )
}
