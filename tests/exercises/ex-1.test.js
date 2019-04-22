import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Company from '../../src/components/Company';
import Hudini from '../../src/components/Hudini';

configure({ adapter: new Adapter() });

// make sure that the spot check text in the learnapp details all the function names, divs, classes etc
// that are specified within the test
describe("exercise1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('App should render your Hudini component', () => {
        const wrapper = mount(<App />);
        let hudiniComponent = wrapper.find(Hudini)
        expect(hudiniComponent.exists(), 'could not find Hudini component').toBeTruthy()
    });
    it('The Hudini component should render a div with text', () => {
        const wrapper = mount(<Hudini />);
        let div = wrapper.find('div')
        expect(div, 'could not find a div rendered on the page').toHaveLength(1)
        wrapper.setState({show: false}, function(){
        // expected vs actual
            expect(div.text(), "When the state's show property is set to false, the text rendered should be 'Now you don't'").toBe("Now you don't")
        })
        wrapper.setState({show: true}, function(){
            expect(div.text(), "When the state's show property is set to true, the text rendered should be 'Now you see me'").toBe("Now you see me")
        })
    })
})
