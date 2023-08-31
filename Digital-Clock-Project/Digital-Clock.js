const weekDays = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];

function updateBackgroundAndAmPmClasses(hour) {
  const body = document.body;
  const ampm = hour <= 12 ? "Am" : "Pm";

  if (hour > 6 && hour < 18) {
    body.classList.remove("image-background-night");
    body.classList.add("image-background-day");
  } else {
    body.classList.remove("image-background-day");
    body.classList.add("image-background-night");
  }

  document.querySelector('.ampm-js').innerHTML = ampm;
}

let timeoutId;

function calculateTime() {

  
  const today = new Date();
  const day = weekDays[today.getDay()];
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  

  document.querySelector('.time-js').innerHTML = time;
  document.querySelector('.day-js').innerHTML = day;

  updateBackgroundAndAmPmClasses(hours);

  timeoutId = setTimeout(calculateTime, 200);

  
}


document.querySelector('.switch-js')
 .addEventListener('click', changeHourFormat);

 let hourFormat = false;

function changeHourFormat() {
  const today = new Date();
  let hours = today.getHours();
  const minutes = today.getMinutes();

    if (!hourFormat) {
      clearTimeout(timeoutId); 
      hourFormat = true;
    } else {
      calculateTime();
      hourFormat = false;
    }

    if(hours >= 12 ) {
      hours = hours - 12
      const time2 = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      document.querySelector('.time-js').innerHTML = time2;
      console.log(time2)
    } 

    const body = document.body;
    const ampm = hours <= 12 ? "Am" : "Pm";

    if (ampm === "Am") {
      body.classList.remove("image-background-night");
      body.classList.add("image-background-day");
    } else {
      body.classList.remove("image-background-day");
      body.classList.add("image-background-night");
    }

   

  }


window.addEventListener('load', calculateTime);

