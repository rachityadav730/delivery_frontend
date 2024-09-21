import React from 'react';
import DeliveryUpdates from './components/DeliveryUpdates';
import DeliveryForm from './components/DeliveryForm';

const App = () => {
  return (
    <div>
      <h1>Real-Time Delivery Service</h1>
      <DeliveryForm />
      <DeliveryUpdates />
    </div>
  );
};

export default App;
