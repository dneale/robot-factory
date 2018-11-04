import * as enzyme from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QAPageComponent } from './QAPage';
import ProcessStep from '../components/ProcessStep/ProcessStep'

describe('QAPage', () => {
  it('should render', () => {
    const component = enzyme.mount(<MemoryRouter><QAPageComponent fetchRobots={jest.fn()} robots={[]}/></MemoryRouter>);
    expect(component.find('Container').exists()).toBe(true);
  });

  it('should load robots on load', () => {
    const fetchRobots = jest.fn();
    const component = enzyme.mount(<MemoryRouter><QAPageComponent fetchRobots={fetchRobots} robots={[]}/></MemoryRouter>);
    component.render();
    expect(fetchRobots).toHaveBeenCalled();
  });

  it('should show how many robots were loaded', () => {
    const component = enzyme.mount(
      <MemoryRouter>
        <QAPageComponent fetchRobots={jest.fn()} robots={['robot', 'robot']}/>
      </MemoryRouter>
    );
    expect(component.find(<ProcessStep />).find({text: '2 robots were loaded'}).length).toBe(1);
  });
});