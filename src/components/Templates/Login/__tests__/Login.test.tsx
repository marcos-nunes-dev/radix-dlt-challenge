import React from 'react';
import { render } from 'tests';
import { Login } from '../Login';

describe('<LoginPage />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Login />);
        expect(container).toMatchSnapshot();
    });
});
