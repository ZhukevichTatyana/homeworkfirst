$(() => {
    const API_URL = 'https://jsonplaceholder.typicode.com/albums';
    const TASK_ITEM_CLASS = 'task-item';
    const IMG_ITEM_CLASS = 'item';
    const IMG_ITEM_TEMPLATE = $('#imgItemTemplate').html();
    
    const TASK_ITEM_TEMPLATE = $('#taskItemTemplate').html();
    
    const $imgList = $('#imgList');
    const $taskList = $('#taskList');
    
    let albumsList = [];
    let imgArray = [];
    $taskList.on('click', onTaskItemClick);
    
    init();
    
    function init() {
        
         fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                albumsList = data;
                renderList();
                fetchListImg(albumsList[0].id);   
            });
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
        const html = albumsList.map(createTaskHTML).join('\n');
        $taskList.html(html);   
    }
     
    function createTaskHTML(task) {
        return TASK_ITEM_TEMPLATE
            .replace('{{id}}', task.id)
            .replace('{{title}}', task.title);       
    }
    
    function onTaskItemClick(e) {    
        const id = getTaskElementId(e.target);      
        fetchListImg(id);   
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
        const html = imgArray.map(createImgHTML).join('\n');
        $imgList.html(html);
        $('.gallery a').simpleLightbox( { fileExt: '',})          
       
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
        return IMG_ITEM_TEMPLATE
        .replace('{{urlbig}}', img.url)
        .replace('{{url}}', img.thumbnailUrl);  
    }
    })
