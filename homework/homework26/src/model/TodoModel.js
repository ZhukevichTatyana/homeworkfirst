import EventEmitter from '../EventEmitter';

const urlsMap = new WeakMap();

export default class TodoModel extends EventEmitter {
    get url() {
        return urlsMap.get(this);
    }

    constructor(baseUrl, data) {
        super();
        this.todoId = data.id;
        urlsMap.set(this, baseUrl + data.id);
        this.set(data);
    }

    delete() {
        return fetch(this.url, {
            method: 'DELETE',
        }).then(() => {
            this.trigger('delete');
        });
    }

    save() {
        return fetch(this.url, {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            this.trigger('update');
        });
    }

    set(data) {
        Object.assign(this, data);
    }

    toggle(){                    

         this.isDone = !this.isDone;          

        return fetch(this.url, {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            this.trigger('toggle');
        });    
    }
}
