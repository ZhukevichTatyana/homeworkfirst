
"use strict"
const ITEM_TEMPLATE =
    document.getElementById('itemTemplate').innerHTML;
const DELETE_BTN_CLASS = 'delete';
const ITEM_CLASS = 'item';

const contactListEl= document.getElementById("contactList")
const addBtnEl = document.getElementById('addBtn');
const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const telephoneInputEl = document.getElementById('telephoneInput');
contactListEl.addEventListener("click", onContactClick);

document
    .getElementById('addContactForm')
    .addEventListener('submit', onAddFormSubmit);

    function onAddFormSubmit(e) {
        e.preventDefault();
        submitForm();
    }

    function submitForm() {
        const name = nameInputEl.value;
        const surname = surnameInputEl.value;
        const telephone = telephoneInputEl.value;   
        addContact(name, surname, telephone);
        clearNameInput();
    }
    
    function clearNameInput() {
        nameInputEl.value = '';
        surnameInputEl.value = "";
        telephoneInputEl.value = "";
    }
    
    function addContact(n1, n2, tl) {
        const contactItemHtml = createContactHTML(n1, n2, tl);
        contactListEl.insertAdjacentHTML('beforeend', contactItemHtml);
    }
    
    function createContactHTML(name1, name2, tel) {
        return ITEM_TEMPLATE.replace('{{name}}', name1)
        .replace('{{surname}}', name2)
        .replace('{{telephone}}', tel);
    }

    function onContactClick(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            deleteContact(e.target.closest('.' + ITEM_CLASS));
        }
    }
    
    function deleteContact(el) {
        el.remove();
    }