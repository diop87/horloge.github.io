const hour = document.querySelector(".ch");
const minute = document.querySelector(".cm");
const seconde = document.querySelector(".cs");
const degree = 6;
function clock(){
let current = new Date();
let hr =  current.getHours() * 30;
let mr =  current.getMinutes() * degree;
let sr =  current.getSeconds() * degree;

hour.style.transform = `rotateZ(${hr + mr/12}deg)`;
minute.style.transform = `rotateZ(${mr}deg)`;
seconde.style.transform = `rotateZ(${sr}deg)`;

document.getElementById("digital-hour").innerHTML = hr/ 30;
document.getElementById("digital-minutes").innerHTML = mr / degree;
document.getElementById("digital-seconds").innerHTML = sr / degree;


}
setInterval(clock,0);