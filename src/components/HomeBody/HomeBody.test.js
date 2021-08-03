import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeBody from './HomeBody.component';

describe('HomeBody', () => {
    test('should contain a title', () => {
        render(<HomeBody />);

        const title = screen.queryByText(/Welcome to the Challenge!/i);
        expect(title).toBeInTheDocument();
    });
});
