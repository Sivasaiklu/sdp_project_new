import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
    const [res, setRes] = useState([]);

    const signUpInfo = async () => {
        try {
            const response = await axios.get('http://localhost:8082/retrivebookinginfo');
            setRes(response.data);
        } catch (error) {
            console.error('Error fetching counsellors:', error);
        }
    };

    useEffect(() => {
        signUpInfo();
    }, []);
  return (
    <div style={{ backgroundColor: 'black' }}>
            <center>
                <h1 style={{ color: 'gold' }}>All Appointments History</h1>
                <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', textAlign: 'center', alignItems: 'center' }} border={20}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Reason</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Mode</th>
                            <th>CId</th>
                            <th>CName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.reason}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.mode}</td>
                                <td>{item.counsellorId}</td>
                                <td>{item.counsellorName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
  )
}

export default BookingDetails;