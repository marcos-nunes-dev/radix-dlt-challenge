import CryptoJS from 'crypto-js';
import { ContactType } from 'types/definitions';

/**
 *
 * @param password String TEXT password
 * @returns String ENCRYPTED password
 */
export const encryptPassword = (password: string) => {
    try {
        const encJson = CryptoJS.AES.encrypt(
            JSON.stringify(password),
            process.env.NEXT_PUBLIC_APP_SECRET
        ).toString();
        const encData = CryptoJS.enc.Base64.stringify(
            CryptoJS.enc.Utf8.parse(encJson)
        );
        return encData;
    } catch (error) {
        console.log('What u are trying to do?');
    }
};

/**
 *
 * @param hashpass String ENCRYPTED password
 * @returns String TEXT password
 */
export const handlePassFromRoute = (hashpass: string) => {
    if (!hashpass) throw 'No password given.';
    const decData = CryptoJS.enc.Base64.parse(hashpass).toString(
        CryptoJS.enc.Utf8
    );
    const bytes = CryptoJS.AES.decrypt(
        decData,
        process.env.NEXT_PUBLIC_APP_SECRET
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(bytes);
};

/**
 *
 * @param data Object data to be encrypted and saved
 * @param password String TEXT to be used as password on encryptation
 * @returns CryptoJS response on AES encryptation
 */
export const createEncryptDataFile = (
    data: ContactType[],
    password: string
) => {
    if (!data) throw 'No data given.';
    const encJson = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        password
    ).toString();
    const encData = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Utf8.parse(encJson)
    );
    return encData;
};

/**
 *
 * @param data Object data to be decrypted from fs
 * @param password String ENCRYPTED password
 * @returns ? Data object : error if the pass was wrong
 */
export const decryptDataConvertJSON = (data: string, password: string) => {
    if (!data) return { error: 'no data was given' };

    const decryptedPass = handlePassFromRoute(password);

    try {
        const decData = CryptoJS.enc.Base64.parse(data).toString(
            CryptoJS.enc.Utf8
        );
        const bytes = CryptoJS.AES.decrypt(decData, decryptedPass).toString(
            CryptoJS.enc.Utf8
        );
        return JSON.parse(bytes);
    } catch (err) {
        return { error: 'wrong password' };
    }
};
