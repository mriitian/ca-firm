import React from 'react'
import ServiceComponent from './ServiceComponent';
import firmData from './data';

export default function WhatWeOffer() {
    const services = Array.from({ length: 6 }, (_, index) => index);
    return (
        <>
            <div className="we-offer">
                <div className="title">
                    <h2>What we offer!</h2>
                </div>
                <div className="services-grid">
                    {firmData.services.list.map((e, index) => (
                        <ServiceComponent key={index} title={e.name} desc={e.description} />
                    ))}
                </div>
            </div>
        </>
    )
}
