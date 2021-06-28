import React from 'react';
import { render, fireEvent } from 'tests';
import { LoginForm } from '../LoginForm';

const initialData = {
    name: 'Jhon Doe',
    phone: '+55 24 98822-1455',
    email: 'test@radix.dlt',
    address: 'askdoadkoas',
};

describe('<LoginForm />', () => {
    it('should render empty Form', () => {
        const { getByPlaceholderText } = render(<LoginForm />);
        expect(getByPlaceholderText('User ID')).toBeTruthy();
    });
    it('should fire edit event', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <LoginForm handleLoginForm={onClick(initialData)} />
        );
        fireEvent.click(getByText('Login'));

        expect(onClick).toBeCalled();
        expect(onClick).toBeCalledTimes(1);
    });
});
