const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showFailure(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control failure';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showFailure(input, `${getFieldName(input)} é requerido`);
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input_1, input_2) {
    if (input_1.value !== input_2.value) {
        showFailure(input_2, 'Passwords do not match');
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showFailure(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showFailure(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else {
        showSuccess(input);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 30);
    checkPasswordsMatch(password, password2);
});