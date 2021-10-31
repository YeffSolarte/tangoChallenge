import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('Rendering App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });
})


