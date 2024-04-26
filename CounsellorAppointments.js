import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CounsellorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [showRemarksForm, setShowRemarksForm] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const fetchAppointments = () => {
    axios.get('http://localhost:8082/retrivebookings').then(response => {
      setAppointments(response.data);
    });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8082/deletebooking/${id}`)
      .then(() => {
        fetchAppointments();
      })
      .catch(error => {
        console.error('Error deleting appointment:', error);
      });
  };

  const handlePostRemarks = (id) => {
    setSelectedAppointmentId(id);
    setShowRemarksForm(true);
  };

  const handleSubmitRemarks = (event) => {
    event.preventDefault();
    // Implement logic to submit remarks for the selected appointment
    console.log('Submitting remarks for appointment with id:', selectedAppointmentId);
    // Reset form state after submitting remarks
    setShowRemarksForm(false);
    setSelectedAppointmentId(null);
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '20px' }}>
      <center>
        <h1 style={{ color: '#333', marginBottom: '30px' }}>My Appointments</h1>
        <table style={{ width: '100%', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <thead style={{ backgroundColor: '#f0f0f0' }}>
            <tr>
              <th>CId</th>
              <th>CName</th>
              <th>Name</th>
              <th>Id</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Concern</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th> {/* New column for status */}
              <th>Delete</th>
              <th>Post Remarks</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.counsellorId}</td>
                <td>{appointment.counsellorName}</td>
                <td>{appointment.name}</td>
                <td>{appointment.id}</td>
                <td>{appointment.email}</td>
                <td>{appointment.mobile}</td>
                <td>{appointment.reason}</td> 
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <select defaultValue="Pending" onChange={(e) => console.log(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <button style={{ backgroundColor: '#ff5252', color: '#fff', padding: '8px 12px', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => handleDelete(appointment.id)}>Delete</button>
                </td>
                <td>
                  <button style={{ backgroundColor: '#4caf50', color: '#fff', padding: '8px 12px', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => handlePostRemarks(appointment.id)}>Post Remarks</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showRemarksForm && (
          <form style={{ marginTop: '20px', textAlign: 'left' }} onSubmit={handleSubmitRemarks}>
            <label htmlFor="remarks" style={{ color: '#333', marginRight: '10px', display: 'block' }}>Remarks:</label>
            <textarea id="remarks" name="remarks" rows="4" cols="50" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '100%' }}></textarea>
            <br />
            <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '3px', cursor: 'pointer', marginTop: '10px' }}>Submit Remarks</button>
          </form>
        )}
      </center>
    </div>
  );
};

export default CounsellorAppointments;
