import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignUpDetails = () => {
    const [res, setRes] = useState([]);

    const signUpInfo = async () => {
        try {
            const response = await axios.get('http://localhost:8082/retrivesignupinfo');
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
                <h1 style={{ color: 'gold' }}>Sign Up Details</h1>
                <table style={{ width: '100%', color: 'black', backgroundColor: 'cornsilk', textAlign: 'center', alignItems: 'center' }} border={20}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.role}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
  )
}

export default SignUpDetails