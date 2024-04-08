import React from "react";
import "./specialists.css";
import SpecialistsSlider from "../SpecialistsSlider";
const Specialists = () => {
    const specialists = [
        { imgSrc: "specialist3.png", alt: "Dr. Ahmad Khan", name: "Dr. Ahmad Khan", specialisation:"Neurologist" },
        { imgSrc: "specialist2.png", alt: "Dr. Heena Sachdeva", name: "Dr. Heena Sachdeva", specialisation:"Orthopadics"},
        { imgSrc: "specialist1.png", alt: "Dr. Ankur Sharma", name: "Dr. Ankur Sharma", specialisation:"Medicine" },
        { imgSrc: "specialist3.png", alt: "Dr. Ahmad Khan", name: "Dr. Ahmad Khan", specialisation:"Neurologist" },
        { imgSrc: "specialist1.png", alt: "Dr. Ankur Sharma", name: "Dr. Ankur Sharma", specialisation:"Medicine" },
        { imgSrc: "specialist5.png", alt: "Dr. Heena Sachdeva", name: "Dr. Heena Sachdeva", specialisation:"Orthopadics" },
        { imgSrc: "specialist1.png", alt: "Dr. Ankur Sharma", name: "Dr. Ankur Sharma", specialisation:"Medicine" },
        { imgSrc: "specialist3.png", alt: "Dr. Ahmad Khan", name: "Dr. Ahmad Khan", specialisation:"Neurologist" },
        { imgSrc: "specialist2.png", alt: "Dr. Heena Sachdeva", name: "Dr. Heena Sachdeva", specialisation:"Orthopadics"},
        { imgSrc: "specialist1.png", alt: "Dr. Ankur Sharma", name: "Dr. Ankur Sharma", specialisation:"Medicine" },
        { imgSrc: "specialist4.png", alt: "Dr. Ankur Sharma", name: "Dr. Ankur Sharma", specialisation:"Medicine" },
        { imgSrc: "specialist3.png", alt: "Dr. Ahmad Khan", name: "Dr. Ahmad Khan", specialisation:"Neurologist" },
        { imgSrc: "specialist5.png", alt: "Dr. Heena Sachdeva", name: "Dr. Heena Sachdeva", specialisation:"Orthopadics" },
        { imgSrc: "specialist1.png", alt: "Dr. Ankur Sharma", name: "Dr. Ankur Sharma", specialisation:"Medicine" },
        
      ];
    return(
        <div className="specialists-section">
            <div className="subsection-title">Our Medical Specialist</div>
            <SpecialistsSlider specialists={specialists}/>
        </div>
    )
}
export default Specialists;