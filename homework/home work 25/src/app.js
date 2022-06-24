import TodosController from './controller/TodosController';
import './css/normalize.css';
import './css/skeleton.css';
import './css/dark-theme.css';

import './css/styles.css';
import $ from 'jquery';
global.$ = global.jQuery = $;
$(() => {
    
    new TodosController($('.container'));
   
})