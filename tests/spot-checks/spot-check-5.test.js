import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Wardrobe from '../../src/components/Wardrobe';
import Article from '../../src/components/Article';

configure({ adapter: new Adapter() });

// make sure that the spot check text in the learnapp details all the function names, divs, classes etc
// that are specified within the test
describe("spotcheck5", () => {
  it('Application should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('You must render a div on the page for each blue wardrobe object ', () => {
    const wrapper = mount(<App />);
    let spotcheck5 = wrapper.find('#spotcheck-5').find('div')
        // expected vs actual + look for specific element and not children
    expect(spotcheck5, 'There should be two divs rendered on the page').toHaveLength(3)
    expect(spotcheck5.at(1).text(), "The first div should have the text 'blue shirt'").toBe('blue shirt')
    expect(spotcheck5.at(2).text(), "The second div should have the text 'blue pants'").toBe('blue pants')
  });
  it('The App component should render the Wardrobe component', () => {
    const wrapper = mount(<App />);
    let wardrobeComponent = wrapper.find(Wardrobe);
    expect(wardrobeComponent.exists(), 'could not find Wardrobe component').toBeTruthy()
    expect(wardrobeComponent, 'The App component should only render the Wardrobe component').toHaveLength(1)
  })
  it('The Wardrobe component should render the Article component with props', () => {
    const wrapper = mount(<Wardrobe />);
    let articleComponent = wrapper.find(Article);
    expect(articleComponent.exists(), 'You must create a Component called Article').toBeTruthy()
        // expected vs actual + look for specific element and not children
    expect(articleComponent, 'The Article component must render five divs').toHaveLength(5);
    expect(articleComponent.first().props(), 'props were not passed accurately').toEqual({ info: { type: "shirt", color: "red", size: "Medium" } })
    expect(articleComponent.at(1).props(), 'props were not passed accurately').toEqual({ info: { type: "shirt", color: "blue", size: "Medium" } })
    expect(articleComponent.at(2).props(), 'props were not passed accurately').toEqual({ info: { type: "pants", color: "blue", size: "Medium" } })
  })
})


