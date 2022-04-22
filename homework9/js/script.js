
"use strict"
 const unorderListEl = document.getElementById("unorder_list");
 const listInputEl= document.getElementById("get_act");
 const errorEl = document.getElementById("error");
 const btnEl = document.getElementById("btn");
 btnEl.addEventListener("click", onAddBtnClick);

 function onAddBtnClick() {
    validateListInput();
}

 function validateListInput(){
     if( listInputEl.value == ""){return showError ("Write your list");}
 if( listInputEl.value.length < 3){return showError ("Write more symbols");}
  else { clearError(); createLi(); clearInput();
 }}
 function showError (value) {
     errorEl.textContent = value;
     listInputEl.style.borderColor = "red";
 }
 function clearError () {
     errorEl.textContent = "";
     listInputEl.style.borderColor = "black";
 }

 function clearInput () {
     listInputEl.value = "";
 }
 
 function createLi(){
    const el = document.createElement("li");
    el.classList.add("list"); 
    el.textContent = listInputEl.value;
    console.log(el);
    unorderListEl.append(el);
 }