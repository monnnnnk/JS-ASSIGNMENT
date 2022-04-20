const clockTitle = document.querySelector("h2#clock");

function dDay() {
  const xDay = new Date("2022-12-25");
  const today = new Date();
  // console.log(xDay);
  const leftDay = xDay - today;
  // console.log(leftDay);

  const leftDayD = Math.floor(leftDay / (1000 * 60 * 60 * 24));
  const leftHour = Math.floor((leftDay / (1000 * 60 * 60)) % 24);
  const leftMin = Math.floor((leftDay / (1000 * 60)) % 60);
  const leftSec = Math.floor((leftDay / 1000) % 60);
  clockTitle.innerHTML = `${leftDayD}d ${leftHour}h ${leftMin}m ${leftSec}s`;
}

dDay();
setInterval(dDay, 1000);
