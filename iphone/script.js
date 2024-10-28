
// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;
} showTime();


const gallary = document.querySelector('.gallary'),
    photo = document.querySelector('.ga'),
    iphone = document.querySelector('#iphone'),
    phone = document.querySelector('.phone'),
    im = document.querySelector('.im'),
    rec = document.querySelector('.rec'),
    center = document.querySelector('.center'),
    // app = document.querySelector('.app'),
    // main = document.querySelector('.main'),
    // photos = document.querySelector('#photos'),
    pqr = document.querySelector('#pqr');

gallary.addEventListener('click', () => {
    pqr.classList.remove('im');
    pqr.classList.toggle('photo');
    center.classList.toggle('im');
    iphone.classList.toggle('phone');
    rec.classList.toggle('im');
    // fa.classList.toggle('im');
    // app.classList.toggle('im');
    // main.classList.toggle('im');
})