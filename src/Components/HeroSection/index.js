import React from "react";
import "./heroSection.css";
import {Link} from "react-router-dom";
const HeroSection = () => {
    return(
        <div className="hero-section">
            <div className="hero-subsection">
                <div className="herosection-text1">Skip the travel! Find Online <span className="herosection-text2">Medical Centers</span></div>
                <div className="herosection-text3">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</div>
                <Link to="/hospitals" style={{textDecoration:"none"}}><button className="btn">Find Centers</button></Link>
            </div>
            <img src="hero_img.png" alt="hero_img"/>
        </div>
    )
}
export default HeroSection;