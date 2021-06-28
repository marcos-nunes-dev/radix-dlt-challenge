import React, { ReactElement } from 'react';
import { Box } from 'components/Box';
import { ContactsProvider } from 'providers/ContactsProvider';

interface Props {
    children: React.ReactNode;
}

export function AuthPage({ children }: Props): ReactElement {
    return (
        <Box width='100vw' minHeight='100vh' display='flex'>
            <ContactsProvider>{children}</ContactsProvider>
        </Box>
    );
}
