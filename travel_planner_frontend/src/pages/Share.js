import React from 'react';
import { useParams } from 'react-router-dom';

const Share = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Share Itinerary</h1>
      <p>Share link for itinerary {id}: [Link]</p>
    </div>
  );
};

export default Share;
