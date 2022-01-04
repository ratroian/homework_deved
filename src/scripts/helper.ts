const nameVal = /^[a-zA-Z\\-]+$/;
const emailVal = /^[\w-\\.\d*]+@[\w\d]+(\.\w{2,4})$/;
// eslint-disable-next-line max-len
const phoneVal = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/;

type TError = {
    errorValidation? : boolean,
    message? : string
};

const validationName = (name:string):TError => {
    if (!name.match(nameVal)) return { errorValidation: true, message: 'first name not valid' };
    return {};
};

const validationSurname = (surname:string):TError => {
    if (!surname.match(nameVal)) return { errorValidation: true, message: 'last name not valid' };
    return {};
};

const validationEmail = (email:string):TError => {
    if (!email.match(emailVal)) return { errorValidation: true, message: 'login not valid' };
    return {};
};

const validationPhone = (phone:string):TError => {
    if ((phone !== '') && !phone.match(phoneVal)) return { errorValidation: true, message: 'number not valid' };
    return {};
};

export {
    validationName, validationSurname, validationEmail, validationPhone,
};
