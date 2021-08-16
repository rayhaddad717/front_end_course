let allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src);
}
// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = ''
// }
const Links = document.querySelectorAll('a');
for (let link of Links) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}