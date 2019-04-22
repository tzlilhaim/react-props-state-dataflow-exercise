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

// make sure that the spot check text in the learnapp details all the function names, divs, classes etc
// that are specified within the test
describe("exercise3", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("App should render your Landing component when the currentPage property inside of App's state is set to 'Landing'", () => {
        const wrapper = mount(<App />);
        let ex3 = wrapper.find('#ex-3')
        let landingComponent = ex3.find(Landing)
        wrapper.setState({currentPage: "Landing"})
        expect(landingComponent.exists(), "could not find a Landing component rendered in App when currentPage is 'Landing'").toBeTruthy()
    });
    it("App should render your Home component when the currentPage property inside of App's state is set to 'Home'", () => {
        const wrapper = mount(<App />);
        wrapper.setState({currentPage: "Home"})
        let ex3 = wrapper.find('#ex-3')
        let homeComponent = ex3.find(Home)
        expect(homeComponent.exists(), "could not find a Home component rendered in App when currentPage is 'Home'").toBeTruthy()
    });
})
