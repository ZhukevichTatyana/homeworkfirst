
"use strict"
const ITEM_CLASS = 'item';
const DELETE_BTN_CLASS = 'delete';
const STORAGE_KEY = 'list';


const ITEM_TEMPLATE =
    document.getElementById('itemTemplate').innerHTML;
const contactListEl = document.getElementById('contactList');
const addBtnEl = document.getElementById('addBtn');
const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const telephoneInputEl = document.getElementById('telephoneInput');
contactListEl.addEventListener('click', onContactClick);
let contactsArray = [];
let error = null;

document
    .getElementById('addContactForm')
    .addEventListener('submit', onAddFormSubmit);

function onAddFormSubmit(e) {
    e.preventDefault();
    submitForm();
}
function init() {
    contactArray = restoreData();
    renderList();
}
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contactsArray));
}

function restoreData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function renderList() {    
    contactListEl.innerHTML = contactsArray.map(createContactHTML).join('\n');
}

function submitForm() {
    const newContact = getNewContact();
    addContact(newContact);       
    clearNameInput();
}

function getNewContact(){
    return {
        id: Date.now(),
        name:  nameInputEl.value,
        surname:  surnameInputEl.value,
        telephone:  telephoneInputEl.value,    
       
    };
}

function clearNameInput() {
     nameInputEl.value = '';
     surnameInputEl.value = "";
     telephoneInputEl.value = "";   
 }

function addContact(newContact) {
    contactsArray.push(newContact);
    console.log(contactsArray);
    saveData();
    renderList();    
}

function createContactHTML(newContact) {
    return ITEM_TEMPLATE.replace('{{id}}', newContact.id).replace('{{name}}', newContact.name)
    .replace('{{surname}}', newContact.surname)
    .replace('{{telephone}}', newContact.telephone);
}

function onContactClick(e) { 
    const id = getContactElementId(e.target);          
    
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {        
        deleteContact(id);
        console.log(contactsArray);
    }
}
function getContactElementId(el){
    const contactElement = el.closest('.' + ITEM_CLASS);
    console.log(contactElement);
    return  +contactElement.dataset.contactId;

}

function deleteContact(id) {
    contactsArray = contactsArray.filter((obj) => obj.id !== id);
    saveData();
    renderList();    
}