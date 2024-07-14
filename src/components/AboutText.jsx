import React from "react";
import firmData from "./data";

export default function AboutText() {
  return (
    <div>
        <div className="about-text-container">
            <h4>{firmData.aboutUs.experience}</h4>
           <p>
            {firmData.aboutUs.description}
          </p> 
        </div>
      
    </div>
  );
}
