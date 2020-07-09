var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p3Button = document.getElementById("p3");
var score1 = document.getElementById("sc1");
var score2 = document.getElementById("sc2");
var numinput = document.querySelector("input");
var paragraph = document.querySelector("#win");
var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameover = false;

p1Button.addEventListener("click", function() {
    if (!gameover) {
        p1score++;
        if (p1score == winningscore) {
            score1.classList.add("winner");
            gameover = true;
        }
        score1.textContent = p1score;
    }
});
p2Button.addEventListener("click", function() {
    if (!gameover) {
        p2score++;
        if (p2score == winningscore) {
            score2.classList.add("winner");
            gameover = true;
        }
        score2.textContent = p2score;
    }
});
p3Button.addEventListener("click", function() {
    p1score = 0;
    p2score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    paragraph.textContent = 0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameover = false;
});
numinput.addEventListener("change", function() {
    paragraph.textContent = numinput.value;
    winningscore = numinput.value;
});