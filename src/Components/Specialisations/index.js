import React from "react";
import "./specialisation.css";
const Specialisation = () => {
    const services = [
        { imgSrc: "Drugstore.png", alt: "Drugstore", text: "Dentistry" },
        { imgSrc: "Stethoscope.png", alt: "Stethoscope", text: "Primary Care" },
        { imgSrc: "Heart Rate.png", alt: "Heart Rate", text: "Cardiology" },
        { imgSrc: "Heart Rate Monitor.png", alt: "Heart Rate Monitor", text: "MRI Resonance" },
        { imgSrc: "Blood Sample.png", alt: "Blood Sample", text: "Blood Test" },
        { imgSrc: "Immune.png", alt: "Immune", text: "Piscologist" },
        { imgSrc: "Drugstore.png", alt: "Drugstore", text: "Laboratory" },
        { imgSrc: "X-Ray.png", alt: "X-Ray", text: "X-Ray" }
      ];
    return(
        <div className="specialisations">
            <div className="subsection-title">Find by specialisation</div>
            <div className="specialisation-list">
                {services.map((specialisation,index) => {
                    return(
                        <div key={index} className="specialisation-item">
                            <img className="specialisation-img" src={specialisation.imgSrc} alt={specialisation.alt}/>
                            <div className="specialisation-type">{specialisation.text}</div>
                        </div>
                    )
                })}
            </div>
            <button className="btn">View All</button>
        </div>
    )
}
export default Specialisation;