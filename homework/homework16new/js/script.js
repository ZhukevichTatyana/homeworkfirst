
'use strict'
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const ITEM_CLASS = 'item';
const DELETE_BTN_CLASS = 'delete';
const STORAGE_KEY = 'list';
const EDIT_BTN_CLASS = 'edit';

const ITEM_TEMPLATE =
    document.getElementById('itemTemplate').innerHTML;
const contactListEl = document.getElementById('contactList');
const addBtnEl = document.getElementById('addBtn');
const nameInputEl = document.getElementById('nameInput');
const emailInputEl = document.getElementById('emailInput');
const telephoneInputEl = document.getElementById('telephoneInput');
contactListEl.addEventListener('click', onContactClick);
let contactsArray = [];
let error = null;

document
    .getElementById('addContactForm')
    .addEventListener('submit', onAddFormSubmit);

init();

function onAddFormSubmit(e) {
    e.preventDefault();
    submitForm();
}

function init() {
    fetchList();
}

function fetchList(){
    
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            contactsArray = data;
            console.log(data);
            renderList();
        });
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
        email:  emailInputEl.value,
        phone:  telephoneInputEl.value,    
       
    };
}

function clearNameInput() {
     nameInputEl.value = '';
     emailInputEl.value ='';
     telephoneInputEl.value = '';   
 }

 function addContact(newContact) {
    contactsArray.push(newContact);
    console.log(contactsArray);
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((data) => {
        fetchList();
    });
       
}

function createContactHTML(newContact) {
    console.log(newContact);
    return ITEM_TEMPLATE.replace('{{id}}', newContact.id).replace('{{name}}', newContact.name)
    .replace('{{email}}', newContact.email)
    .replace('{{phone}}', newContact.phone);
}

function onContactClick(e) { 
    const id = getContactElementId(e.target);          
    
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {        
        deleteContact(id);
        console.log(contactsArray);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        const id = getContactElementId(e.target);
        
        editContact(id);
    }
}
function getContactElementId(el){
    const contactElement = el.closest('.' + ITEM_CLASS);
    console.log(contactElement);
    return  contactElement.dataset.contactId;

}

function deleteContact(id) {
    contactsArray = contactsArray.filter((obj) => obj.id !== id);
    fetch(API_URL + id, {
        method: 'DELETE',
    }).then((data) => {
        fetchList();
    });       
}

function editContact(id) {
    const contact = contactsArray.find((contact) => contact.id === (id));
        
    setFormData(contact);
}

function setFormData(contact) {       
    nameInputEl.value = contact.name;
    emailInputEl.value = contact.email;
    telephoneInputEl.value = contact.phone;             
}