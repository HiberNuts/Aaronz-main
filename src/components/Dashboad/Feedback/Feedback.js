import { display, width } from '@mui/system'
import React from 'react'
import './feedback.css'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
export const Feedback = () => {

    return (
        <div className='feedback'>
            <h1>Feedback Form</h1>
            <div className="feedbackcontainer">
                <label>FeedBack :</label>
                <textarea style={{ "fontSize": "16px" }} name="" id="" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}
