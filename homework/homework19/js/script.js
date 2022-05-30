
$(() => {
    const DELETE_BTN_CLASS = 'delete_btn';
    const STICKER_SELECTOR = '.sticker_grid';
    const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/'
    
    const $deleteStickerEl = $('.delete_btn');
    const $createStickerEl = $('.create_btn');
    const stickersListEl = document.querySelector('.main_part');
    const STICKER_TEMPLATE = $('#stickerTemplate').html();
    
    const $stickerEl = $('.main_part');
    const $stickerEditEl = $('.main_part');
    
    $createStickerEl.on('click', onCreateSticker);
    $stickerEl.on('click', onStickerClick);
    $stickerEditEl.on('focusout', onEditChange);
    
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
        
       fetch(API_URL,{
        method: 'POST',
        body: JSON.stringify(sticker),
        headers: {
            'Content-Type': 'application/json',
        },
       }).then((res) => res.json())
       .then((note) => {
        stickersList.push(note);
        renderNote(note);
    
            });       
    }
    
    function renderList() {
        stickersList.forEach(renderNote);
    }
    
    function renderNote(note) {
       stickersListEl.insertAdjacentHTML('beforeEnd', getNoteHtml(note));
    
    }
    
    function getNoteHtml(note) {
        return STICKER_TEMPLATE
            .replace('{{id}}', note.id)
            .replace('{{title}}', note.description);
    }
    
    function deleteSticker(id){   
             
        stickersList = stickersList.filter((obj) => obj.id !== id);
       
        const element = getNoteElement(id);
    
        element && element.remove();
    
            fetch(API_URL + id, {
                method: 'DELETE',
            
            });     
        }
        
    function getNoteElement(id) {
        return stickersListEl.querySelector(`[data-sticker-id="${id}"]`);
    }
    
    function getStickerId(el) {    
        return el.closest(STICKER_SELECTOR).dataset.stickerId;
    }
    
     function editSticker(id,text) {
         const sticker = stickersList.find((obj) => obj.id === id);
         sticker.description = text;
         
         fetch(API_URL + sticker.id,{         
            method: 'PUT',
            body: JSON.stringify(sticker),
             headers: {
                'Content-Type': 'application/json',
             },   
        });
    }
    })









