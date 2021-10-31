import React from 'react';
import { render, screen } from '@testing-library/react';
import Picker from './Picker';


describe('Rendering App', () => {
    it('renders welcome message', () => {
        render(<Picker />);
    });
})
