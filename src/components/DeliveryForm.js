import React, { useState } from 'react';

const DeliveryForm = () => {
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/deliveries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ delivery: { address, status } }),
    });

    if (response.ok) {
      setAddress('');
      setStatus('Pending');
    } else {
      console.error('Failed to create delivery');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button type="submit">Create Delivery</button>
    </form>
  );
};

export default DeliveryForm;
