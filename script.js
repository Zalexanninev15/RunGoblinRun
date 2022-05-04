const goblin = document.getElementById("goblin");
const dynamite = document.getElementById("dynamite");

document.addEventListener("keydown", function(event) {
    goblinJump();
});

function goblinJump() {
    if (goblin.classList != "goblinJump") {
        goblin.classList.add("goblinJump")
    }
    setTimeout(function() {
        goblin.classList.remove("goblinJump")
    }, 300)
}

let isAlive = setInterval(function() {
    let goblinTop = parseInt(window.getComputedStyle(goblin).getPropertyValue("top"))
    let dynamiteLeft = parseInt(window.getComputedStyle(dynamite).getPropertyValue("left"))

    if (dynamiteLeft < 50 && goblinTop > 0 && goblinTop >= 150) {
        alert("Game over 😥\nTry again?")
    }
})