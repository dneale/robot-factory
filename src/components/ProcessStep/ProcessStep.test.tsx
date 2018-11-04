import * as enzyme from 'enzyme';
import * as React from 'react';
import ProcessStep from './ProcessStep';

describe('ProcessStep', () => {
  it('should display text', () => {
    const component = enzyme.shallow(<ProcessStep>text</ProcessStep>);
    expect(component.find('p').length).toBe(1);
  })
});