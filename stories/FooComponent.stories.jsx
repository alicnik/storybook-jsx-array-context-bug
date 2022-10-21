import React from 'react';
import { FooContext } from '../context/FooContext';
import { FooComponent } from './FooComponent';

export default {
  title: 'Bug/FooComponent',
  component: FooComponent,
  args: {
    lightText: true,
  },
};

const Template = (args) => (
  <FooContext.Provider value={[<div>Hi</div>]}>
    <FooComponent {...args} />
  </FooContext.Provider>
);

export const Default = Template.bind({});
