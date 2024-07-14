import React from "react";
import '../../../public/styles/team.css';
import firmData from "../data";

export default function TeamText() {
  return (
    <div className="team-text">
        <div className="team-text-box">
            <div className="title">{firmData.ourTeam.title}</div>
            <div className="text">
                {firmData.ourTeam.description}
            </div>
        </div>
      
    </div>
  );
}
