import React, { useContext} from "react";
import DataContext from "../DataContext";
import BookingCard from "../BookingCard";
const BookingSection = () => {
    const { bookingData} = useContext(DataContext);
    return(
        <>
        {bookingData.length > 0 ?(
        <div className="hospital-section">
            <div className="hospitals-container">
                <div className="hospitals-details">
                    {bookingData.map((hospital) =>(
                        <div key={hospital["Provider ID"]}>
                            <BookingCard hospital={hospital}/>
                        </div>
                        
                    ))}
                </div>
                <img className="hospital-advatise" src="sensodyne_dweb.png" alt=""/>
            </div>  
        </div>
        ) :<div className="warning-text">No bookings available</div>}
        </>
    )
}
export default BookingSection;