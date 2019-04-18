import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Home from '../../src/components/Home';
import Landing from '../../src/components/Landing';

configure({ adapter: new Adapter() });

describe("exercise2", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
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
        const wrapper = mount(<Landing />);
        let div = wrapper.find('div')
        expect(div, 'could not find a div rendered on the page').toHaveLength(1)
        wrapper.setState({show: false}, function(){
    
            expect(div.text(), "When the state's show property is set to false, the text rendered should be 'Now you don't'").toBe("Now you don't")
        })
        wrapper.setState({show: true}, function(){
            expect(div.text(), "When the state's show property is set to true, the text rendered should be 'Now you see me'").toBe("Now you see me")
        })
    })
})
