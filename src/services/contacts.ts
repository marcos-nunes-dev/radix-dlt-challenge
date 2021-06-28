import { instance } from 'services';
import { ContactType } from 'types/definitions';

interface IResponse {
    data?: Record<string, unknown>;
    status: number;
}

export const getContactsByID = (id: string, password: string) => {
    return new Promise((resolve, reject) => {
        instance
            .post(`/contact/list`, {
                id,
                password,
            })
            .then((data: IResponse) => resolve(data))
            .catch((error) => reject(error));
    });
};

export const editContactsByID = (
    id: string,
    password: string,
    data: ContactType
) => {
    return new Promise((resolve, reject) => {
        instance
            .post(`/contact/edit`, {
                id,
                password,
                data,
            })
            .then((data: IResponse) => resolve(data))
            .catch((error) => reject(error));
    });
};

export const deleteContactByID = (
    id: string,
    password: string,
    data: ContactType
) => {
    return new Promise((resolve, reject) => {
        instance
            .post(`/contact/delete`, {
                id,
                password,
                data,
            })
            .then((data: IResponse) => resolve(data))
            .catch((error) => reject(error));
    });
};
