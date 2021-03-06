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

        fetch(TODOS_URL + todoId, {
            method: 'PUT',
            body: JSON.stringify(todoItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    removeTodo(todoId) {
        this.list = this.list.filter(({ id }) => id != todoId);

        fetch(TODOS_URL + todoId, {
            method: 'DELETE',
        });
    }
    
    addTask(newTask) {
        console.log('addTaskfff')
        fetch(TODOS_URL, {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((data) => {
            this.fetchList();
        });
    }    
}