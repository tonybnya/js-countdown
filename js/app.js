const countdown = () => {
  // setting the time limit to midnight 12-31-2021 
  const countDate = new Date("Dec 31, 2021 00:00:00").getTime();
  // setting the current time
  const now = new Date().getTime();

  // setting the gap between
  const gap = countDate - now;

  // setting time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // make calculations
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // DOM manipulations
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
