import React from "react";
import "./serviceSection.css";
import ServicesSwiper from "../ServicesSwiper"
const ServicesSection = () => {
    const services = [
        { imgSrc: "Doctor.png", alt: "Doctor", type: "Doctors" },
        { imgSrc: "Drugstore.png", alt: "Drugstore", type: "Labs" },
        { imgSrc: "Hospital.png", alt: "Hospital", type: "Hospitals" },
        { imgSrc: "Capsule.png", alt: "Capsule", type: "Medical Store" },
        { imgSrc: "Ambulance.png", alt: "Ambulance", type: "Ambulance" },
      ];
    return(
        <div>
            <div className="services-section-desktop">
                <div className="services-section">
                    <div className="services-text">You may be looking for</div>
                    <div className="services-types">
                    {services.map((service, index) => (
                        <div key={index+"aa"}>
                        <div className="service">
                            <img className="service-img" src={service.imgSrc} alt={service.alt} />
                            <div className="service-type">{service.type}</div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="services-section-mobile">
                    <div className="services-text">You may be looking for</div>
                    <div className="services-types">
                        <ServicesSwiper services={services}/>
                    </div>
            </div>
        </div>
    )
}
export default ServicesSection;