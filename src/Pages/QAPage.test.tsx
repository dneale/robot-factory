import * as enzyme from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import QAPage from './QAPage';

describe('QAPage', () => {
  it('should render', () => {
    const component = enzyme.mount(<MemoryRouter><QAPage /></MemoryRouter>);
    expect(component.find('Container').exists()).toBe(true);
  });
});