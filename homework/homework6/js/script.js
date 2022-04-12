"use strict"
   
const obj = {
  name: 'Alex',
  age: 33, 
  numberOfFlat: [2,3,4],
  adress: { country: 'UA', city: 'Dnipro', id: { x: 1, y: 2} }
} 

const objCopy = copy(obj);

function copy(el) {
  let objCopy = {};
  let key;

  for (key in el) {
    const type= typeof(el[key])
    if (type !== "object" ){

      objCopy[key] = el[key];
    } else if 
      (Array.isArray(el[key])){
        objCopy[key] = el[key].slice();
    }else

  objCopy[key] = copy(el[key]);
    } 
    
  return objCopy;
}
console.log(obj);
console.log(objCopy);