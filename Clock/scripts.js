const setTime = ()=> {
    const secondHand = document.querySelector('.sec-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date()

    const seconds = now.getSeconds()
    const secDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    if (seconds ===  0){
        console.log('woop');
        secondHand.style.transition = '0s';
    } else {
        secondHand.style.transition = '';
    }

    if (minutes ===  0){
        console.log('woop');
        minHand.style.transition = '0s';
    } else {
        minHand.style.transition = '';
    }

    if (hours ===  0){
        console.log('woop');
        hourHand.style.transition = '0s';
    } else {
        hourHand.style.transition = '';
    }
    
}

setInterval(setTime, 1000)
