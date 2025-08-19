import React from 'react';
import { useParams } from 'react-router-dom';

const Itinerary = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Itinerary Details</h1>
      <p>Showing details for itinerary: {id}</p>
    </div>
  );
};

export default Itinerary;
