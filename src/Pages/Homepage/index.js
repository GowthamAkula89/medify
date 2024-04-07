import React from "react";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import "./homepage.css";
import HeroSection from "../../Components/HeroSection";
import FilterSection from "../../Components/FilerSection";
const Homepage = () => {
    console.log("hi")
    return(
        <div>
            <TitleSection/>
            <div className="medify-content">
                <Navbar/>
                <HeroSection/>
                <FilterSection/>
            </div>
        </div>
    )
}
export default Homepage;