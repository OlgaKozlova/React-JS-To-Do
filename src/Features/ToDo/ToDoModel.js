export const ToDoType = 'TO_DO';

export const ToDoModel = class {
    constructor(id, date, title, text) {
        this.id = id;
        this.isDone = false;
        this.date = date;
        this.title = title;
        this.text = text;
    }
};
