export default class TodoFormView {
    static FORM_TEMPLATE = `<form id="newContactForm" class="form">
    <table class="u-full-width">
       
        <tfoot>
            <tr>
                <td>
                    <input type="hidden" name="id" class="form-input" />
                    <input
                        type="text"
                        name="name"
                        id="nameInput"
                        class="form-input"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="surname"
                        id="surnameInput"
                        class="form-input"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="email"
                        id="emailInput"
                        class="form-input"
                    />
                </td>
                <td>
                    <input
                        type="submit"
                        id="saveContactBtn"
                        value="Save Contact"
                    />
                </td>
            </tr>
        </tfoot>
    </table>
</form>
`;
   

    constructor(config) {
        this._config = config;

        this.$el = $(TodoFormView.FORM_TEMPLATE).on('submit', (e) =>
            this.onFormSubmit(e),
        );
    }

    onFormSubmit(e) {
        e.preventDefault();
    let contact = {
        name: $('#nameInput').val(),
        surname: $('#surnameInput').val(),
        email: $('#emailInput').val(),
};           

        this._config.onSave && this._config.onSave(contact);

        this.$el.trigger('reset');
    }
}
