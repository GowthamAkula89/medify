import React from "react";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import "./homepage.css";
import HeroSection from "../../Components/HeroSection";
const Homepage = () => {
    console.log("hi")
    return(
        <div>
            <TitleSection/>
            <div className="medify-content">
                <Navbar/>
                <HeroSection/>
            </div>
        </div>
    )
}
export default Homepage;