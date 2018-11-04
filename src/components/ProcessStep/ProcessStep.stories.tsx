import React from 'react';
import { storiesOf } from '@storybook/react';
import ProcessStep from './ProcessStep';

storiesOf('ProcessStep', module)
  .add('default', () => <ProcessStep>A step is taking place</ProcessStep>)