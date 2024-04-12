import React from "react";
import "./bookingCard.css";
const BookingCard = ({ hospital }) => {
    const formatDate = (date) => {
        const options = { day: "2-digit", month: "long", year: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };
    return (
    <div className="hospital-data-card">
        <div className="hospital-data">
            <img className="hospital-img" src="hospitalImg.png" alt="" />
            <div className="hospital-details">
                <div className="hospitalName">{hospital.hospital["Hospital Name"]}</div>
                <div>
                    <div className="hospital-city">
                        {hospital.hospital.Address}, {hospital.hospital["City"]}, {hospital.hospital["State"]}
                    </div>
                    <div className="hospital-text">{hospital.hospital["Hospital Type"]}</div>
                    <div>more</div>
                </div>
                <div className="votes">
                    <img src="Frame.png" alt="" />
                    <span>{hospital.hospital["Hospital overall rating"]} </span>
                </div>
            </div>
            <div className="booked-slot">
                <div className="time-slot">{hospital.timeSlot}</div>
                <div className="date-slot">{formatDate(hospital.date)}</div>
            </div>
        </div>
    </div>
);
};

export default BookingCard;
