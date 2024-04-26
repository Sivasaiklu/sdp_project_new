import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
    const [res, setRes] = useState([]);
    const [selectedCounsellor, setSelectedCounsellor] = useState(null);
    const [updatedDetails, setUpdatedDetails] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const signUpInfo = async () => {
        try {
            const response = await axios.get('http://localhost:8082/retrivecounsellordetails');
            setRes(response.data);
        } catch (error) {
            console.error('Error fetching counsellors:', error);
        }
    };

    useEffect(() => {
        signUpInfo();
    }, []);

    const handleUpdate = async (counsellorId) => {
        try {
            const response = await axios.get(`http://localhost:8082/retrivecounsellordetails/${counsellorId}`);
            const currentDetails = response.data;

            setSelectedCounsellor(counsellorId);
            setUpdatedDetails({
                name: currentDetails.name,
                email: currentDetails.email,
                mobile: currentDetails.mobile
            });
        } catch (error) {
            console.error(`Error fetching details for counsellor with ID ${counsellorId}:`, error);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8082/updatecounsellor/${selectedCounsellor}`, updatedDetails);

            setUpdatedDetails({
                name: '',
                email: '',
                mobile: ''
            });
            setSelectedCounsellor(null);

            signUpInfo();

            console.log(`Counsellor with ID ${selectedCounsellor} updated successfully`);
        } catch (error) {
            console.error(`Error updating counsellor with ID ${selectedCounsellor}:`, error);
        }
    };

    const handleDelete = async (counsellorId) => {
        try {
            await axios.delete(`http://localhost:8082/deletecounsellor/${counsellorId}`);
            signUpInfo();
            console.log(`Counsellor with ID ${counsellorId} deleted successfully`);
        } catch (error) {
            console.error(`Error deleting counsellor with ID ${counsellorId}:`, error);
        }
    };

    return (
        <div style={{ backgroundColor: 'black' }}>
            <center>
                <h1 style={{ color: 'gold' }}>Counsellor Details</h1>
                <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', textAlign: 'center', alignItems: 'center' }} border={20}>
                    <thead>
                        <tr>
                            <th>CId</th>
                            <th>CName</th>
                            <th>CEmail</th>
                            <th>CMobile</th>
                            {/* <th>Update</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item.counsellorId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                {/* <td>
                                    <button
                                        style={{ backgroundColor: 'black', color: 'white', borderRadius: '15px' }}
                                        onClick={() => handleUpdate(item.counsellorId)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        style={{ backgroundColor: 'black', color: 'white', borderRadius: '15px' }}
                                        onClick={() => handleDelete(item.counsellorId)}
                                    >
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>

            {/* Update Form */}
            {selectedCounsellor && (
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={updatedDetails.name}
                        onChange={handleFormChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={updatedDetails.email}
                        onChange={handleFormChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="mobile"
                        value={updatedDetails.mobile}
                        onChange={handleFormChange}
                        placeholder="Mobile"
                        required
                    />
                    <button type="submit">Update</button>
                </form>
            )}
        </div>
    );
}

export default BookingDetails;
