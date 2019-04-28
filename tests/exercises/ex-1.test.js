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

    it("Hudini's state should have a key `show` with an initial value of false", () => {
        const wrapper = mount(<Hudini />)
        expect(wrapper.state(), "Hudini should have a state").toBeTruthy()
        expect(wrapper.state().show, "Hudini's state should have a `show` key").not.toBeUndefined()
        expect(wrapper.state().show, "The `show` key in Hudini's state should be false initially").toBeFalsy()
    })

    it('The Hudini component should render a div with text', () => {
        const wrapper = mount(<Hudini />);
        let expected1 = "Now you don't".toLowerCase()
        let expected2 = 'Now you see me'.toLowerCase()
        
        wrapper.setState({ show: false }, function () {
            let div = wrapper.find('div')
            expect(div, 'Hudini should render a single div').toHaveLength(1)
            let actual = div.text().toLowerCase()
            expect(actual, `When the state's show property is set to false, the text rendered should be '${expected1}', instead found '${actual}`).toContain(expected1)
        })

        wrapper.setState({ show: true }, function () {
            let div = wrapper.find('div')
            expect(div, 'Hudini should render a single div').toHaveLength(1)
            let actual = div.text().toLowerCase()
            expect(actual, `When the state's show property is set to true, the text rendered should be '${expected2}', instead found '${actual}`).toContain(expected2)
        })
    })
})
