import * as enzyme from 'enzyme';
import * as React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('should contain link to QA', () => {
    const component = enzyme.mount(<MemoryRouter><LandingPage /></MemoryRouter>);
    expect(component.find(Link).props().to).toEqual('/qa');
  });
});