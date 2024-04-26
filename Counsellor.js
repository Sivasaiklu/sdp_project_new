import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Counsellor = () => {
    const [res, setRes] = useState([]);
    const navigate = useNavigate();

    const fetchCounsellors = async () => {
        try {
            const response = await axios.get('http://localhost:8082/retrivecounsellors');
            setRes(response.data);
        } catch (error) {
            console.error('Error fetching counsellors:', error);
        }
    };

    useEffect(() => {
        fetchCounsellors();
    }, []);

    const handleBookAppointment = (counsellorId, name) => {
        navigate('/booking-form', {
            state: {
                counsellorId: counsellorId,
                name: name
            }
        });
    };

    return (
        <div style={{ backgroundColor: 'black' }}>
            <center>
                <h1 style={{ color: 'gold' }}>Counsellors</h1>
                <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', textAlign: 'center', alignItems: 'center' }} border={20}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th> {/* New column for action */}
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item.counsellorId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>
                                    <button
                                        onClick={() => handleBookAppointment(item.counsellorId, item.name)}
                                        style={{ background: 'black', color: 'white', borderRadius: '10px', cursor: 'pointer', marginLeft: '10px' }}
                                    >
                                        Book Appointment
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default Counsellor;
