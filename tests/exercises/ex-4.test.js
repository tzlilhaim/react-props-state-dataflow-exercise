import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Home from '../../src/components/Home';
import Landing from '../../src/components/Landing';
import Item from '../../src/components/Item';

configure({ adapter: new Adapter() });

describe("exercise4", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("When the shouldDiscount property is set to false, the Home component should display the normal prices", () => {
        const wrapper = mount(<App />);
        wrapper.setState({currentPage: "Home"})
        wrapper.setState({shouldDiscount: false})
        let ex4 = wrapper.find('#ex-4')
        let homeComponent = ex4.find(Home)
        expect(homeComponent.exists(), "could not find a Home component rendered in exercise 4").toBeTruthy()
        expect(homeComponent.children().first().text()).toContain("800")
        expect(homeComponent.children().at(1).text()).toContain("230")

    });
    it("When the shouldDiscount property is set to true, the Home component should display the discounted prices which is the price * (1 - discount)", () => {
        const wrapper = mount(<App />);
        wrapper.setState({currentPage: "Home"})
        wrapper.setState({shouldDiscount: true})
        let ex4 = wrapper.find('#ex-4')
        let homeComponent = ex4.find(Home)
        expect(homeComponent.exists(), "could not find a Home component rendered in App when currentPage is 'Home'").toBeTruthy()
        expect(homeComponent.children().first().text()).toContain("640")
        expect(homeComponent.children().at(1).text()).toContain("92")
    });
})
