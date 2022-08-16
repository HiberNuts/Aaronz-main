import Landingcard from './landingcards/Landingcard'
import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import './landingdash.css'
import convert from 'xml-js';
import parseString from 'xml2js'
import XMLParser from 'react-xml-parser';
export const LandingDash = () => {

    const [listing, setListing] = useState([]);
    const [data, setData] = useState("");
    const parser = new DOMParser();
    useEffect(()=>{
        const getXMLResponse = async () => {
            await axios
            .get("http://localhost:8010/proxy/feed/xml.php?cl=3410&pid=9922&acc=1154", {
                "Content-Type": "application/xml; charset=utf-8"
             })
             .then(function(response) {
                // setData( response.data );
                // console.log(response.data);
                // parseString(response.data, function (err, result) {
                setData(convert.xml2js(response.data, {compact: true, spaces: 4}))
                // console.log(convert.xml2js(parser.parseFromString(response.data, "application/xml")))

                // console.log(parser.parseFromString(response.data, "application/xml"))   
                // setData(parser.parseFromString(response.data, "application/xml"))
                // });
            })
            .catch(function(error) {
                console.log(error);
                
            });
        }
        // console.log(data.elements[0].elements[352])
        // setData(data.Listings.Listing);
        getXMLResponse();
        // setListing(data.Listings.Listing)
        // console.log(data.length())
    },[])
    const [today, setToday] = useState(true);
    const [yesterday, setYesterday] = useState(true);
    const [last3days, setLast3days] = useState(true);

    const [infostate, setInfostate] = useState(false);
    const [moreinfo, setMoreinfo] = useState({});

    const managemoreinfo = (infostate,moreinfo) =>{
        setInfostate(infostate);
        setMoreinfo(moreinfo);
    }

    const moreinfoclose = () => {
        setInfostate(false);
    }

    console.log(data)
    
    
    // const list = data.getElementsByTagName('Listing')
    // console.log(list);
    // console.log(listing)

    return (
        <div className='landingdash'>
            <span className='hometitle'>HomePage</span>
            <div className="landingdashcontainer">
                <div className="sortdiv">
                  <i class='bx bx-sort'></i>
                  <span>Sort</span>
                </div>
                <div className="today">
                    <div className="homesubtitle">
                        <span>Today</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                </div>
                <div className="Yesterday">
                <div className="homesubtitle">
                        <span>Yesterday</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes" />
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes" />

                </div>
                <div className="Lastthreedays">
                    <div className="homesubtitle">
                        <span>Last Three Days</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                </div>
            </div>
            <div className={ infostate ? "declinemodelinfo" : "declinemodelinfo declinemodelcloseinfo"}>
                <div className="dmodelinfo">
                    <div className="colorline"></div>
                    <i class="fas fa-times closebtninfo" onClick={() => { moreinfoclose(); } }></i>
                        <div className='asdf'><span className='moreinfotitle'>Property Details:</span></div>
                        <div className='moreinfocontainer'>
                        <div className='moreinfo1'>
                            <span className='subinfos'>Name:   <span className='subinfos1'>{moreinfo.Name}</span></span>
                            <span className='subinfos'>Budget:  <span className='subinfos1'>{moreinfo.budget}</span></span>
                            <span className='subinfos'>Bedrooms:   <span className='subinfos1'>{moreinfo.Bedrooms}</span></span>
                            <span className='subinfos'>Maid:  <span className='subinfos1'>{moreinfo.Maid}</span></span> 
                        </div>
                        <div className='moreinfo2'>
                            <span className='subinfos'>Name:   <span className='subinfos1'>{moreinfo.Name}</span></span>
                            <span className='subinfos'>Budget:  <span className='subinfos1'>{moreinfo.budget}</span></span>
                            <span className='subinfos'>Bedrooms:   <span className='subinfos1'>{moreinfo.Bedrooms}</span></span>
                            <span className='subinfos'>Maid:  <span className='subinfos1'>{moreinfo.Maid}</span></span> 
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
