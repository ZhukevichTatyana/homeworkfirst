import { API_URL } from '../config';
import TodosCollection from '../model/TodosCollection';
import TodosView from '../view/TodosView';

export default class TodosController {
    constructor($container) {
        console.log('controller started', $container);

        this._collection = new TodosCollection(API_URL);
        this._view = new TodosView($container, this._collection);

        this._collection.fetchList();
    }
}
