import React from 'react';
import { FooContext } from '../context/FooContext';
import { BarComponent } from './BarComponent';

export default {
  title: 'Bug/BarComponent',
  component: BarComponent,
  args: {
    lightText: true,
  },
};

const Template = (args) => (
  <FooContext.Provider value={<div>Hi</div>}>
    <BarComponent {...args} />
  </FooContext.Provider>
);

export const Default = Template.bind({});
