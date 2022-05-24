
'use strict'
const API_URL = 'https://jsonplaceholder.typicode.com/albums';
const TASK_ITEM_CLASS = 'task-item';
const IMG_ITEM_CLASS = 'img-item';
const IMG_ITEM_TEMPLATE = 
    document.getElementById('imgItemTemplate').innerHTML;


const TASK_ITEM_TEMPLATE =
    document.getElementById('taskItemTemplate').innerHTML;

const imgList = document.getElementById('imgList');
const taskList = document.getElementById('taskList');
const errorContainer = document.getElementById('errorContainer');

let albumsList = [];
let imgArray = [];
taskList.addEventListener('click', onTaskItemClick);
imgList.addEventListener('click', onImgItemClick);

init();

function init() {
    fetchList();
    
}

function fetchList() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            albumsList = data;
            renderList();
        });
}

function renderList() {
    taskList.innerHTML = albumsList.map(createTaskHTML).join('\n');}
 
function createTaskHTML(task) {
    return TASK_ITEM_TEMPLATE.replace('{{id}}', task.id)
        .replace('{{title}}', task.title);       
}

function onTaskItemClick(e) {    
    const id = getTaskElementId(e.target);      
    fetchListImg(id);
   
}
function onImgItemClick(e) {    
    const id = getImgElementId(e.target);       
    showImg(id);   
}

function fetchListImg(id) {       
    const IMG_URL22 = 'https://jsonplaceholder.typicode.com/photos?albumId={{id}}';
    const IMG_URL = IMG_URL22.replace('{{id}}',id);
    console.log(IMG_URL);
    fetch(IMG_URL)
        .then((res) => res.json())
        .then((data) => {
            imgArray = data;            
            renderListImg();
        });
}

function renderListImg() {
    imgList.innerHTML = imgArray.map(createImgHTML).join('\n');
}

function getTaskElementId(el) {
    
    const taskElement = el.closest('.' + TASK_ITEM_CLASS);
   
    return  +taskElement.dataset.taskId;
}

function getImgElementId(el) {   
    const imgElement = el.closest('.' + IMG_ITEM_CLASS);
    
    return  +imgElement.dataset.imgId;
}

function createImgHTML(img){
    return IMG_ITEM_TEMPLATE.replace('{{id}}', img.id)
    .replace('{{url}}', img.thumbnailUrl);  
} 


function showImg(imgId){    
    let img = imgArray.find((img) => img.id === imgId);
    imgList.innerHTML = IMG_ITEM_TEMPLATE.replace('{{id}}', img.id)
    .replace('{{url}}', img.url);   
}