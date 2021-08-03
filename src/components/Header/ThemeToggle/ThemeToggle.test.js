import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeToggle from './ThemeToggle.component';

describe('toggle', () => {
    test('should contain a label', () => {
        render(<ThemeToggle />);

        const label = screen.queryByText(/dark mode/i);
        expect(label).toBeInTheDocument();
    });
});
