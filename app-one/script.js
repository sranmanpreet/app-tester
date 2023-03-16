let jumpButton = document.getElementById("jumpButton");
let babyCartoon = document.getElementById("babyCartoon");

jumpButton.addEventListener('click', jump);

function jump() {
    babyCartoon.classList.add('jump-baby');
    jumpButton.disabled = true;
    setTimeout(() => {
        babyCartoon.classList.remove('jump-baby');
        jumpButton.disabled = false;
    }, 2000);
}

document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        jump();
    }
}