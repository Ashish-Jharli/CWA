let cont = document.querySelector('.cont');
let cont2 = document.querySelector('.cont2');
function generateOTP(length) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}
cont.innerText = generateOTP(4);
cont2.innerText = generateOTP(6);
// console.log(generateOTP(4));
// console.log(generateOTP(6));
