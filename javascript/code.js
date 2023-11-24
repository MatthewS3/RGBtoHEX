let container = document.querySelector(".container");
let RedBar = document.querySelector(".container #R-color");
let GreenBar = document.querySelector(".container #G-color");
let BlueBar = document.querySelector(".container #B-color");
let ConvertBox = document.querySelector(".container .convert span");
function toHex() {
  let redValue = Number(RedBar.value).toString(16);
  let greenValue = Number(GreenBar.value).toString(16);
  let blueValue = Number(BlueBar.value).toString(16);
  const convertcode = `#${redValue.padStart(2, "0")}${greenValue.padStart(
    2,
    "0"
  )}${blueValue.padStart(2, "0")}`;
  return (ConvertBox.innerText = convertcode);
}

function background() {
  return (container.style["background-color"] = ConvertBox.innerText);
}

function convertNow() {
  const value = event.target.value;
  event.target.parentElement.children[2].innerText = value;
  toHex();
  background();
}
RedBar.addEventListener("mousemove", convertNow);
GreenBar.addEventListener("mousemove", convertNow);
BlueBar.addEventListener("mousemove", convertNow);
RedBar.addEventListener("change", convertNow);
GreenBar.addEventListener("change", convertNow);
BlueBar.addEventListener("change", convertNow);