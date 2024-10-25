
const angle = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * angle;
    let ss = day.getSeconds() * angle;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

// setInterval(() => {
//     const day = new Date();
//     const hour = day.getHours();
//     const min = day.getMinutes();
//     const sec = day.getSeconds();

//     let hh = 30 * hour + min / 2;
//     let mm = 6 * min;
//     let ss = 6 * sec;

//     hr.style.transform = `rotate(${hh}deg)`;
//     mn.style.transform = `rotate(${mm}deg)`;
//     sc.style.transform = `rotate(${ss}deg)`;
// }, 1000);