import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { LoginForm } from 'components/LoginForm';
import { ArtboardWrapper } from './styles';
import { useRouter } from 'next/router';
import { encryptPassword } from 'utils/crypto';
import { LoginValuesType } from 'types/definitions';

export function Login(): ReactElement {
    const { push } = useRouter();

    const handleLoginForm = (values: LoginValuesType) => {
        values &&
            push(
                `/contacts?u=${values.userid}&p=${encryptPassword(
                    values.password
                )}`
            );
    };

    return (
        <Box
            display='flex'
            alignItems='stretch'
            justifyContent='center'
            width='100vw'
            height='100vh'
        >
            <Box flex='1'>
                <Box
                    p='5%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    height='100%'
                >
                    <Box as='img' alignSelf='flex-start' src='/img/logo.svg' />
                    <Box>
                        <Text
                            as='h1'
                            fontSize='2.4rem'
                            lineHeight='2.8rem'
                            maxWidth='70%'
                            color='primary'
                            mb='3'
                        >
                            Welcome to Simple Secure Contact Manager
                        </Text>
                        <Text color='primary' fontWeight='100'>
                            Please enter the password for your contact data
                            file.
                        </Text>
                        <LoginForm handleLoginForm={handleLoginForm} />
                    </Box>
                    <Box>
                        <Text as='small' color='primary'>
                            Marcos Nunes - Radix Challenge
                        </Text>
                    </Box>
                </Box>
            </Box>
            <ArtboardWrapper flex='1' />
        </Box>
    );
}
