import React from 'react'
import img from './img.png'
import './navbar.css'

function Navbar2() {
    return (
        <div className='navbarpage'>
            <div className="navbarcontainer">
                <img src={img} alt="logo" className='aazronzlogo'/>
                <div className="navlinks">
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar2
