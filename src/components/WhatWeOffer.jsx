import React from 'react'
import ServiceComponent from './ServiceComponent';

export default function WhatWeOffer() {
    const services = Array.from({ length: 12 }, (_, index) => index);
    return (
        <>
            <div className="we-offer">
                <div className="title">
                    <h2>What we offer!</h2>
                </div>
                <div className="services-grid">
                    {services.map((_, index) => (
                        <ServiceComponent key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
