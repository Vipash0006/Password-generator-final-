const showError = (element, message) => {
    element.textContent = message;
    element.classList.remove('hidden');
};
const hideError = (element) => {
    element.textContent = '';
    element.classList.add('hidden');
};
const generatePassword = () => {
    const length = document.getElementById('length').value;
    if (length === '' || length < 4 || length > 20) {
        showError(document.getElementById('length-error'), 'Please enter a length between 4 and 20.');
        return;
    } else {
        hideError(document.getElementById('length-error'));
    }
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    // const Hindi = document.getElementById('Hindi').checked;
    // const Punjabi = document.getElementById('Punjabi').checked;
    let charset = '';
    let flag = false;
    let password = '';
    if (uppercase){ charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; flag = true;}
    if (lowercase){ charset += 'abcdefghijklmnopqrstuvwxyz'; flag = true;}
    if (numbers){ charset += '0123456789'; flag = true;}
    if (symbols){ charset += '!@#$%^&*()-_+=/?'; flag = true;}
    // if (Hindi){ charset += 'कखगघचछजझटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ'; flag = true;}
    // if (Punjabi){ charset += 'ਅਬਭਗਧਢੲਵਦਡਹਘਥਠਯਕਚਲਮਨਣ(ਸ਼)ੳਪਫਸਖਛਰਖਤਟ'; flag = true;}

    if(!flag){
        password = "undefined";
    }
    if(flag){
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
}
    document.getElementById('password').value = password;
};
document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
    alert('Password copied to clipboard!');
});
