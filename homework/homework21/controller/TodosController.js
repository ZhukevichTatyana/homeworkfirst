class TodosController {
    constructor($container) {
        this._todosListView = new TodosListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.removeTodo(id),
        });

        $container.append(this._todosListView.$el);

        this._todosList = new TodosCollection();
        this._todosList
            .fetchList()
            .then(() => this._todosListView.renderList(this._todosList.list));

         this._formListView = new FormListView({
              onAddTask: (value) => this.addTask(value),
         });
         $container.append(this._formListView.$elf);
       
    }

    toggleTodo(id) {
        this._todosList.toggleTodo(id);
        this._todosListView.renderList(this._todosList.list);
    }

    removeTodo(id) {
        this._todosList.removeTodo(id);
        this._todosListView.renderList(this._todosList.list);
    }
    // addForm(value){
    //     console.log(value);
    //      this._formListView.addForm(value);
            
    //            const newTask = {
    //                title: value,
    //                isDone: false, 
    //            };
    //            console.log(newTask);
    // }
    addTask(newTask){
     this._todosList.addTask(newTask);
     this._todosListView.renderList(this._todosList.list);
    }
}