const makeRandColor = () => {
    const red = Math.floor(Math.random() * 255 + 1);
    const green = Math.floor(Math.random() * 255 + 1);
    const blue = Math.floor(Math.random() * 255 + 1);
    return `rgb(${red},${green},${blue})`;
}
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', colorize)

}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}