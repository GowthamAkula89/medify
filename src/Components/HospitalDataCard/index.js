import React from "react";
import "./hospitalDataCard.css";
const HospitalDataCard = ({hospital}) => {
    return(
        <div className="hospital-data-card">
            <div className="hospital-data">
                <img className="hospital-img" src="hospitalImg.png" alt=""/>
                <div className="hospital-details">
                    <div className="hospitalName">{hospital["Hospital Name"]}</div>
                    <div>
                        <div className="hospital-city">{hospital.Address}, {hospital["City"]}, {hospital["State"]}</div>
                        <div className="hospital-text">{hospital["Hospital Type"]}</div>
                        <div>more</div>
                    </div>
                    <div className="consult-text"><span className="consult-text1">FREE </span> <span className="consult-text2">₹500</span>  Consultation fee at clinic</div>
                    <div className="votes">
                        <img src="Frame.png" alt=""/>
                        <span>5 </span>
                    </div>
                </div>
                <div className="booking-section">
                    <div className="availability">Available Today</div>
                    <button className="btn">Book FREE Center Visit</button>
                </div>
            </div>
        </div>
    )
}
export default HospitalDataCard;