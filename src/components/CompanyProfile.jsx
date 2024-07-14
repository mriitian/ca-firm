import React from 'react';
import companyImg from '../assets/c-profile.png'
import firmData from './data';

function CompanyProfile() {
  return (
    <section className="company-profile">
      <div className="cp-img">
        <img src={companyImg} alt=""/>
      </div>
      <div className='cp-text-container'>
          <div className='cp-text'>
          <h3 style={{color:"#69539C"}}>{firmData.welcomeMessage.title}</h3>
          <p className='cp-para'>
            {firmData.welcomeMessage.description}
          </p>
          <ul>
            {firmData.slogans.map((e)=> {
              return <li><span> <i class="fa-solid fa-circle-check"></i> </span>{e}</li>
            })}
          </ul>
          </div>
      </div>
      
      
    </section>
  );
}

export default CompanyProfile;
