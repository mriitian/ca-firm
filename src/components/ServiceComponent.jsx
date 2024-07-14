import React, { useState } from 'react';

export default function ServiceComponent({title, desc}) {


  return (
      <div className="card">
        <div className="content">
          <div className="icon">💼</div>
          <div className="title">{title}</div>
          <div className="description">
            {desc}
          </div>
        </div>
        <div className="overlay">
          <button className="learn-more">Learn More</button>
        </div>
      </div>
  )
}
