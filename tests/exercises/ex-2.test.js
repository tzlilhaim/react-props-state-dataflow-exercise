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
describe("exercise2", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        // remove memoryrouter
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('App should render your Home component', () => {
        const wrapper = mount(<App />);
        let homeComponent = wrapper.find(Home)
        expect(homeComponent.exists(), 'could not find a Home component in App').toBeTruthy()
    });
    it('App should render your Landing component', () => {
        const wrapper = mount(<App />);
        let landingComponent = wrapper.find(Landing)
        expect(landingComponent.exists(), 'could not find a Landing component in App').toBeTruthy()
    });
    it("The Landing component should render a div which says 'Welcome, Robyn', followed by the hottest item", () => {
        const wrapper = mount(<Landing user="mockUser" store={[{item: "mockItem", price: 3099, discount: 0.05, hottest: true}]} />);
        let div = wrapper.find('div')
        expect(div, 'could not find a div rendered on the page').toHaveLength(1)
                // expected vs actual
        expect(div.text(), 'could not find Welcome text rendered by Landing component').toContain('Welcome')
        expect(div.text(), "the user's name should be passed as props to the Landing component from the App's state").toContain(wrapper.props().user)
        expect(div.text(),"the hottest item should be rendered by accessing props passed from the Apps's state").toContain('mockItem')
    })
    it("The Home component should render the Item component for every item in the store", () => {
        const wrapper = mount(<Home store={[{item: "mockItem", price: 3099, discount: 0.05, hottest: true}]}/>);
        let itemComponent = wrapper.find(Item)
        expect(itemComponent.exists(), 'could not find an Item component in the Home component').toBeTruthy()
    });
    it("The Item component should render a div with the name and price on an item", () => {
        const wrapper = mount(<Item name="mockName" price="mockPrice"/>);
        let itemDiv = wrapper.find('div')
        expect(itemDiv.exists(), 'could not find a div rendered by the Item component').toBeTruthy()
        expect(itemDiv.text(), 'the name of the item should be passed using props').toContain("mockName")
        expect(itemDiv.text(), 'the price of the item sould be passed using props').toContain("mockPrice")
    });
})
