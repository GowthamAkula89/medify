import React from "react";
import "./faq.css";
import AccordianComponent from "../AccordianComponent";
const FAQ = () => {
    return(
        <div className="faq">
            <div className="faq-title">Get Your Answer</div>
            <div  className="subsection-title">Frequently Asked Questions</div>
            <div className="faq-section">
                <div className="faq-pic-section">
                    <img className="faq-pic1" src="faq-pic.png" alt=""/>
                    <div className="happy-patients">
                        <img src="emoji.png" alt=""/>
                        <div>
                            <div>84k+</div>
                            <div>Happy Patients</div>
                        </div>
                    </div>
                    <img className="faq-pic2" src="shape-icon.png" alt=""/>  
                </div>
                <div className="accordians-data" style={{width:"454px"}}>
                    <AccordianComponent question={"Why choose our medical for your family?"} answer={"Quality treament and quality doctors"}/>
                    <AccordianComponent question={"Why we are different from others?"} answer={"Quality treament and quality doctors"}/>
                    <AccordianComponent question={"Trusted & experience senior care & love"} answer={"Quality treament and quality doctors"}/>
                    <AccordianComponent question={"How to get appointment for emergency cases?"} answer={"Quality treament and quality doctors"}/>
                    <AccordianComponent question={"Why choose our medical for your family?"} answer={"Quality treament and quality doctors"}/>
                </div>
                
            </div>
        </div>
        
    )
}
export default FAQ;