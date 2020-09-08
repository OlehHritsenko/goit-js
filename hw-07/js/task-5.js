const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const nameChange = () => {
    nameOutputRef.textContent = nameInputRef.value === '' ?  'незнакомец' : nameInputRef.value;
} 

nameInputRef.addEventListener('input', nameChange);