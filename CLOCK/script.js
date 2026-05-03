let clock = document.getElementById("clock");
clock.style.color = "black";
document.body.style.backgroundColor = "grey";
clock.style.fontFamily = "sans-serif";
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  clock.textContent = `${hour} : ${min} : ${seconds}`;
  console.log(clock.textContent);
}, 1000);
