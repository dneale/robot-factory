import * as enzyme from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QAPageComponent } from './QAPage';
import ProcessStep from '../components/ProcessStep/ProcessStep'

describe('QAPage', () => {

  const getRobot = (id: number, statuses: string[]) => {
    return {
      id,
      name: 'name',
      configuration: {
        hasSentience: true,
        hasWheels: true,
        hasTracks: true,
        numberOfRotors: 2,
        color: 'white',
      },
      statuses,
    }
  };
  it('should render', () => {
    const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
    const component = enzyme.mount(
      <MemoryRouter>
        <QAPageComponent
          extinguishRobot={jest.fn()}
          fetchRobots={fetchRobots}
          robots={[]}
          extinguishedRobots={[]}
          recycledRobots={[1,2,3]}
        />
      </MemoryRouter>);
    expect(component.find('Container').exists()).toBe(true);
  });

  it('should load robots on load', () => {
    const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
    const component = enzyme.mount(
      <MemoryRouter>
        <QAPageComponent
          extinguishRobot={jest.fn()}
          fetchRobots={fetchRobots}
          robots={[]}
          extinguishedRobots={[]}
          recycledRobots={[1,2,3]}
        />
      </MemoryRouter>);
    component.render();
    expect(fetchRobots).toHaveBeenCalled();
  });

  it('should show how many robots were loaded', () => {
    const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
    const component = enzyme.shallow(
      <MemoryRouter>
        <QAPageComponent
          fetchRobots={fetchRobots}
          extinguishRobot={jest.fn()}
          robots={['robot', 'robot']}
          extinguishedRobots={[]}
          recycledRobots={[1,2,3]}
        />
      </MemoryRouter>
    ).dive().dive();

    expect(component.find(ProcessStep).findWhere(x=>x.text() === '2 robots were loaded').length).toBe(1);
  });

  it('should list how many robots were extinguished', () => {
    const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
    const component = enzyme.shallow(
      <MemoryRouter>
        <QAPageComponent
          fetchRobots={fetchRobots}
          extinguishRobot={jest.fn()}
          robots={['robot', 'robot']}
          extinguishedRobots={['robot', 'robot']}
          recycledRobots={[1,2,3]}
        />
      </MemoryRouter>
    ).dive().dive();

    expect(component.find(ProcessStep).findWhere(x=>x.text() === '2 robots were extinguished').length).toBe(1);
  });

  it('should list how many robots were recycled', () => {
    const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
    const component = enzyme.shallow(
      <MemoryRouter>
        <QAPageComponent
          fetchRobots={fetchRobots}
          extinguishRobot={jest.fn()}
          robots={['robot', 'robot']}
          extinguishedRobots={['robot', 'robot']}
          recycledRobots={[1,2,3]}
        />
      </MemoryRouter>
    ).dive().dive();

    expect(component.find(ProcessStep).findWhere(x=>x.text() === '3 robots were recycled').length).toBe(1);
  });

  describe('extinguishRobots', () => {
    const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
    it('should extinguish robots on fire', () => {
      const extinguishRobot = jest.fn();

      const component = enzyme.shallow(
        <QAPageComponent
          fetchRobots={fetchRobots}
          extinguishRobot={extinguishRobot}
          robots={[getRobot(1, ['']), getRobot(2, ['on fire'])]}
          extinguishedRobots={[]}
          recycledRobots={[1,2,3]}
        />
      );

      const instance = component.instance() as any;
      instance.extinguishRobots();
      expect(extinguishRobot).toHaveBeenCalledTimes(1)
      expect(extinguishRobot).toHaveBeenCalledWith(2);
    });
  });

  describe('recycleRobots', () => {
    it('should recycle faulty robots', () => {
      const fetchRobots = jest.fn().mockReturnValue(new Promise(res => res));
      const recycleRobots = jest.fn();
      const recycleService = {
        getFaultyRobots: jest.fn().mockReturnValue([1, 2])
      }
      const component = enzyme.shallow(
        <QAPageComponent
          fetchRobots={fetchRobots}
          extinguishRobot={jest.fn()}
          robots={[getRobot(1, ['']), getRobot(2, ['on fire'])]}
          extinguishedRobots={[]}
          recycleService={recycleService}
          recycleRobots={recycleRobots}
          recycledRobots={[1,2,3]}
          />);

      const instance = component.instance() as any;
      instance.recycleRobots();
      expect(recycleRobots).toHaveBeenCalledWith([1, 2]);
    });
  })
});