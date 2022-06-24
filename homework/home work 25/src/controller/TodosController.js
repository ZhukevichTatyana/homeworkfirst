import TodosView from '../view/TodosView';
import TodosCollection from '../model/TodosCollection';


export default class TodosController {
    constructor($container) {
        this._view = new TodosView($container, {
            onEdit: (id) => this.editTodo(id),
            onDelete: (id) => this.removeTodo(id),
            onSave: (newTodo) => this.createTodo(newTodo),
        });

        this._todosList = new TodosCollection();
        this._todosList
            .fetchList()
            .then(() => this._view.renderList(this._todosList.list));
    }    

    removeTodo(id) {
        this._todosList.removeTodo(id);
        this._view.renderList(this._todosList.list);
    }

    createTodo(newTodo) {
        this._todosList
            .createTodo(newTodo)
            .then(() => this._view.renderList(this._todosList.list));
    }


    editTodo(id) {
        this._todosList.editTodo(id);    

        this._view.renderList(this._todosList.list);

    }
}
