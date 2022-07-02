import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Passion from './Passion';

describe('<Passion />', () => {
  test('it should mount', () => {
    render(<Passion />);
    
    const passion = screen.getByTestId('Passion');

    expect(passion).toBeInTheDocument();
  });
});