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
import BlogsSlider from "../../Components/BlogsSlider";
import { About } from "../../Components/About";
const Homepage = () => {
    const blogsDetails = [
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"}
    ]
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
        </div>
    )
}
export default Homepage;