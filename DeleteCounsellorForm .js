import React, { useState } from 'react';

const DeleteCounsellorForm = ({ onClose }) => {
  const [counsellorId, setCounsellorId] = useState('');

  const handleChange = (e) => {
    setCounsellorId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to delete the counsellor with the provided counsellorId
    onClose(); // Close the form after submission
  };

  return (
    <div>
      <h2>Delete Counsellor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Counsellor ID:
          <input type="text" value={counsellorId} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Delete Counsellor</button>
      </form>
    </div>
  );
};

export default DeleteCounsellorForm;
