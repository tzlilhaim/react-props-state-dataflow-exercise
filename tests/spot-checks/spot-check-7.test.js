import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Company from '../../src/components/Company';
import Register from '../../src/components/Register';
import Calendar from '../../src/components/Calendar';

configure({ adapter: new Adapter() });

describe("spotcheck6", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('The App component should render the Calendar component with props', () => {
        const wrapper = mount(<App />);
        let calendarComponent = wrapper.find(Calendar);
        expect(calendarComponent.exists(), 'You must create a Component called Calendar').toBeTruthy()
        expect(calendarComponent.first().props()).toEqual({
            reservations: [
                { day: "Monday", time: 2000, name: "Earl" },
                { day: "Monday", time: 1845, name: "Ella" },
                { day: "Tuesday", time: 1930, name: "Linda" },
                { day: "Wednesday", time: 2015, name: "Anni" }]
        })
    })
    it('The App component should render the Register component with props', () => {
        const wrapper = mount(<App />);
        let registerComponent = wrapper.find(Register);
        expect(registerComponent.exists(), 'You must create a Component called Register').toBeTruthy()
        expect(registerComponent.first().props()).toEqual({
            reservations: [
                { day: "Monday", time: 2000, name: "Earl" },
                { day: "Monday", time: 1845, name: "Ella" },
                { day: "Tuesday", time: 1930, name: "Linda" },
                { day: "Wednesday", time: 2015, name: "Anni" }]
        })
    })
    it('You must pass props using data fropm your state', () => {
        const wrapper = mount(<App />)
        let registerComponent = wrapper.find(Register);
        expect(registerComponent.first().props().reservations, 'props passed to the Register component did not utilize the state').toEqual(wrapper.state().reservations)
        let calendarComponent = wrapper.find(Calendar);
        expect(calendarComponent.first().props().reservations, 'props passed to the Register component did not utilize the state').toEqual(wrapper.state().reservations)
    })
    it('You must render a div on the page for each reservation', () => {
        const wrapper = mount(<App />);
        let spotcheck6 = wrapper.find('#spotcheck-7').children()
        expect(spotcheck6).toHaveLength(3)
        expect(spotcheck6, 'There should be three h4 elements rendered on the page').toHaveLength(4)
        expect(spotcheck6.at(1).text(), "The first h4 should have the text 'Tesla'").toBe('Tesla')
        expect(spotcheck6.at(2).text(), "The second h4 should have the text 'Microsoft'").toBe('Microsoft')
        expect(spotcheck6.at(3).text(), "The third h4 should have the text 'Google'").toBe('Google')
    });
})
