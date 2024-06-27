import React,{useState, useEffect} from 'react'
import axios from 'axios';


export default function AppointmentForm() {
    const [availableSlots, setAvailableSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    contact_number: '',
    email: '',
    service_required: '',
  });

  useEffect(() => {

    fetchAvailableSlots();
  }, []);

  const fetchAvailableSlots = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get_available_slots', {
        params: {
          date: selectedDate || undefined,
        },
      });
      console.log(response.data.available_slots);
      setAvailableSlots(response.data.available_slots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log({formData}, selectedDate, selectedSlot);
      const response = await axios.post('http://127.0.0.1:8000/book_appointment', {
        ...formData,
        appointment_date: selectedDate,
        appointment_time: selectedSlot,
      });
      console.log('Appointment booked successfully:', response.data);
      // Optionally, you can reset form fields or show a success message
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data.error);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error during request setup:', error.message);
          }
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };
  
  useEffect(() => {
    console.log(selectedDate);
    fetchAvailableSlots();
  }, [selectedDate]);
  
  const handleChangeSlot = (e) => {
    setSelectedSlot(e.target.value);
    console.log(selectedSlot);
  }

  return (
    <div className="form-box">
        <div className='form-container'>
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input type="text" name="username" onChange={handleInputChange} required />
            </label>
            <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} required />
            </label>
            <label>
            Contact Number:
            <input type="text" name="contact_number" onChange={handleInputChange} required />
            </label>
            <label>
            Email:
            <input type="email" name="email" onChange={handleInputChange} required />
            </label>
            <label>
            Service Required:
            <input type="text" name="service_required" onChange={handleInputChange} required />
            </label>
            <label>
            Select Date:
            <input type="date" onChange={handleChangeDate} required />
            </label>
            {selectedDate && (
            <div className="date-slot-container">
                <label>Select Time Slot:</label>
                <select onChange={handleChangeSlot} required>
                <option value="">Select a slot</option>
                {availableSlots[selectedDate] &&
                    availableSlots[selectedDate].map((slot, index) => (
                    <option key={index} value={slot}>
                        {slot}
                    </option>
                    ))}
                </select>
            </div>
            )}
            <button type="submit">Book Appointment</button>
        </form>
        </div>
    </div>
  );
}
