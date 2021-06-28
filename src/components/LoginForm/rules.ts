export const passwordRules = [
    {
        required: true,
        message: 'Type your password here.',
    },
    {
        min: 5,
        message: 'Password must be minimum 5 characters.',
    },
];

export const useridRules = [
    {
        required: true,
        message: 'Type your password here.',
    },
    {
        min: 5,
        message: 'Password must be minimum 5 characters.',
    },
    {
        required: true,
        pattern: new RegExp(/^[0-9]*$/g),
        message: 'Only numbers allowed.',
    },
];
