const button = document.querySelector('button');
button.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 255 + 1);
    const green = Math.floor(Math.random() * 255 + 1);
    const blue = Math.floor(Math.random() * 255 + 1);
    const color = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = color;

    const h1 = document.querySelector('h1');
    h1.innerText = color;
    h1.style.textAlign = "center";
})