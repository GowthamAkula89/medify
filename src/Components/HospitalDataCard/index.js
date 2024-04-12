import React, { useContext, useState } from "react";    
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hospitalDataCard.css";
import DataContext from "../DataContext"
const HospitalDataCard = ({ hospital }) => {
const [showModal, setShowModal] = useState(false);
const [selectedDay, setSelectedDay] = useState(null);
const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
const {bookingData,setBookingData} = useContext(DataContext)
const toggleModal = () => {
    setShowModal(!showModal);
};
const handleDayChange = (day) => {
    setSelectedDay(day);
    setSelectedTimeSlot(null);
};
const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
};

const bookVisit = () => {
    if (selectedDay && selectedTimeSlot) {
      const newBooking = {
        hospital: hospital,
        date: selectedDay,
        timeSlot: selectedTimeSlot
      };
      setBookingData(prevData => [...prevData, newBooking]);
      setShowModal(!showModal);
      console.log("Booking visit for", selectedDay.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }), "at", selectedTimeSlot);
    }

  };
console.log(bookingData);
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const dates = [];
dates.push(today, tomorrow);
for (let i = 2; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true
};

return (
<div className="hospital-data-card">
    <div className="hospital-data">
        <img className="hospital-img" src="hospitalImg.png" alt="" />
        <div className="hospital-details">
            <div className="hospitalName">{hospital["Hospital Name"]}</div>
            <div>
                <div className="hospital-city">
                    {hospital.Address}, {hospital["City"]}, {hospital["State"]}
                </div>
                <div className="hospital-text">{hospital["Hospital Type"]}</div>
                <div>more</div>
            </div>
            <div className="consult-text">
                <span className="consult-text1">FREE </span>{" "}
                <span className="consult-text2">₹500</span> Consultation fee at
            clinic
            </div>
            <div className="votes">
                <img src="Frame.png" alt="" />
                <span>{hospital["Hospital overall rating"]} </span>
            </div>
        </div>
        <div className="booking-section">
            <div className="availability">Available Today</div>
            <button className="btn" onClick={toggleModal}>
            Book FREE Center Visit
            </button>
        </div>
    </div>

    {showModal && (
    <div className="modal">
        <div className="modal-content">
        <Slider {...settings}>
            {dates.map((date, index) => (
            <div key={index} className={`date-item ${selectedDay === date ? "selected" : ""}`} onClick={() => handleDayChange(date)}>
                <div className="date">
                    {index === 0 && "Today"}
                    {index === 1 && "Tomorrow"}
                    {index > 1 && date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                </div>
                <div className="available-slots">16 Slots Available</div>
            </div>
            ))}
        </Slider>
        {selectedDay && (
            <div>
                <div className="time-slots">
                    <div className="slots">
                        <div className="slot-value">Morning</div>
                        <div className={`time-slot ${selectedTimeSlot === "10:00 AM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("10:00 AM")}>10:00 AM</div>
                        <div className={`time-slot ${selectedTimeSlot === "10:30 AM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("10:30 AM")}>10:30 AM</div>
                        <div className={`time-slot ${selectedTimeSlot === "11:00 AM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("11:00 AM")}>11:00 AM</div>
                        <div className={`time-slot ${selectedTimeSlot === "11:30 AM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("11:30 AM")}>11:30 AM</div>
                    </div>
                    <div className="slots">
                        <div className="slot-value">Afternoon</div>
                        <div className={`time-slot ${selectedTimeSlot === "12:00 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("12:00 PM")}>12:00 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "12:30 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("12:30 PM")}>12:30 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "1:00 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("1:00 PM")}>1:00 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "1:30 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("1:30 PM")}>1:30 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "2:00 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("2:00 PM")}>2:00 PM</div>
                    </div>
                    <div className="slots">
                    <div className="slot-value">Evening</div>
                        <div className={`time-slot ${selectedTimeSlot === "4:00 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("4:00 PM")}>4:00 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "4:30 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("4:30 PM")}>4:30 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "5:00 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("5:00 PM")}>5:00 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "5:30 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("5:30 PM")}>5:30 PM</div>
                        <div className={`time-slot ${selectedTimeSlot === "6:00 PM" ? "selected" : ""}`} onClick={() => handleTimeSlotChange("6:00 PM")}>6:00 PM</div>
                    </div>
                </div>
                <div className="time-slots-mobile-view">
                    <select
                      className="time-slot"
                      value={selectedTimeSlot}
                      onChange={(e) => handleTimeSlotChange(e.target.value)}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                    </select>
                </div>
            </div>
        )}
        <div style={{display:"flex", gap:"15px"}}>
            <button className="btn" onClick={bookVisit} disabled={!selectedDay || !selectedTimeSlot}>Book Visit</button>
            <button className="btn close" onClick={toggleModal}>Cancel</button>
        </div>
        </div>
    </div>
    )}
</div>
);
};

export default HospitalDataCard;
