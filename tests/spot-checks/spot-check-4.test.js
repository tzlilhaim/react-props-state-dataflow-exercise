import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Wardrobe from '../../src/components/Wardrobe';
import Article from '../../src/components/Article';

configure({ adapter: new Adapter() });

describe("spotcheck4", () => {
  it('Application should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('You must render a div on the page for each wardrobe object ', () => {
    const wrapper = mount(<App />);
    let spotcheck4 = wrapper.find('#spotcheck-4').find('div')
    expect(spotcheck4, 'There should be 5 divs rendered').toHaveLength(6)
    expect(spotcheck4.at(1).text(), "The first div should have the text 'red shirt'").toBe('red shirt')
    expect(spotcheck4.at(2).text(), "The second div should have the text 'blue shirt'").toBe('blue shirt')
    expect(spotcheck4.at(3).text(), "The third div should have the text 'blue pants'").toBe('blue pants')
    expect(spotcheck4.at(4).text(), "The fourth div should have the text 'sapphire accessory'").toBe('sapphire accessory')
    expect(spotcheck4.at(5).text(), "The fifth div should have the text 'lilac accessory'").toBe('lilac accessory')
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
    expect(articleComponent, 'The Article component must render five divs').toHaveLength(5);
    expect(articleComponent.first().props(), 'props were not passed accurately').toEqual({ info: { type: "shirt", color: "red", size: "Medium" } })
    expect(articleComponent.at(1).props(), 'props were not passed accurately').toEqual({ info: { type: "shirt", color: "blue", size: "Medium" } })
    expect(articleComponent.at(2).props(), 'props were not passed accurately').toEqual({ info: { type: "pants", color: "blue", size: "Medium" } })
  })
})


