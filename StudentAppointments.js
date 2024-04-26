import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentAppointments = () => {
  const [res, setRes] = useState([]);

  const fetchAppointments = () => {
    axios.get('http://localhost:8082/retrivebookings').then(response => {
      setRes(response.data);
      console.log(response.data); // Fixed typo here
    });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div style={{ backgroundColor: 'black' ,}}>
      <center>
        <h1 style={{ color: 'gold' }}>My Appointments</h1>
        <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', alignContent:'center', justifyContent:'center', alignItems:'center' }} border={20}>
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
            <th>Mode</th>
          </tr>
          {res.map((item, index) => (
            <tr key={index}>
              <td>{item.counsellorId}</td>
              <td>{item.counsellorName}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.reason}</td> 
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.mode}</td>
              
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default StudentAppointments;

