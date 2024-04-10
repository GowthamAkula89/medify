import React from "react";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import "./homepage.css";
import HeroSection from "../../Components/HeroSection";
import FilterSection from "../../Components/FilerSection";
import OffersSection from "../../Components/OffersSection";
import Specialisation from "../../Components/Specialisations";
import Specialists from "../../Components/Specialists";
import GoalsAndService from "../../Components/GoalsAndService";
import BlogsAndNews from "../../Components/BlogsAndNews";
import { About } from "../../Components/About";
import FAQ from "../../Components/FAQ";
import Download from "../../Components/Download";
import Footer from "../../Components/Footer";
const Homepage = () => {
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
            <GoalsAndService/>
            <BlogsAndNews/>
            <div className="medify-content">
                <About/>
            </div>
            <FAQ/>  
            <div className="medify-content" style={{marginBottom:"0"}}>
                <Download/>
            </div>
            <Footer/>
        </div>
    )
}
export default Homepage;