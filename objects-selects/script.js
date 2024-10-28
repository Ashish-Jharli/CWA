let species = ["Animals", "Vegetables"];
let animals = ["Lion", "Cow", "Turtle"];
let vegetables = ["Cucumber", "Pumpkin", "Potato"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

species.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

slct1.onchange = function () {
    slct2.innerHTML = "<option></option>";
    if (this.value == "Animals") {
        addToSlct2(animals);
    }
    if (this.value == "Vegetables") {
        addToSlct2(vegetables)
    }
};
function addToSlct2(arr) {
    arr.forEach(function (item) {
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        slct2.appendChild(option);
    });
};