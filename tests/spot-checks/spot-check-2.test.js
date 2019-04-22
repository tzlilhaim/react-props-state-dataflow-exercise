import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Company from '../../src/components/Company';

configure({ adapter: new Adapter() });

describe("spotcheck2", () => {
  it('Application should render without crashing', () => {
    const div = document.createElement('div');
    // remove memoryrouter
    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('You must render an h4 element on the page for each Comppany', () => {
    const wrapper = mount(<App />);
    let spotcheck2Div = wrapper.find('#spotcheck-2')
    expect(spotcheck2Div.children(), 'There should be three h4 elements rendered on the page').toHaveLength(4)
    expect(spotcheck2Div.children().at(1).text(), "The first h4 should have the text 'Tesla'").toBe('Tesla')
    expect(spotcheck2Div.children().at(2).text(), "The second h4 should have the text 'Microsoft'").toBe('Microsoft')
    expect(spotcheck2Div.children().at(3).text(), "The third h4 should have the text 'Google'").toBe('Google')

  });
  it("The App component's render function should invoke the generateCompanyTags function", () => {
    expect(App.prototype.generateCompanyTags, 'You must define the generateCompanyTags method in your App component').toBeDefined()
    App.prototype.generateCompanyTags = function () {
      return <div id="mock">mock</div>
    }
    const wrapper = mount(<App />);
    let spotcheckMock = wrapper.find('#spotcheck-2')
    expect(spotcheckMock.children(), "generateCompanyTags must be returned in your App's render function").toHaveLength(2)
  })
})






