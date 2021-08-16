const btn = document.querySelector('#v2');
btn.onclick = () => {
    console.log('YOu clicked me!');
    console.log('I hope it worked.');
}
function scream() {
    console.log('AHHHHHHHHHHHHHHHHHHHHH');
    console.log("stop touching me!");
}
btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('clicked');
})