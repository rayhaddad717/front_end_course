let p1Score = 0;
let p2Score = 0;
const updateDisplay = () => {
    scoreDisplay.innerText = `${p1Score} to ${p2Score}`;
}
const p1Btn = document.querySelector('#p1');
const p2Btn = document.querySelector('#p2');
const resetBtn = document.querySelector('#reset');
const scoreDisplay = document.querySelector('#score');
const updateScoreButtons = document.querySelectorAll('.add1Score');
let playingToNumber = document.querySelector('#playingToNumber');
let playingToNumberValue = 3;
const disableButtons = (disable) => {
    if (disable) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Btn.classList.toggle('add1Score');
        p2Btn.classList.toggle('add1Score');
        p1Btn.classList.add('disableButtons');
        p2Btn.classList.add('disableButtons');
        return;
    }
    p1Btn.classList.toggle('add1Score');
    p2Btn.classList.toggle('add1Score');
    p1Btn.classList.remove('disableButtons');
    p2Btn.classList.remove('disableButtons');
    p1Btn.disabled = false;
    p2Btn.disabled = false;

}
const changeScoreStyle = (winningPlayer) => {
    scoreDisplay.style.display = "none";
    const winner = document.createElement('span');
    const loser = document.createElement('span');
    const to = document.createElement('span');
    to.innerText = ' to ';
    winner.classList.add('winner');
    loser.classList.add('loser');
    const div = document.createElement('div');
    div.classList.add('finalScore');
    scoreDisplay.insertAdjacentElement('afterend', div);
    if (winningPlayer === 'p1') {
        winner.innerText = p1Score;
        loser.innerText = p2Score;
        div.append(winner, to, loser);
    }
    else {
        winner.innerText = p2Score;
        loser.innerText = p1Score;
        div.append(loser, to, winner);
    }
}
playingToNumber.addEventListener('change', () => {
    playingToNumberValue = parseInt(playingToNumber.selectedOptions[0].value);
});
resetBtn.addEventListener('click', () => {
    scoreDisplay.innerText = '0 to 0';
    scoreDisplay.style.display = "block";
    playingToNumber = document.querySelector('#playingToNumber');
    p1Score = 0;
    p2Score = 0;
    disableButtons(false);
    document.querySelector('.finalScore').remove();
    playingToNumber.disabled = false;
});

scoreDisplay.addEventListener('change', () => {
    if (scoreDisplay.innerText === '1 to 0') { alert('worked'); }
})
for (let btn of updateScoreButtons) {
    btn.addEventListener('click', function (e) {
        playingToNumber.disabled = true;
        if (e.target.id === 'p1') {
            p1Score++;
            if (p1Score >= playingToNumberValue) {
                changeScoreStyle("p1");
                disableButtons(true);
                return;
            }
        }
        else {
            p2Score++; if (p2Score >= playingToNumberValue) {
                changeScoreStyle("p2");
                disableButtons(true);
                return;
            }
        }
        updateDisplay();
    });
}