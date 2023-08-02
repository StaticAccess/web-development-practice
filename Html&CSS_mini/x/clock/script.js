function rotateClockHands() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
  
    const hourDeg = 30 * (hours % 12) + (0.5 * minutes);
    const minuteDeg = 6 * minutes + (0.1 * seconds);
    const secondDeg = 6 * seconds;
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);
  