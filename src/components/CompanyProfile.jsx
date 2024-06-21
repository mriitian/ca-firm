import React from 'react';
import companyImg from '../assets/c-profile.png'

function CompanyProfile() {
  return (
    <section className="company-profile">
      <div className="cp-img">
        <img src={companyImg} alt=""/>
      </div>
      <div className='cp-text-container'><div className='cp-text'>
        <h1>Company Profile</h1>
      <p style={{color:"#69539C"}} className='blue-head'>Lorem ipsum dolor sit amet</p>
      <p className='cp-para'>
        Lorem ipsum dolor sit amet consectetur. Diam pretium scelerisque id
        vitae. Nulla neque rutrum ultricies est eros id ultricies. Rhoncus
        auctor nunc nec neque ut congue purus. Iaculis in in commodo et lorem
        sapien mi faucibus.
      </p>
      <ul>
        <li><span> <i class="fa-solid fa-circle-check"></i> </span>Lorem ipsum dolor sit amet</li>
        <li><span> <i class="fa-solid fa-circle-check"></i> </span>Lorem ipsum dolor sit amet consectetur</li>
        <li><span> <i class="fa-solid fa-circle-check"></i> </span>Lorem ipsum dolor sit amet</li>
      </ul>
      </div></div>
      
      
    </section>
  );
}

export default CompanyProfile;
