import React from "react";
import "./blogsAndNews.css"
import BlogsSlider from "../BlogsSlider";
const BlogsAndNews = () => {
    const blogsDetails = [
        {idx: 1, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 2, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 3, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 5, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 6, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 7, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 8, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 9, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 10, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 11, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {idx: 12, imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"}
    ]
    return(
        <div className="blogsAndNews">
            <div className="blogsAndNews-title">Blog & News</div>
            
            <div className="subsection-title">Read Our Latest News</div>
            <div>
                <BlogsSlider blogsDetails={blogsDetails}/>
            </div>
        </div>
    )
}
export default BlogsAndNews;