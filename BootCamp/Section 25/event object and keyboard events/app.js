document.querySelector('button').addEventListener('click', function (event) { console.log(event); });
const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e);
})
// input.addEventListener('keyup', function () {
//     console.log('keyup');
// })