//student names
// const students = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
// //grades of students
// const marks = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
// //grades of students for sorting
// const marks2 = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

const students = [];
const marks = [];
const marks2 = [];

//gets the highest mark
const highestMark = (marksArray) => {
  //return marksArray.sort()[marksArray.length-1];
  let marksArray2 = marksArray;
  marksArray2.sort((a, b) => {return a-b});
  return marksArray[marksArray.length-1];
};

//stores the highest mark in a variable
let highest = highestMark(marks2);

//gets the percentage of the marks with respect to the highest mark
const getBarPercentage = (mark, highest) => {
  return (mark*100)/highest;
};

// var spend = document.getElementById('spent').value;


//adds bars to the div element
const addBar = (name, value, percent) => {
  
  // marks.push(parseInt(spend));
  // marks2.push(parseInt(spend));
  
  let highest = highestMark(marks2);

  console.log(marks);

console.log(highest);


  let infoButton = document.createElement('button');
  let infoText = document.createTextNode(`$${value}`);
  infoButton.classList.add("info");
  infoButton.appendChild(infoText);
  let barIn = document.createElement("div");
  barIn.classList.add("bar-in");
  barIn.style.height = `${0.8*percent}%`;
  let barOut = document.createElement("div");
  barOut.classList.add("bar-out");
  
  
 
  
  barOut.appendChild(barIn);
  barOut.appendChild(infoButton);


  document.getElementById("chart-in").appendChild(barOut);

  // let axisY = document.createElement("div");
  // axisY.classList.add("daz");

  
  axisY = `<div id='daz'><p>${name}</p></div>`;
  
  let yAx = document.getElementById("dayz");
  yAx.innerHTML +=  axisY;

let xax = document.getElementById("daz");

  // xax.innerHTML += `<p>${name}</p>`;

  if (percent===100) {
    barIn.style.backgroundColor = '#76b5bc'
  };

  // console.log(value);
  // console.log(percent);

  const sum = marks.reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum);

  var total = document.getElementById('total');
  total.innerHTML = `$${sum}`;


  
};

//displays all the bars
const displayBars = (students,marks,highest) => {
  for(let i=0; i<marks.length; i++){
    addBar(students[i], marks[i], getBarPercentage(marks[i], highest));
    
  }

  
  
};


function takeData1 () {

  
  event.preventDefault();

  var ball = document.getElementById('bal').value;
  var previous = document.getElementById('prv').value;
  // console.log(ball.value);

  if ((ball === '') || (previous === '')) {
    alert('Please, fill the boxes')
  } else {
    var balls = document.getElementById('balance');

  balls.innerHTML = `$${ball}`;

  

  
  

  var form1 = document.getElementById('bal-form-1');
  var form2 = document.getElementById('bal-form-2');
  
  form1.style.display = "none";
  form2.style.display = "flex";
  };

  
}



function takeData2 () {
  event.preventDefault();

  var ball = document.getElementById('bal').value;
var balls = document.getElementById('balance');

  var mon = document.getElementById('mon').value;
  var tue = document.getElementById('tue').value;
  var wed = document.getElementById('wed').value;
  var thur = document.getElementById('thur').value;
  var fri = document.getElementById('fri').value;
  var sat = document.getElementById('sat').value;
  var sun = document.getElementById('sun').value;

  

  var spend1 = document.getElementById('spent-1').value;  
  var spend2 = document.getElementById('spent-2').value;  
  var spend3 = document.getElementById('spent-3').value;  
  var spend4 = document.getElementById('spent-4').value;  
  var spend5 = document.getElementById('spent-5').value;  
  var spend6 = document.getElementById('spent-6').value;  
  var spend7 = document.getElementById('spent-7').value;  

  var previous = document.getElementById('prv').value;
  

  if ((spend1 === '') || (spend2 ==='') || (spend3 ==='') || (spend4 ==='') || (spend5 ==='') || (spend6 ==='') || (spend7 ==='')) {
    alert('Please, fill all the boxes')
  } else {
    students.push(mon,tue,wed,thur,fri,sat,sun);
// var spend = document.getElementById('spent').value;
marks.push(parseInt(spend1),parseInt(spend2),parseInt(spend3),parseInt(spend4),parseInt(spend5),parseInt(spend6),parseInt(spend7));
marks2.push(parseInt(spend1),parseInt(spend2),parseInt(spend3),parseInt(spend4),parseInt(spend5),parseInt(spend6),parseInt(spend7));
// marks2.push(parseInt(spend1,spend2,spend3,spend4,spend5,spend6,spend7));

// var newDay = document.getElementById('new-day').value;
// students.push(newDay);

let highest = highestMark(marks2);

console.log(marks);
console.log(students);

// console.log(newDay);

const sum = marks.reduce((partialSum, a) => partialSum + a, 0);

  balls.innerHTML = `$${ball-sum}`;
  
  var clc = (sum/previous)*100;
  var Tick = document.getElementById('uptick');

  Tick.innerHTML = `+${clc.toFixed(2)}%`;

  document.getElementById('chart-in').innerHTML = '';
  document.getElementById("dayz").innerHTML = '';
  
  var form2 = document.getElementById('bal-form-2');
  
  
  form2.style.display = "none";
  document.querySelector('.main').style.justifyContent = 'center';

  document.querySelector('.refresh').style.display = 'block';

displayBars(students, marks, highest);
  }

 
// document.getElementById("bal-form").reset();
}

displayBars(students, marks, highest);


// var sendBtn = document.getElementById('send-btn');

// sendBtn.addEventListener('click',takeData());
