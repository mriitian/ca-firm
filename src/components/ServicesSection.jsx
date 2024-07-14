import React from "react";
import firmData from "./data";
import Item from "./whychooseus/item";


function ServicesSection() {
  return (
    <div className="services-bx">
      <div className="title">
        <h2>{firmData.whyChooseUs.title}</h2>
      </div>
      <section className="services">
        {
          firmData.whyChooseUs.points.map((e, index) => {
           return <Item name={e.name} desc={e.description}/>
          })
        }
      </section>
    </div>
  );
}

export default ServicesSection;
