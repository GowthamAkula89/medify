import React from "react";
import "./bookings.css";
import TitleSection from "../../Components/TitleSection";
import Navbar from "../../Components/Navbar";
import Search from "../../Components/Search";
import FAQ from "../../Components/FAQ";
import Download from "../../Components/Download";
import Footer from "../../Components/Footer";
import BookingSection from "../../Components/BookingsSection";
const BookingsPage = () => {
    return(
        <div>
            <TitleSection/>
            <div className="medify-content">
                <Navbar/>
                <div className="hospital-search">
                    <Search/>
                </div>
                <BookingSection/>
            </div>
            <FAQ/>  
            <div className="medify-content" style={{marginBottom:"0"}}>
                <Download/>
            </div>
            <Footer/>
        </div>
    )
}
export default BookingsPage;