import React from 'react';
import { Sidenav } from '../SideNav/Sidenav';
import  ForRent  from "./undraw_buy_house_-560-d.svg";
import  Forsale  from "./undraw_business_shop_qw-5-t.svg";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './submitreq.css'

export const SubmitReq = () => {

    const history = useHistory();

    return (
        <div className='submitreqpage'>  
            <h2 className='title'>Looking for a Property ?</h2>
            <div className="choosecontainer">
                <div className="forsale hover" onClick={ () => { history.push("/dashboard/forsale") } }>
                    <img className='imgs forsaleimg' src={ Forsale } alt="" />
                    <span className='forsaletext'>For Sale</span>
                </div>
                <div className="line">
                </div>
                <div className="forrent hover" onClick={ () => { history.push("/dashboard/forrent") } }> 
                    <img  className = "imgs forrentimg" src= { ForRent } alt="" />
                    <span className='forrenttext'>For Rent</span>
                </div>
            </div>
        </div>
    )
}
