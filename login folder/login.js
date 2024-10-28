const username = document.getElementById('username');
const password = document.getElementById('password');

function Submit() {
    if (username.value === 'ashishkumar' && password.value === 'Ashu@7851') {
        console.log('log in successfully.');
    } else if (username.value !== 'ashishkumar' && password.value !== 'Ashu@7851') {
        console.log('please enter a correct Username & Password.');
    } else if (username.value !== 'ashishkumar') {
        console.log('please enter a correct Username.');
    } else {
        console.log('please enter a correct Password.');
    }
};