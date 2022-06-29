import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import { interpolate } from '../../../common/js/utils';

export default class TodoRow extends EventEmitter {
    static template =
     `<div class="row"></div>`;

    static todoTemplate =    
    
    `<div class="task-item u-full-width {{doneClass}}" data-id="{{id}}">
    {{title}}
    <span class="delete-btn">✘</span>
</div>`;

static TASK_DONE_CLASS = 'done';
    static deleteButtonSelector = '.delete-btn';
    
     static toggleSelector = '.task-item';
    constructor(model) {
        super();

        this._model = model;
        this._model.on('delete', this.deleteRow.bind(this));
        
         this._model.on('toggle', this.renderRow.bind(this));

        this.init();
    }

    init() {
        this.$el = $(TodoRow.template);
        this.renderRow();
        
        this.$el.on('click', TodoRow.deleteButtonSelector, () =>
            this._model.delete()
        );
        
        this.$el.on('click', TodoRow.toggleSelector, () =>
           
            this._model.toggle()
        );
    } 
   
    createRowEl(){    
        return $(
            TodoRow.todoTemplate.replace('{{id}}', this._model.id)
                .replace('{{title}}', this._model.title)
                .replace(
                    '{{doneClass}}',
                    this._model.isDone ? TodoRow.TASK_DONE_CLASS : '',
                )
        );
        }

        renderRow() {        
        this.$el.empty();
         this.$el.html(this.createRowEl());
     }
        
    deleteRow()  {
        this.$el.remove();
    }
   
    toggleRow() {
        console.log('toggleRow',this.$el.isDone);
       
         this.$el.isDone = !this.$el.isDone;                
    } 
}

