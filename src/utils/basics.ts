export const snakeCase = (string: string) => {
    return string
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join('_');
};

export const onlyNumbers = (string: string) => {
    return string.replace(/\D/g, '');
};

export const findWithAttr = (array, attr, value) => {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
};
