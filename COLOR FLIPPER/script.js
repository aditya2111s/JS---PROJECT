const green = document.getElementsByClassName("green")[0];
const red = document.getElementsByClassName("red")[0];
const blue = document.getElementsByClassName("blue")[0];
const random = document.getElementsByClassName("random")[0];

const colorChange = (color) => {
  document.body.style.backgroundColor = color;
};
green.addEventListener("click", () => {
  colorChange("green");
});
red.addEventListener("click", () => {
  colorChange("red");
});
blue.addEventListener("click", () => {
  colorChange("blue");
});
random.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  colorChange(`rgb(${r}, ${g}, ${b})`);
});
