var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var head = document.querySelector("h1");
var newgame = document.querySelector("#new");
var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");

easy.addEventListener("click", function () {
  easy.classList.add("selected");

  hard.classList.remove("selected");
  numsquares = 3;
  colors = generaterandomcolors(numsquares);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = "none";
    }
  }
  head.style.background = "steelblue";
});
hard.addEventListener("click", function () {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  numsquares = 6;
  colors = generaterandomcolors(numsquares);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = "none";
    }
  }
  head.style.background = "steelblue";
});

easy.classList.remove("selected");
hard.classList.remove("selected");

newgame.addEventListener("click", function () {
  colors = generaterandomcolors(numsquares);
  messageDisplay.textContent = " ";
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  this.textContent = "New Colors";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  head.style.background = "steelblue";
});
colorDisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedcolor = this.style.background;
    if (clickedcolor == pickedcolor) {
      messageDisplay.textContent = "Correct";
      newgame.textContent = "Play Again";

      changeColors(clickedcolor);
      head.style.background = clickedcolor;
    } else {
      this.style.background = "black";
      messageDisplay.textContent = "try again";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generaterandomcolors(numsquares) {
  var arr = [];
  for (var i = 0; i < numsquares; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
