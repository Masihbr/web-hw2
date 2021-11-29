const change = document.getElementById("header");

function getRandomColor() {
  var letters = "0123456789abcdef";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradient() {
  return `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()}f7)`;
}

function changeColor() {
  console.log(change);
  change.style.background =
    `${getRandomGradient()}, url("statics/images/colorful.jpg")`;
}
