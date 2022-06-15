function renderClock() {
  var date = new Date();
  document.getElementById("clock").innerText =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

setInterval(renderClock, 1000); //at regular interval
