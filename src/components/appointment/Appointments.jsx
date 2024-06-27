import React, { useState } from 'react'
import axios from 'axios';

export default function Appointments({user, IsLoggedIn}) {


    const [userAppointments, SetUserAppointments] = useState([]);

    const fetchAvailableAppointments = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/get_user_appointments/${user.username}`, {
          });
          console.log(response.data.appointments);
          SetUserAppointments(response.data.appointments);
        } catch (error) {
          console.error('Error fetching available slots:', error);
        }
      };

  return (
    <div>
        {IsLoggedIn && 
        <div className="appointments-box">
            <button onClick={fetchAvailableAppointments}>Fetch Appointments</button>
            <div className="appointment-container">
                {userAppointments.map((c, index) => (
                    <div className="appointment" key={index} >
                        <div className="name"> Name : {c.name}</div>
                        <div className="item"> Contact Number : {c.contact_number}</div>
                        <div className="item"> Email : {c.email}</div>
                        <div className="item"> Service : {c.service_required}</div>
                        <div className="item"> Date : {c.appointment_date}</div>
                        <div className="item"> Time : {c.appointment_time}</div>
                    </div>
                )) }
            </div>
        </div>
        }
    </div>
  )
}
