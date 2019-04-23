import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Hudini from '../../src/components/Hudini';

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
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
        let expected1 = "Now you don't"
        let expected2 = 'Now you see me'
        let actual = div.text()
        wrapper.setState({show: false}, function(){
    
            expect(actual, `When the state's show property is set to false, the text rendered should be '${expected1}', instead found '${actual}`).toBe(expected1)
        })
        wrapper.setState({show: true}, function(){
            expect(actual, `When the state's show property is set to true, the text rendered should be '${expected2}', instead found '${actual}`).toBe(expected1)
        })
    })
})
