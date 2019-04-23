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
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("You must render an h4 element on the page for each Comppany, containing the company's name in capital letters", () => {
    const wrapper = mount(<App />);
    let spotcheck3Div = wrapper.find('#spotcheck-3')
    let company = spotcheck3Div.find('h4')
    expect(company, 'There should be three h4 elements rendered on the page').toHaveLength(3)
    const expectTesla = 'TESLA'
    const actualTesla = company.first().text()
    expect(actualTesla, `The first h4 should have the text '${expectTesla}', instead found '${actualTesla}'`).toBe(expectTesla)
    const expectMicrosoft = 'MICROSOFT'
    const actualMicrosoft = company.at(1).text()
    expect(actualMicrosoft, `The first h4 should have the text '${expectMicrosoft}', instead found '${actualMicrosoft}'`).toBe(expectMicrosoft)
    const expectGoogle = 'GOOGLE'
    const actualGoogle = company.at(2).text()
    expect(actualGoogle, `The first h4 should have the text '${expectGoogle}', instead found '${actualGoogle}'`).toBe(expectGoogle)
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
    expect(companyComponent.first().props(), 'props were not passed with the upperCase function').toEqual({name: "mock", revenue: 140})
    expect(companyComponent.at(1).props(), 'props were not passed with the upperCase function').toEqual({name: "mock", revenue: 300})
    expect(companyComponent.at(2).props(), 'props were not passed with the upperCase function').toEqual({name: "mock", revenue: 600})
})
})
