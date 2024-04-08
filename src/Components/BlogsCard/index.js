import React from "react";
import "./blogsCard.css";
const BlogsCard = ({data}) => {
    return(
        <div className="blogsCard">
            <img src={data.imgSrc} alt="img"/>
            <div className="card-data">
                <div className="card-title">{data.type} | {data.date}</div>
                <div className="card-text">{data.text}</div>
                <div className="doctor-details">
                        <img src={data.doctorImg} alt=""/>
                        <div>{data.doctorName}</div>
                </div>
            </div>
            
        </div>
    )
}
export default BlogsCard;