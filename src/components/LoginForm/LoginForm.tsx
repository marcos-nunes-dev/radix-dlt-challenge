import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Form, Input, Button } from 'antd';
import { useridRules, passwordRules } from './rules';
import { LoginValuesType } from 'types/definitions';

interface Props {
    handleLoginForm?: (values: LoginValuesType) => void;
}

export function LoginForm({
    handleLoginForm = () => {
        console.info('No handler passed as props');
    },
}: Props): ReactElement {
    return (
        <Box>
            <Form layout='vertical' onFinish={handleLoginForm}>
                <Box maxWidth='60%'>
                    <Form.Item rules={useridRules} hasFeedback name='userid'>
                        <Input placeholder='User ID' size='large' />
                    </Form.Item>
                    <Form.Item
                        rules={passwordRules}
                        hasFeedback
                        name='password'
                    >
                        <Input.Password placeholder='Password' size='large' />
                    </Form.Item>
                    <Button htmlType='submit' type='primary' size='large'>
                        Login
                    </Button>
                </Box>
            </Form>
        </Box>
    );
}
