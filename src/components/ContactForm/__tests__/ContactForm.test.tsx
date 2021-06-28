import React from 'react';
import { render, fireEvent } from 'tests';
import { ContactForm } from '../ContactForm';

const initialData = {
    name: 'Jhon Doe',
    phone: '+55 24 98822-1455',
    email: 'test@radix.dlt',
    address: 'askdoadkoas',
};

describe('<ContactForm />', () => {
    it('should render empty Form', () => {
        const { getByText } = render(<ContactForm />);
        expect(getByText('Add Contact')).toBeTruthy();
    });
    it('should render filled Table', () => {
        const { getByText } = render(<ContactForm initialData={initialData} />);
        expect(getByText('Edit Contact')).toBeTruthy();
    });
    it('should fire edit event', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <ContactForm handleEditContact={onClick(initialData)} />
        );
        fireEvent.click(getByText('Add Contact'));

        expect(onClick).toBeCalled();
        expect(onClick).toBeCalledTimes(1);
    });
});
