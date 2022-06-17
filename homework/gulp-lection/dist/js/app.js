class TodosController {
    constructor($container) {
        this._view = new TodosView($container, {
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.removeTodo(id),
            onSave: (newTodo) => this.createTodo(newTodo),
        });

        this._todosList = new TodosCollection();
        this._todosList
            .fetchList()
            .then(() => this._view.renderList(this._todosList.list));
    }

    toggleTodo(id) {
        this._todosList.toggleTodo(id);
        this._view.renderList(this._todosList.list);
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
}

const TODOS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

class TodosCollection {
    constructor() {
        this.list = [];
    }

    fetchList() {
        return fetch(TODOS_URL)
            .then((res) => res.json())
            .then((data) => (this.list = data));
    }

    toggleTodo(todoId) {
        const todoItem = this.list.find(({ id }) => id == todoId);

        if (!todoItem) {
            return console.error('Id not found', todoId);
        }

        todoItem.isDone = !todoItem.isDone;

        return fetch(TODOS_URL + todoId, {
            method: 'PUT',
            body: JSON.stringify(todoItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    removeTodo(todoId) {
        this.list = this.list.filter(({ id }) => id != todoId);

        return fetch(TODOS_URL + todoId, {
            method: 'DELETE',
        });
    }

    createTodo(newTodo) {
        return fetch(TODOS_URL, {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => this.list.push(data));
    }
}

class TodosView {
    constructor($container, config) {
        this._todosListView = new TodosListView(config);

        this._todoFormView = new TodoFormView(config);

        $container.append(this._todosListView.$el);
        $container.append(this._todoFormView.$el);
    }

    renderList(data) {
        this._todosListView.renderList(data);
    }
}

class TodosListView {
    static LIST_TEMPLATE = `<div id="taskList" class="task-list u-full-width"></div>`;
    static LIST_ITEM_TEMPLATE = `<div class="task-item u-full-width {{doneClass}}" data-id="{{id}}">
        {{title}}
        <span class="delete-btn">✘</span>
    </div>`;

    static TASK_SELECTOR = '.task-item';
    static TASK_DELETE_SELECTOR = '.delete-btn';
    static TASK_DONE_CLASS = 'done';

    static createItemElement(todo) {
        return $(
            TodosListView.LIST_ITEM_TEMPLATE.replace('{{id}}', todo.id)
                .replace('{{title}}', todo.title)
                .replace(
                    '{{doneClass}}',
                    todo.isDone ? TodosListView.TASK_DONE_CLASS : '',
                ),
        );
    }

    constructor(config = {}) {
        this.$el = $(TodosListView.LIST_TEMPLATE)
            .on(
                'click',
                TodosListView.TASK_SELECTOR,
                (e) =>
                    config.onToggle && config.onToggle($(e.target).data('id')),
            )
            .on('click', TodosListView.TASK_DELETE_SELECTOR, (e) => {
                e.stopPropagation();
                config.onDelete &&
                    config.onDelete(
                        $(e.target)
                            .closest(TodosListView.TASK_SELECTOR)
                            .data('id'),
                    );
            });
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(TodosListView.createItemElement));
    }
}

class TodoFormView {
    static FORM_TEMPLATE = `<form id="addTaskForm">
        <div class="row">
            <div class="ten columns">
                <input
                    type="text"
                    name="title"
                    id="taskNameInput"
                    class="u-full-width"
                />
                <span id="errorContainer" class="error hidden"></span>
            </div>
            <div class="two columns">
                <button type="submit" id="addBtn" class="u-full-width">
                    Add
                </button>
            </div>
        </div>
    </form>`;

    static TASK_NAME_SELECTOR = '#taskNameInput';

    constructor(config) {
        this._config = config;

        this.$el = $(TodoFormView.FORM_TEMPLATE).on('submit', (e) =>
            this.onFormSubmit(e),
        );
    }

    onFormSubmit(e) {
        e.preventDefault();

        const taskName = this.$el.find(TodoFormView.TASK_NAME_SELECTOR).val();

        this._config.onSave && this._config.onSave({ title: taskName });

        this.$el.trigger('reset');
    }
}
