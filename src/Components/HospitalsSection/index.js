import React, { useContext, useEffect, useState} from "react";
import "./hospitalsSection.css";
import DataContext from "../DataContext";
import axios from "axios";
import { config } from "../../App";
import HospitalDataCard from "../HospitalDataCard";
const HospitalsSection = () => {
    const {state, city} = useContext(DataContext);
    const [hospitalsData, setHospitalsData] = useState([]);
    useEffect(()=>{
        if(state !== "" && city !== ""){
            const fetchData = async() => {
                const hopitalsResponse = await axios.get(`${config.endpoint}/data?state=${state}&city=${city}`);
                setHospitalsData(hopitalsResponse.data);
            }
            fetchData();
        }
        
    },[state,city])
    console.log(hospitalsData)
    const hospitalsCount = hospitalsData.length;
    return(
        <>
        {state !== "" && city !== "" ?(
        <div className="hospital-section">
            <div className="hospitals-count">{`${hospitalsCount} medical centers available in ${state}`}</div>
            <div className="hopitals-verifed">
                <img src="verified.png" alt="" style={{width:"18px",height:"18px"}}/>
                <div className="verifed-text">Book appointments with minimum wait-time & verified doctor details</div>
            </div>
            <div className="hospitals-container">
                <div className="hospitals-details">
                    {hospitalsData.map((hospital) =>(
                        <div key={hospital["Provider ID"]}>
                            <HospitalDataCard hospital ={hospital}/>
                        </div>
                        
                    ))}
                </div>
                <img className="hospital-advatise" src="sensodyne_dweb.png" alt=""/>
            </div>
            
            
        </div>
        ) :<div className="warning-text">Please select both State and City to find the details</div>}
        </>
    )
}
export default HospitalsSection;