import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck6", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('You must render an h4 element on the page for each Comppany', () => {
        const wrapper = mount(<App />);
        let spotcheck6 = wrapper.find('#spotcheck-6').children().find('h4')
        expect(spotcheck6, 'could not find h4 elements').toHaveLength(3)
        expect(spotcheck6, 'There should be three h4 elements rendered on the page').toHaveLength(3)
        let expected1 = 'Tesla'
        let expected2 = "Microsoft"
        let expected3 = "Google"
        let actual1 = spotcheck6.first().text()
        let actual2 = spotcheck6.at(1).text()
        let actual3 = spotcheck6.at(2).text()
        expect(actual1, `The first h4 should have the text '${expected1}', instead found '${actual1}'`).toBe(expected1)
        expect(actual2, `The second h4 should have the text '${expected2}', instead found '${actual2}'`).toBe(expected2)
        expect(actual3, `The third h4 should have the text '${expected3}', instead found '${actual3}'`).toBe(expected3)
    });
    it("The App component's state should contain an array called companies", () => {
        const wrapper = mount(<App />);
        let actualState = wrapper.state().companies
        let expectedState = [
            { name: "Tesla", revenue: 140 },
            { name: "Microsoft", revenue: 300 },
            { name: "Google", revenue: 600 }]
        expect(actualState, 'Could not find a companies property in your state').toBeDefined()
        expect(actualState, `this.state.companies should be equal to ${expectedState}, instead found ${actualState}`).toEqual(expectedState)
    })
    it("You must use the state to render the companies", () => {
        const wrapper = mount(<App />);
        wrapper.setState({ companies: [{ name: "mock1" }, { name: "mock2" }] }, function () {
            let spotcheckMock = wrapper.find('#spotcheck-6').children()
            expect(spotcheckMock.at(1).html(), 'The data that was rendered was not passed from the state').toBe("<h4>mock1</h4>")
            expect(spotcheckMock.at(2).html(), 'The data that was rendered was not passed from the state').toBe("<h4>mock2</h4>")
        })
    })
})
