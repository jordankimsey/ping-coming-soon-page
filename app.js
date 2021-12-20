const email = document.querySelector('input[name=email]');
const button = document.querySelector('#submit');
const text = document.querySelector('#message');
const inputContainer = document.querySelector('.inputContainer');

const validateEmail = (email) => {
  let regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

button.addEventListener('click', () => {
    if (validateEmail(email.value)) {
        inputContainer.classList.remove('error');
        text.classList.add('success');
        text.innerHTML = 'Success!';
        email.value = '';
        s
    } else {
        text.innerText = 'Please provide a valid email address';
        inputContainer.classList.add('error');
    }
})