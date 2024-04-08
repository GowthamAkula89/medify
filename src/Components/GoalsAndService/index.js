import React from "react";
import "./goalsAndService.css"
const GoalsAndService  = () => {
    return(
        <div className="goals-service">
            <div className="goals-service-subsection">
                <div className="servings">
                    <img className="serving-img1" src="serving1.png" alt=""/>
                    <div className="consult-box">
                        <div className="free-consult">
                            <img className="serving-img" src="Frame.png" alt=""/>
                            <div className="consult-title">Free Consultation</div>
                        </div>
                        <div className="consult-text">Consultation with the best</div>
                    </div>
                    <img className="serving-img2" src="serving2.png" alt=""/>
                </div>
            </div>
            <div className="goals-service-content">
                <div className="service-content-text1">HELPING PATIENTS FROM AROUND THE GLOBE!!</div>
                <div className="service-content-text2"><span style={{color:"#1B3C74"}}>Patient</span> Caring</div>
                <div className="service-content-text3">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</div>
                <div className="serving-content">
                    <div className="serving-item">
                        <img src="Clip.png" alt=""/>
                        <div className="serving-text">Stay Updated About Your Health</div>
                    </div>
                    <div className="serving-item">
                        <img src="Clip.png" alt=""/>
                        <div className="serving-text">Check Your Results Online</div>
                    </div>
                    <div className="serving-item">
                        <img src="Clip.png" alt=""/>
                        <div className="serving-text">Manage Your Appointments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GoalsAndService;