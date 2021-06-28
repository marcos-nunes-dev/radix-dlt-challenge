import React from 'react';
import { render } from 'tests';
import { ContactList } from '../ContactList';

const demoData = [
    {
        name: 'Jhon Doe',
        phone: '+55 24 98822-1455',
        email: 'test@radix.dlt',
        address: 'askdoadkoas',
    },
];

describe('<ContactListPage />', () => {
    it('should match snapshot', () => {
        const { container } = render(<ContactList data={demoData} />);
        expect(container).toMatchSnapshot();
    });
});
