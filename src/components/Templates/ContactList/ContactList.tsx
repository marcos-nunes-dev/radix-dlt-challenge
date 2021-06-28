import React, { ReactElement, useEffect, useState } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { useContacts } from 'hooks/useContacts';
import { Table } from 'components/Table';
import { Modal, Button } from 'antd';
import { ContactForm } from 'components/ContactForm';
import { editContactsByID, deleteContactByID } from 'services/contacts';
import { useRouter } from 'next/router';
import { ContactType } from 'types/definitions';

interface Props {
    data: ContactType[];
}

export function ContactList({ data }: Props): ReactElement {
    const { contacts, setContacts } = useContacts();
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);

    const [selectedContact, setselectedContact] = useState<
        ContactType | undefined
    >();

    const { query, replace, asPath } = useRouter();

    useEffect(() => {
        setContacts(data);
    }, [data]);

    const handleContactForm = (values: ContactType) => {
        editContactsByID(query?.u.toString(), query?.p.toString(), values)
            .then((success: ContactType) => {
                setEditModalVisible(false);
                setAddModalVisible(false);
                replace(asPath);
            })
            .catch((e: unknown) => console.log(e));
    };

    const editRowEvent = (record) => {
        setselectedContact(record);
        setEditModalVisible(!editModalVisible);
    };

    const deleteRowEvent = (record) => {
        deleteContactByID(query?.u.toString(), query?.p.toString(), record)
            .then((success: ContactType) => {
                replace(asPath);
            })
            .catch((e: unknown) => console.log(e));
    };

    return (
        <Box flex='1' display='flex' flexDirection='column'>
            <Box as='header' width='100%' p='25px 5%'>
                <Box as='img' src='/img/logo.svg' />
            </Box>
            <Box
                as='main'
                flex='1'
                p='25px 5%'
                backgroundColor='gray.50'
                display='flex'
                flexDirection='column'
            >
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Text as='h1' fontWeight='bold' color='primary' m='0'>
                        Contact List
                    </Text>
                    <Button
                        type='primary'
                        size='large'
                        onClick={() => setAddModalVisible(!addModalVisible)}
                    >
                        Add new Contact
                    </Button>
                </Box>
                <Table
                    editRowEvent={editRowEvent}
                    deleteRowEvent={deleteRowEvent}
                    data={contacts}
                />
            </Box>
            <Modal
                title='Edit Contact'
                destroyOnClose
                footer={null}
                visible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
            >
                {selectedContact && (
                    <ContactForm
                        handleEditContact={handleContactForm}
                        initialData={selectedContact}
                    />
                )}
            </Modal>
            <Modal
                title='Add Contact'
                destroyOnClose
                footer={null}
                visible={addModalVisible}
                onCancel={() => setAddModalVisible(false)}
            >
                <ContactForm handleEditContact={handleContactForm} />
            </Modal>
        </Box>
    );
}
