import React from 'react';
import { render } from 'tests';
import { AuthPage } from '../AuthPage';

describe('<AuthPage />', () => {
    it('should render AuthPage', () => {
        const { getByText } = render(
            <AuthPage>
                <p>Text</p>
            </AuthPage>
        );
        expect(getByText('Text')).toBeTruthy();
    });
});
