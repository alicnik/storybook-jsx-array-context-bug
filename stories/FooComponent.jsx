import React from 'react';
import { FooContext } from '../context/FooContext';

export const FooComponent = ({ lightText }) => {
  const context = React.useContext(FooContext);
  console.log('Foo context:', context);
  return (
    <div style={{ color: lightText ? 'white' : 'black' }}>
      <h1>Foo Component</h1>
    </div>
  );
};
