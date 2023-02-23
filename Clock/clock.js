setInterval(setClock, 1000);

let sec = document.querySelector(`[data-second]`);
let min = document.querySelector(`[data-minute]`);
let hou = document.querySelector(`[data-hour]`);

function setClock() {
  const dateNow = new Date();
  const getSecond = dateNow.getSeconds() / 60;
  const getMinute = (getSecond + dateNow.getMinutes()) / 60;
  const getHour = (getMinute + dateNow.getHours()) / 12;

  setRotaion(sec, getSecond);
  setRotaion(min, getMinute);
  setRotaion(hou, getHour);
}

function setRotaion(ele, rotate) {
  ele.style.setProperty(`--rotation`, rotate * 360);
}

setClock();
