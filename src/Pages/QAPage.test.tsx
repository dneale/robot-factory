import * as enzyme from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QAPageComponent } from './QAPage';

describe('QAPage', () => {
  it('should render', () => {
    const component = enzyme.mount(<MemoryRouter><QAPageComponent fetchRobots={jest.fn()} /></MemoryRouter>);
    expect(component.find('Container').exists()).toBe(true);
  });

  it('should load robots on load', () => {
    const fetchRobots = jest.fn();
    const component = enzyme.mount(<MemoryRouter><QAPageComponent fetchRobots={fetchRobots} /></MemoryRouter>);
    component.render();
    expect(fetchRobots).toHaveBeenCalled();
  });
});