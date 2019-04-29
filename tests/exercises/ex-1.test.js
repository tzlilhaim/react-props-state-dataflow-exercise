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
        let exercise1 = wrapper.find(Hudini)
        let initial = exercise1.text()
        console.log(initial)
        wrapper.setState({ show: true }, function () {
            let actual = exercise1.text()
            console.log(actual)
            expect(initial, `When the state's show property is set to false, the text should be different than when it is set to true`).not.toEqual(actual)
        })
    })
})
