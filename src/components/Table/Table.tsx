import React, { ReactElement, useMemo } from 'react';
import { Table as AntdTable, Avatar, Space, Popconfirm } from 'antd';
import { TableWrapper } from './styles';
import { UserOutlined } from '@ant-design/icons';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { ColumnsType } from 'antd/es/table';
import { ContactType } from 'types/definitions';
import { tableColumnTextFilterConfig } from './TextFilterConfig';

interface Props {
    data: ContactType[];
    columns?: ColumnsType<unknown>;
    editRowEvent?: (contact: ContactType) => void;
    deleteRowEvent?: (contact: ContactType) => void;
}

export function Table({
    data,
    columns,
    editRowEvent = () => {
        console.info('No handler passed as props');
    },
    deleteRowEvent = () => {
        console.info('No handler passed as props');
    },
}: Props): ReactElement {
    const defaultColumns: ColumnsType<ContactType> = useMemo(
        () => [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                defaultSortOrder: 'descend',
                sorter: (a: ContactType, b: ContactType) =>
                    a.name.localeCompare(b.name),
                render: (text: string) => (
                    <Box display='flex' alignItems='center'>
                        <Avatar size='large' icon={<UserOutlined />} />
                        <Text ml='3'>{text}</Text>
                    </Box>
                ),
                ...tableColumnTextFilterConfig<ContactType>(),
                onFilter: (value, record) => {
                    return record.name
                        .toString()
                        .toLowerCase()
                        .includes(value.toString().toLowerCase());
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
                ...tableColumnTextFilterConfig<ContactType>(),
                onFilter: (value, record) => {
                    return record.phone
                        .toString()
                        .toLowerCase()
                        .includes(value.toString().toLowerCase());
                },
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                ...tableColumnTextFilterConfig<ContactType>(),
                onFilter: (value, record) => {
                    return record.email
                        .toString()
                        .toLowerCase()
                        .includes(value.toString().toLowerCase());
                },
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                ...tableColumnTextFilterConfig<ContactType>(),
                onFilter: (value, record) => {
                    return record.address
                        .toString()
                        .toLowerCase()
                        .includes(value.toString().toLowerCase());
                },
            },
            {
                title: 'Action',
                key: 'action',
                render: (text: string, record: ContactType) => (
                    <Space size='middle'>
                        <a onClick={() => handleEditRecord(record)}>
                            Edit {record.name}
                        </a>
                        <Popconfirm
                            title='Are you sure to delete this contact?'
                            onConfirm={() => handleDeleteRecord(record)}
                            okText='Yes'
                            cancelText='No'
                        >
                            <a>Delete {record.name}</a>
                        </Popconfirm>
                    </Space>
                ),
            },
        ],
        []
    );

    const handleEditRecord = (contact: ContactType) => {
        editRowEvent(contact);
    };

    const handleDeleteRecord = (contact: ContactType) => {
        deleteRowEvent(contact);
    };

    return (
        <TableWrapper>
            <AntdTable
                rowKey='name'
                columns={columns || defaultColumns}
                dataSource={data}
            />
        </TableWrapper>
    );
}
