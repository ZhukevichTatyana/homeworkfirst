
"use strict";

const students = [
  {
      id:10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
  },
  {
      id:11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
  },
  {
      id:12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
  },
  {
      id:13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
  }
]

function averageStudentMark(studentF) {
  const qty = studentF.marks.length;
  let sum = studentF.marks.reduce((acc, val) =>{
  return acc + val;
  }, 0);
return sum/qty;
  }

console.log (averageStudentMark(students[2]));

function averageGroupMark(studentsF) {
 let num = 0;
 let sumF= 0;
 studentsF.forEach((item) => {
   const qty = item.marks.length;
   let sum = item.marks.reduce ((acc,val) => {
return acc + val;
   },0);
   num= num + qty;
   sumF = sumF + sum;

 })
 return sumF/num;
}
console.log(averageGroupMark(students));