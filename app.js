let score = 0;
let cross = true;
audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    console.log(e.key)
    if (e.key == 'ArrowUp') {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    } else if (e.key == 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    } else if (e.key == 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gamOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        dino.classList.add('deadAni');
        gamOver.innerHTML = "Game Over !"
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            dino.classList.remove('deadAni');
            audiogo.pause();
            Audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score++;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreContainer.innerHTML = `Your Score: ${score}`;
}