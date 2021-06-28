import React, { useState } from 'react';

const ContactsContext = React.createContext([] as any);

const ContactsProvider: React.FC = ({ children }) => {
    const [state, setState] = useState();

    return (
        <ContactsContext.Provider value={[state, setState]}>
            {children}
        </ContactsContext.Provider>
    );
};

export { ContactsContext, ContactsProvider };
