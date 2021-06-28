import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { AuthPage } from 'components/Templates/AuthPage';
import { getContactsByID } from 'services/contacts';
import { Result } from 'antd';
import { decryptDataConvertJSON } from 'utils/crypto';
import { ContactList } from 'components/Templates/ContactList';

export default function index({ data, error }): ReactElement {
    if (error) {
        return (
            <Box
                width='100vw'
                minHeight='100vh'
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Result
                    status='error'
                    title='Incorrect password.'
                    subTitle='It appears that your password is incorrect. Please try again or contact support.'
                />
            </Box>
        );
    }
    return (
        <AuthPage>
            <ContactList data={data} />
        </AuthPage>
    );
}

export async function getServerSideProps({ query }) {
    if (!query?.u || !query?.p)
        return {
            redirect: { permanent: false, destination: '/error/bad-request' },
        };

    try {
        const res: any = await getContactsByID(query?.u, query?.p);
        switch (res.status) {
            case 200:
                const convertedData = decryptDataConvertJSON(
                    res.data,
                    query?.p
                );
                return {
                    props: convertedData.error
                        ? { error: convertedData.error }
                        : { data: convertedData },
                };
            case 201:
                return {
                    redirect: {
                        permanent: false,
                        destination: '/error/not-found',
                    },
                };
            default:
                return { props: {} };
        }
    } catch (error) {
        return {
            redirect: { permanent: false, destination: '/error/bad-request' },
        };
    }
}
