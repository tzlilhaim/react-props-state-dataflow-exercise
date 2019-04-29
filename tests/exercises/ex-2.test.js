import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Home from '../../src/components/Home';
import Landing from '../../src/components/Landing';
import Item from '../../src/components/Item';

configure({ adapter: new Adapter() });

describe("exercise2", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
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
    it("The Landing component should render a div which says 'Welcome' to the user found in App's state, followed by the hottest item", () => {
        const wrapper = mount(<App />)
        wrapper.setState({store: [{item: "mockItem", hottest: true}]})
        wrapper.setState({user: "mockUser"})
        const landing = wrapper.find('#ex-2').find(Landing)
        let text = landing.text()
        expect(text, "the user's name should be passed down as props to the Landing component from the App's state").toContain("mockUser")
        expect(text, "the hottest item should be rendered by accessing props passed from the Apps's state").toContain('mockItem')
    })
    it("The Home component should render the Item component for every item in the store", () => {
        const wrapper = mount(<App />);
        let itemComponent = wrapper.find(Home).find(Item)
        expect(itemComponent.exists(), 'could not find an Item component rendered by the Home component').toBeTruthy()
    });
    it("The Item component should render a div with the name and price of an item", () => {
        const wrapper = mount(<App />)
        wrapper.setState({store: [{item:"mockItem", price: "mockPrice", hottest: true}]})
        let item = wrapper.find(Item)
        expect(item.exists(), 'could not find a div rendered by the Item component').toBeTruthy()
        expect(item.text(), 'the name of the item should be passed from the state in App using props').toContain("mockItem")
        expect(item.text(), 'the price of the item sould be passed from the state in App using props').toContain("mockPrice")
    });
})
