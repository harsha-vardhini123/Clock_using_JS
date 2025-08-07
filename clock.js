function updateclock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const sec = now.getSeconds().toString().padStart(2, 0);
  const ms = now.getMilliseconds().toString().padStart(2, 0);
  const time = `${hours}:${minutes}:${sec}:${ms} ${meridiem}`;
  document.getElementById("clock").textContent = time;
}
updateclock();
setInterval(updateclock, 100);
