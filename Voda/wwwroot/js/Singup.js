let submitBtn = document.getElementById('signUp-btn');
submitBtn.addEventListener("click", checkForm);

function checkForm(event) {
    

    let elem = document.getElementById('sign-up-form');
    let username = elem.username.value;
    let password = elem.password.value;

    if (password.length < 8) {
        document.getElementById('password-error').classList.add('error');
        event.preventDefault();
    }
    else {
        document.getElementById('password-error').classList.remove('error');
        document.getElementById('password-error').classList.add('right');
    }
    if (username.length < 1) {
        document.getElementById('username-error').classList.add('error');
        event.preventDefault();
    }
    else {
        document.getElementById('username-error').classList.remove('error');
        document.getElementById('username-error').classList.add('right');
    }
}

