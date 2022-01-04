import '../css/styles.css';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
    validationName, validationSurname, validationEmail, validationPhone,
} from './helper';

const submite = <HTMLInputElement>document.getElementById('sign-up-button');

const firstName = <HTMLInputElement>document.querySelector('#signup__firstname');
const lastName = <HTMLInputElement>document.querySelector('#signup__lastname');
const email = <HTMLInputElement>document.querySelector('#signup__login');
const phone = <HTMLInputElement>document.querySelector('#signup__password');
const adress = <HTMLInputElement>document.querySelector('#agress_area');
const congratulation = <HTMLInputElement>document.querySelector('.congratulation');

const submitForm = async (name:string, surname:string, emailUser:string, phoneUser:string, adressUser:string) => {
    try {
        const response = await axios.post('http://localhost:5000/create-user', {
            name,
            surname,
            emailUser,
            phoneUser,
            adressUser,
        });
        if (response.status === 201) congratulation.classList.remove('hidden');
    } catch (error) {
        console.error('user not created');
    }
};

firstName.addEventListener('blur', () => {
    const { errorValidation } = validationName((<HTMLInputElement>firstName).value);
    if (errorValidation) {
        firstName.classList.add('error');
        submite.disabled = true;
    } else {
        firstName.classList.remove('error');
        submite.disabled = false;
    }
});

lastName.addEventListener('blur', () => {
    const { errorValidation } = validationSurname((<HTMLInputElement>lastName).value);
    if (errorValidation) {
        lastName.classList.add('error');
        submite.disabled = true;
    } else {
        lastName.classList.remove('error');
        submite.disabled = false;
    }
});

email.addEventListener('blur', () => {
    const { errorValidation } = validationEmail((<HTMLInputElement>email).value);
    if (errorValidation) {
        email.classList.add('error');
        submite.disabled = true;
    } else {
        email.classList.remove('error');
        submite.disabled = false;
    }
});

phone.addEventListener('blur', () => {
    const { errorValidation } = validationPhone((<HTMLInputElement>phone).value);
    if (errorValidation) {
        phone.classList.add('error');
        submite.disabled = true;
    } else {
        phone.classList.remove('error');
        submite.disabled = false;
    }
});

submite.addEventListener('click', (event) => {
    event.preventDefault();
    submitForm((firstName).value, (lastName).value, (email).value, (<HTMLInputElement>phone).value, (<HTMLInputElement>adress).value);
});
