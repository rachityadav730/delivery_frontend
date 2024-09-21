import React, { useEffect, useState } from 'react';
import { createConsumer } from '@rails/actioncable';

const consumer = createConsumer('http://localhost:3000/cable');

const DeliveryUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const subscription = consumer.subscriptions.create('DeliveryChannel', {
      received(data) {
        setUpdates(prevUpdates => [...prevUpdates, data]);
      }
    });

    return () => {
      consumer.subscriptions.remove(subscription);
    };
  }, []);

  return (
    <div>
      <h1>Delivery Updates</h1>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>
            Delivery to {update.address} is now {update.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryUpdates;
