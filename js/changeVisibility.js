const iconPassword = document.querySelector('.icon-eyesPassword')

iconPassword.addEventListener('click', changeVisibility)

function changeVisibility() {
    const password = document.getElementById('password')

    if(password.type === 'password') {
        password.setAttribute('type', 'text')
        iconPassword.classList.add('hide')
    } else {
        password.setAttribute('type', 'password')
        iconPassword.classList.remove('hide') 
    }
}