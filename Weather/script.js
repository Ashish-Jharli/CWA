let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "6d83156e4e40ca97d0c6924b832fe00c";
const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if (jsonData.cod == 400) {
        alert("Please Enter Location");
        image.src = "img/error-400.png";
        city.innerHTML = "";
        type.innerHTML = "";
        temp.innerHTML = "";
    }
    if (jsonData.cod == 404) {
        alert("Please Enter Write Location");
        image.src = "img/error-404.gif";
        city.innerHTML = search;
        type.innerHTML = "";
        temp.innerHTML = "";
    }

    city.innerHTML = search;
    type.innerHTML = jsonData.weather[0].main;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "&deg;C";

    if (type.innerHTML == "Clouds") {
        image.src = "img/cloud.webp";
    } if (type.innerHTML == "Clear") {
        image.src = "img/clear-sky.avif";
    } if (type.innerHTML == "Rain") {
        image.src = "img/rain-sky.jpg";
    } if (type.innerHTML == "Snow") {
        image.src = "img/snow-sky.png";
    } if (type.innerHTML == "Haze") {
        image.src = "img/haze-sky.jpg";
    } if (type.innerHTML == "Strom") {
        image.src = "img/storm-sky.png";
    }
    input.value = "";
}

function myFun() {
    search = input.value;
    data(search)
};
