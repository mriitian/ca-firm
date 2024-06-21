import React, { useState } from 'react';

export default function ServiceComponent() {


  return (
      <div className="card">
        <div className="content">
          <div className="icon">💼</div>
          <div className="title">Service Title</div>
          <div className="description">
            Service description goes here. Explain what the service offers.
          </div>
        </div>
        <div className="overlay">
          <button className="learn-more">Learn More</button>
        </div>
      </div>
  )
}
