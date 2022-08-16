import React, { useState } from 'react'
import "./Sidenav.css"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './Sidenav.css'

export const Sidenav = () => {

    const history = useHistory();

    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);



    const toggle = () => {
        if(active){
            setActive(false);
        }
        else if(!active){
            setActive(true);
        }
    }

    const toggle2 = () => {
        if(active2){
            setActive2(false);
        }
        else if(!active2){
            setActive2(true);
        }
    }

    const toggle3 = () => {
        if(active3){
            setActive3(false);
        }
        else if(!active3){
            setActive3(true);
        }
    }

    return (
        <div className='sidebar'>
            <div className='logodetails'>
              <span className='logo_name'>Connect Menu</span>
            </div>
            <div className="sidenavlinks">
            <div className="Result links">
                     <i class='bx bxs-dashboard'></i>
                     <span onClick={() => { history.push('/dashboard') }}>HomePage</span>
                </div>
                <div className="Request noselect">
                    <div className = "links">
                        <i onClick={() => { toggle(); }} class='bx bx-repost' ></i>
                        <span onClick={() => { toggle(); }}>Request</span>
                        <i class= { active ? 'bx bx-chevron-down downi' : 'bx bx-chevron-down downi rotate'} style={{"fontSize":"22px"}} onClick={() => { toggle(); } }></i>
                    </div>
                    <div className= { active ? "sublinks close noselect" : "sublinks noselect" }>
                        <span className='kka' onClick={() => {history.push('/dashboard/submitreq')}}>Looking for a Property</span>
                        <span onClick={() => {history.push('/dashboard/submitreq')}}>Looking for a Client</span>
                        <span onClick={() => { history.push('/dashboard/viewreq')}}>My Requests</span>
                    </div>
                </div>      
                
                <div className="Request noselect">
                    <div className = "links">
                        <i onClick={() => { toggle2(); }} class='bx bx-repost' ></i>
                        <span onClick={() => { toggle2();  }}>Agent Tools</span>
                        <i class= { active2 ? 'bx bx-chevron-down downi' : 'bx bx-chevron-down downi rotate'} style={{"fontSize":"22px"}} onClick={() => { toggle2(); } }></i>
                    </div>
                    <div className= { active2 ? "sublinks close noselect" : "sublinks noselect" }>
                        <span className='kka' onClick={() => { history.push('/dashboard/commissioncal') } }>Commission Calculator</span>
                    </div>
                </div>            
                <div className="Request noselect">
                    <div className = "links">
                        <i onClick={() => { toggle3(); }} class='bx bx-repost' ></i>
                        <span onClick={() => { toggle3();  }}>FeedBack & FAQ</span>
                        <i class= { active3 ? 'bx bx-chevron-down downi' : 'bx bx-chevron-down downi rotate'} style={{"fontSize":"22px"}} onClick={() => { toggle3(); } }></i>
                    </div>
                    <div className= { active3 ? "sublinks close noselect" : "sublinks noselect" }>
                        <span className='kka' onClick={() => { history.push('/dashboard/feedback') } }>FeedBack</span>
                        <span onClick={() => { history.push('/dashboard/faq')}}>FAQ</span>

                    </div>
                </div>  
            </div>
            <div className="accountdiv">
            <i class='bx bx-user-circle' onClick={() => { history.push('/dashboard/myprofile')}}></i>
            <span>Jeremy Asirwaad</span>
            <i class='bx bx-log-out' onClick={() => { history.push('/') }}></i>
            </div>
        </div>
    )
}
