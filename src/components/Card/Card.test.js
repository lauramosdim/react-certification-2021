import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card.component';

describe('<Card />', () => {
    it('Card should render correctly', () => {
        const mockVideo = {
            title: 'video-title',
            description: 'video-description',
        };
        const { getByText } = render(
            <Card title={mockVideo.title} description={mockVideo.description} />
        );

        const title = getByText(mockVideo.title);
        const description = getByText(mockVideo.description);

        expect(title).toBeDefined();
        expect(description).toBeDefined();
    });
});
