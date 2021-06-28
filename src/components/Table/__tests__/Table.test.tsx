import React from 'react';
import { render, fireEvent } from 'tests';
import { Table } from '../Table';

const data = [
    {
        name: 'Jhon Doe',
        phone: '+55 24 98822-1455',
        email: 'test@radix.dlt',
        address: 'askdoadkoas',
    },
];

describe('<Table />', () => {
    it('should render empty Table', () => {
        const { getByText } = render(<Table data={[]} />);
        expect(getByText(/No Data/)).toBeTruthy();
    });
    it('should render filled Table', () => {
        const { getByText } = render(<Table data={data} />);
        expect(getByText('Jhon Doe')).toBeTruthy();
    });
    it('should fire edit event', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Table editRowEvent={onClick} data={data} />
        );
        fireEvent.click(getByText('Edit Jhon Doe'));

        expect(onClick).toBeCalled();
        expect(onClick).toBeCalledTimes(1);
    });
});
