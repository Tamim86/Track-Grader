'use strict'

let form = document.getElementById('stdform');
let data = document.getElementById('StdTable')
let stdTable = document.createElement('table');
data.appendChild(stdTable);


function Student(name, course, grade){
    this.name = name;
    this.course = course
    this.grade= 0;
    
    Student.arrOfStudents.push(this);
}

Student.arrOfStudents= [];
let newStd = []

form.addEventListener('submit', handlesubmitting);
function handlesubmitting(e){
    e.preventDefault();
    console.log(e);
    
    let stdid = e.target.stdName.value;
    console.log(stdid);
    let course = e.target.course.value;
    console.log(course);    
    let stdGrade = getRandomIntInclusive(0 , 100);
    newStd.push(stdid, course, stdGrade);
    this.grade +=stdGrade;

    localStorage.setItem('student', newStd);
    
}





function getRandomIntInclusive(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


//   Student.prototype.randGrade= function(){
//       let stdGrade = getRandomIntInclusive(0 , 100);
//       this.grade +=stdGrade;

//   }

  let heading = ['Student Name', 'Student Grade', 'Course', 'Status']


  function render(){
      let tr = document.createElement('tr');
      stdTable.appendChild(tr);
      for(let i=0; i<heading.length; i++){
        let th = document.createElement('th')
        tr.appendChild(th)
        th.textContent = heading[i];

      }

      for(let x=0; x<newStd.length; x++){
          let display = JSON.parse(localStorage.getItem('student'));
          console.log(display);
          
          let trs = document.createElement('tr');
          stdTable.appendChild(trs);
          let td = document.createElement('td');
          trs.appendChild(td);
          td.textContent = display[x];
      }
     

  }

  render();

