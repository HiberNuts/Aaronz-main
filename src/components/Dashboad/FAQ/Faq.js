import React from 'react';
import Faq from "react-faq-component";
import './Faq.css'

export const FaqPage = () => {

    const data = {
        rows: [
            {
                title: "Question 1",
                content: `Login to Aaronz connect using your aaronz email ID and submit your request whether you are looking for a buyer or a property..`,
            },
            {
                title: "Question 2",
                content:
                    "Private conversations remain private",
            },
            {
                title: "Question 3",
                content: `Schedule viewings and track the deal progress `,
            },
            {
                title: "Question 4",
                content: "Close deals and calculate commission share for easy tracking for future",
            },
            {
                title: "Question 5",
                content: "Simply put in the request and this is shared with Aaronz network of agents and expect a response within minutes.",
            },
            {
                title: "Question 6",
                content: "The system is designed to scan through the inventory and provide you with an exact match or matches that are similar to your request",
            },
            {
                title: "Question 7",
                content: "Click on the property you want to show your buyer. Connect with the agent who has the property on the go and track the conversation",
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "#6600FF",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };



  return <div className='faqpage'> 
    <div className="faqcontainer">
    <span className = "faqtitle">Frequently Asked Questions</span>
    <div className='faq2cont'>
    <Faq
                data={data}
                styles={styles}
                config={config}
            />
    </div>
    </div>
  </div>;
};
