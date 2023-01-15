let email = document.getElementById('email');
let error = document.getElementById('error');
let btn = document.getElementById('submit');

btn.addEventListener('click', function () {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (email.value.match(pattern)) {
        error.style.opacity = '0';
    }
    else {
        error.style.opacity = '1';
    }
})