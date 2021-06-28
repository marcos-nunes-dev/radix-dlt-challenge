import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Result, Button } from 'antd';
import { useRouter } from 'next/router';

export default function badRequest(): ReactElement {
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
                status='warning'
                title='Oops! Something went wrong.'
                subTitle='Looks like something is not as it should. Go to the login page and try again.'
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
