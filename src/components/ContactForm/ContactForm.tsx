import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Form, Input, Button } from 'antd';
import { ContactType } from 'types/definitions';
import { nameRules, phoneRules, emailRules, addressRules } from './rules';

const { TextArea } = Input;

interface Props {
    initialData?: ContactType;
    handleEditContact?: (values: ContactType) => void;
}

export function ContactForm({
    initialData,
    handleEditContact = () => {
        console.info('No handler passed as props');
    },
}: Props): ReactElement {
    return (
        <Box>
            <Form
                layout='vertical'
                onFinish={handleEditContact}
                initialValues={initialData}
            >
                <Form.Item name='name' rules={nameRules} hasFeedback>
                    <Input
                        size='large'
                        disabled={!!initialData}
                        placeholder='Name'
                    />
                </Form.Item>
                <Form.Item name='phone' rules={phoneRules} hasFeedback>
                    <Input size='large' placeholder='Phone' />
                </Form.Item>
                <Form.Item name='email' rules={emailRules} hasFeedback>
                    <Input size='large' placeholder='Email' />
                </Form.Item>
                <Form.Item name='address' rules={addressRules} hasFeedback>
                    <TextArea rows={4} size='large' placeholder='Address' />
                </Form.Item>
                <Button htmlType='submit' type='primary' size='large'>
                    {initialData ? 'Edit Contact' : 'Add Contact'}
                </Button>
            </Form>
        </Box>
    );
}
