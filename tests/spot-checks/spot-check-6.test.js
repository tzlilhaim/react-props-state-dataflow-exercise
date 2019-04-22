import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Company from '../../src/components/Company';

configure({ adapter: new Adapter() });

// make sure that the spot check text in the learnapp details all the function names, divs, classes etc
// that are specified within the test
describe("spotcheck6", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('You must render an h4 element on the page for each Comppany', () => {
        const wrapper = mount(<App />);
        let spotcheck6 = wrapper.find('#spotcheck-6').children()
            // expected vs actual + look for specific element and not children
        expect(spotcheck6.find('h4'), 'could not find h4 elements').toHaveLength(3)
        expect(spotcheck6, 'There should be three h4 elements rendered on the page').toHaveLength(4)
        expect(spotcheck6.at(1).text(), "The first h4 should have the text 'Tesla'").toBe('Tesla')
        expect(spotcheck6.at(2).text(), "The second h4 should have the text 'Microsoft'").toBe('Microsoft')
        expect(spotcheck6.at(3).text(), "The third h4 should have the text 'Google'").toBe('Google')
    });
    it("The App component's state should contain an array called companies", () => {
        const wrapper = mount(<App />);
        let stateCompanies = wrapper.state().companies
        // print actual
        expect(stateCompanies, 'this.state.companies should be equal to the company array').toEqual([
            { name: "Tesla", revenue: 140 },
            { name: "Microsoft", revenue: 300 },
            { name: "Google", revenue: 600 }])
    })
    it("You must use the state to render the companies", () => {
        const wrapper = mount(<App />);
        wrapper.setState({companies : [{ name: "mock1" }, { name: "mock2" }]}, function(){
        let spotcheckMock = wrapper.find('#spotcheck-6').children()
        expect(spotcheckMock.at(1).html(), 'The data that was rendered was not passed from the state').toBe("<h4>mock1</h4>")
        expect(spotcheckMock.at(2).html(), 'The data that was rendered was not passed from the state').toBe("<h4>mock2</h4>")
        })
    })
})






