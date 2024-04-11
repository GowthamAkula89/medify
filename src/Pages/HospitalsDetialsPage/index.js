import React from "react";
import "./hospitalsDetailsPage.css";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import Search from "../../Components/Search";
import FAQ from "../../Components/FAQ";
import Download from "../../Components/Download";
import Footer from "../../Components/Footer";
import HospitalsSection from "../../Components/HospitalsSection";
const HospitalsDetailsPage = () => {
    return(
        <div>
            <TitleSection/>
            <div className="medify-content">
                <Navbar/>
                <div className="hospital-search">
                    <Search/>
                </div>
                <HospitalsSection/>
            </div>
            <FAQ/>  
            <div className="medify-content" style={{marginBottom:"0"}}>
                <Download/>
            </div>
            <Footer/>
        </div>
    )
}
export default HospitalsDetailsPage;