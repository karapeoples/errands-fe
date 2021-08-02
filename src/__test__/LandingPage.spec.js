import React from 'react';
import { mount } from '@cypress/react';
import LandingPage from '../components/app/LandingPage';

it('renders learn react', () => {
	mount(<LandingPage />);
	cy.get('h1').contains('This is the Landing Page!');
});
