import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Company from '../../src/components/Company';

configure({ adapter: new Adapter() });

describe("spotcheck3", () => {
  it('Application should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("You must render an h4 element on the page for each Comppany, containing the company's name in capital letters", () => {
    const wrapper = mount(<App />);
    let spotcheck3Div = wrapper.find('#spotcheck-3')
    expect(spotcheck3Div.children(), 'There should be three h4 elements rendered on the page').toHaveLength(4)
    expect(spotcheck3Div.children().at(1).text(), "The first h4 should have the text 'TESLA'").toBe('TESLA')
    expect(spotcheck3Div.children().at(2).text(), "The second h4 should have the text 'MICROSOFT'").toBe('MICROSOFT')
    expect(spotcheck3Div.children().at(3).text(), "The third h4 should have the text 'GOOGLE'").toBe('GOOGLE')

  });
  it("The upperCase function should be invoked in the props", () => {
    expect(App.prototype.upperCase, 'You must define the upperCase method in your App component').toBeDefined()
    App.prototype.upperCase = function () {
      return "mock"
    }
    const wrapper = mount(<App />);
    let spotcheckMock = wrapper.find('#spotcheck-3')
    let companyComponent = spotcheckMock.find(Company);
    expect(companyComponent.exists(), 'You must render a Component called Company').toBeTruthy()
    expect(companyComponent.first().props(), 'props were not passed accurately').toEqual({name: "mock", revenue: 140})
    expect(companyComponent.at(1).props(), 'props were not passed accurately').toEqual({name: "mock", revenue: 300})
    expect(companyComponent.at(2).props(), 'props were not passed accurately').toEqual({name: "mock", revenue: 600})
})
})




