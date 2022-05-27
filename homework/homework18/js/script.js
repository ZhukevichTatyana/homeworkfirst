
'use strict'
const DELETE_BTN_CLASS = 'delete_btn';
const STICKER_SELECTOR = '.sticker_grid';
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/'

const deleteStickerEl = document.querySelector('.delete_btn');
const createStickerEl = document.querySelector('.create_btn');
const stickersListEl = document.querySelector('.main_part');
const stickerTemplate = document.querySelector('#stickerTemplate').innerHTML;
const stickerEl = document.querySelector('.main_part');
const stickerEditEl = document.querySelector('.main_part');
createStickerEl.addEventListener('click', onCreateSticker);
stickerEl.addEventListener('click', onStickerClick);
stickerEditEl.addEventListener('focusout', onEditChange);

let stickersList = [];

init();

function onCreateSticker(e) {
    e.preventDefault();
    const id = Date.now(); 
    const sticker = {id: id, description: 'description  ' + id}; 

    addSticker(sticker);     
}

function onStickerClick(e) {
    const id = getStickerId(e.target);    
   
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        console.log('delete' + id);
        deleteSticker(id);
    }
}

function onEditChange(e){
    const id = getStickerId(e.target);
    let text = e.target.value;
    console.log('edit' +id);
    console.log(text);
     
    editSticker(id,text); 
}

function init() {
    fetchList();
}

function fetchList() {
   fetch(API_URL)
   .then((res) => res.json())
   .then((data) => {
        stickersList = data;
        renderList();
    });
}

function addSticker(sticker) {  
    stickersList.push( sticker );
    renderList();
   fetch(API_URL,{
    method: 'POST',
    body: JSON.stringify(stickersList),
    headers: {
        'Content-Type': 'application/json',
    },
   }).then((res) => res.json())
   .then((data) => {
            fetchList();
        });       
}

function renderList() {
    stickersListEl.innerHTML = stickersList
    .map(createStickerHTML).join('\n');
}

function createStickerHTML(sticker) {    
    return stickerTemplate.replace('{{id}}', sticker.id)
    .replace('{{title}}', sticker.description);    
}

function deleteSticker(id){   
         
    stickersList = stickersList.filter((obj) => obj.id !== id);
        fetch(API_URL + id, {
            method: 'DELETE',
        }).then((data) => {
            fetchList();
        });     
}

function getStickerId(el) {    
    return el.closest(STICKER_SELECTOR).dataset.stickerId;
}


 function editSticker(id,text) {
     const sticker = stickersList.find((obj) => obj.id === id);
     sticker.description = text;
     console.log(sticker);
     fetch(API_URL + sticker.id,{         
        method: 'PUT',
        body: JSON.stringify(sticker),
         headers: {
            'Content-Type': 'application/json',
         },
    })    
      .then((data) => { fetchList();
    });
}









