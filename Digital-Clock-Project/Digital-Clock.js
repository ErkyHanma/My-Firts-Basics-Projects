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

function calculateTime() {
  const today = new Date();
  const day = weekDays[today.getDay()];
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  document.querySelector('.time-js').innerHTML = time;
  document.querySelector('.day-js').innerHTML = day;

  updateBackgroundAndAmPmClasses(hours);

  setTimeout(calculateTime, 200);
}

window.addEventListener('load', calculateTime);
