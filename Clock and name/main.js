let name = document.getElementById("name");
let time = document.getElementById("time");

name.addEventListener("blur", setName);
name.addEventListener("keypress", setName);

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    sec = today.getSeconds();

  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span><div class="sec-container">${addZero(sec)}</div>`;
  setTimeout(showTime, 1000);
}
let addZero = s => parseInt(s) < 10 ? "0" + s : s;
function getName() {
  if (localStorage.getItem("name") != null) {
    name.textContent = localStorage.getItem("name");
  } else {
    name.textContent = "[Enter your name]";
  }
}
function setName(e) {
  if (e.type == "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("name", name.textContent);
      name.blur();
    }
  } else {
    localStorage.setItem("name", name.textContent);
  }
}

showTime();
getName();
