import $ from 'jquery';
import EventEmitter from '../EventEmitter';

export default class TodosForm extends EventEmitter {
    static template = `
        <form class="row">
            <div class="ten columns"><input type="hidden" name="id" />
            <input type="text" name="title" class="u-full-width" /></div>          
            
    
            <div class="two columns"><button type="submit" class="u-full-width">Save</button></div>
        </form>`;
       

    constructor() {
        super();

        this.init();
    }

    init() {
        this.$el = $(TodosForm.template);
        this.$el.on('submit', (e) => {
            e.preventDefault();

            const formData = this._getFormData();

            this.trigger('save', formData);
            this.reset();
        });

        this._$inputs = this.$el.find('input');
    }

    _getFormData() {
        const formData = {};

        this.$el
            .serializeArray()
            .forEach(({ name, value }) => (formData[name] = value));

        return formData;
    }

    // fill(model) {
    //     this._$inputs.each((_, input) => {
    //         input.value = model[input.name];
    //     });
    // }

    reset() {
        this._$inputs.each((_, input) => {
            input.value = '';
        });
    }
}
