import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
    const [res, setRes] = useState([]);

    const signUpInfo = async () => {
        try {
            const response = await axios.get('http://localhost:8082/retrivecontactusinfo');
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
                <h1 style={{ color: 'gold' }}>Contact Us Details</h1>
                <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', textAlign: 'center', alignItems: 'center' }} border={20}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
  )
}

export default BookingDetails;