import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header', () => {
    test('should contain a label', () => {
        render(<Header />);

        const label = screen.queryByText(/dark mode/i);
        expect(label).toBeInTheDocument();
    });
});
