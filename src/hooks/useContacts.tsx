import { useContext } from 'react';
import { ContactsContext } from 'providers/ContactsProvider';

export const useContacts = () => {
    const [state, setState] = useContext(ContactsContext);

    return {
        contacts: state,
        setContacts: setState,
    };
};
