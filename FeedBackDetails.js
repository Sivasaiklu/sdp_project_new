import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
    const [res, setRes] = useState([]);

    const retrieveFeedbackDetails = async () => {
        try {
            const response = await axios.get('http://localhost:8082/retrivefeedbackdetails');
            setRes(response.data);
        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    useEffect(() => {
        retrieveFeedbackDetails();
    }, []);

    const handleChangeStatus = async (id, status) => {
        try {
            const updatedRes = res.map(item => {
                if (item.id === id) {
                    return { ...item, status };
                }
                return item;
            });
            setRes(updatedRes);
            // Update status in the backend (assuming you have an API endpoint for this)
            await axios.put(`http://localhost:8082/updatestatus/${id}`, { status });
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            // Delete the feedback from the backend
            await axios.delete(`http://localhost:8082/deletefeedback/${id}`);
            // Update the state to remove the deleted feedback
            setRes(prevState => prevState.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting feedback:', error);
        }
    };

    return (
        <div style={{ backgroundColor: 'black' }}>
            <center>
                <h1 style={{ color: 'gold' }}>Feedback Details</h1>
                <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', textAlign: 'center', alignItems: 'center' }} border={20}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Feedback Type</th>
                            {/* <th>Status</th>
                            <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td>{item.feedbackType}</td>
                                {/* <td>
                                    <select
                                        value={item.status}
                                        onChange={(e) => handleChangeStatus(item.id, e.target.value)}
                                        style={{backgroundColor:'green', color:'white', borderRadius:'15px'}}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="solved">Solved</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)} style={{backgroundColor:'black', color:'white', borderRadius:'15px'}}>Delete</button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default BookingDetails;
