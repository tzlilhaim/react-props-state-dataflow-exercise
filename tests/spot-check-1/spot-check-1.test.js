import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';
import Company from '../../src/components/Company';

configure({ adapter: new Adapter() });

describe("spotcheck1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });    
      it('You must render an h4 element on the page with the word Tesla', () => {
        const wrapper = mount(<App />);
        const expectedText = "Tesla";
        let spotcheck1Div= wrapper.find('#spotcheck-1')
        let teslaText = spotcheck1Div.find('h4')
        expect(teslaText.exists(), 'could not find h4 element').toBeTruthy()
        const actualText = teslaText.first().text();
        expect(actualText, `The text in the h4 should be '${expectedText}'. Instead, we found '${actualText}'`).toBe(expectedText)
        expect(teslaText, "You should only render one h4 element").toHaveLength(1)
      });
      it('The App component should render the Company component with props', () => {
        const wrapper = mount(<App />);
        let companyComponent = wrapper.find(Company);
        expect(companyComponent.exists(), 'You must create a Component called Company').toBeTruthy()
        const expectedProps = { name: 'Tesla', revenue: 140}
        const actualProps = companyComponent.first().props()
        expect(actualProps, `props were not passed accurately; expected ${JSON.stringify(expectedProps)}, instead found ${JSON.stringify(actualProps)}`).toEqual(expectedProps)
    })
    it('The Company component should render the SubCompany component', () => {
        const wrapper = mount(<Company name='Tesla' />);
        let subCompanyComponent = wrapper.find('SubCompany');
        expect(subCompanyComponent.exists(), 'You must create a Component called SubCompany').toBeTruthy()
        expect(wrapper, 'The Company component must render the SubCompany component').toHaveLength(1);
    })
})






