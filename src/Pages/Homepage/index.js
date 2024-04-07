import React from "react";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import "./homepage.css";
import HeroSection from "../../Components/HeroSection";
import FilterSection from "../../Components/FilerSection";
import OffersSection from "../../Components/OffersSection";
const Homepage = () => {
    console.log("hi")
    return(
        <div>
            <TitleSection/>
            <div className="medify-content">
                <Navbar/>
                <HeroSection/>
                <FilterSection/>
                <OffersSection/>
            </div>
        </div>
    )
}
export default Homepage;