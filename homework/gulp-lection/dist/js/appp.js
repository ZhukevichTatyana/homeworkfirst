$(()=>{new TodosController($(".container"))});
class TodosController{constructor(o){this._view=new TodosView(o,{onToggle:o=>this.toggleTodo(o),onDelete:o=>this.removeTodo(o),onSave:o=>this.createTodo(o)}),this._todosList=new TodosCollection,this._todosList.fetchList().then(()=>this._view.renderList(this._todosList.list))}toggleTodo(o){this._todosList.toggleTodo(o),this._view.renderList(this._todosList.list)}removeTodo(o){this._todosList.removeTodo(o),this._view.renderList(this._todosList.list)}createTodo(o){this._todosList.createTodo(o).then(()=>this._view.renderList(this._todosList.list))}}
const TODOS_URL="https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/";class TodosCollection{constructor(){this.list=[]}fetchList(){return fetch(TODOS_URL).then(t=>t.json()).then(t=>this.list=t)}toggleTodo(o){const t=this.list.find(({id:t})=>t==o);return t?(t.isDone=!t.isDone,fetch(TODOS_URL+o,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})):console.error("Id not found",o)}removeTodo(o){return this.list=this.list.filter(({id:t})=>t!=o),fetch(TODOS_URL+o,{method:"DELETE"})}createTodo(t){return fetch(TODOS_URL,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>this.list.push(t))}}
class TodosView{constructor(o,i){this._todosListView=new TodosListView(i),this._todoFormView=new TodoFormView(i),o.append(this._todosListView.$el),o.append(this._todoFormView.$el)}renderList(o){this._todosListView.renderList(o)}}
class TodosListView{static LIST_TEMPLATE='<div id="taskList" class="task-list u-full-width"></div>';static LIST_ITEM_TEMPLATE=`<div class="task-item u-full-width {{doneClass}}" data-id="{{id}}">
        {{title}}
        <span class="delete-btn">✘</span>
    </div>`;static TASK_SELECTOR=".task-item";static TASK_DELETE_SELECTOR=".delete-btn";static TASK_DONE_CLASS="done";static createItemElement(t){return $(TodosListView.LIST_ITEM_TEMPLATE.replace("{{id}}",t.id).replace("{{title}}",t.title).replace("{{doneClass}}",t.isDone?TodosListView.TASK_DONE_CLASS:""))}constructor(e={}){this.$el=$(TodosListView.LIST_TEMPLATE).on("click",TodosListView.TASK_SELECTOR,t=>e.onToggle&&e.onToggle($(t.target).data("id"))).on("click",TodosListView.TASK_DELETE_SELECTOR,t=>{t.stopPropagation(),e.onDelete&&e.onDelete($(t.target).closest(TodosListView.TASK_SELECTOR).data("id"))})}renderList(t){this.$el.empty(),this.$el.append(t.map(TodosListView.createItemElement))}}
class TodoFormView{static FORM_TEMPLATE=`<form id="addTaskForm">
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
    </form>`;static TASK_NAME_SELECTOR="#taskNameInput";constructor(t){this._config=t,this.$el=$(TodoFormView.FORM_TEMPLATE).on("submit",t=>this.onFormSubmit(t))}onFormSubmit(t){t.preventDefault();t=this.$el.find(TodoFormView.TASK_NAME_SELECTOR).val();this._config.onSave&&this._config.onSave({title:t}),this.$el.trigger("reset")}}