export default class TodosListView {
    static LIST_TEMPLATE = `<table class="u-full-width">
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
<tbody id="contactsList"></tbody></table>`;
    static LIST_ITEM_TEMPLATE = `<tr class="contact-row" data-id="{{id}}">
    <td>{{name}}</td>
    <td>{{surname}}</td>
    <td>{{email}}</td>
    <td>
        <button type="button" class="edit-btn">Edit</button>
        <button type="button" class="delete-btn">Delete</button>
    </td>
</tr>
`;

    static CONTACT_SELECTOR = '.contact-row';
    static DELETE_SELECTOR = '.delete-btn';
     static EDIT_SELECTOR = '.edit-btn';

    static createItemElement(todo) {
        return $(
            TodosListView.LIST_ITEM_TEMPLATE.replace('{{id}}', todo.id)
                .replace('{{name}}', todo.name)
                .replace('{{surname}}', todo.surname)
                .replace('{{email}}', todo.email),
              
        );
    }

    constructor(config = {}) {
        this.$el = $(TodosListView.LIST_TEMPLATE)
            .on('click', TodosListView.EDIT_SELECTOR, (e) => {
                e.stopPropagation();
                    config.onEdit && config.onEdit($(e.target)
                    .closest(TodosListView.CONTACT_SELECTOR)
                    .data('id'),);})
            
            .on('click', TodosListView.DELETE_SELECTOR, (e) => {
                e.stopPropagation();
                config.onDelete &&
                    config.onDelete(
                        $(e.target)
                            .closest(TodosListView.CONTACT_SELECTOR)
                            .data('id'),
                    );
            });
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(TodosListView.createItemElement));
    }
}
