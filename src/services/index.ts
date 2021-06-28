export * from 'axios';
import axios from 'axios';

export const instance = axios.create({
    // change this to absolute if u are running locally
    // change to http://localhost:3000/api/
    baseURL: 'https://radix-dlt-challenge.vercel.app/api/',
});
