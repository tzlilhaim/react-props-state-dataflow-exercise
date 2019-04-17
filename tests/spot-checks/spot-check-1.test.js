import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure} from 'enzyme';
import Company from '../../src/components/Company';

configure({ adapter: new Adapter() });

describe("spotcheck1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      });    
      it('You must render an h4 element on the page with the word Tesla', () => {
        const wrapper = mount(<App />);
        let text = wrapper.find('h4')
        expect(text.exists(), 'could not find h4 element').toBeTruthy()
        expect(text.first().text(), "The text in the h4 should be 'Tesla'").toBe('Tesla')
        let spotcheck1Div= wrapper.find('#spotcheck-1')
        console.log(spotcheck1Div)
      expect(spotcheck1Div.children(), "You should only render one h4 element").toHaveLength(2)
      });
      it('The App component should render the Company component with props', () => {
        const wrapper = mount(<App />);
        let companyComponent = wrapper.find(Company);
        expect(companyComponent.exists(), 'You must create a Component called Company').toBeTruthy()
        expect(companyComponent.first().props(), 'props were not passed accurately').toEqual({ name: 'Tesla', revenue: 140})
    })
    it('The Company component should render the SubCompany component', () => {
        const wrapper = mount(<Company name='Tesla' />);
        let subCompanyComponent = wrapper.find('SubCompany');
        expect(subCompanyComponent.exists(), 'You must create a Component called SubCompany').toBeTruthy()
        expect(wrapper, 'The Company component must render the SubCompany component').toHaveLength(1);
    })

})






