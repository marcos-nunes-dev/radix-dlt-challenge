import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Result, Button } from 'antd';
import { useRouter } from 'next/router';

export default function notFound(): ReactElement {
    const { push } = useRouter();
    return (
        <Box
            width='100vw'
            minHeight='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Result
                title='This account does not exist.'
                subTitle='
            We take the liberty of creating an account for you with your previously used ID and password. Log in to access your new account.'
                extra={
                    <Button
                        type='primary'
                        size='large'
                        key='console'
                        onClick={() => push('/')}
                    >
                        Go back to Login
                    </Button>
                }
            />
        </Box>
    );
}
