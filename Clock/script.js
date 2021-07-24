

const button=document.querySelector('[hi]')

const checkBox=document.querySelector('[syncSwtitch]')

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

const s=document.getElementById('switch');






const cb = document.getElementById('accept');
if(cb.checked){
alert(`Key pressed\r\n key code value: `);}









function setClock(){
    const currentDate=new Date()
    
alert(`Key pressed\r\n key code value: `)
    const secondsRatio= currentDate.getSeconds() / 60
    const minutesRatio=(secondsRatio + currentDate.getMinutes())/ 60    
    const hoursRatio=(minutesRatio + currentDate.getHours())/12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
function sync(element){
    if(element.checked){
    setClock();}
    else{setClock();}
   // setInterval(setClock,1000)
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

button.addEventListener("click", setClock);