import React from "react";
import "./about.css";
export const About = () => {
    return(
        <div className="about-section">
            <div className="about-details1">
                <div className="about-text">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
                <div className="about-text1">Our Families</div>
                <div className="about-text2">We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</div>
            </div>
            <div className="about-details2">
                <div className="facilites-data1">
                    <img src="facilities5.png" alt="Happy families"/>
                    <img src="facilities2.png" alt="Laboratories"/>
                </div>
                <div  className="facilites-data2">
                    <img src="facilities34.png" alt="Hospitals"/>
                    <img src="facilities1.png" alt="Docters"/>
                </div>
            </div>
        </div>
    )
}