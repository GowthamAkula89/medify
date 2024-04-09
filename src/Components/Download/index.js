import React from "react";
import "./download.css";
const Download = () => {
    return(
        <div className="download-section">
            <div className="download-section1">
                <div className="mobile-display">
                    <div className="movile-view1">
                        <img className="mobilecover" src="mobilecover.png" alt=""/>
                        <img className="mobileScreen" src="mobileScreen.png" alt=""/>
                    </div>
                    <div className="movile-view2">
                        <img className="mobilecover" src="mobilecover.png" alt=""/>
                        <img className="mobileScreen" src="mobileScreen.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="download-details">
                <div className="download-title">Download the <span style={{color:"#2AA7FF"}}>Medify</span> App</div>
                <div className="download-text">Get the link to download the app</div>
                <div className="input-details">
                    <div className="enter-number">
                        <div>+91</div>
                        <input className="input-value" placeholder="Enter phone number"/>
                    </div>
                    <button className="btn">Send SMS</button>
                </div>
                <div className="downloading-source">
                    <img src="google_play.png" alt=""/>
                    <img src="apple_store.png" alt=""/>
                </div>
            </div> 
        </div>
        
        
    )
}
export default Download;