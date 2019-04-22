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

// make sure that the spot check text in the learnapp details all the function names, divs, classes etc
// that are specified within the test
describe("spotcheck7", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('The App component should render the Calendar component with props', () => {
        const wrapper = mount(<App />);
        let calendarComponent = wrapper.find(Calendar);
        expect(calendarComponent.exists(), 'You must create a Component called Calendar').toBeTruthy()
        expect(calendarComponent.first().props(), 'the reservations array must be passed as props').toEqual({
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
        expect(registerComponent.first().props(), 'the reservations array must be passed as props').toEqual({
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
        expect(calendarComponent.first().props().reservations, 'props passed to the Calendar component did not utilize the state').toEqual(wrapper.state().reservations)
    })
    it('You must render a div on the page for each reservation', () => {
        const wrapper = mount(<App />);
        let spotcheck7 = wrapper.find('#spotcheck-7').children()
        expect(spotcheck7).toHaveLength(3)
            // expected vs actual + look for specific element and not children
        expect(spotcheck7.at(1).children().html(), "could not find 'Earl has a reservation on Monday @ 2000' rendered on the page").toContain("Earl has a reservation on Monday @ 2000")
        expect(spotcheck7.at(1).children().html(), "could not find 'Ella has a reservation on Monday @ 1845' rendered on the page").toContain('Ella has a reservation on Monday @ 1845')
        expect(spotcheck7.at(1).children().html(), "could not find 'Linda has a reservation on Tuesday @ 1930' rendered on the page").toContain('Linda has a reservation on Tuesday @ 1930')
        expect(spotcheck7.at(1).children().html(), "could not find 'Anni has a reservation on Wednesday @ 2015' rendered on the page").toContain('Anni has a reservation on Wednesday @ 2015')
        expect(spotcheck7.at(2).children().html(), "could not find 'Monday @ 2000' rendered on the page").toContain("Monday @ 2000")
        expect(spotcheck7.at(2).children().html(), "could not find 'Monday @ 1845' rendered on the page").toContain('Monday @ 1845')
        expect(spotcheck7.at(2).children().html(), "could not find 'Tuesday @ 1930' rendered on the page").toContain('Tuesday @ 1930')
        expect(spotcheck7.at(2).children().html(), "could not find 'Wednesday @ 2015' rendered on the page").toContain('Wednesday @ 2015')
    });
})
