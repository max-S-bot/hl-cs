

//https://www.w3schools.com/cssref/pr_class_display.php

window.addEventListener("load",init);
document.getElementById("update").addEventListener("click",update);
document.getElementById("del").addEventListener("click",del);

const l =  window.location.href;
const i = l.substring(l.indexOf("?id=")+4);

function init() {
  const obj  = objFromLocal(i);
  if (obj.name=="David Wilson") {
    document.getElementById("pic").src = "dave.jpeg";
  }
  addRow(obj);
  document.getElementById("head").textContent = obj.name;
}


function addRow(obj) {
  const row = document.createElement("tr");
  row.id = obj.num;
  for (let key in obj) {
    if (key=="num") {continue;}
    const cell = document.createElement("td");
    const ip = document.createElement("input");
    ip.id = key
    ip.value = obj[key];
    cell.appendChild(ip);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

//updates obj with values from
// the html page
function update() {
  const obj = objFromLocal(i);
  for (let key in obj) {
    if (key=="num") {continue;}
    const ip = document.getElementById(key);
    obj[key] = ip.value;
  }
  objToLocal(obj);
  document.getElementById("head").textContent = obj.name;
}

// store an object in localStorage
function objToLocal(obj) {
  const s = JSON.stringify(obj);
  localStorage.setItem(i,s);
}

// retrieve object with index/num
// property "i" from localStorage
function objFromLocal(i) {
  const s  = localStorage.getItem(i);
  const obj = JSON.parse(s);
  return obj;
}

function del() {
  localStorage.removeItem(i);
  const nums = JSON.parse(localStorage.getItem("nums"));
  const index = nums.indexOf(parseInt(i));
  nums.splice(index,1);
  localStorage.setItem("nums",JSON.stringify(nums));
  document.getElementById("update").removeEventListener("click",update);
  document.getElementById("del").removeEventListener("click",del);
}