import React from "react";
import Search from "../Search";
import "./filterSection.css";
import ServicesSection from "../ServicesSection";

const FilterSection = () => {

    return(
        <div className="filter-section">
            <Search/>
            <ServicesSection/>
        </div>
    )
}
export default FilterSection;