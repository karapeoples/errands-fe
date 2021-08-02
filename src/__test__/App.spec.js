import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

it('renders learn react', () => {
	mount(<App />);
	cy.get('h1').contains('Learn React');
});
