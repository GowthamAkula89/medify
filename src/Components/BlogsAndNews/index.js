import React from "react";
import "./blogsAndNews.css"
import BlogsSlider from "../BlogsSlider";
const BlogsAndNews = () => {
    const blogsDetails = [
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"},
        {imgSrc:"blogImg.png", doctorImg:"doctorImg.png", type:"Medical", date: "March 31, 2022",text:"6 Tips To Protect Your Mental Health When You’re Sick", doctorName:"Rebecca Lee"}
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