import React from "react";
import "./footer.css";
const Footer = () => {
    const details = [
        {idx:1, name:"About Us"},
        {idx:2, name:"Orthology"},
        {idx:3, name:"About Us"},
        {idx:4, name:"Our Pricing"},
        {idx:5, name:"Neurology"},
        {idx:6, name:"Our Pricing"},
        {idx:7, name:"Our Gallery"},
        {idx:8, name:"Dental Care"},
        {idx:9, name:"Our Gallery"},
        {idx:10, name:"Appointment"},
        {idx:11, name:"Opthalmology"},
        {idx:12, name:"Appointment"},
        {idx:13, name:"Privacy Policy"},
        {idx:14, name:"Cardiology"},
        {idx:15, name:"Privacy Policy"},
    ]
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="footer-content1">
                    <img className="site-logo-img" src="logo_medify.png" alt="logo_medify"></img>
                    <div className="socail-media">
                        <img src="fb.png" alt=""/>
                        <img src="tw.png" alt=""/>
                        <img src="yt.png" alt=""/>
                        <img src="pe.png" alt=""/>
                    </div>
                </div>
                <div  className="footer-content2">
                    {details.map((item) => (
                        <div key={item.idx} className="item-text">&gt; {item.name}</div>
                    ))}
                </div>
            </div>
            <div className="copy-right">Copyright ©2024 Gowtham Nursing Home.com. All Rights Reserved</div>
        </div>
       
    )
}
export default Footer;