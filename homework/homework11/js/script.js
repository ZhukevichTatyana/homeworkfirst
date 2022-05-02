'use strict'
const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';
const HIDDEN_CLASS = 'hidden';
const ERROR_INPUT_CLASS = 'errorInput';
const TASK_ROW_SELECTOR = '.task-item';
const ERROR_MESSAGES = {
    REQUIRED: 'Title is required',
    SHORT: 'Title is too short',
};

const TASK_ITEM_TEMPLATE =
    document.getElementById('taskItemTemplate').innerHTML;

const addBtn = document.getElementById('addBtn');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const errorContainer = document.getElementById('errorContainer');
let tasksListArray = [
    {
        id: 1,
        act: 'Hello world!',
    }
];
let error = false;
document
    .getElementById('addTaskForm')
    .addEventListener('submit', onAddTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskList.addEventListener('click', onTaskItemClick);

addTask(tasksListArray[0]);

function onAddTaskFormSubmit(e) {
    e.preventDefault();     

    submitForm();
}

function onTaskNameInput() {
    validateForm();
}

function onTaskItemClick(e) {
    if (e.target.classList.contains(TASK_ITEM_CLASS)) {
        
        toggleTaskState(e.target);
    }
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getTaskId(e.target);
        
        removeTask(id);
        deleteTask(e.target.closest(TASK_ROW_SELECTOR));
    }
}function submitForm() {
    const task = getTaskName();

    addTask(task);
    clearTaskNameInput();
}

function validateForm() {
    const task = getTaskName();
    const error = validateTaskName(task.act);

    if (error) {
        showError(error);
    } else {
        hideError();
    }
}

function validateTaskName(value) {
    if (value === '') return ERROR_MESSAGES.REQUIRED;

    if (value.length < 3) return ERROR_MESSAGES.SHORT;

    return null;
}

function getTaskName() {
    
        const task = {
            id: Date.now(),
            act: taskNameInput.value
        };                              
    
        return task;
    }    

function clearTaskNameInput() {
    taskNameInput.value = '';
}

function addTask(task) {
    
    const taskItemHtml = createTaskHTML(task);
    taskList.insertAdjacentHTML('beforeend', taskItemHtml);    
    tasksListArray.push(task);
    console.log(tasksListArray);   
}

function createTaskHTML(task) {
    return TASK_ITEM_TEMPLATE.replace('{{id}}',task.id).replace('{{title}}', task.act);
}

function showError(msg) {
    errorContainer.textContent = msg;
    errorContainer.classList.remove(HIDDEN_CLASS);
    taskNameInput.classList.add(ERROR_INPUT_CLASS);
    addBtn.disabled = true;
    error = true;
}

function hideError() {
    errorContainer.textContent = '';
    errorContainer.classList.add(HIDDEN_CLASS);
    taskNameInput.classList.remove(ERROR_INPUT_CLASS);
    addBtn.disabled = false;
}

function toggleTaskState(el) {
    el.classList.toggle(TASK_DONE_CLASS);
}

function deleteTask(el) {
    el.remove();
}

function getTaskId(el) {
    const taskRowEl = el.closest(TASK_ROW_SELECTOR);

    return +taskRowEl.dataset.taskId;
}

function removeTask(id) {   
    tasksListArray = tasksListArray.filter((obj) => obj.id !== id);
    console.log(tasksListArray); 
    alert('Вы действительно хотите удалить?'); 
    
}