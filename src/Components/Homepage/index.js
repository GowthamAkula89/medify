import React from "react";
import TitleSection from "../TitleSection";
import Navbar from "../Navbar";
import "./homepage.css";
const Homepage = () => {
    console.log("hi")
    return(
        <div>
            <TitleSection/>
            <div className="medify-content">
                <Navbar/>
            </div>
        </div>
    )
}
export default Homepage;