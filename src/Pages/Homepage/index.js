import React from "react";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import "./homepage.css";
import HeroSection from "../../Components/HeroSection";
import FilterSection from "../../Components/FilerSection";
import OffersSection from "../../Components/OffersSection";
import Specialisation from "../../Components/Specialisations";
import Specialists from "../../Components/Specialists";
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
            <OffersSection/>
            <div className="medify-content">
                <Specialisation/>
            </div>
            <Specialists/>
        </div>
    )
}
export default Homepage;