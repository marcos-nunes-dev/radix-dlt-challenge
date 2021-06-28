export const nameRules = [
    {
        required: true,
        message: 'Type your name here.',
    },
];

export const phoneRules = [
    {
        required: true,
        message: 'Type your phone here.',
    },
    {
        required: true,
        pattern: new RegExp(/^[0-9]*$/g),
        message: 'Only numbers allowed.',
    },
];

export const emailRules = [
    {
        required: true,
        message: 'Type your email here.',
    },
    {
        required: true,
        pattern: new RegExp(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
        message: 'Enter a valid email.',
    },
];

export const addressRules = [
    {
        required: true,
        message: 'Type your Address here.',
    },
];
