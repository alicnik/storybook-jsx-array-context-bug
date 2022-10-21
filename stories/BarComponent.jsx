import React from 'react';
import { FooContext } from '../context/FooContext';

export const BarComponent = ({ lightText }) => {
  const context = React.useContext(FooContext);
  console.log('Bar context:', context);
  return (
    <div style={{ color: lightText ? 'white' : 'black' }}>
      <h1>Bar Component</h1>
    </div>
  );
};
