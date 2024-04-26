import React, { useState } from 'react';

const UpdateCounsellorForm = ({ onClose }) => {
  const [counsellorData, setCounsellorData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCounsellorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update the counsellor with the provided counsellorData
    onClose(); // Close the form after submission
  };

  return (
    <div>
      <h2>Update Counsellor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Counsellor ID:
          <input type="text" name="id" value={counsellorData.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={counsellorData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={counsellorData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={counsellorData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Photo URL:
          <input type="text" name="photo" value={counsellorData.photo} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Counsellor</button>
      </form>
    </div>
  );
};

export default UpdateCounsellorForm;
