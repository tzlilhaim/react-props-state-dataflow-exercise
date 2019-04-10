import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure} from 'enzyme';
import Company from '../../src/components/Company';
import SubCompany from '../../src/components/Subcompany';

configure({ adapter: new Adapter() });

describe("spotcheck1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      });    
      it('You must render a div on the page with the word Tesla', () => {
        const wrapper = mount(<App />);
        let text = wrapper.find('h4')
        expect(text.exists(), 'There should be a div rendered on the page').toBeTruthy()
        expect(text.text(), "The text in the h4 should be 'Tesla'").toBe('Tesla')
      });
      it('The App component should render the Company component with props', () => {
        const wrapper = mount(<App />);
        let companyComponent = wrapper.find(Company);
        expect(companyComponent.exists(), 'You must create a Component called Company').toBeTruthy()
        expect(companyComponent.props()).toEqual({ name: 'Tesla', revenue: 140})
        expect(wrapper, 'The App component must render the Company component').toHaveLength(1);
    })
    it('The Company component should render the SubCompany component', () => {
        const wrapper = mount(<Company name='Tesla' />);
        let subCompanyComponent = wrapper.find('SubCompany');
        expect(subCompanyComponent.exists(), 'You must create a Component called SubCompany').toBeTruthy()
        expect(wrapper, 'The Company component must render the SubCompany component').toHaveLength(1);
    })

})






