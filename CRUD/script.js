window.addEventListener('load', init);
const table = document.getElementById("table");
const dontStr = "dont_reinitialize_everything";


//store employees array in localStorage
//each employee has its own id in local
//(this is a number)
function init() {

  let data;
  if (window.location.href.includes(dontStr)) {
    const numbers = JSON.parse(localStorage.getItem("nums"));
    data = [];
    for (let num of numbers) {
      data.push(objFromLocal(num));
    }
  } else {
    localStorage.clear();
    data = employees;
  }
  const nums = [];
  for (let employee of data) {
    addRow(employee);
    objToLocal(employee);
    nums.push(employee.num);
  }
  localStorage.setItem("nums",JSON.stringify(nums));
  addEmpty();
}

// store obj in localStorage
function objToLocal(obj) {
  const s = JSON.stringify(obj);
  localStorage.setItem(obj.num,s);
}

// retrieve object with index/num
// property "i" from localStorage
function objFromLocal(i) {
  const s  = localStorage.getItem(i);
  const obj = JSON.parse(s);
  return obj;
}

/* 
*  adds a row with a link 
*  to other page with
*  name of each obj
*/
function addRow(obj) {
  const row = document.createElement("tr");
  row.id = obj.num;
  const key = "name";
  const cell = document.createElement("td");
  cell.id = key+obj.num;
  const link = document.createElement("a")
  link.href = "otherPage.html?id=" + obj.num;
  link.textContent = obj[key];
  cell.appendChild(link);
  row.appendChild(cell);
  table.appendChild(row);
}

function newEmployee(email,name,age,department) {
  const nums = JSON.parse(localStorage.getItem("nums"));
  nums.push(nums[nums.length-1]+1);
  localStorage.setItem("nums",JSON.stringify(nums));
  return {
    num: nums[nums.length-1],
    email: email,
    name: name,
    age: age,
    department: department
  };
}

function addEmpty() {
  const employee = newEmployee("","Make a new employee","","");
  addRow(employee);
  objToLocal(employee);
}



